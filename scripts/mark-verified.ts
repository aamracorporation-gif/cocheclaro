/**
 * Marca dataStatus="verified" en las generaciones y motores donde esta
 * sesión ha contrastado de verdad las especificaciones técnicas (contra
 * Wikipedia/documentación pública) y al menos una avería con fuente real.
 * Sin esto, <DemoBadge> seguiría mostrando "ficha en revisión" en páginas
 * que ya tienen respaldo real.
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
const VERIFIED_ENGINE_IDS = ["b47d20", "ea211-1-5-tsi", "puretech-1-2", "puretech-1-2-ds"];

async function main() {
  const { error: genError, count: genCount } = await db
    .from("generations")
    .update({ data_status: "verified", reviewed_at: "2026-09-16" }, { count: "exact" })
    .in("id", VERIFIED_GENERATION_IDS);
  if (genError) throw new Error(genError.message);
  console.log(`Generaciones marcadas verified: ${genCount}`);

  const { error: engError, count: engCount } = await db
    .from("engines")
    .update({ data_status: "verified" }, { count: "exact" })
    .in("id", VERIFIED_ENGINE_IDS);
  if (engError) throw new Error(engError.message);
  console.log(`Motores marcados verified: ${engCount}`);
}

main();
