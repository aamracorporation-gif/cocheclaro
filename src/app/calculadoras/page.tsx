import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculadoras de coste de coche",
  description:
    "Calcula el gasto de combustible, el coste anual de propiedad y planifica el mantenimiento por kilometraje. Cálculo local, sin servidor.",
  path: "/calculadoras",
});

const CALCS = [
  {
    href: "/calculadoras/combustible",
    title: "Gasto de combustible",
    desc: "Kilómetros al año × consumo × precio del litro. Coste al mes y por 100 km.",
  },
  {
    href: "/calculadoras/coste-anual-coche",
    title: "Coste anual de propiedad",
    desc: "Combustible + mantenimiento + seguro + impuesto e ITV prorrateados.",
  },
  {
    href: "/calculadoras/mantenimiento",
    title: "Planificador de mantenimiento",
    desc: "Introduce el kilometraje actual y los intervalos: te decimos qué toca pronto.",
  },
];

export default function CalculatorsIndex() {
  return (
    <Container>
      <Breadcrumbs
        crumbs={[{ name: "Inicio", path: "/" }, { name: "Calculadoras", path: "/calculadoras" }]}
      />
      <h1 className="h1 mt-3">Calculadoras</h1>
      <p className="prose-block mt-2">
        Todas funcionan en tu navegador, sin enviar datos. Cada una explica su fórmula.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {CALCS.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className="card block transition-colors hover:border-neutral-300">
              <span className="font-semibold text-ink">{c.title}</span>
              <span className="mt-1 block text-sm text-ink-soft">{c.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
