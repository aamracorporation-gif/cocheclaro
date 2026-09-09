import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { DemoBadge } from "@/components/DemoBadge";
import { AdSlot } from "@/components/AdSlot";
import { SourcesBox } from "@/components/SourcesBox";
import { BeforeBuying } from "@/components/vehicle/BeforeBuying";
import { EngineTable } from "@/components/vehicle/EngineTable";
import { EngineSelector } from "@/components/vehicle/EngineSelector";
import { IssuesList } from "@/components/vehicle/IssuesList";
import { MaintenanceTable } from "@/components/vehicle/MaintenanceTable";
import { RecallList } from "@/components/vehicle/RecallList";
import { Faq } from "@/components/vehicle/Faq";
import { InlineAnnualCost } from "@/components/calculators/InlineAnnualCost";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { getRecallsForGeneration } from "@/lib/recalls";
import { getAllPublishedGenerations, getGenerationDetail } from "@/lib/db";
import { yearRange, fuelLabel } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const all = await getAllPublishedGenerations();
  return all.map(({ generation, model, brand }) => ({
    brand: brand.slug,
    model: model.slug,
    generation: generation.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string; generation: string }>;
}): Promise<Metadata> {
  const { brand, model, generation } = await params;
  const detail = await getGenerationDetail(brand, model, generation);
  if (!detail) {
    return buildMetadata({
      title: "Ficha no encontrada",
      description: "",
      path: `/coches/${brand}/${model}/${generation}`,
      noindex: true,
    });
  }
  const { brand: b, model: m, generation: g } = detail;
  return buildMetadata({
    title: `${b.name} ${m.name} ${g.code}: motores, problemas y mantenimiento`,
    description: `Ficha del ${b.name} ${m.name} ${g.code} (${yearRange(
      g.startYear,
      g.endYear,
    )}): motores, puntos a revisar, averías conocidas, mantenimiento, coste y fuentes.`,
    path: `/coches/${b.slug}/${m.slug}/${g.slug}`,
  });
}

