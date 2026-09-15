import { ads } from "@/lib/site";

/**
 * ads.txt (IAB): declara qué plataformas están autorizadas a vender inventario
 * de este sitio. Google exige uno propio antes de servir anuncios de AdSense
 * en producción. Se genera solo con el publisher id real; vacío hasta que
 * `NEXT_PUBLIC_ADSENSE_CLIENT` esté configurado para no publicar un archivo
 * inválido.
 */
export function GET() {
  const body = ads.client ? `google.com, ${ads.client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n` : "";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
