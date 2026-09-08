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
  app/                 Rutas (App Router). Server Components salvo los "use client".
    coches/[brand]/[model]/[generation]/   Ficha de generación (página SEO principal)
    motores/[engine]/                      Ficha de motor
    comparar/[comparison]/                 Comparativa curada (Article JSON-LD)
    comparar/libre/                        Comparador interactivo (noindex)
    calculadoras/...                       3 calculadoras (client)
    buscar/                                Resultados de búsqueda (noindex)
    admin/                                 Consola editorial (noindex, solo lectura)
    sitemap.ts / robots.ts / not-found.tsx
  components/           UI. `vehicle/*` y `calculators/*` agrupan por dominio.
  data/                 EL DATASET (editable a mano). Un archivo por entidad.
  lib/
    db/                 Acceso a datos. `local.ts` = proveedor por defecto.
    calculations/       Funciones puras + tests (fórmulas documentadas).
    search.ts           Índice en memoria + scoring.
    seo.ts              buildMetadata + generadores de JSON-LD.
    validate-data.ts    Validaciones (integridad, slugs, fuentes, publicados).
    analytics.ts        track() desacoplado de proveedor.
```

## Acceso a datos

`src/lib/db/index.ts` reexporta el **proveedor local** (`local.ts`), que lee de
`src/data/*.ts` y expone funciones `async`. La firma async es deliberada: permite
sustituirlo por un proveedor Supabase sin tocar la UI.

Para añadir Supabase:

1. `supabase/migrations/0001_init.sql` ya define el esquema equivalente.
2. Crear `src/lib/db/supabase.ts` con las mismas funciones exportadas que
   `local.ts` (mismo tipo de retorno).
3. En `index.ts`, conmutar según `process.env.DATA_PROVIDER`.
4. Crear un generador de seed desde `src/data/*.ts` para poblar la BD.

No hay un "modo mixto": o todo local o todo Supabase.

## Renderizado y caché

- Páginas de entidad: `generateStaticParams` + `export const revalidate = 3600`
  → SSG con revalidación ISR cada hora.
- `/buscar` y `/comparar/libre`: dinámicas (leen query o mucho estado de cliente),
  marcadas `noindex`.
- `/api/search`: route handler con `Cache-Control` público; alimenta el
  autocompletado del buscador.

## Búsqueda

`src/lib/search.ts` construye un índice en memoria (cacheado) con dos zonas por
entrada: `strong` (marca, modelo, código, slug, motores) y `weak` (años, frase de
resumen). El scoring prima los aciertos en `strong`. Hay una lista de *stopwords*
en español para que "qué motor lleva un..." no penalice la búsqueda. Los tokens
con dígito ("8", "a3") se tratan como significativos aunque sean cortos.

## Rendimiento (Core Web Vitals)

- Sin fuentes web: stack de sistema.
- Sin imágenes en el hero ni carruseles; `<AdSlot>` reserva altura fija.
- JS de cliente mínimo: First Load ~105–110 kB.
- Tablas anchas con `overflow-x: auto`; nunca scroll horizontal del `body`.

## Publicidad y consentimiento

- `<AdSlot>` siempre ocupa su espacio; solo pinta/carga si
  `NEXT_PUBLIC_ADS_ENABLED === "true"` **y** hay client id. El `<ins>` de AdSense
  y la carga del script quedan como punto de integración explícito, tras
  confirmar consentimiento.
- `<ConsentBanner>` guarda la elección en `localStorage`. No carga cookies ni
  scripts: es la base sobre la que montar una CMP certificada (Google CMP / TCF)
  antes de anuncios personalizados en el EEE.

## Analítica

`track(event, props)` en `src/lib/analytics.ts`. Sin proveedor configurado,
registra en consola (dev). Con `NEXT_PUBLIC_ANALYTICS_ENDPOINT`, envía por
`navigator.sendBeacon`. Eventos: `vehicle_search`, `vehicle_select`,
`engine_select`, `calculator_start/complete`, `comparison_start/complete`,
`source_open`, `affiliate_click`, `related_vehicle_click`.

## Tests

- **Unitarios** (Vitest): `src/lib/calculations/*.test.ts` (fórmulas y casos
  límite), `src/lib/search.test.ts` (relevancia y lenguaje natural).
- **E2E** (Playwright): `e2e/core-flow.spec.ts` — flujo home→buscar→ficha→motor→
  calculadora, metadatos/canonical/noindex, admin no indexado, sitemap sin
  búsqueda ni admin.
