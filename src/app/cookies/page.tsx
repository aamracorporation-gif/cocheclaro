import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  description: `Qué cookies usa ${site.name} y cómo gestionarlas.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <Prose
      title="Política de cookies"
      path="/cookies"
      intro="Texto base pendiente de revisión legal profesional antes de operar comercialmente."
    >
      <h2>Qué son</h2>
      <p>
        Pequeños archivos que un sitio guarda en tu dispositivo. Algunas son necesarias para el
        funcionamiento; otras sirven para medir el uso o para publicidad.
      </p>

      <h2>Cookies que usamos ahora</h2>
      <ul>
        <li>
          <strong>Necesarias:</strong> preferencias básicas de la interfaz y registro de tu
          elección sobre este aviso. No se pueden desactivar.
        </li>
      </ul>

      <h2>Cookies que podrían activarse en el futuro</h2>
      <ul>
        <li>
          <strong>Medición:</strong> estadísticas de uso agregadas.
        </li>
        <li>
          <strong>Publicidad:</strong> si se activa AdSense u otra red, previo consentimiento en
          el Espacio Económico Europeo mediante una plataforma de gestión del consentimiento
          certificada.
        </li>
      </ul>

      <h2>Cómo gestionarlas</h2>
      <p>
        Aceptar y rechazar se ofrecen con la misma visibilidad en el primer aviso. Puedes
        cambiar tu elección borrando los datos del sitio en tu navegador o desde el panel de
        consentimiento cuando esté disponible. También puedes bloquear cookies desde la
        configuración de tu navegador.
      </p>
    </Prose>
  );
}
