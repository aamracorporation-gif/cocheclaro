import type { Metadata } from "next";
import { site, absoluteUrl } from "@/lib/site";

interface PageSeo {
  title: string;
  description: string;
  /** Ruta absoluta del sitio, empezando por "/". */
  path: string;
  /** Si true, se emite noindex (búsqueda interna, admin, filtros). */
  noindex?: boolean;
  type?: "website" | "article";
}

/** Construye el objeto Metadata de Next para una entidad. */
export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  type = "website",
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;

  return {
    // `absolute` evita que la plantilla del layout raíz añada otro sufijo.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      type,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}

/* ── JSON-LD ───────────────────────────────────────────────── */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqJsonLd(faq: Array<{ q: string; a: string }>) {
  if (faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Article solo para contenido realmente editorial (§11). Aquí se usa en las
 * comparaciones curadas, que sí son artículos redactados.
 */
export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Organization", name: `Equipo editorial de ${site.name}` },
    publisher: { "@type": "Organization", name: site.name },
  };
}
