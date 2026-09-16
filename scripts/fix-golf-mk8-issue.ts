/**
 * Corrección puntual: VW Golf Mk8 / motor EA211 evo 1.5 TSI.
 *
 * La avería "tirones a baja carga" ya existente en el dataset demo resulta
 * ser ESENCIALMENTE CORRECTA (es el conocido "efecto canguro" del 1.5 TSI
 * evo por el sistema ACT + gestión de emisiones en frío, entre 1.200-2.000
 * rpm), pero citaba fuentes inventadas. Se sustituye por una fuente real y
 * se ajusta el texto para reflejar exactamente lo documentado: VW reconoció
 * el problema en enero de 2019 y publicó una actualización de software en
 * febrero de 2020 que lo resolvió en la mayoría de casos (persiste en
 * algunos manuales de primeras series).
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
  const sourceId = "src-orbimotors-15tsi";
  const { error: sourceError } = await db.from("sources").upsert({
    id: sourceId,
    url: "https://orbimotors.com/news/vw-1-5tsi-engine-problems-and-issues/",
    title: "VW 1.5TSI Engine Problems and Issues",
    publisher: "Orbi Motors (taller especializado en VW/Grupo VAG)",
    accessed_at: "2026-09-16",
    source_type: "medio-tecnico",
  });
  if (sourceError) throw new Error(`sources: ${sourceError.message}`);
  console.log("Fuente real creada/actualizada:", sourceId);

  const { error: issueError } = await db
    .from("known_issues")
    .update({
      title: "Tirones ('efecto canguro') en frío a baja carga en primeras series",
      symptoms:
        "Sacudidas o tirones rítmicos al acelerar suave con el motor frío, sobre todo entre 1.200 y 2.000 rpm; desaparece con el motor caliente.",
      cause:
        "Interacción entre la desconexión de cilindros (ACT), la gestión del turbo y el control de emisiones en frío. VW reconoció el problema en enero de 2019 y publicó una actualización de software en febrero de 2020 que lo corrige en la mayoría de casos; persiste de forma ocasional en unidades manuales de primeras series (Evo1). El hardware de la generación posterior (Evo2, 2022+) ya no lo presenta.",
      severity: "baja",
      confidence: "solida",
    })
    .eq("id", "issue-15tsi-tirones");
  if (issueError) throw new Error(`known_issues: ${issueError.message}`);
  console.log("Avería issue-15tsi-tirones corregida.");

  await db.from("issue_sources").delete().eq("issue_id", "issue-15tsi-tirones");
  const { error: linkError } = await db
    .from("issue_sources")
    .insert({ issue_id: "issue-15tsi-tirones", source_id: sourceId });
  if (linkError) throw new Error(`issue_sources: ${linkError.message}`);
  console.log("Fuente enlazada. Fuentes falsas desvinculadas.");
}

main();
