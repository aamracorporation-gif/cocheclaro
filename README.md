# CocheClaro

Base de conocimiento navegable sobre coches usados en España: **buscar, entender,
comparar y calcular**. No es un blog: es un producto de datos estructurados con
fuentes, herramientas y navegación por vehículo.

Construido a partir del *Plan Maestro CocheClaro* (SEO orgánico → AdSense + afiliación).

> **Nombre y marca provisionales.** Validar antes de uso comercial.

---

## Qué incluye

- **Buscador** por marca, modelo, generación, año o código de motor, con
  autocompletado y tolerancia a lenguaje natural (`qué motor lleva un golf 8`).
- **Fichas de generación**: veredicto, resumen, selector de motor, "antes de
  comprar", tabla de motores, averías con síntomas/gravedad/coste orientativo y
  **nivel de evidencia**, mantenimiento, calculadora de coste anual precargada,
  comparativas, FAQ y **caja de fuentes + última revisión**.
- **Fichas de motor**: datos técnicos, coches que lo montan, averías y mantenimiento.
- **Comparativas curadas** (indexables) + **comparador libre** (noindex).
- **Campañas y llamadas a revisión** en cada ficha, desde la **API pública de la
  NHTSA** (EE. UU., sin clave), etiquetadas como datos del mercado estadounidense.
  No sustituyen a la capa editorial de averías. Se desactiva con `RECALLS_ENABLED=false`.
- **Calculadoras** (100 % en el navegador): combustible, coste anual, planificador
  de mantenimiento. Cada una explica su fórmula y tiene tests.
