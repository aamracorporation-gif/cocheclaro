/**
 * Proveedor de datos SUPABASE. Misma firma pública que `./local.ts` para que
 * `./index.ts` pueda conmutar entre ambos sin tocar el resto de la app. Usa
 * la clave anónima (respeta RLS: solo lee contenido `published`), igual que
 * vería un visitante público.
 */
import { getPublicSupabaseClient } from "./supabase-client";
import {
  brandFromRow, comparisonFromRow, engineFromRow, generationEngineFromRow, generationFromRow,
  knownIssueFromRow, maintenanceFromRow, sourceFromRow,
  type BrandRow, type ComparisonRow, type EngineRow, type GenerationEngineRow, type GenerationRow,
  type KnownIssueRow, type MaintenanceItemRow, type SourceRow,
} from "./rows";
import type {
  Brand, Comparison, Engine, EngineDetail, EngineOnGeneration, Generation, GenerationDetail,
  KnownIssue, MaintenanceItem, Model, Source,
} from "@/lib/types";
import type { GenerationLite } from "./local";

function unwrap<T>(result: { data: T | null; error: { message: string } | null }, context: string): T {
  if (result.error) throw new Error(`Supabase (${context}): ${result.error.message}`);
  return result.data as T;
}

/* ── Marcas ────────────────────────────────────────────────── */

export async function getBrands(): Promise<Brand[]> {
  const db = getPublicSupabaseClient();
  const res = await db.from("brands").select("*").order("name", { ascending: true });
  return unwrap<BrandRow[]>(res, "brands").map(brandFromRow);
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  const db = getPublicSupabaseClient();
  const res = await db.from("brands").select("*").eq("slug", slug).maybeSingle();
  const row = unwrap<BrandRow | null>(res, "brands.bySlug");
  return row ? brandFromRow(row) : null;
}

/* ── Modelos ───────────────────────────────────────────────── */

export async function getModelsByBrandId(brandId: string): Promise<Model[]> {
  const db = getPublicSupabaseClient();
  const res = await db.from("models").select("*").eq("brand_id", brandId).order("name", { ascending: true });
  return unwrap(res, "models.byBrand").map((r: { id: string; brand_id: string; slug: string; name: string; body_type: string }) => ({
    id: r.id,
    brandId: r.brand_id,
    slug: r.slug,
    name: r.name,
    bodyType: r.body_type,
  }));
}

export async function getModelBySlug(
  brandSlug: string,
  modelSlug: string,
): Promise<{ brand: Brand; model: Model } | null> {
  const brand = await getBrandBySlug(brandSlug);
  if (!brand) return null;
  const db = getPublicSupabaseClient();
  const res = await db.from("models").select("*").eq("brand_id", brand.id).eq("slug", modelSlug).maybeSingle();
  const row = unwrap<{ id: string; brand_id: string; slug: string; name: string; body_type: string } | null>(
    res,
    "models.bySlug",
  );
  if (!row) return null;
  return { brand, model: { id: row.id, brandId: row.brand_id, slug: row.slug, name: row.name, bodyType: row.body_type } };
}

/* ── Generaciones ──────────────────────────────────────────── */

export async function getGenerationsByModelId(modelId: string): Promise<Generation[]> {
  const db = getPublicSupabaseClient();
  const res = await db
    .from("generations")
    .select("*")
    .eq("model_id", modelId)
    .eq("status", "published")
    .order("start_year", { ascending: false });
  return unwrap<GenerationRow[]>(res, "generations.byModel").map(generationFromRow);
}

export async function getAllPublishedGenerations(): Promise<
  Array<{ generation: Generation; model: Model; brand: Brand }>
> {
  const [brands, models, db] = await Promise.all([getBrands(), allModels(), Promise.resolve(getPublicSupabaseClient())]);
  const res = await db.from("generations").select("*").eq("status", "published").order("start_year", { ascending: false });
  const rows = unwrap<GenerationRow[]>(res, "generations.allPublished");

  const brandById = new Map(brands.map((b) => [b.id, b]));
  const modelById = new Map(models.map((m) => [m.id, m]));

  const out: Array<{ generation: Generation; model: Model; brand: Brand }> = [];
  for (const row of rows) {
    const generation = generationFromRow(row);
    const model = modelById.get(generation.modelId);
    if (!model) continue;
    const brand = brandById.get(model.brandId);
    if (!brand) continue;
    out.push({ generation, model, brand });
  }
  return out;
}

