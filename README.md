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
- **Publicidad**: componente `<AdSlot>` con dimensiones reservadas (sin CLS) y
  **desactivado por defecto** (`NEXT_PUBLIC_ADS_ENABLED=false`). No carga scripts
  sin CMP.
- **Consentimiento**: primera capa con *Aceptar / Rechazar / Configurar* al mismo
  nivel. Punto de integración para una CMP certificada (Google CMP / TCF).
- **Consola editorial** (`/admin`, noindex): estado del dataset, validaciones y
  entidades pendientes de revisión.

## Stack

Next.js 15 (App Router, RSC) · TypeScript strict · Tailwind CSS · Zod · Vitest ·
Playwright. Datos: **proveedor local** (`src/data/*.ts`) por defecto; adaptador
Supabase/PostgreSQL previsto (ver [ARCHITECTURE.md](ARCHITECTURE.md)).

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # opcional: arranca sin tocar nada
npm run dev                  # http://localhost:3000
```

No hace falta base de datos ni claves para desarrollar: el dataset de
demostración vive en el repositorio.

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

## Datos

**Regla de oro (§8 del Plan Maestro): no se inventan datos de coches.** El dataset
incluido está marcado como `dataStatus: "demo"` y se muestra con un aviso visible.
Sustitúyelo por datos verificados con fuente antes de publicar en producción.

- Edita `src/data/*.ts`. Cada dato crítico debería apuntar a una `source`.
- Ejecuta `npm run data:validate` antes de subir cambios.
- Estados: `draft → needs_review → published`. Solo `published` genera URL
  indexable y entra en el sitemap.
- Plantilla de importación: [`DATA_IMPORT_TEMPLATE.csv`](DATA_IMPORT_TEMPLATE.csv).

## Variables de entorno

Ver [`.env.example`](.env.example). Todas son opcionales para desarrollo.
Las clave:

- `NEXT_PUBLIC_SITE_URL` — URL canónica (metadatos, sitemap, JSON-LD).
- `NEXT_PUBLIC_ADS_ENABLED` — `false` por defecto. No poner en `true` sin CMP.
- `DATA_PROVIDER` — `local` (por defecto) o `supabase`.

## Despliegue

1. `npm run build` debe pasar sin errores de TypeScript.
2. Configura `NEXT_PUBLIC_SITE_URL` con el dominio real.
3. Despliega en Vercel o infraestructura equivalente para Next.js.
4. En Search Console: inspecciona URLs y envía `sitemap.xml`.
5. Valida Core Web Vitals (objetivo: LCP ≤ 2,5 s, INP < 200 ms, CLS ≤ 0,1).
6. **Antes de monetizar**: completa las páginas legales con datos reales, integra
   la CMP, y solo entonces pon `NEXT_PUBLIC_ADS_ENABLED=true`.

## Estado y siguientes pasos

- [x] Fase 1 — Esqueleto técnico (Next, TS, Tailwind, SEO, sitemap, robots, tests).
- [x] Fase 2 — Producto base (home, buscador, fichas, motores, calculadoras,
      comparador, páginas legales).
- [x] Dataset ampliado (32 marcas, 202 modelos, 237 generaciones, 102 motores,
      40 averías, 13 comparativas — desde utilitarios de los 2000 hasta
      eléctricos y premium actuales). Marcado como **"ficha en revisión"**:
      datos orientativos pendientes de contrastar con fuente oficial.
- [x] Integración con la API pública de recalls de la NHTSA (campañas por ficha).
- [~] Fase 3 — Panel editorial: hecha la **consola de solo lectura** (`/admin`).
      Falta CRUD protegido con Supabase Auth e importación CSV con validación Zod.
- [ ] Adaptador de datos Supabase (`src/lib/db/supabase.ts`) + generador de seed.
- [ ] Integración de CMP certificada y activación gradual de `<AdSlot>`.

Consulta [ARCHITECTURE.md](ARCHITECTURE.md) y [SEO_CHECKLIST.md](SEO_CHECKLIST.md).
