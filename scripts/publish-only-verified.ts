/**
 * Deja publicadas SOLO las generaciones revisadas de verdad esta sesión
 * (specs de motor contrastadas + al menos una avería con fuente real) y
 * pasa el resto a "draft" (no indexable, no sale en sitemap ni home).
 *
 * Motivo: el dataset completo (294 generaciones) es de demostración con
 * fuentes inventadas. Presentarlo así a Google/AdSense incumple tanto la
 * política de contenido útil de Google como la regla del propio Plan
 * Maestro (§8: no publicar sin verificación). Mejor un catálogo pequeño
 * pero honesto que uno grande pero falso; se amplía según se va
 * verificando (§8.2, §21 del Plan Maestro).
 *
 * Reversible: cualquier generación puede volver a "published" desde
 * /admin/generaciones en cuanto se verifique.
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Faltan NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}
const db = createClient(url, key);

const VERIFIED_GENERATION_IDS = ["bmw:serie-3:g20", "volkswagen:golf:mk8", "peugeot:208:p21"];

async function main() {
  // 1) Generaciones: draft para todas menos las verificadas.
  const { data: allGens, error: gensError } = await db.from("generations").select("id, status");
  if (gensError) throw new Error(gensError.message);
  const toDraft = (allGens ?? [])
    .filter((g) => !VERIFIED_GENERATION_IDS.includes(g.id) && g.status === "published")
    .map((g) => g.id);

  if (toDraft.length > 0) {
    const { error } = await db.from("generations").update({ status: "draft" }).in("id", toDraft);
    if (error) throw new Error(`generations: ${error.message}`);
  }
  console.log(`Generaciones a draft: ${toDraft.length}. Publicadas: ${VERIFIED_GENERATION_IDS.length}.`);

  // 2) Averías: draft para todas las que NO tengan al menos una fuente real
  //    (las 4 ya corregidas esta sesión: issue-b47-cadena, issue-15tsi-tirones,
  //    issue-puretech-correa, issue-puretech-ds-correa quedan publicadas).
  const VERIFIED_ISSUE_IDS = [
    "issue-b47-cadena",
    "issue-15tsi-tirones",
    "issue-puretech-correa",
    "issue-puretech-ds-correa",
  ];
  const { data: allIssues, error: issuesError } = await db.from("known_issues").select("id, status");
  if (issuesError) throw new Error(issuesError.message);
  const issuesToDraft = (allIssues ?? [])
    .filter((i) => !VERIFIED_ISSUE_IDS.includes(i.id) && i.status === "published")
    .map((i) => i.id);
  if (issuesToDraft.length > 0) {
    const { error } = await db.from("known_issues").update({ status: "draft" }).in("id", issuesToDraft);
    if (error) throw new Error(`known_issues: ${error.message}`);
  }
  console.log(`Averías a draft: ${issuesToDraft.length}. Publicadas: ${VERIFIED_ISSUE_IDS.length}.`);

  // 3) Comparativas: draft salvo que ambos lados estén en el set verificado
  //    (hoy ninguna cumple las dos condiciones a la vez).
  const { data: allComparisons, error: compError } = await db
    .from("comparisons")
    .select("id, left_generation_id, right_generation_id, status");
  if (compError) throw new Error(compError.message);
  const compToDraft = (allComparisons ?? [])
    .filter(
      (c) =>
        c.status === "published" &&
        !(
          VERIFIED_GENERATION_IDS.includes(c.left_generation_id) &&
          VERIFIED_GENERATION_IDS.includes(c.right_generation_id)
        ),
    )
    .map((c) => c.id);
  if (compToDraft.length > 0) {
    const { error } = await db.from("comparisons").update({ status: "draft" }).in("id", compToDraft);
    if (error) throw new Error(`comparisons: ${error.message}`);
  }
  console.log(`Comparativas a draft: ${compToDraft.length}.`);

  console.log("\nListo. El sitio público ahora solo muestra contenido verificado.");
}

main();