export default async function GenerationPage({
  params,
}: {
  params: Promise<{ brand: string; model: string; generation: string }>;
}) {
  const { brand, model, generation } = await params;
  const detail = await getGenerationDetail(brand, model, generation);
  if (!detail) notFound();

  const { brand: b, model: m, generation: g, engines, knownIssues, maintenance, sources, relatedComparisons } =
    detail;

  const path = `/coches/${b.slug}/${m.slug}/${g.slug}`;
  const fuels = Array.from(new Set(engines.map((e) => fuelLabel(e.fuel))));
  const powerRange = (() => {
    if (engines.length === 0) return "—";
    const hp = engines.map((e) => e.powerHp);
    const lo = Math.min(...hp);
    const hi = Math.max(...hp);
    return lo === hi ? `${lo} CV` : `${lo}–${hi} CV`;
  })();
  const defaultConsumption = engines.find((e) => e.link.consumption)?.link.consumption;

  const recallsData = await getRecallsForGeneration(b, m, g);

  const faq = g.faq;
  const faqLd = faqJsonLd(faq);

  return (
    <Container>
      {faqLd && <JsonLd data={faqLd} />}

      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Coches", path: "/coches" },
          { name: b.name, path: `/coches/${b.slug}` },
          { name: m.name, path: `/coches/${b.slug}/${m.slug}` },
          { name: g.code, path },
        ]}
      />

      {/* Hero */}
      <header className="mt-4">
        <p className="eyebrow">{b.name}</p>
        <h1 className="h1 mt-1">
          {b.name} {m.name} {g.code}{" "}
          <span className="font-normal text-ink-faint">({yearRange(g.startYear, g.endYear)})</span>
        </h1>
        <p className="prose-block mt-3 text-[1.1rem]">{g.verdict}</p>
        <div className="mt-4">
          <EngineSelector
            vehicleLabel={`${b.name} ${m.name} ${g.code}`}
            options={engines.map((e) => ({ slug: e.slug, label: `${e.link.trimLabel} · ${e.code}` }))}
          />
        </div>
      </header>

      {/* Resumen rápido */}
      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric label="Carrocería" value={g.bodyType} />
        <Metric label="Combustibles" value={fuels.join(" · ") || "—"} />
        <Metric label="Potencias" value={powerRange} />
        <Metric
          label="Maletero"
          value={g.bootLitres ? `${g.bootLitres} l` : "sin dato"}
        />
      </section>

      {g.dataStatus === "demo" && <DemoBadge className="mt-6" />}

      {/* Intro editorial */}
      <section className="prose-block mt-6">
        <p>{g.intro}</p>
      </section>

      {/* Anuncio tras el resumen (reservado, desactivado por defecto) */}
      <AdSlot slot="generacion-tras-resumen" minHeight={100} />

      {/* Antes de comprar */}
      <div className="mt-4">
        <BeforeBuying strengths={g.strengths} watchouts={g.watchouts} />
      </div>

      {/* Motores disponibles */}
      <section aria-labelledby="motores-disponibles" className="mt-10">
        <h2 id="motores-disponibles" className="h2">
          Motores disponibles
        </h2>
        <p className="mt-1 text-sm text-ink-faint">
          Cada motor tiene ficha propia con sus averías y mantenimiento.
        </p>
        <div className="mt-3">
          <EngineTable engines={engines} />
        </div>
      </section>

      {/* Averías */}
      <section aria-labelledby="averias" className="mt-10">
        <h2 id="averias" className="h2">
          Averías y puntos a revisar
        </h2>
        <p className="mt-1 text-sm text-ink-faint">
          Con síntomas, causa, gravedad, kilometraje y coste orientativos, y nivel de evidencia.
        </p>
        <div className="mt-4">
          <IssuesList issues={knownIssues} sources={sources} />
        </div>
      </section>

      {/* Campañas / llamadas a revisión (datos de la NHTSA, EE. UU.) */}
      <section aria-labelledby="campanas" className="mt-10">
        <h2 id="campanas" className="h2">
          Campañas y llamadas a revisión
        </h2>
        <p className="mt-1 text-sm text-ink-faint">
          Llamadas a revisión oficiales registradas por la NHTSA de Estados Unidos. No son
          &laquo;averías&raquo;: son campañas de seguridad del fabricante.
        </p>
        <div className="mt-4">
          <RecallList data={recallsData} />
        </div>
      </section>

      <AdSlot slot="generacion-entre-secciones" minHeight={100} />

      {/* Coste anual (calculadora precargada) */}
      <div className="mt-6">
        <InlineAnnualCost
          defaultConsumption={defaultConsumption}
          vehicleLabel={`${b.name} ${m.name} ${g.code}`}
        />
      </div>

      {/* Mantenimiento */}
      <section aria-labelledby="mantenimiento" className="mt-10">
        <h2 id="mantenimiento" className="h2">
          Mantenimiento
        </h2>
        <div className="mt-3">
          <MaintenanceTable items={maintenance} />
        </div>
        <p className="mt-2 text-sm text-ink-faint">
          <Link href="/calculadoras/mantenimiento" className="link">
            Planificar próximas tareas por kilometraje
          </Link>
        </p>
      </section>

      {/* Comparativas */}
      {relatedComparisons.length > 0 && (
        <section aria-labelledby="comparativas" className="mt-10">
          <h2 id="comparativas" className="h2">
            Comparativas
          </h2>
          <ul className="mt-3 space-y-2">
            {relatedComparisons.map((c) => (
              <li key={c.id}>
                <Link href={`/comparar/${c.slug}`} className="link">
                  {c.editorialSummary.split(".")[0]}.
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <div className="mt-10">
          <Faq items={faq} />
        </div>
      )}

      {/* Fuentes */}
      <div className="mt-10">
        <SourcesBox sources={sources} reviewedAt={g.reviewedAt} />
      </div>

      <AdSlot slot="generacion-antes-de-relacionados" minHeight={100} />
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
