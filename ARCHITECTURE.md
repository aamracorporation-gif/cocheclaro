# Arquitectura

## Principios

1. **El activo es el dato estructurado, no el texto.** Las fichas se componen de
   campos (`src/lib/types.ts`), no de un blob de HTML. Eso permite tablas,
   comparadores, calculadoras y actualizaciones por campo.
2. **Contenido SEO en el HTML inicial.** Todo lo indexable se renderiza en
   servidor (RSC + SSG/ISR). El JavaScript de cliente se reserva para
   interacción (buscador, calculadoras, comparador libre).
3. **Menos URLs, más valor por URL.** Solo se indexan entidades reales y
   publicadas. Búsqueda interna, filtros y comparador libre van a `noindex`.
4. **No inventar datos.** El dataset es `demo` y se marca como tal hasta que se
   verifique con fuente. Las calculadoras no rellenan importes por el usuario.

## Capas

```
src/
  middleware.ts        Protege /admin/* (cookie de sesión firmada; ver login).
  app/                 Rutas (App Router). Server Components salvo los "use client".
    coches/[brand]/[model]/[generation]/   Ficha de generación (página SEO principal)
    motores/[engine]/                      Ficha de motor
    comparar/[comparison]/                 Comparativa curada (Article JSON-LD)
    comparar/libre/                        Comparador interactivo (noindex)
    calculadoras/...                       3 calculadoras (client)
    buscar/                                Resultados de búsqueda (noindex)
    ads.txt/                               Route handler: ads.txt desde el publisher id
    admin/                                 Panel editorial (noindex, protegido)
      login/                               Login por contraseña
      generaciones/, comparativas/         Publicar/despublicar (solo supabase)
      averias/, fuentes/                   CRUD (solo supabase)
      importar/                            Importación CSV por lotes (solo supabase)
      actions.ts                          Server Actions (Zod + revalidatePath)
    api/admin/login|logout/                Route handlers de sesión
    sitemap.ts / robots.ts / not-found.tsx
  components/           UI. `vehicle/*`, `calculators/*` y `admin/*` agrupan por dominio.
  data/                 EL DATASET local (editable a mano). Un archivo por entidad.
  lib/
    db/                 Acceso a datos: `local.ts` y `supabase.ts` (misma firma),
                         `supabase-admin.ts` (escrituras, service role),
                         `rows.ts` (mapeo snake_case ↔ tipos de la app).
    import/             Parser CSV + `build-plan.ts` (función pura, con tests).
    admin-auth.ts        Firma/verifica la cookie de sesión de /admin (HMAC).
    consent.ts           Puente entre <ConsentBanner> y <AdSlot>.
    calculations/       Funciones puras + tests (fórmulas documentadas).
    search.ts           Índice en memoria (vía `lib/db`) + scoring.
    seo.ts              buildMetadata + generadores de JSON-LD.
    validate-data.ts    Validaciones del proveedor local (integridad, slugs, fuentes).
    analytics.ts        track() desacoplado de proveedor.
scripts/
  generate-seed.ts      src/data/*.ts -> supabase/seed/seed_demo.sql
supabase/
  migrations/0001_init.sql   Esquema + Row Level Security
  seed/seed_demo.sql         Generado por scripts/generate-seed.ts (no editar a mano)
```

## Acceso a datos

`src/lib/db/index.ts` conmuta entre dos proveedores con **la misma firma
exportada** (mismos nombres de función, mismos tipos de retorno), según
`process.env.DATA_PROVIDER`:

- **`local`** (por defecto): lee de `src/data/*.ts`. Sin dependencias, sin red.
  Es código fuente versionado — no se puede escribir en tiempo de ejecución,
  por eso el proveedor local es de solo lectura también en `/admin`.
- **`supabase`**: `src/lib/db/supabase.ts` consulta Postgres con la clave
  anónima (respeta Row Level Security: solo `status = 'published'`). El
  esquema es `supabase/migrations/0001_init.sql`; `npm run db:seed:generate`
  vuelca `src/data/*.ts` a `supabase/seed/seed_demo.sql` para arrancar un
  proyecto nuevo con el mismo dataset de demostración.

No hay un "modo mixto": o todo local o todo Supabase. Los IDs son `text`
(slugs/códigos), no `uuid`, precisamente para que el dataset local se pueda
volcar tal cual sin reasignar identificadores.

Las escrituras (`/admin` con `DATA_PROVIDER=supabase`) viven en un módulo
aparte, `src/lib/db/supabase-admin.ts`, que usa la **service role key**
(bypassa RLS) y solo se importa desde Server Actions/Route Handlers de
`/admin` — nunca desde una página pública. No hay una única transacción SQL
para operaciones multi-tabla (p. ej. avería + sus fuentes): `supabase-js` no
expone transacciones multi-sentencia sin una función Postgres dedicada, y este
proyecto no incluye una porque no se pudo probar contra un proyecto Supabase
real en este entorno. Es un compromiso consciente para el MVP — revísalo en el
propio panel tras cada guardado importante.

## Autenticación de /admin

`middleware.ts` (en `src/`, porque el proyecto usa el layout `src/app`)
protege todas las rutas `/admin/*` excepto `/admin/login`. La sesión es una
cookie `httpOnly` con `<epoch de expiración>.<HMAC-SHA256>`, firmada con
`ADMIN_SESSION_SECRET` (`src/lib/admin-auth.ts`, usa Web Crypto para funcionar
igual en el runtime Edge del middleware que en las rutas de API Node). No es
Supabase Auth ni multiusuario: es una contraseña compartida
(`ADMIN_PASSWORD`), suficiente para cerrar el hueco real de tener el panel
accesible sin ningún control, pero el siguiente paso razonable si el equipo
editorial crece es sustituirla por Supabase Auth con roles.

## Renderizado y caché

- Páginas de entidad: `generateStaticParams` + `export const revalidate = 3600`
  → SSG con revalidación ISR cada hora.
- `/buscar` y `/comparar/libre`: dinámicas (leen query o mucho estado de cliente),
  marcadas `noindex`.
- `/api/search`: route handler con `Cache-Control` público; alimenta el
  autocompletado del buscador.

## Búsqueda

`src/lib/search.ts` construye un índice en memoria (cacheado por proceso, vía
`src/lib/db` — funciona igual con el proveedor local que con Supabase) con dos
zonas por entrada: `strong` (marca, modelo, código, slug, motores) y `weak`
(años, frase de resumen). El scoring prima los aciertos en `strong`. Hay una
lista de *stopwords* en español para que "qué motor lleva un..." no penalice
la búsqueda. Los tokens con dígito ("8", "a3") se tratan como significativos
aunque sean cortos. `search()` es `async`; se llama con `await` desde
`/api/search` y desde `/buscar`.

## Importación CSV (`/admin/importar`)

Formato "largo": una fila = un campo de una entidad (`DATA_IMPORT_TEMPLATE.csv`).
`src/lib/import/parse-csv.ts` (parser CSV mínimo, RFC 4180) y
`src/lib/import/build-plan.ts` (agrupa filas por `entity+slug`, resuelve
`engine_code` contra el dataset real, crea/reutiliza fuentes por
`source_url`/`source_title`, parsea el campo `notes` como `key=value;...`) son
funciones puras con tests (`build-plan.test.ts`, contra la plantilla real).

Alcance deliberado: solo `known_issue` y `maintenance_item` — son las
entidades que de verdad se alimentan en lote; `generation`/`engine`/
`generation_engine` tienen sus propios formularios en `/admin`. Una fila de un
tipo no soportado se reporta como **aviso**, no error, y no bloquea el resto
del fichero. El flujo en la UI es de dos fases (`src/components/admin/ImportForm.tsx`
+ `src/app/admin/importar/actions.ts`): previsualizar (parsear + validar, sin
tocar la base de datos) y confirmar (aplica los upserts ya vistos en la
preview). No es atómico: si falla a mitad, el mensaje indica cuántas
operaciones se aplicaron antes del fallo.

## Rendimiento (Core Web Vitals)

- Sin fuentes web: stack de sistema.
- Sin imágenes en el hero ni carruseles; `<AdSlot>` reserva altura fija.
- JS de cliente mínimo: First Load ~105–110 kB.
- Tablas anchas con `overflow-x: auto`; nunca scroll horizontal del `body`.

## Publicidad y consentimiento

- `<AdSlot>` (`src/components/AdSlot.tsx`, client) siempre reserva su espacio;
  solo carga el script de AdSense y pinta el `<ins class="adsbygoogle">` real
  cuando se cumplen las tres condiciones: `NEXT_PUBLIC_ADS_ENABLED === "true"`,
  hay `NEXT_PUBLIC_ADSENSE_CLIENT`, y `lib/consent.ts` dice que el usuario
  aceptó. Sin las tres, no hay red ni script de terceros.
- `<ConsentBanner>` guarda la elección en `localStorage` y la publica por
  `lib/consent.ts` (evento `cocheclaro:consent`), que es lo único que
  `<AdSlot>` consulta. **No es una CMP real**: es la base funcional sobre la
  que montar una CMP certificada (Google CMP / TCF de IAB) antes de anuncios
  personalizados en el EEE — sustituye `getConsent`/`setConsent`/
  `subscribeConsent` por las señales de esa plataforma (p. ej. `__tcfapi`).
- `/ads.txt` (`src/app/ads.txt/route.ts`) se genera solo desde
  `NEXT_PUBLIC_ADSENSE_CLIENT`; vacío hasta que esa variable tenga un valor
  real, para no publicar un archivo inválido.

## Campañas / llamadas a revisión (API externa)

`src/lib/recalls.ts` consulta la **API pública de recalls de la NHTSA**
(`api.nhtsa.gov`, sin clave) y muestra las llamadas a revisión en la ficha de
generación. Decisiones:

- **Solo para el catálogo de campañas, no para el catálogo de coches.** El
  catálogo y las averías editoriales siguen siendo datos propios (`src/data`).
  Ninguna API cubre "averías conocidas con evidencia + mantenimiento" para el
  mercado europeo; eso es el foso del proyecto.
- **Datos de EE. UU.**, etiquetados como tales en la interfaz. Muchas marcas
  europeas (SEAT, CUPRA, Škoda, Peugeot, Renault, Dacia) no se venden allí →
  `src/data/nhtsa-map.ts` las excluye y no se consulta la API.
- Los nombres de modelo de la NHTSA están en inglés/mayúsculas y a veces las
  campañas se archivan por acabado (BMW). `NHTSA_OVERRIDES` mapea esos casos.
- Se consultan 2–3 años de modelo por generación, en paralelo, con timeout de
  6 s y `Promise.allSettled`. **Cualquier fallo devuelve lista vacía**: la
  sección nunca rompe la página.
- Caché de `fetch` de Next a 7 días (`revalidate`). Se puede desactivar con
  `RECALLS_ENABLED=false`.
- Las categorías de componente se traducen al español (`recallComponentTitle`);
  el texto de resumen se muestra en inglés (original de la NHTSA) y así se
  etiqueta, sin traducción automática.

## Analítica

`track(event, props)` en `src/lib/analytics.ts`. Sin proveedor configurado,
registra en consola (dev). Con `NEXT_PUBLIC_ANALYTICS_ENDPOINT`, envía por
`navigator.sendBeacon`. Eventos: `vehicle_search`, `vehicle_select`,
`engine_select`, `calculator_start/complete`, `comparison_start/complete`,
`source_open`, `affiliate_click`, `related_vehicle_click`.

## Tests

- **Unitarios** (Vitest): `src/lib/calculations/*.test.ts` (fórmulas y casos
  límite), `src/lib/search.test.ts` (relevancia y lenguaje natural),
  `src/lib/import/build-plan.test.ts` (parser + plan de importación, incluida
  la plantilla CSV real).
- **E2E** (Playwright): `e2e/core-flow.spec.ts` — flujo home→buscar→ficha→motor→
  calculadora, metadatos/canonical/noindex, admin no indexado, sitemap sin
  búsqueda ni admin. No cubre (aún) el login de `/admin` ni el CRUD/importación
  en modo Supabase — probados manualmente en local en esta sesión, pero sin un
  proyecto Supabase real disponible para verificar contra una base de datos
  viva; revísalos con cuidado en el primer uso real.
