import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { getEngines } from "@/lib/db";
import { fuelLabel } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Fichas de motores de coche",
  description:
    "Códigos de motor, potencia, par, arquitectura, averías conocidas y mantenimiento. Encuentra qué coches montan cada motor.",
  path: "/motores",
});

export const revalidate = 3600;

export default async function EnginesPage() {
  const engines = await getEngines();
  const byFuel = new Map<string, typeof engines>();
  for (const e of engines) {
    const key = fuelLabel(e.fuel);
    byFuel.set(key, [...(byFuel.get(key) ?? []), e]);
  }

  return (
    <Container>
      <Breadcrumbs crumbs={[{ name: "Inicio", path: "/" }, { name: "Motores", path: "/motores" }]} />
      <h1 className="h1 mt-3">Motores</h1>
      <p className="prose-block mt-2">
        Cada ficha reúne el código de motor, sus datos técnicos, los coches que lo montan, sus
        averías conocidas con nivel de evidencia y el mantenimiento.
      </p>

      <div className="mt-8 space-y-8">
        {[...byFuel.entries()].map(([fuel, list]) => (
          <section key={fuel}>
            <h2 className="h3">{fuel}</h2>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {list.map((e) => (
                <li key={e.id}>
                  <Link
                    href={`/motores/${e.slug}`}
                    className="card block transition-colors hover:border-neutral-300"
                  >
                    <span className="font-semibold text-ink">{e.code}</span>{" "}
                    <span className="text-sm text-ink-faint">
                      · {e.powerHp} CV · {e.architecture}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{e.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
