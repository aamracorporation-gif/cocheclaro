/**
 * Configuración global del sitio. Todo lo que dependa del dominio o de la
 * marca provisional se lee desde aquí para poder cambiarlo en un único sitio.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "CocheClaro",
  /** URL canónica sin barra final. */
  url: rawUrl.replace(/\/$/, ""),
  description:
    "Conoce el coche antes de comprarlo: motores, averías conocidas, mantenimiento y coste real de propiedad de coches usados en España.",
  locale: "es-ES",
  country: "ES",
  nav: [
    { href: "/coches", label: "Modelos" },
    { href: "/motores", label: "Motores" },
    { href: "/comparar", label: "Comparar" },
    { href: "/calculadoras", label: "Calculadoras" },
  ],
  footer: [
    { href: "/acerca-de", label: "Acerca de" },
    { href: "/metodologia", label: "Metodología" },
    { href: "/contacto", label: "Contacto" },
    { href: "/privacidad", label: "Privacidad" },
    { href: "/cookies", label: "Cookies" },
    { href: "/aviso-legal", label: "Aviso legal" },
  ],
} as const;

export const ads = {
  enabled: process.env.NEXT_PUBLIC_ADS_ENABLED === "true",
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
};

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) return `${site.url}/${path}`;
  return `${site.url}${path}`;
}
