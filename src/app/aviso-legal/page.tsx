import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: `Titularidad y condiciones de uso de ${site.name}.`,
  path: "/aviso-legal",
});

export default function LegalNoticePage() {
  return (
    <Prose
      title="Aviso legal"
      path="/aviso-legal"
      intro="Texto base pendiente de revisión legal profesional antes de operar comercialmente."
    >
      <h2>Titular</h2>
      <p>
        [Nombre o razón social], [NIF], [domicilio], [correo]. Datos pendientes de completar en
        el despliegue real.
      </p>

      <h2>Objeto</h2>
      <p>
        {site.name} ofrece información orientativa sobre coches usados, motores, mantenimiento,
        averías y coste de propiedad. El contenido no constituye asesoramiento de compra,
        mecánico, jurídico ni financiero.
      </p>

      <h2>Uso del contenido</h2>
      <p>
        Los datos se ofrecen &laquo;tal cual&raquo;, con la mejor diligencia posible y con
        indicación de fuentes y fecha de revisión. Pueden contener errores o quedar
        desactualizados. Antes de comprar, verifica el vehículo con un profesional.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos y bases de datos propias de {site.name} están protegidos. Las marcas de
        fabricantes y modelos pertenecen a sus titulares y se citan de forma informativa.
      </p>

      <h2>Enlaces</h2>
      <p>
        Los enlaces a sitios de terceros se ofrecen como referencia. No respondemos de sus
        contenidos ni de sus políticas.
      </p>

      <h2>Legislación aplicable</h2>
      <p>Este aviso se rige por la legislación española.</p>
    </Prose>
  );
}
