/**
 * Ejecuta las validaciones del dataset por línea de comandos.
 *   npm run data:validate
 * Sale con código 1 si hay errores (útil para CI).
 */
import { validateDataset, datasetStats } from "@/lib/validate-data";

const issues = validateDataset();
const stats = datasetStats();
const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warn");

console.log("── CocheClaro · validación del dataset ──");
console.log(
  `Marcas ${stats.brands} · Modelos ${stats.models} · Generaciones ${stats.generationsPublished}/${stats.generations} · Motores ${stats.engines} · Averías ${stats.knownIssues} · Comparativas ${stats.comparisons}`,
);
console.log("");

for (const i of issues) {
  const tag = i.level === "error" ? "ERROR" : "WARN ";
  console.log(`[${tag}] ${i.entity}: ${i.message}`);
}

if (issues.length === 0) console.log("Sin incidencias.");

console.log("");
console.log(`${errors.length} errores, ${warnings.length} avisos.`);
if (stats.pending.length > 0) {
  console.log(`Pendiente de revisión: ${stats.pending.length} entidad(es).`);
}

process.exit(errors.length > 0 ? 1 : 0);
