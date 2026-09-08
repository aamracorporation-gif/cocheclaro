import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Acerca de",
  description: `Qué es ${site.name}, para quién y cómo se financia.`,
  path: "/acerca-de",
});

export default function AboutPage() {
  return (
    <Prose title={`Acerca de ${site.name}`} path="/acerca-de">
      <p>
        {site.name} es una base de conocimiento sobre coches usados en España. En lugar de
        artículos genéricos, ofrece fichas por vehículo y por motor con datos estructurados,
        averías conocidas, mantenimiento y herramientas de cálculo.
      </p>

      <h2>Para quién</h2>
      <ul>
        <li>Quien va a comprar un coche de segunda mano y quiere saber qué revisar.</li>
        <li>Propietarios que buscan intervalos, síntomas y prevención.</li>
        <li>Quien duda entre dos coches parecidos y necesita diferencias reales.</li>
      </ul>

      <h2>Cómo se financia</h2>
      <p>
        El proyecto se sostiene con publicidad y, en el futuro, con enlaces de afiliación y
        contactos con partners, siempre señalados de forma diferenciada del contenido
        editorial. La prioridad es la utilidad y la velocidad de las páginas.
      </p>

      <h2>Qué no somos</h2>
      <p>
        No somos un concesionario ni un marketplace. No damos asesoramiento financiero ni de
        inversión. La información es orientativa: la decisión y la revisión mecánica final son
        siempre del comprador.
      </p>

      <h2>Marca provisional</h2>
      <p>
        &laquo;{site.name}&raquo; es un nombre de trabajo. Debe validarse la marca y el dominio
        antes de cualquier uso comercial.
      </p>
    </Prose>
  );
}