async function allModels(): Promise<Model[]> {
  const db = getPublicSupabaseClient();
  const res = await db.from("models").select("*");
  return unwrap(res, "models.all").map((r: { id: string; brand_id: string; slug: string; name: string; body_type: string }) => ({
    id: r.id,
    brandId: r.brand_id,
    slug: r.slug,
    name: r.name,
    bodyType: r.body_type,
  }));
}

/** Todos los modelos, sin filtrar por marca. Usado por el índice de búsqueda. */
export const getAllModels = allModels;

/** Todos los enlaces generación↔motor. Usado por el índice de búsqueda. */
export async function getAllGenerationEngineLinks() {
  const db = getPublicSupabaseClient();
  const res = await db.from("generation_engines").select("*");
  return unwrap<GenerationEngineRow[]>(res, "generation_engines.all").map(generationEngineFromRow);
}

async function enginesForGeneration(generationId: string): Promise<EngineOnGeneration[]> {
  const db = getPublicSupabaseClient();
  const linksRes = await db.from("generation_engines").select("*").eq("generation_id", generationId);
  const links = unwrap<GenerationEngineRow[]>(linksRes, "generation_engines.byGeneration");
  if (links.length === 0) return [];

  const engineIds = [...new Set(links.map((l) => l.engine_id))];
  const enginesRes = await db.from("engines").select("*").in("id", engineIds);
  const engineRows = unwrap<EngineRow[]>(enginesRes, "engines.byIds");
  const engineById = new Map(engineRows.map((r) => [r.id, engineFromRow(r)]));

  return links
    .map((link) => {
      const engine = engineById.get(link.engine_id);
      return engine ? { ...engine, link: generationEngineFromRow(link) } : null;
    })
    .filter((x): x is EngineOnGeneration => x !== null)
    .sort((a, b) => a.link.startYear - b.link.startYear || a.powerHp - b.powerHp);
}

async function sourcesByIds(ids: string[]): Promise<Source[]> {
  if (ids.length === 0) return [];
  const db = getPublicSupabaseClient();
  const res = await db.from("sources").select("*").in("id", ids);
  return unwrap<SourceRow[]>(res, "sources.byIds").map(sourceFromRow);
}

async function issueSourceIds(issueId: string): Promise<string[]> {
  const db = getPublicSupabaseClient();
  const res = await db.from("issue_sources").select("source_id").eq("issue_id", issueId);
  return unwrap<Array<{ source_id: string }>>(res, "issue_sources.byIssue").map((r) => r.source_id);
}

async function knownIssuesFor(generationId: string, engineIds: string[]): Promise<KnownIssue[]> {
  const db = getPublicSupabaseClient();
  const orParts = [`generation_id.eq.${generationId}`];
  if (engineIds.length > 0) orParts.push(`engine_id.in.(${engineIds.join(",")})`);
  const res = await db.from("known_issues").select("*").eq("status", "published").or(orParts.join(","));
  const rows = unwrap<KnownIssueRow[]>(res, "known_issues.forGeneration");
  const withSources = await Promise.all(
    rows.map(async (r) => knownIssueFromRow(r, await issueSourceIds(r.id))),
  );
  return withSources;
}

