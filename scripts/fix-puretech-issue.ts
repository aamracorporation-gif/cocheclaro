/**
 * Corrección puntual: PureTech 1.2 (EB2), avería de la correa de
 * distribución húmeda. El contenido demo YA describía el problema con
 * bastante precisión (coincide con lo documentado: correa sumergida en
 * aceite, degradación prematura, partículas que obstruyen la lubricación,
 * campaña de Stellantis que afectó a ~500.000 vehículos Peugeot/Citroën/
 * DS/Opel/Jeep). Se corrige únicamente la fuente, que era inventada.
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Faltan NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}
const db = createClient(url, key);

async function main() {
  const sourceId = "src-italpassion-puretech";
  const { error: sourceError } = await db.from("sources").upsert({
    id: sourceId,
    url: "https://www.italpassion.fr/en/guides/stellantis-1-2-puretech-engine-list-of-belt-driven-and-chain-driven-models/",
    title: "Stellantis 1.2 PureTech Engine: list of belt and chain driven models",
    publisher: "ItalPassion",
    accessed_at: "2026-09-16",
    source_type: "medio-tecnico",
  });
  if (sourceError) throw new Error(`sources: ${sourceError.message}`);
  console.log("Fuente real creada/actualizada:", sourceId);

  for (const issueId of ["issue-puretech-correa", "issue-puretech-ds-correa"]) {
    await db.from("issue_sources").delete().eq("issue_id", issueId);
    const { error: linkError } = await db
      .from("issue_sources")
      .insert({ issue_id: issueId, source_id: sourceId });
    if (linkError) throw new Error(`issue_sources (${issueId}): ${linkError.message}`);
    console.log(`Fuente enlazada a ${issueId}.`);
  }
}

main();
