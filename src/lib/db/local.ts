/**
 * Proveedor de datos LOCAL: lee de src/data/*.ts. Es el proveedor por defecto
 * y no necesita ninguna configuración externa. Todas las funciones son async
 * para que un proveedor Supabase pueda sustituirlo sin cambiar la UI.
 */
import { brands } from "@/data/brands";
import { models } from "@/data/models";
import { generations } from "@/data/generations";
import { engines } from "@/data/engines";
import { generationEngines } from "@/data/generation-engines";
import { knownIssues } from "@/data/known-issues";
import { maintenanceItems } from "@/data/maintenance";
import { sources } from "@/data/sources";
import { comparisons } from "@/data/comparisons";
import type {
  Brand,
  Comparison,
  Engine,
  EngineDetail,
  EngineOnGeneration,
  Generation,
  GenerationDetail,
  KnownIssue,
  MaintenanceItem,
  Model,
  Source,
} from "@/lib/types";

const isPublished = <T extends { status: string }>(x: T) => x.status === "published";

/* ── Marcas ────────────────────────────────────────────────── */

export async function getBrands(): Promise<Brand[]> {
  return [...brands].sort((a, b) => a.name.localeCompare(b.name, "es"));
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  return brands.find((b) => b.slug === slug) ?? null;
}

/* ── Modelos ───────────────────────────────────────────────── */

export async function getModelsByBrandId(brandId: string): Promise<Model[]> {
  return models
    .filter((m) => m.brandId === brandId)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));
}

/** Todos los modelos, sin filtrar por marca. Usado por el índice de búsqueda. */
export async function getAllModels(): Promise<Model[]> {
  return [...models];
}

/** Todos los enlaces generación↔motor. Usado por el índice de búsqueda. */
export async function getAllGenerationEngineLinks() {
  return [...generationEngines];
}

export async function getModelBySlug(
  brandSlug: string,
  modelSlug: string,
): Promise<{ brand: Brand; model: Model } | null> {
  const brand = brands.find((b) => b.slug === brandSlug);
  if (!brand) return null;
  const model = models.find((m) => m.brandId === brand.id && m.slug === modelSlug);
  if (!model) return null;
  return { brand, model };
}

/* ── Generaciones ──────────────────────────────────────────── */

export async function getGenerationsByModelId(modelId: string): Promise<Generation[]> {
  return generations
    .filter((g) => g.modelId === modelId && isPublished(g))
    .sort((a, b) => b.startYear - a.startYear);
}

export async function getAllPublishedGenerations(): Promise<
  Array<{ generation: Generation; model: Model; brand: Brand }>
> {
  const out: Array<{ generation: Generation; model: Model; brand: Brand }> = [];
  for (const generation of generations) {
    if (!isPublished(generation)) continue;
    const model = models.find((m) => m.id === generation.modelId);
    if (!model) continue;
    const brand = brands.find((b) => b.id === model.brandId);
    if (!brand) continue;
    out.push({ generation, model, brand });
  }
  return out.sort((a, b) => b.generation.startYear - a.generation.startYear);
}

function enginesForGeneration(generationId: string): EngineOnGeneration[] {
  return generationEngines
    .filter((link) => link.generationId === generationId)
    .map((link) => {
      const engine = engines.find((e) => e.id === link.engineId);
      return engine ? { ...engine, link } : null;
    })
    .filter((x): x is EngineOnGeneration => x !== null)
    .sort((a, b) => a.link.startYear - b.link.startYear || a.powerHp - b.powerHp);
}

function resolveIssueSources(issue: KnownIssue): Source[] {
  return issue.sourceIds
    .map((id) => sources.find((s) => s.id === id))
    .filter((s): s is Source => s !== undefined);
}

export async function getGenerationDetail(
  brandSlug: string,
  modelSlug: string,
  generationSlug: string,
): Promise<GenerationDetail | null> {
  const base = await getModelBySlug(brandSlug, modelSlug);
  if (!base) return null;
  const generation = generations.find(
    (g) => g.modelId === base.model.id && g.slug === generationSlug && isPublished(g),
  );
  if (!generation) return null;

  const genEngines = enginesForGeneration(generation.id);
  const engineIds = new Set(genEngines.map((e) => e.id));

  const issues = knownIssues.filter(
    (i) =>
      isPublished(i) &&
      (i.generationId === generation.id || (i.engineId && engineIds.has(i.engineId))),
  );

  const maintenanceRaw = maintenanceItems.filter(
    (m) =>
      m.generationId === generation.id || (m.engineId && engineIds.has(m.engineId)),
  );
  // Varias fichas de motor de la misma generación comparten tareas idénticas
  // (aceite, distribución…). Se muestran una sola vez.
  const seenMaint = new Set<string>();
  const maintenance = maintenanceRaw.filter((m) => {
    const key = `${m.item}|${m.intervalKm ?? ""}|${m.intervalMonths ?? ""}`;
    if (seenMaint.has(key)) return false;
    seenMaint.add(key);
    return true;
  });

  const usedSourceIds = new Set<string>();
  issues.forEach((i) => i.sourceIds.forEach((s) => usedSourceIds.add(s)));
  maintenance.forEach((m) => m.sourceId && usedSourceIds.add(m.sourceId));
  const usedSources = sources.filter((s) => usedSourceIds.has(s.id));

  const relatedComparisons = comparisons.filter(
    (c) =>
      isPublished(c) &&
      (c.leftGenerationId === generation.id || c.rightGenerationId === generation.id),
  );

  return {
    generation,
    model: base.model,
    brand: base.brand,
    engines: genEngines,
    knownIssues: issues,
    maintenance,
    sources: usedSources,
    relatedComparisons,
  };
}

