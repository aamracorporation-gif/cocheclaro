# SEO Checklist

Estado del SEO técnico y editorial frente al Plan Maestro (§11). ✅ implementado ·
⚠️ requiere acción antes de producción.

## Técnico

- ✅ HTML principal renderizado en servidor (RSC + SSG/ISR). El contenido
  esencial no depende de JS de cliente.
- ✅ `title` y `meta description` únicos por entidad vía `generateMetadata`.
  Descriptivos, no sensacionalistas.
- ✅ Un `<h1>` por página; jerarquía `h2/h3` coherente.
- ✅ `canonical` absoluto en todas las páginas (`buildMetadata` → `alternates.canonical`).
- ✅ Breadcrumbs visibles + `BreadcrumbList` en JSON-LD.
- ✅ `Organization` y `WebSite` (con `SearchAction`) en el layout raíz.
- ✅ `FAQPage` JSON-LD solo cuando la ficha tiene FAQ real.
- ✅ `Article` JSON-LD **solo** en comparativas curadas (contenido editorial real).
- ✅ **No** se usa `Product` ni `Review` schema (las páginas no cumplen ese tipo).
- ✅ `sitemap.xml` generado desde los datos; **solo** entidades `status=published`.
- ✅ `robots.txt` mínimo y explícito; no bloquea recursos de render.
- ✅ `noindex, nofollow` en `/buscar`, `/comparar/libre`, `/admin` (metadatos + robots.txt).
- ✅ 404 real (`not-found.tsx`) para slugs inexistentes (`notFound()` en cada ruta dinámica).
- ✅ Enlazado interno contextual: generación ↔ motor ↔ avería ↔ comparación ↔ calculadora.
- ✅ Enlaces `<a href>` rastreables (componente `Link` de Next).
- ✅ Caja visible de "Fuentes y última revisión" en fichas técnicas.
- ✅ Sin páginas programáticas: no hay URL por año, ni combinaciones automáticas,
  ni comparaciones masivas. El comparador libre no se indexa.
- ⚠️ `NEXT_PUBLIC_SITE_URL` debe apuntar al dominio real (afecta a canonical,
  sitemap y JSON-LD).
- ⚠️ Enviar `sitemap.xml` en Search Console tras el despliegue.
- ⚠️ Considerar dividir el sitemap por tipo si supera unos cientos de URLs.

## Rendimiento

- ✅ Sin fuentes web (stack de sistema), sin vídeo ni carruseles en el hero.
- ✅ `<AdSlot>` reserva dimensiones → sin CLS por anuncios vacíos.
- ✅ JS de cliente mínimo (First Load ~105–110 kB).
- ✅ Tablas con scroll horizontal propio; el `body` nunca scrollea en horizontal.
- ⚠️ Medir Core Web Vitals reales en producción (objetivo LCP ≤ 2,5 s,
  INP < 200 ms, CLS ≤ 0,1) y con datos de campo (CrUX).
- ⚠️ Si se añaden imágenes de vehículos: `next/image`, `alt` descriptivo,
  lazy-load fuera del primer viewport, dimensiones reservadas.

## Editorial / calidad (política anti-contenido de baja calidad, §11.2)

- ✅ Umbral de publicación: la validación exige que una generación publicada
  tenga puntos fuertes, puntos a revisar y al menos un motor asociado; una
  avería publicada, al menos una fuente.
- ✅ Datos estructurados + tablas HTML reales (no imágenes de tablas).
- ✅ "Sin dato" explícito en vez de estimaciones inventadas.
- ✅ Dataset marcado como `demo` con aviso visible hasta su verificación.
- ✅ Autoría: se cita "equipo editorial" y se enlaza la metodología.
- ⚠️ Sustituir el dataset demo por datos verificados con fuente antes de indexar
  en serio y antes de solicitar AdSense.
- ⚠️ No ampliar categorías sin demanda: primero enriquecer las páginas que ya
  reciben impresiones en Search Console.

## Antes de solicitar AdSense (§18)

- ⚠️ Contenido propio, útil y desarrollado en todas las páginas públicas importantes.
- ✅ Navegación clara y coherente (header + footer + breadcrumbs + enlazado interno).
- ✅ Acerca de, Contacto, Privacidad, Cookies, Aviso legal y Metodología accesibles desde el footer.
- ⚠️ Completar las páginas legales con datos reales del titular.
- ⚠️ Sin páginas placeholder ni fichas medio vacías: revisar que todo lo
  publicado supere el umbral editorial.
- ✅ Usable en móvil (mobile-first) y carga rápida.
- ⚠️ CMP certificada integrada para usuarios del EEE.
- ⚠️ Código de AdSense en `<head>` y dominio bajo control del propietario.
