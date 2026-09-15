"use server";

import { getEngines } from "@/lib/db";
import { csvToObjects } from "@/lib/import/parse-csv";
import { buildImportPlan, type ImportPlan } from "@/lib/import/build-plan";
import { upsertKnownIssue, upsertMaintenanceItem, upsertSource } from "@/lib/db/supabase-admin";

function assertSupabaseProvider() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    throw new Error("La importación CSV requiere DATA_PROVIDER=supabase.");
  }
}

async function engineByCode(): Promise<Map<string, string>> {
  const engines = await getEngines();
  return new Map(engines.map((e) => [e.code, e.id]));
}

export interface ImportState {
  phase: "idle" | "preview" | "done" | "error";
  csvText?: string;
  plan?: ImportPlan;
  message?: string;
}

export async function previewImportAction(_prev: ImportState, formData: FormData): Promise<ImportState> {
  assertSupabaseProvider();
  const file = formData.get("file");
  const pasted = String(formData.get("csvText") ?? "");
  const csvText = file instanceof File && file.size > 0 ? await file.text() : pasted;

  if (!csvText.trim()) {
    return { phase: "error", message: "Sube un archivo .csv o pega su contenido." };
  }

  const rows = csvToObjects(csvText);
  const plan = buildImportPlan(rows, await engineByCode());
  return { phase: "preview", csvText, plan };
}

export async function applyImportAction(_prev: ImportState, formData: FormData): Promise<ImportState> {
  assertSupabaseProvider();
  const csvText = String(formData.get("csvText") ?? "");
  const rows = csvToObjects(csvText);
  const plan = buildImportPlan(rows, await engineByCode());

  if (plan.errors.length > 0) {
    return { phase: "preview", csvText, plan, message: "Corrige los errores antes de importar." };
  }

  let applied = 0;
  try {
    for (const source of plan.sources) {
      await upsertSource(source);
      applied++;
    }
    for (const issue of plan.knownIssues) {
      await upsertKnownIssue(issue);
      applied++;
    }
    for (const item of plan.maintenanceItems) {
      await upsertMaintenanceItem(item);
      applied++;
    }
  } catch (err) {
    return {
      phase: "error",
      message:
        `Se aplicaron ${applied} de ${plan.sources.length + plan.knownIssues.length + plan.maintenanceItems.length} ` +
        `operaciones antes de fallar: ${err instanceof Error ? err.message : "error desconocido"}. ` +
        "No es una transacción atómica: revisa /admin/averias y /admin/fuentes antes de reintentar.",
    };
  }

  return {
    phase: "done",
    message: `Importación completa: ${plan.sources.length} fuentes, ${plan.knownIssues.length} averías, ${plan.maintenanceItems.length} ítems de mantenimiento.`,
  };
}
