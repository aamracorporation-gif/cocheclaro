import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: `Cómo ponerte en contacto con el equipo de ${site.name} para correcciones, fuentes o sugerencias.`,
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <Prose title="Contacto" path="/contacto">
      <p>
        ¿Has visto un dato incorrecto o tienes una fuente mejor? Nos interesa especialmente:
      </p>
      <ul>
        <li>Correcciones de datos técnicos con fuente.</li>
        <li>Boletines técnicos, campañas o documentación oficial.</li>
        <li>Sugerencias de modelos o motores que deberíamos cubrir.</li>
      </ul>
      <h2>Correo</h2>
      <p>
        Escribe a <strong>correcciones@ejemplo-cocheclaro.es</strong> (dirección de ejemplo:
        sustitúyela por la real al desplegar). Indica la URL de la ficha y, si es una
        corrección, la fuente que la respalda.
      </p>
      <p className="text-sm text-ink-faint">
        No publiques datos personales en tu mensaje más allá de lo necesario para responderte.
      </p>
    </Prose>
  );
}