- **SEO técnico**: SSG/ISR, `generateMetadata` por entidad, canonical absoluto,
  breadcrumbs + JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`,
  `Article` solo en comparativas), `sitemap.xml` solo con contenido publicado,
  `robots.txt`, `noindex` en búsqueda/filtros/admin, 404 real.
- **Publicidad**: componente `<AdSlot>` con dimensiones reservadas (sin CLS),
  **desactivado por defecto** (`NEXT_PUBLIC_ADS_ENABLED=false`) y que solo carga
  el script real de AdSense cuando además hay `NEXT_PUBLIC_ADSENSE_CLIENT`
  configurado **y** el usuario ha aceptado en `<ConsentBanner>`. Incluye
  `/ads.txt` generado desde el publisher id.
- **Consentimiento**: primera capa con *Aceptar / Rechazar / Configurar* al mismo
  nivel (`src/lib/consent.ts`). Sustitúyelo por una CMP certificada (Google CMP
  / TCF) antes de activar anuncios personalizados en el EEE.
- **Panel editorial** (`/admin`, noindex, **protegido por contraseña** vía
  `middleware.ts` + `ADMIN_PASSWORD`): estado del dataset y validaciones
  siempre; con `DATA_PROVIDER=supabase` además CRUD real (generaciones,
  averías, fuentes, comparativas) con flujo `draft → needs_review →
  published`, e importación CSV por lotes con preview y validación Zod.

## Stack

Next.js 15 (App Router, RSC) · TypeScript strict · Tailwind CSS · Zod · Vitest ·
Playwright. Datos: **proveedor local** (`src/data/*.ts`, por defecto) o
**Supabase/PostgreSQL** (`src/lib/db/supabase.ts`) conmutando con
`DATA_PROVIDER` (ver [ARCHITECTURE.md](ARCHITECTURE.md)).

## Puesta en marcha

```bash
npm install
cp .env.example .env.local
```

Edita `.env.local` y define al menos `ADMIN_PASSWORD` y `ADMIN_SESSION_SECRET`
(genera este último con `openssl rand -base64 32`) para poder entrar en
`/admin`. El resto de variables son opcionales para desarrollar: el dataset de
demostración vive en el repositorio y no hace falta ninguna base de datos.

```bash
npm run dev   # http://localhost:3000
```

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` / `npm start` | Build de producción y arranque |
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run lint` | ESLint (config de Next) |
| `npm test` | Tests unitarios (Vitest) |
| `npm run test:e2e` | Tests E2E (Playwright; hace build + start) |
| `npm run data:validate` | Valida el dataset (integridad, slugs, fuentes). Sale con código 1 si hay errores. |
| `npm run db:seed:generate` | Genera `supabase/seed/seed_demo.sql` a partir de `src/data/*.ts`, para arrancar un proyecto Supabase nuevo con el mismo dataset de demostración. |

## Datos

**Regla de oro (§8 del Plan Maestro): no se inventan datos de coches.** El dataset
incluido está marcado como `dataStatus: "demo"` y se muestra con un aviso visible.
Sustitúyelo por datos verificados con fuente antes de publicar en producción.

- Edita `src/data/*.ts`. Cada dato crítico debería apuntar a una `source`.
- Ejecuta `npm run data:validate` antes de subir cambios.
- Estados: `draft → needs_review → published`. Solo `published` genera URL
  indexable y entra en el sitemap.
- Plantilla de importación: [`DATA_IMPORT_TEMPLATE.csv`](DATA_IMPORT_TEMPLATE.csv)
  (también servida en `/DATA_IMPORT_TEMPLATE.csv` una vez desplegado). La
  importación CSV de `/admin/importar` soporta hoy `known_issue` y
  `maintenance_item`; otros tipos de fila se avisan pero no bloquean el resto
  del fichero (edítalos con sus formularios dedicados).

## Variables de entorno

Ver [`.env.example`](.env.example). Las claves:

- `NEXT_PUBLIC_SITE_URL` — URL canónica (metadatos, sitemap, JSON-LD).
- `NEXT_PUBLIC_ADS_ENABLED` / `NEXT_PUBLIC_ADSENSE_CLIENT` — anuncios
  desactivados por defecto; con ambas puestas **y** consentimiento aceptado,
  `<AdSlot>` carga el script real de AdSense.
- `DATA_PROVIDER` — `local` (por defecto, sin dependencias) o `supabase`.
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` /
  `SUPABASE_SERVICE_ROLE_KEY` — solo si `DATA_PROVIDER=supabase`. La service
  role key es secreta (bypassa RLS) y solo la usan las Server Actions de
  `/admin`; nunca la prefijes con `NEXT_PUBLIC_`.
- `ADMIN_PASSWORD` / `ADMIN_SESSION_SECRET` — **obligatorias** para entrar en
  `/admin` (protegido por `middleware.ts`, independientemente del proveedor de
  datos). Sin ellas el login siempre falla; el panel no queda abierto.

## Cómo pasar del dataset de demostración a datos reales en Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En el editor SQL, ejecuta `supabase/migrations/0001_init.sql` (esquema +
   Row Level Security: la clave anónima solo puede leer contenido
   `published`).
3. Genera el seed a partir del dataset actual y cárgalo:
   ```bash
   npm run db:seed:generate
   psql "$DATABASE_URL" -f supabase/seed/seed_demo.sql
   # o pega supabase/seed/seed_demo.sql en el editor SQL de Supabase
   ```
4. En `.env.local`, pon `DATA_PROVIDER=supabase` y las tres claves de Supabase
   (URL, anon key, service role key — esta última desde Project Settings →
   API, y solo en el servidor de despliegue, nunca en el repositorio).
5. Reinicia (`npm run dev` o vuelve a desplegar). El panel `/admin` pasa de
   solo lectura a tener CRUD real: generaciones, averías, fuentes,
   comparativas e importación CSV.
6. Sustituye los datos de demostración (`dataStatus: "demo"`) por datos
   verificados con fuente, uno a uno, antes de considerar el sitio listo para
   producción (§8 del Plan Maestro: nunca presentes una avería como "común"
   sin evidencia suficiente).

## Despliegue

1. `npm run build` debe pasar sin errores de TypeScript.
2. Configura `NEXT_PUBLIC_SITE_URL` con el dominio real y genera
   `ADMIN_PASSWORD` / `ADMIN_SESSION_SECRET` de producción (distintos de los
   de desarrollo).
3. Despliega en Vercel o infraestructura equivalente para Next.js; añade ahí
   las variables de entorno (nunca las subas al repositorio).
4. En Search Console: verifica el dominio, inspecciona URLs y envía
   `sitemap.xml`.
5. Valida Core Web Vitals (objetivo: LCP ≤ 2,5 s, INP < 200 ms, CLS ≤ 0,1) y
   que el sitio compila y funciona con anuncios completamente desactivados.
6. **Antes de solicitar AdSense**: repasa el
   [checklist](#checklist-antes-de-adsense) de abajo — necesitas contenido
   sustancial, páginas legales reales y no puedes anunciar mientras el aviso
   de "dato de demostración" siga visible en las fichas.
7. **Antes de activar anuncios** (`NEXT_PUBLIC_ADS_ENABLED=true`): integra una
   CMP certificada (Google CMP u otra compatible con TCF de IAB) en lugar del
   `<ConsentBanner>` de ejemplo, añade tu `NEXT_PUBLIC_ADSENSE_CLIENT`
   (`ca-pub-...`) para que `/ads.txt` se genere solo, y solicita la revisión
   de AdSense con el dominio ya en producción.

### Checklist antes de AdSense

- [ ] Contenido propio y sustancial en todas las páginas públicas importantes;
      sin páginas vacías ni "ficha en revisión" en lo que se muestre a Google.
- [ ] Acerca de, Contacto, Privacidad, Cookies, Aviso legal y Metodología con
      datos reales (no los textos de ejemplo del repositorio).
- [ ] CMP certificada integrada (obligatoria para usuarios del EEE/RU/Suiza).
- [ ] Dominio propio bajo tu control, con el sitio ya desplegado y estable.
- [ ] `npm run build`, `npm test` y una revisión manual en móvil sin errores.

## Estado y siguientes pasos

- [x] Fase 1 — Esqueleto técnico (Next, TS, Tailwind, SEO, sitemap, robots, tests).
- [x] Fase 2 — Producto base (home, buscador, fichas, motores, calculadoras,
      comparador, páginas legales).
- [x] Dataset ampliado (34 marcas, 259 modelos, 294 generaciones, 107 motores,
      42 averías, 13 comparativas — desde utilitarios de los años 90 hasta
      eléctricos, premium, todocamino y pick-ups actuales). Marcado como
      **"ficha en revisión"**: datos orientativos pendientes de contrastar
      con fuente oficial.
- [x] Integración con la API pública de recalls de la NHTSA (campañas por ficha).
- [x] Panel protegido por contraseña (`middleware.ts` + `ADMIN_PASSWORD`).
      Antes era de acceso público sin autenticación.
- [x] Adaptador de datos Supabase (`src/lib/db/supabase.ts`) + esquema SQL con
      RLS (`supabase/migrations/0001_init.sql`) + generador de seed
      (`npm run db:seed:generate`). El buscador (`src/lib/search.ts`) también
      funciona sobre Supabase, no solo en local.
- [x] **Conectado a un proyecto Supabase real en producción** (2026-09-16):
      esquema migrado, dataset cargado vía `scripts/seed-supabase.ts`,
      `DATA_PROVIDER=supabase` activo en Vercel. cocheclaro.vercel.app ya lee
      de Postgres, no del código.
- [x] CRUD real en `/admin` con `DATA_PROVIDER=supabase`: generaciones y
      comparativas (publicar/despublicar), averías y fuentes (crear/editar),
      con Server Actions + Zod.
- [x] Importación CSV (`/admin/importar`) para averías y mantenimiento, con
      preview, avisos/errores por fila y validación Zod — probada con
      `DATA_IMPORT_TEMPLATE.csv` real. Otros tipos de entidad quedan para los
      formularios dedicados.
- [x] `<AdSlot>` carga el script real de AdSense (gate: activado + client id +
      consentimiento) y `/ads.txt` se genera desde el publisher id.
- [ ] CRUD de marcas/modelos/motores/`generation_engines` desde el panel (hoy
      se gestionan por SQL directo o reimportando el seed). Es la pieza que
      falta para no tocar código en ningún caso.
- [ ] Integración de una CMP certificada real (el `<ConsentBanner>` actual es
      un ejemplo funcional, no una CMP conforme a TCF).
- [ ] Cuenta de AdSense, dominio y despliegue: pasos que solo puede completar
      el propietario del sitio (requieren su cuenta de Google/hosting).

Consulta [ARCHITECTURE.md](ARCHITECTURE.md) y [SEO_CHECKLIST.md](SEO_CHECKLIST.md).
