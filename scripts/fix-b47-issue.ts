/**
 * Corrección puntual del BMW B47D20 (script de un solo uso, documentado en
 * el commit). El dataset de demo atribuía al B47 una avería de "cadena de
 * distribución" con gravedad alta y una fuente inventada (example-tsb.com).
 *
 * Investigación real (septiembre 2026):
 * - Specs (140kW/190CV/400Nm) confirmadas contra Wikipedia (BMW B47).
 * - La avería de cadena de distribución grave y muy documentada es del motor
 *   ANTERIOR, el N47 (2007-2014), no del B47 (2014+, el que monta el G20).
 * - Para el B47 en sí, la fuente más específica encontrada (Orbi Motors,
 *   taller especializado) documenta desgaste de cadena como un problema
 *   real pero más moderado (revisar 60.000-100.000 millas), junto con EGR,
 *   turbo por contaminación de aceite, DPF e inyectores.
 *
 * Se corrige: severidad alta -> media, confianza moderada -> anecdotica
 * (persiste el nivel "moderada" para el kilometraje ya que sí viene de una
 * fuente concreta, pero se marca la fuente real), y se sustituye la fuente
 * falsa por una real.
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
  const sourceId = "src-orbimotors-b47";
  const { error: sourceError } = await db.from("sources").upsert({
    id: sourceId,
    url: "https://orbimotors.com/news/common-bmw-b47-engine-problems-and-tips-for-buyers/",
    title: "Common BMW B47 Engine Problems and Tips for Buyers",
    publisher: "Orbi Motors (taller especializado en BMW)",
    accessed_at: "2026-09-16",
    source_type: "medio-tecnico",
  });
  if (sourceError) throw new Error(`sources: ${sourceError.message}`);
  console.log("Fuente real creada/actualizada:", sourceId);

  const { error: issueError } = await db
    .from("known_issues")
    .update({
      title: "Desgaste de la cadena de distribución (revisión preventiva)",
      symptoms:
        "Ruido metálico o traqueteo en el arranque en frío o al ralentí; en casos avanzados, ralentí irregular o fallos de encendido.",
      cause:
        "Estiramiento gradual de la cadena por intervalos de cambio de aceite espaciados o aceite de calidad inferior a la especificada. A diferencia del motor anterior (N47), en el B47 no es un fallo de diseño generalizado, sino un punto de revisión preventiva.",
      severity: "media",
      mileage_min: 60000,
      mileage_max: 100000,
      cost_min: null,
      cost_max: null,
      confidence: "moderada",
    })
    .eq("id", "issue-b47-cadena");
  if (issueError) throw new Error(`known_issues: ${issueError.message}`);
  console.log("Avería issue-b47-cadena corregida.");

  await db.from("issue_sources").delete().eq("issue_id", "issue-b47-cadena");
  const { error: linkError } = await db
    .from("issue_sources")
    .insert({ issue_id: "issue-b47-cadena", source_id: sourceId });
  if (linkError) throw new Error(`issue_sources: ${linkError.message}`);
  console.log("Fuente enlazada a la avería. Fuente falsa (example-tsb.com) desvinculada.");
}

main();
