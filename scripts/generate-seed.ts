/**
 * Genera supabase/seed/seed_demo.sql a partir del dataset de demostración en
 * src/data/*.ts, con el mismo esquema que supabase/migrations/0001_init.sql.
 *
 * Uso:
 *   npm run db:seed:generate
 *   # luego, con el proyecto Supabase ya migrado:
 *   psql "$DATABASE_URL" -f supabase/seed/seed_demo.sql
 *   # o pega el contenido en el editor SQL de Supabase.
 *
 * Este script solo LEE src/data/*.ts y ESCRIBE el .sql: no toca ninguna base
 * de datos. Sirve para arrancar un proyecto Supabase nuevo con el mismo
 * dataset de demostración que ya funciona en local, y editarlo después desde
 * el panel /admin en vez de tocar código.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { brands } from "../src/data/brands";
import { models } from "../src/data/models";
import { generations } from "../src/data/generations";
import { engines } from "../src/data/engines";
import { generationEngines } from "../src/data/generation-engines";
import { knownIssues } from "../src/data/known-issues";
import { maintenanceItems } from "../src/data/maintenance";
import { sources } from "../src/data/sources";
import { comparisons } from "../src/data/comparisons";

function sqlString(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

function sqlNullable(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return "null";
  return typeof value === "number" ? String(value) : sqlString(value);
}

function sqlTextArray(values: string[]): string {
  if (values.length === 0) return "'{}'";
  const body = values.map((v) => `"${v.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`).join(",");
  return sqlString(`{${body}}`) + "::text[]";
}

function sqlJsonb(value: unknown): string {
  return sqlString(JSON.stringify(value)) + "::jsonb";
}

function insert(table: string, columns: string[], rows: string[][]): string {
  if (rows.length === 0) return `-- ${table}: sin filas\n`;
  const values = rows.map((r) => `  (${r.join(", ")})`).join(",\n");
  return `insert into ${table} (${columns.join(", ")}) values\n${values}\non conflict (id) do nothing;\n`;
}

const lines: string[] = [];
lines.push("-- Generado automáticamente por scripts/generate-seed.ts");
lines.push("-- Dataset de DEMOSTRACIÓN (§8 del Plan Maestro): no son datos reales.");
lines.push("-- Sustitúyelos por datos verificados desde el panel /admin antes de publicar.");
lines.push("");
lines.push("begin;");
lines.push("");

lines.push(
  insert(
    "sources",
    ["id", "url", "title", "publisher", "published_at", "accessed_at", "source_type"],
    sources.map((s) => [
      sqlString(s.id),
      sqlString(s.url),
      sqlString(s.title),
      sqlString(s.publisher),
      sqlNullable(s.publishedAt ?? null),
      sqlString(s.accessedAt),
      sqlString(s.sourceType),
    ]),
  ),
);

lines.push(
  insert(
    "brands",
    ["id", "slug", "name", "country"],
    brands.map((b) => [sqlString(b.id), sqlString(b.slug), sqlString(b.name), sqlString(b.country)]),
  ),
);

lines.push(
  insert(
    "models",
    ["id", "brand_id", "slug", "name", "body_type"],
    models.map((m) => [
      sqlString(m.id),
      sqlString(m.brandId),
      sqlString(m.slug),
      sqlString(m.name),
      sqlString(m.bodyType),
    ]),
  ),
);

lines.push(
  insert(
    "generations",
    [
      "id", "model_id", "code", "slug", "start_year", "end_year", "one_liner", "intro",
      "verdict", "strengths", "watchouts", "faq", "status", "data_status", "reviewed_at",
      "body_type", "length_mm", "boot_litres",
    ],
    generations.map((g) => [
      sqlString(g.id),
      sqlString(g.modelId),
      sqlString(g.code),
      sqlString(g.slug),
      String(g.startYear),
      sqlNullable(g.endYear ?? null),
      sqlString(g.oneLiner),
      sqlString(g.intro),
      sqlString(g.verdict),
      sqlTextArray(g.strengths),
      sqlTextArray(g.watchouts),
      sqlJsonb(g.faq),
      sqlString(g.status),
      sqlString(g.dataStatus),
      sqlString(g.reviewedAt),
      sqlString(g.bodyType),
      sqlNullable(g.lengthMm ?? null),
      sqlNullable(g.bootLitres ?? null),
    ]),
  ),
);

lines.push(
  insert(
    "engines",
    [
      "id", "slug", "code", "fuel", "displacement_cc", "cylinders", "power_kw", "power_hp",
      "torque_nm", "architecture", "summary", "data_status",
    ],
    engines.map((e) => [
      sqlString(e.id),
      sqlString(e.slug),
      sqlString(e.code),
      sqlString(e.fuel),
      String(e.displacementCc),
      String(e.cylinders),
      sqlNullable(e.powerKw ?? null),
      String(e.powerHp),
      sqlNullable(e.torqueNm ?? null),
      sqlString(e.architecture),
      sqlString(e.summary),
      sqlString(e.dataStatus),
    ]),
  ),
);

lines.push(
  `-- generation_engines: la PK es (generation_id, engine_id, trim_label); on conflict distinto del resto\n` +
    (generationEngines.length === 0
      ? "-- sin filas\n"
      : `insert into generation_engines (generation_id, engine_id, trim_label, transmission, drivetrain, start_year, end_year, consumption) values\n` +
        generationEngines
          .map(
            (link) =>
              `  (${sqlString(link.generationId)}, ${sqlString(link.engineId)}, ${sqlString(link.trimLabel)}, ${sqlString(link.transmission)}, ${sqlString(link.drivetrain)}, ${link.startYear}, ${sqlNullable(link.endYear ?? null)}, ${sqlNullable(link.consumption ?? null)})`,
          )
          .join(",\n") +
        "\non conflict (generation_id, engine_id, trim_label) do nothing;\n"),
);

lines.push(
  insert(
    "maintenance_items",
    ["id", "engine_id", "generation_id", "item", "interval_km", "interval_months", "notes", "source_id"],
    maintenanceItems.map((m) => [
      sqlString(m.id),
      sqlNullable(m.engineId ?? null),
      sqlNullable(m.generationId ?? null),
      sqlString(m.item),
      sqlNullable(m.intervalKm ?? null),
      sqlNullable(m.intervalMonths ?? null),
      sqlNullable(m.notes ?? null),
      sqlNullable(m.sourceId ?? null),
    ]),
  ),
);

lines.push(
  insert(
    "known_issues",
    [
      "id", "engine_id", "generation_id", "title", "symptoms", "cause", "severity",
      "mileage_min", "mileage_max", "cost_min", "cost_max", "confidence", "status",
    ],
    knownIssues.map((i) => [
      sqlString(i.id),
      sqlNullable(i.engineId ?? null),
      sqlNullable(i.generationId ?? null),
      sqlString(i.title),
      sqlString(i.symptoms),
      sqlString(i.cause),
      sqlString(i.severity),
      sqlNullable(i.mileageMin ?? null),
      sqlNullable(i.mileageMax ?? null),
      sqlNullable(i.costMin ?? null),
      sqlNullable(i.costMax ?? null),
      sqlString(i.confidence),
      sqlString(i.status),
    ]),
  ),
);

const issueSourceRows: Array<[string, string]> = knownIssues.flatMap((i) =>
  i.sourceIds.map((sourceId): [string, string] => [i.id, sourceId]),
);
lines.push(
  issueSourceRows.length === 0
    ? "-- issue_sources: sin filas\n"
    : `insert into issue_sources (issue_id, source_id) values\n` +
        issueSourceRows.map(([issueId, sourceId]) => `  (${sqlString(issueId)}, ${sqlString(sourceId)})`).join(",\n") +
        "\non conflict (issue_id, source_id) do nothing;\n",
);

lines.push(
  insert(
    "comparisons",
    ["id", "slug", "left_generation_id", "right_generation_id", "editorial_summary", "takeaways", "status", "reviewed_at"],
    comparisons.map((c) => [
      sqlString(c.id),
      sqlString(c.slug),
      sqlString(c.leftGenerationId),
      sqlString(c.rightGenerationId),
      sqlString(c.editorialSummary),
      sqlTextArray(c.takeaways),
      sqlString(c.status),
      sqlString(c.reviewedAt),
    ]),
  ),
);

lines.push("commit;");
lines.push("");

const output = lines.join("\n");
const outPath = resolve(__dirname, "../supabase/seed/seed_demo.sql");
writeFileSync(outPath, output, "utf-8");

console.log(`Seed SQL generado: ${outPath}`);
console.log(
  `Marcas: ${brands.length} · Modelos: ${models.length} · Generaciones: ${generations.length} · ` +
    `Motores: ${engines.length} · Motor-generación: ${generationEngines.length} · Averías: ${knownIssues.length} · ` +
    `Mantenimiento: ${maintenanceItems.length} · Fuentes: ${sources.length} · Comparativas: ${comparisons.length}`,
);
