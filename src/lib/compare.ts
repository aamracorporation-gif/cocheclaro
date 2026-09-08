import { getAllPublishedGenerations, getGenerationDetail } from "@/lib/db";
import { fuelLabel, yearRange } from "@/lib/format";

export interface GenerationSummary {
  id: string;
  title: string;
  href: string;
  years: string;
  body: string;
  fuels: string;
  power: string;
  consumption: string;
  boot: string;
  issuesTotal: number;
  issuesHigh: number;
  verdict: string;
}

/** Resúmenes comparables de todas las generaciones publicadas (para el comparador libre). */
export async function getAllGenerationSummaries(): Promise<GenerationSummary[]> {
  const all = await getAllPublishedGenerations();
  const out: GenerationSummary[] = [];

  for (const { generation, model, brand } of all) {
    const detail = await getGenerationDetail(brand.slug, model.slug, generation.slug);
    if (!detail) continue;
    const powers = detail.engines.map((e) => e.powerHp);
    const consumptions = detail.engines
      .map((e) => e.link.consumption)
      .filter((x): x is number => x != null);

    out.push({
      id: generation.id,
      title: `${brand.name} ${model.name} ${generation.code}`,
      href: `/coches/${brand.slug}/${model.slug}/${generation.slug}`,
      years: yearRange(generation.startYear, generation.endYear),
      body: generation.bodyType,
      fuels: Array.from(new Set(detail.engines.map((e) => fuelLabel(e.fuel)))).join(" · ") || "—",
      power: powers.length ? `${Math.min(...powers)}–${Math.max(...powers)} CV` : "—",
      consumption: consumptions.length ? `desde ${Math.min(...consumptions)} l/100 km` : "sin dato",
      boot: generation.bootLitres ? `${generation.bootLitres} l` : "sin dato",
      issuesTotal: detail.knownIssues.length,
      issuesHigh: detail.knownIssues.filter((i) => i.severity === "alta").length,
      verdict: generation.verdict,
    });
  }

  return out.sort((a, b) => a.title.localeCompare(b.title, "es"));
}
