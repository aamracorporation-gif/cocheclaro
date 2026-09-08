import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoBadge } from "@/components/DemoBadge";
import { AdSlot } from "@/components/AdSlot";
import { SourcesBox } from "@/components/SourcesBox";
import { IssuesList } from "@/components/vehicle/IssuesList";
import { MaintenanceTable } from "@/components/vehicle/MaintenanceTable";
import { buildMetadata } from "@/lib/seo";
import { getEngines, getEngineDetail } from "@/lib/db";
import { fuelLabel, yearRange, formatNumber } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const engines = await getEngines();
  return engines.map((e) => ({ engine: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ engine: string }>;
}): Promise<Metadata> {
  const { engine: slug } = await params;
  const detail = await getEngineDetail(slug);
  if (!detail) {
    return buildMetadata({ title: "Motor no encontrado", description: "", path: `/motores/${slug}`, noindex: true });
  }
  const { engine } = detail;
  return buildMetadata({
    title: `Motor ${engine.code}: fiabilidad, problemas y qué coches lo montan`,
    description: `Ficha del motor ${engine.code} (${fuelLabel(engine.fuel)}, ${engine.powerHp} CV): arquitectura, averías conocidas con evidencia, mantenimiento y modelos que lo equipan.`,
    path: `/motores/${engine.slug}`,
  });
}

export default async function EnginePage({
  params,
}: {
  params: Promise<{ engine: string }>;
}) {
  const { engine: slug } = await params;
  const detail = await getEngineDetail(slug);
  if (!detail) notFound();

  const { engine, knownIssues, maintenance, sources, fittedIn } = detail;

  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Motores", path: "/motores" },
          { name: engine.code, path: `/motores/${engine.slug}` },
        ]}
      />

      <header className="mt-4">
        <p className="eyebrow">Motor {fuelLabel(engine.fuel)}</p>
        <h1 className="h1 mt-1">{engine.code}</h1>
        <p className="prose-block mt-3">{engine.summary}</p>
      </header>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric label="Arquitectura" value={engine.architecture} />
        <Metric label="Cilindrada" value={`${formatNumber(engine.displacementCc)} cc`} />
        <Metric
          label="Potencia"
          value={`${engine.powerHp} CV${engine.powerKw ? ` (${engine.powerKw} kW)` : ""}`}
        />
        <Metric label="Par máximo" value={engine.torqueNm ? `${engine.torqueNm} Nm` : "sin dato"} />
      </section>

      {engine.dataStatus === "demo" && <DemoBadge className="mt-6" />}

      <AdSlot slot="motor-tras-resumen" minHeight={100} />

      <section aria-labelledby="coches" className="mt-8">
        <h2 id="coches" className="h2">
          Coches que montan este motor
        </h2>
        {fittedIn.length > 0 ? (
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {fittedIn.map(({ generation, model, brand, link }) => (
              <li key={`${generation.id}-${link.trimLabel}`}>
                <Link
                  href={`/coches/${brand.slug}/${model.slug}/${generation.slug}`}
                  className="card block transition-colors hover:border-neutral-300"
                >
                  <span className="font-medium text-ink">
                    {brand.name} {model.name} {generation.code}
                  </span>{" "}
                  <span className="text-sm text-ink-faint">
                    · {link.trimLabel} · {yearRange(link.startYear, link.endYear)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-ink-faint">
            Todavía no hay generaciones publicadas asociadas a este motor.
          </p>
        )}
      </section>

      <section aria-labelledby="averias-motor" className="mt-10">
        <h2 id="averias-motor" className="h2">
          Averías conocidas
        </h2>
        <div className="mt-4">
          <IssuesList issues={knownIssues} sources={sources} />
        </div>
      </section>

      <AdSlot slot="motor-entre-secciones" minHeight={100} />

      <section aria-labelledby="mantenimiento-motor" className="mt-10">
        <h2 id="mantenimiento-motor" className="h2">
          Mantenimiento
        </h2>
        <div className="mt-3">
          <MaintenanceTable items={maintenance} />
        </div>
      </section>

      <div className="mt-10">
        <SourcesBox sources={sources} />
      </div>
    </Container>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <div className="text-xs uppercase tracking-wide text-ink-faint">{label}</div>
      <div className="mt-1 font-semibold text-ink">{value}</div>
    </div>
  );
}