async function maintenanceFor(generationId: string, engineIds: string[]): Promise<MaintenanceItem[]> {
  const db = getPublicSupabaseClient();
  const orParts = [`generation_id.eq.${generationId}`];
  if (engineIds.length > 0) orParts.push(`engine_id.in.(${engineIds.join(",")})`);
  const res = await db.from("maintenance_items").select("*").or(orParts.join(","));
  const rows = unwrap<MaintenanceItemRow[]>(res, "maintenance_items.forGeneration");
  const seen = new Set<string>();
  const out: MaintenanceItem[] = [];
  for (const row of rows.map(maintenanceFromRow)) {
    const key = `${row.item}|${row.intervalKm ?? ""}|${row.intervalMonths ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(row);
  }
  return out;
}

export async function getGenerationDetail(
  brandSlug: string,
  modelSlug: string,
  generationSlug: string,
): Promise<GenerationDetail | null> {
  const base = await getModelBySlug(brandSlug, modelSlug);
  if (!base) return null;

  const db = getPublicSupabaseClient();
  const genRes = await db
    .from("generations")
    .select("*")
    .eq("model_id", base.model.id)
    .eq("slug", generationSlug)
    .eq("status", "published")
    .maybeSingle();
  const genRow = unwrap<GenerationRow | null>(genRes, "generations.bySlug");
  if (!genRow) return null;
  const generation = generationFromRow(genRow);

  const engines = await enginesForGeneration(generation.id);
  const engineIds = engines.map((e) => e.id);

  const [issues, maintenance] = await Promise.all([
    knownIssuesFor(generation.id, engineIds),
    maintenanceFor(generation.id, engineIds),
  ]);

  const usedSourceIds = new Set<string>();
  issues.forEach((i) => i.sourceIds.forEach((s) => usedSourceIds.add(s)));
  maintenance.forEach((m) => m.sourceId && usedSourceIds.add(m.sourceId));
  const sources = await sourcesByIds([...usedSourceIds]);

  const compRes = await db
    .from("comparisons")
    .select("*")
    .eq("status", "published")
    .or(`left_generation_id.eq.${generation.id},right_generation_id.eq.${generation.id}`);
  const relatedComparisons = unwrap<ComparisonRow[]>(compRes, "comparisons.related").map(comparisonFromRow);

  return {
    generation,
    model: base.model,
    brand: base.brand,
    engines,
    knownIssues: issues,
    maintenance,
    sources,
    relatedComparisons,
  };
}

/* ── Motores ───────────────────────────────────────────────── */

export async function getEngines(): Promise<Engine[]> {
  const db = getPublicSupabaseClient();
  const res = await db.from("engines").select("*").order("code", { ascending: true });
  return unwrap<EngineRow[]>(res, "engines.all").map(engineFromRow);
}

export async function getEngineBySlug(slug: string): Promise<Engine | null> {
  const db = getPublicSupabaseClient();
  const res = await db.from("engines").select("*").eq("slug", slug).maybeSingle();
  const row = unwrap<EngineRow | null>(res, "engines.bySlug");
  return row ? engineFromRow(row) : null;
}

export async function getEngineDetail(slug: string): Promise<EngineDetail | null> {
  const engine = await getEngineBySlug(slug);
  if (!engine) return null;

  const db = getPublicSupabaseClient();
  const [issues, maintenance] = await Promise.all([
    (async () => {
      const res = await db.from("known_issues").select("*").eq("status", "published").eq("engine_id", engine.id);
      const rows = unwrap<KnownIssueRow[]>(res, "known_issues.byEngine");
      return Promise.all(rows.map(async (r) => knownIssueFromRow(r, await issueSourceIds(r.id))));
    })(),
    (async () => {
      const res = await db.from("maintenance_items").select("*").eq("engine_id", engine.id);
      return unwrap<MaintenanceItemRow[]>(res, "maintenance_items.byEngine").map(maintenanceFromRow);
    })(),
  ]);

  const usedSourceIds = new Set<string>();
  issues.forEach((i) => i.sourceIds.forEach((s) => usedSourceIds.add(s)));
  maintenance.forEach((m) => m.sourceId && usedSourceIds.add(m.sourceId));
  const sources = await sourcesByIds([...usedSourceIds]);

  const linksRes = await db.from("generation_engines").select("*").eq("engine_id", engine.id);
  const links = unwrap<GenerationEngineRow[]>(linksRes, "generation_engines.byEngine");

  const brands = await getBrands();
  const models = await allModels();
  const brandById = new Map(brands.map((b) => [b.id, b]));
  const modelById = new Map(models.map((m) => [m.id, m]));

  const generationIds = [...new Set(links.map((l) => l.generation_id))];
  const gensRes =
    generationIds.length > 0
      ? await db.from("generations").select("*").in("id", generationIds).eq("status", "published")
      : { data: [], error: null };
  const generationById = new Map(
    unwrap<GenerationRow[]>(gensRes, "generations.byIds").map((r) => [r.id, generationFromRow(r)]),
  );

  const fittedIn = links
    .map((link) => {
      const generation = generationById.get(link.generation_id);
      if (!generation) return null;
      const model = modelById.get(generation.modelId);
      if (!model) return null;
      const brand = brandById.get(model.brandId);
      if (!brand) return null;
      return { generation, model, brand, link: generationEngineFromRow(link) };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => a.brand.name.localeCompare(b.brand.name, "es"));

  return { engine, knownIssues: issues, maintenance, sources, fittedIn };
}

/* ── Comparaciones ─────────────────────────────────────────── */

function liteFrom(generation: Generation, model: Model, brand: Brand): GenerationLite {
  return {
    generation,
    model,
    brand,
    href: `/coches/${brand.slug}/${model.slug}/${generation.slug}`,
    title: `${brand.name} ${model.name} ${generation.code}`,
  };
}

export async function getComparisons(): Promise<
  Array<{ comparison: Comparison; left: GenerationLite; right: GenerationLite }>
> {
  const db = getPublicSupabaseClient();
  const res = await db.from("comparisons").select("*").eq("status", "published");
  const rows = unwrap<ComparisonRow[]>(res, "comparisons.all").map(comparisonFromRow);

  const all = await getAllPublishedGenerations();
  const byGenId = new Map(all.map((x) => [x.generation.id, x]));

  const out: Array<{ comparison: Comparison; left: GenerationLite; right: GenerationLite }> = [];
  for (const comparison of rows) {
    const l = byGenId.get(comparison.leftGenerationId);
    const r = byGenId.get(comparison.rightGenerationId);
    if (!l || !r) continue;
    out.push({
      comparison,
      left: liteFrom(l.generation, l.model, l.brand),
      right: liteFrom(r.generation, r.model, r.brand),
    });
  }
  return out;
}

export async function getComparisonBySlug(slug: string): Promise<{
  comparison: Comparison;
  left: GenerationDetail;
  right: GenerationDetail;
} | null> {
  const db = getPublicSupabaseClient();
  const res = await db.from("comparisons").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
  const row = unwrap<ComparisonRow | null>(res, "comparisons.bySlug");
  if (!row) return null;
  const comparison = comparisonFromRow(row);

  const [left, right] = await Promise.all([
    detailById(comparison.leftGenerationId),
    detailById(comparison.rightGenerationId),
  ]);
  if (!left || !right) return null;
  return { comparison, left, right };
}

async function detailById(generationId: string): Promise<GenerationDetail | null> {
  const db = getPublicSupabaseClient();
  const res = await db.from("generations").select("*").eq("id", generationId).maybeSingle();
  const row = unwrap<GenerationRow | null>(res, "generations.byId");
  if (!row) return null;
  const generation = generationFromRow(row);

  const models = await allModels();
  const model = models.find((m) => m.id === generation.modelId);
  if (!model) return null;
  const brand = await getBrandBySlug((await getBrands()).find((b) => b.id === model.brandId)?.slug ?? "");
  if (!brand) return null;

  return getGenerationDetail(brand.slug, model.slug, generation.slug);
}

/* ── Datos para la home ────────────────────────────────────── */

const FEATURED_SLUGS = [
  "bmw:serie-3:g20", "audi:a3:8y", "volkswagen:golf:mk8", "toyota:corolla:e210",
  "seat:leon:kl", "peugeot:208:p21", "renault:clio:bja", "hyundai:tucson:nx4",
  "nissan:qashqai:j11", "mercedes-benz:clase-c:w205", "volkswagen:passat:b8", "mazda:3:bp",
];

export async function getFeaturedGenerations(): Promise<
  Array<{ generation: Generation; model: Model; brand: Brand }>
> {
  const all = await getAllPublishedGenerations();
  return FEATURED_SLUGS.map((id) => all.find((x) => x.generation.id === id)).filter(
    (x): x is NonNullable<typeof x> => x !== undefined,
  );
}

export async function counts(): Promise<{
  brands: number;
  generations: number;
  engines: number;
  issues: number;
}> {
  const db = getPublicSupabaseClient();
  const [b, g, e, i] = await Promise.all([
    db.from("brands").select("*", { count: "exact", head: true }),
    db.from("generations").select("*", { count: "exact", head: true }).eq("status", "published"),
    db.from("engines").select("*", { count: "exact", head: true }),
    db.from("known_issues").select("*", { count: "exact", head: true }).eq("status", "published"),
  ]);
  return {
    brands: b.count ?? 0,
    generations: g.count ?? 0,
    engines: e.count ?? 0,
    issues: i.count ?? 0,
  };
}
