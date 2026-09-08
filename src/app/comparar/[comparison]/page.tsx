import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { AdSlot } from "@/components/AdSlot";
import { buildMetadata, articleJsonLd } from "@/lib/seo";
import { getComparisons, getComparisonBySlug } from "@/lib/db";
import type { GenerationDetail } from "@/lib/types";
import { fuelLabel, yearRange } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const comparisons = await getComparisons();
  return comparisons.map(({ comparison }) => ({ comparison: comparison.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison: slug } = await params;
  const data = await getComparisonBySlug(slug);
  if (!data) {
    return buildMetadata({ title: "Comparativa no encontrada", description: "", path: `/comparar/${slug}`, noindex: true });
  }
  const left = title(data.left);
  const right = title(data.right);
  return buildMetadata({
    title: `${left} vs ${right}: cuál comprar`,
    description: data.comparison.editorialSummary,
    path: `/comparar/${data.comparison.slug}`,
    type: "article",
  });
}

function title(d: GenerationDetail): string {
  return `${d.brand.name} ${d.model.name} ${d.generation.code}`;
}

function summarize(d: GenerationDetail) {
  const powers = d.engines.map((e) => e.powerHp);
  const consumptions = d.engines.map((e) => e.link.consumption).filter((x): x is number => x != null);
  return {
    title: title(d),
    href: `/coches/${d.brand.slug}/${d.model.slug}/${d.generation.slug}`,
    years: yearRange(d.generation.startYear, d.generation.endYear),
    body: d.generation.bodyType,
    fuels: Array.from(new Set(d.engines.map((e) => fuelLabel(e.fuel)))).join(" · ") || "—",
    power: powers.length ? `${Math.min(...powers)}–${Math.max(...powers)} CV` : "—",
    consumption: consumptions.length ? `desde ${Math.min(...consumptions)} l/100 km` : "sin dato",
    boot: d.generation.bootLitres ? `${d.generation.bootLitres} l` : "sin dato",
    issuesHigh: d.knownIssues.filter((i) => i.severity === "alta").length,
    issuesTotal: d.knownIssues.length,
    verdict: d.generation.verdict,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison: slug } = await params;
  const data = await getComparisonBySlug(slug);
  if (!data) notFound();

  const { comparison, left, right } = data;
  const L = summarize(left);
  const R = summarize(right);
  const path = `/comparar/${comparison.slug}`;

  const rows: Array<[string, string, string]> = [
    ["Años", L.years, R.years],
    ["Carrocería", L.body, R.body],
    ["Combustibles", L.fuels, R.fuels],
    ["Potencias", L.power, R.power],
    ["Consumo homologado", L.consumption, R.consumption],
    ["Maletero", L.boot, R.boot],
    ["Averías documentadas", `${L.issuesTotal} (${L.issuesHigh} graves)`, `${R.issuesTotal} (${R.issuesHigh} graves)`],
  ];

  return (
    <Container>
      <JsonLd
        data={articleJsonLd({
          headline: `${L.title} vs ${R.title}`,
          description: comparison.editorialSummary,
          path,
          datePublished: comparison.reviewedAt,
        })}
      />
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Comparar", path: "/comparar" },
          { name: `${L.title} vs ${R.title}`, path },
        ]}
      />

      <h1 className="h1 mt-3">
        {L.title} vs {R.title}: cuál comprar
      </h1>
      <p className="prose-block mt-3">{comparison.editorialSummary}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[L, R].map((s) => (
          <div key={s.href} className="card">
            <Link href={s.href} className="link font-semibold">
              {s.title}
            </Link>
            <p className="mt-1 text-sm text-ink-soft">{s.verdict}</p>
          </div>
        ))}
      </div>

      <AdSlot slot="comparativa-tras-intro" minHeight={100} />

      <section aria-labelledby="tabla" className="mt-8">
        <h2 id="tabla" className="h2">
          Diferencias de un vistazo
        </h2>
        <div className="table-wrap mt-3">
          <table className="data-table">
            <thead>
              <tr>
                <th></th>
                <th>{L.title}</th>
                <th>{R.title}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, a, c]) => (
                <tr key={label}>
                  <th scope="row" className="text-ink">
                    {label}
                  </th>
                  <td>{a}</td>
                  <td>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-faint">
          El recuento de averías refleja lo que hemos documentado con evidencia, no una nota de
          fiabilidad. Consulta cada ficha para el detalle.
        </p>
      </section>

      <section aria-labelledby="conclusiones" className="mt-8">
        <h2 id="conclusiones" className="h2">
          Conclusiones
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
          {comparison.takeaways.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-ink-faint">
        Revisado el {new Date(comparison.reviewedAt).toLocaleDateString("es-ES")}. Comparación
        editorial de {L.title} y {R.title}.
      </p>
    </Container>
  );
}
