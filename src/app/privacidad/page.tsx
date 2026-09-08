import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description: `Cómo trata ${site.name} los datos de los visitantes.`,
  path: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <Prose
      title="Política de privacidad"
      path="/privacidad"
      intro="Texto base pendiente de revisión legal profesional antes de operar comercialmente."
    >
      <h2>Responsable</h2>
      <p>
        [Nombre o razón social del responsable], [NIF], [domicilio], [correo de contacto]. Datos
        pendientes de completar en el despliegue real.
      </p>

      <h2>Qué datos tratamos</h2>
      <ul>
        <li>
          <strong>Navegación:</strong> datos técnicos agregados (páginas vistas, tipo de
          dispositivo) para medir el uso del sitio.
        </li>
        <li>
          <strong>Contacto:</strong> si nos escribes, los datos que incluyas en tu mensaje, solo
          para responderte.
        </li>
      </ul>

      <h2>Base jurídica</h2>
      <p>
        Interés legítimo en medir y mejorar el sitio; consentimiento para cookies no necesarias y
        para publicidad personalizada cuando aplique.
      </p>

      <h2>Publicidad</h2>
      <p>
        Si se activa publicidad, los proveedores podrán tratar datos conforme a sus propias
        políticas. En el Espacio Económico Europeo se solicitará el consentimiento mediante una
        plataforma de gestión del consentimiento certificada antes de usar cookies publicitarias.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y
        portabilidad escribiendo a la dirección de contacto, y reclamar ante la Agencia Española
        de Protección de Datos.
      </p>

      <h2>Conservación</h2>
      <p>
        Los datos de contacto se conservan el tiempo necesario para atender tu solicitud; los
        datos de medición, de forma agregada.
      </p>
    </Prose>
  );
}