/* ── Motores ───────────────────────────────────────────────── */

export async function getEngines(): Promise<Engine[]> {
  return [...engines].sort((a, b) => a.code.localeCompare(b.code, "es"));
}

export async function getEngineBySlug(slug: string): Promise<Engine | null> {
  return engines.find((e) => e.slug === slug) ?? null;
}

export async function getEngineDetail(slug: string): Promise<EngineDetail | null> {
  const engine = engines.find((e) => e.slug === slug);
  if (!engine) return null;

  const issues = knownIssues.filter((i) => isPublished(i) && i.engineId === engine.id);
  const maintenance = maintenanceItems.filter((m) => m.engineId === engine.id);

  const usedSourceIds = new Set<string>();
  issues.forEach((i) => i.sourceIds.forEach((s) => usedSourceIds.add(s)));
  maintenance.forEach((m) => m.sourceId && usedSourceIds.add(m.sourceId));
  const usedSources = sources.filter((s) => usedSourceIds.has(s.id));

  const fittedIn = generationEngines
    .filter((link) => link.engineId === engine.id)
    .map((link) => {
      const generation = generations.find((g) => g.id === link.generationId && isPublished(g));
      if (!generation) return null;
      const model = models.find((m) => m.id === generation.modelId);
      if (!model) return null;
      const brand = brands.find((b) => b.id === model.brandId);
      if (!brand) return null;
      return { generation, model, brand, link };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => a.brand.name.localeCompare(b.brand.name, "es"));

  return { engine, knownIssues: issues, maintenance, sources: usedSources, fittedIn };
}

/* ── Comparaciones ─────────────────────────────────────────── */

export async function getComparisons(): Promise<
  Array<{ comparison: Comparison; left: GenerationLite; right: GenerationLite }>
> {
  const out = [];
  for (const comparison of comparisons) {
    if (!isPublished(comparison)) continue;
    const left = liteFor(comparison.leftGenerationId);
    const right = liteFor(comparison.rightGenerationId);
    if (left && right) out.push({ comparison, left, right });
  }
  return out;
}

export interface GenerationLite {
  generation: Generation;
  model: Model;
  brand: Brand;
  href: string;
  title: string;
}

function liteFor(generationId: string): GenerationLite | null {
  const generation = generations.find((g) => g.id === generationId);
  if (!generation) return null;
  const model = models.find((m) => m.id === generation.modelId);
  if (!model) return null;
  const brand = brands.find((b) => b.id === model.brandId);
  if (!brand) return null;
  return {
    generation,
    model,
    brand,
    href: `/coches/${brand.slug}/${model.slug}/${generation.slug}`,
    title: `${brand.name} ${model.name} ${generation.code}`,
  };
}

export async function getComparisonBySlug(slug: string): Promise<{
  comparison: Comparison;
  left: GenerationDetail;
  right: GenerationDetail;
} | null> {
  const comparison = comparisons.find((c) => c.slug === slug && isPublished(c));
  if (!comparison) return null;
  const left = await detailById(comparison.leftGenerationId);
  const right = await detailById(comparison.rightGenerationId);
  if (!left || !right) return null;
  return { comparison, left, right };
}

async function detailById(generationId: string): Promise<GenerationDetail | null> {
  const generation = generations.find((g) => g.id === generationId);
  if (!generation) return null;
  const model = models.find((m) => m.id === generation.modelId);
  if (!model) return null;
  const brand = brands.find((b) => b.id === model.brandId);
  if (!brand) return null;
  return getGenerationDetail(brand.slug, model.slug, generation.slug);
}

/* ── Datos para la home ────────────────────────────────────── */

/** Selección editorial de generaciones destacadas (no un carrusel infinito). */
const FEATURED_SLUGS = [
  "bmw:serie-3:g20",
  "audi:a3:8y",
  "volkswagen:golf:mk8",
  "toyota:corolla:e210",
  "seat:leon:kl",
  "peugeot:208:p21",
  "renault:clio:bja",
  "hyundai:tucson:nx4",
  "nissan:qashqai:j11",
  "mercedes-benz:clase-c:w205",
  "volkswagen:passat:b8",
  "mazda:3:bp",
];

export async function getFeaturedGenerations(): Promise<
  Array<{ generation: Generation; model: Model; brand: Brand }>
> {
  const all = await getAllPublishedGenerations();
  const featured = FEATURED_SLUGS.map((id) => all.find((x) => x.generation.id === id)).filter(
    (x): x is NonNullable<typeof x> => x !== undefined,
  );
  return featured;
}

export async function counts(): Promise<{
  brands: number;
  generations: number;
  engines: number;
  issues: number;
}> {
  return {
    brands: brands.length,
    generations: generations.filter(isPublished).length,
    engines: engines.length,
    issues: knownIssues.filter(isPublished).length,
  };
}
