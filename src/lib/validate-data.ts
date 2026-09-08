/**
 * Validaciones automáticas del dataset (§8.2). No dependen de Next: se usan
 * tanto en el panel /admin como en el script `npm run data:validate`.
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

export interface ValidationIssue {
  level: "error" | "warn";
  entity: string;
  message: string;
}

export function validateDataset(): ValidationIssue[] {
  const out: ValidationIssue[] = [];
  const add = (level: ValidationIssue["level"], entity: string, message: string) =>
    out.push({ level, entity, message });

  const brandIds = new Set(brands.map((b) => b.id));
  const modelIds = new Set(models.map((m) => m.id));
  const engineIds = new Set(engines.map((e) => e.id));
  const generationIds = new Set(generations.map((g) => g.id));
  const sourceIds = new Set(sources.map((s) => s.id));

  // Unicidad de slugs
  assertUnique(brands.map((b) => b.slug), "brand.slug", add);
  assertUnique(engines.map((e) => e.slug), "engine.slug", add);
  for (const brand of brands) {
    assertUnique(
      models.filter((m) => m.brandId === brand.id).map((m) => m.slug),
      `model.slug (${brand.slug})`,
      add,
    );
  }
  for (const model of models) {
    assertUnique(
      generations.filter((g) => g.modelId === model.id).map((g) => g.slug),
      `generation.slug (${model.id})`,
      add,
    );
  }
  assertUnique(comparisons.map((c) => c.slug), "comparison.slug", add);

  // Integridad referencial
  for (const model of models) {
    if (!brandIds.has(model.brandId)) add("error", `model ${model.id}`, `brandId inexistente: ${model.brandId}`);
  }
  for (const g of generations) {
    if (!modelIds.has(g.modelId)) add("error", `generation ${g.id}`, `modelId inexistente: ${g.modelId}`);
    if (g.endYear && g.endYear < g.startYear)
      add("error", `generation ${g.id}`, `endYear (${g.endYear}) < startYear (${g.startYear})`);
    if (g.startYear < 1980 || g.startYear > new Date().getFullYear() + 1)
      add("warn", `generation ${g.id}`, `startYear sospechoso: ${g.startYear}`);
    if (g.status === "published") {
      if (g.strengths.length === 0) add("error", `generation ${g.id}`, "publicada sin puntos fuertes");
      if (g.watchouts.length === 0) add("error", `generation ${g.id}`, "publicada sin puntos a revisar");
      if (g.intro.trim().length < 60) add("warn", `generation ${g.id}`, "intro demasiado corta (<60 car.)");
      const hasEngine = generationEngines.some((l) => l.generationId === g.id);
      if (!hasEngine) add("error", `generation ${g.id}`, "publicada sin ningún motor asociado");
    }
  }
  for (const e of engines) {
    if (e.powerHp <= 0) add("error", `engine ${e.id}`, "powerHp debe ser > 0");
    if (e.displacementCc <= 0) add("error", `engine ${e.id}`, "displacementCc debe ser > 0");
  }
  for (const link of generationEngines) {
    if (!generationIds.has(link.generationId))
      add("error", "generationEngine", `generationId inexistente: ${link.generationId}`);
    if (!engineIds.has(link.engineId))
      add("error", "generationEngine", `engineId inexistente: ${link.engineId}`);
  }
  for (const issue of knownIssues) {
    if (issue.engineId && !engineIds.has(issue.engineId))
      add("error", `issue ${issue.id}`, `engineId inexistente: ${issue.engineId}`);
    if (issue.generationId && !generationIds.has(issue.generationId))
      add("error", `issue ${issue.id}`, `generationId inexistente: ${issue.generationId}`);
    if (!issue.engineId && !issue.generationId)
      add("error", `issue ${issue.id}`, "debe asociarse a un motor o a una generación");
    if (issue.status === "published" && issue.sourceIds.length === 0)
      add("error", `issue ${issue.id}`, "avería publicada sin ninguna fuente");
    for (const sid of issue.sourceIds) {
      if (!sourceIds.has(sid)) add("error", `issue ${issue.id}`, `sourceId inexistente: ${sid}`);
    }
    if (issue.costMin != null && issue.costMax != null && issue.costMin > issue.costMax)
      add("error", `issue ${issue.id}`, "costMin > costMax");
  }
  for (const m of maintenanceItems) {
    if (m.engineId && !engineIds.has(m.engineId))
      add("error", `maintenance ${m.id}`, `engineId inexistente: ${m.engineId}`);
    if (m.generationId && !generationIds.has(m.generationId))
      add("error", `maintenance ${m.id}`, `generationId inexistente: ${m.generationId}`);
    if (m.sourceId && !sourceIds.has(m.sourceId))
      add("error", `maintenance ${m.id}`, `sourceId inexistente: ${m.sourceId}`);
  }
  for (const s of sources) {
    if (!/^https?:\/\//.test(s.url)) add("error", `source ${s.id}`, `URL no válida: ${s.url}`);
  }
  for (const c of comparisons) {
    if (!generationIds.has(c.leftGenerationId))
      add("error", `comparison ${c.id}`, `leftGenerationId inexistente: ${c.leftGenerationId}`);
    if (!generationIds.has(c.rightGenerationId))
      add("error", `comparison ${c.id}`, `rightGenerationId inexistente: ${c.rightGenerationId}`);
    if (c.leftGenerationId === c.rightGenerationId)
      add("error", `comparison ${c.id}`, "compara una generación consigo misma");
    if (c.status === "published" && c.takeaways.length === 0)
      add("error", `comparison ${c.id}`, "comparación publicada sin conclusiones");
  }

  return out;
}

function assertUnique(
  values: string[],
  label: string,
  add: (level: ValidationIssue["level"], entity: string, message: string) => void,
) {
  const seen = new Set<string>();
  for (const v of values) {
    if (seen.has(v)) add("error", label, `slug duplicado: ${v}`);
    seen.add(v);
  }
}

export function datasetStats() {
  const pending = [
    ...generations.filter((g) => g.status !== "published").map((g) => `Generación ${g.id} (${g.status})`),
    ...knownIssues.filter((i) => i.status !== "published").map((i) => `Avería ${i.id} (${i.status})`),
    ...comparisons.filter((c) => c.status !== "published").map((c) => `Comparación ${c.id} (${c.status})`),
  ];
  const demoGenerations = generations.filter((g) => g.dataStatus === "demo").length;
  return {
    brands: brands.length,
    models: models.length,
    generations: generations.length,
    generationsPublished: generations.filter((g) => g.status === "published").length,
    engines: engines.length,
    knownIssues: knownIssues.length,
    maintenanceItems: maintenanceItems.length,
    comparisons: comparisons.length,
    sources: sources.length,
    pending,
    demoGenerations,
    hasDemoData: demoGenerations > 0,
  };
}
