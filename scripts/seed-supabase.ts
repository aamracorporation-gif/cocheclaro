/**
 * Carga el dataset de src/data/*.ts directamente en Supabase vía la API
 * (service role key), sin pasar por el editor SQL. Alternativa a
 * supabase/seed/seed_demo.sql para cuando ya tienes las claves a mano.
 *
 * Requiere NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en el entorno.
 *
 * Uso: npx tsx scripts/seed-supabase.ts
 */
import { createClient } from "@supabase/supabase-js";
import { brands } from "../src/data/brands";
import { models } from "../src/data/models";
import { generations } from "../src/data/generations";
import { engines } from "../src/data/engines";
import { generationEngines } from "../src/data/generation-engines";
import { knownIssues } from "../src/data/known-issues";
import { maintenanceItems } from "../src/data/maintenance";
import { sources } from "../src/data/sources";
import { comparisons } from "../src/data/comparisons";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Faltan NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en el entorno.");
  process.exit(1);
}
const db = createClient(url, key);

async function upsert(table: string, rows: unknown[], batchSize = 200) {
  if (rows.length === 0) {
    console.log(`- ${table}: sin filas`);
    return;
  }
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { error } = await db.from(table).upsert(batch);
    if (error) {
      console.error(`Error en ${table} (filas ${i}-${i + batch.length}):`, error.message);
      process.exit(1);
    }
  }
  console.log(`- ${table}: ${rows.length} filas`);
}

async function main() {
  await upsert(
    "sources",
    sources.map((s) => ({
      id: s.id,
      url: s.url,
      title: s.title,
      publisher: s.publisher,
      published_at: s.publishedAt ?? null,
      accessed_at: s.accessedAt,
      source_type: s.sourceType,
    })),
  );

  await upsert(
    "brands",
    brands.map((b) => ({ id: b.id, slug: b.slug, name: b.name, country: b.country })),
  );

  await upsert(
    "models",
    models.map((m) => ({ id: m.id, brand_id: m.brandId, slug: m.slug, name: m.name, body_type: m.bodyType })),
  );

  await upsert(
    "generations",
    generations.map((g) => ({
      id: g.id,
      model_id: g.modelId,
      code: g.code,
      slug: g.slug,
      start_year: g.startYear,
      end_year: g.endYear ?? null,
      one_liner: g.oneLiner,
      intro: g.intro,
      verdict: g.verdict,
      strengths: g.strengths,
      watchouts: g.watchouts,
      faq: g.faq,
      status: g.status,
      data_status: g.dataStatus,
      reviewed_at: g.reviewedAt,
      body_type: g.bodyType,
      length_mm: g.lengthMm ?? null,
      boot_litres: g.bootLitres ?? null,
    })),
  );

  await upsert(
    "engines",
    engines.map((e) => ({
      id: e.id,
      slug: e.slug,
      code: e.code,
      fuel: e.fuel,
      displacement_cc: e.displacementCc,
      cylinders: e.cylinders,
      power_kw: e.powerKw ?? null,
      power_hp: e.powerHp,
      torque_nm: e.torqueNm ?? null,
      architecture: e.architecture,
      summary: e.summary,
      data_status: e.dataStatus,
    })),
  );

  await upsert(
    "generation_engines",
    generationEngines.map((l) => ({
      generation_id: l.generationId,
      engine_id: l.engineId,
      trim_label: l.trimLabel,
      transmission: l.transmission,
      drivetrain: l.drivetrain,
      start_year: l.startYear,
      end_year: l.endYear ?? null,
      consumption: l.consumption ?? null,
    })),
  );

  await upsert(
    "maintenance_items",
    maintenanceItems.map((m) => ({
      id: m.id,
      engine_id: m.engineId ?? null,
      generation_id: m.generationId ?? null,
      item: m.item,
      interval_km: m.intervalKm ?? null,
      interval_months: m.intervalMonths ?? null,
      notes: m.notes ?? null,
      source_id: m.sourceId ?? null,
    })),
  );

  await upsert(
    "known_issues",
    knownIssues.map((i) => ({
      id: i.id,
      engine_id: i.engineId ?? null,
      generation_id: i.generationId ?? null,
      title: i.title,
      symptoms: i.symptoms,
      cause: i.cause,
      severity: i.severity,
      mileage_min: i.mileageMin ?? null,
      mileage_max: i.mileageMax ?? null,
      cost_min: i.costMin ?? null,
      cost_max: i.costMax ?? null,
      confidence: i.confidence,
      status: i.status,
    })),
  );

  const issueSourceRows = knownIssues.flatMap((i) =>
    i.sourceIds.map((sourceId) => ({ issue_id: i.id, source_id: sourceId })),
  );
  await upsert("issue_sources", issueSourceRows);

  await upsert(
    "comparisons",
    comparisons.map((c) => ({
      id: c.id,
      slug: c.slug,
      left_generation_id: c.leftGenerationId,
      right_generation_id: c.rightGenerationId,
      editorial_summary: c.editorialSummary,
      takeaways: c.takeaways,
      status: c.status,
      reviewed_at: c.reviewedAt,
    })),
  );

  console.log("\nCarga completa.");
}

main();
