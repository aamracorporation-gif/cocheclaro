/**
 * Convierte las filas del CSV largo (una fila = un campo de una entidad, ver
 * DATA_IMPORT_TEMPLATE.csv) en un plan de operaciones sobre Supabase.
 *
 * Alcance de esta versión (§8.2 y §19 del Plan Maestro: "importación CSV con
 * preview, validación Zod, informe de errores"): solo `known_issue` y
 * `maintenance_item`, que son las entidades que de verdad se alimentan en
 * lote con frecuencia (averías y mantenimiento). `generation`, `engine` y
 * `generation_engine` tienen sus propios formularios en /admin; una fila con
 * esos tipos se reporta como aviso, no como error, para no bloquear el resto
 * del fichero.
 *
 * Es una función pura (sin red ni base de datos) para poder probarla con
 * Vitest; el llamador le pasa `engineByCode` ya resuelto.
 */
import type { Confidence, PublishStatus, Severity, Source } from "@/lib/types";

export interface ImportIssue {
  row: number;
  message: string;
}

export interface PlannedSource {
  id: string;
  url: string;
  title: string;
  publisher: string;
  publishedAt?: string;
  accessedAt: string;
  sourceType: Source["sourceType"];
}

export interface PlannedKnownIssue {
  id: string;
  engineId?: string;
  generationId?: string;
  title: string;
  symptoms: string;
  cause: string;
  severity: Severity;
  mileageMin?: number;
  mileageMax?: number;
  costMin?: number;
  costMax?: number;
  confidence: Confidence;
  status: PublishStatus;
  sourceIds: string[];
}

export interface PlannedMaintenanceItem {
  id: string;
  engineId?: string;
  generationId?: string;
  item: string;
  intervalKm?: number;
  intervalMonths?: number;
  notes?: string;
  sourceId?: string;
}

export interface ImportPlan {
  sources: PlannedSource[];
  knownIssues: PlannedKnownIssue[];
  maintenanceItems: PlannedMaintenanceItem[];
  errors: ImportIssue[];
  warnings: ImportIssue[];
}

const SUPPORTED_ENTITIES = new Set(["known_issue", "maintenance_item"]);

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function parseNotes(notes: string): Record<string, string> {
  const out: Record<string, string> = {};
  if (!notes) return out;
  for (const pair of notes.split(";")) {
    const idx = pair.indexOf("=");
    if (idx === -1) continue;
    out[pair.slice(0, idx).trim()] = pair.slice(idx + 1).trim();
  }
  return out;
}

function toInt(value: string | undefined): number | undefined {
  if (value === undefined || value === "") return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? Math.trunc(n) : undefined;
}

interface WorkingIssue {
  fields: Record<string, string>;
  sourceIds: Set<string>;
}
interface WorkingMaintenance {
  fields: Record<string, string>;
  sourceId?: string;
}

export function buildImportPlan(
  rows: Array<Record<string, string>>,
  engineByCode: Map<string, string>,
): ImportPlan {
  const errors: ImportIssue[] = [];
  const warnings: ImportIssue[] = [];
  const sources = new Map<string, PlannedSource>();
  const issues = new Map<string, WorkingIssue>();
  const maintenance = new Map<string, WorkingMaintenance>();

  rows.forEach((raw, index) => {
    const rowNumber = index + 2; // +1 por cabecera, +1 por índice 1-based
    const entity = raw.entity?.trim();
    if (!entity) {
      warnings.push({ row: rowNumber, message: "fila sin columna 'entity', se ignora" });
      return;
    }
    if (!SUPPORTED_ENTITIES.has(entity)) {
      warnings.push({
        row: rowNumber,
        message: `entity "${entity}" no soportada por la importación CSV en esta versión; edítala en /admin`,
      });
      return;
    }

    const id = raw.slug?.trim();
    if (!id) {
      errors.push({ row: rowNumber, message: `fila de tipo "${entity}" sin columna 'slug' (id de la entidad)` });
      return;
    }

    let engineId: string | undefined;
    if (raw.engine_code?.trim()) {
      engineId = engineByCode.get(raw.engine_code.trim());
      if (!engineId) {
        errors.push({ row: rowNumber, message: `engine_code "${raw.engine_code}" no existe` });
        return;
      }
    }

    // Fuente citada en esta fila (opcional): se crea/reutiliza por título.
    let sourceId: string | undefined;
    if (raw.source_url?.trim()) {
      if (!/^https?:\/\//.test(raw.source_url.trim())) {
        errors.push({ row: rowNumber, message: `source_url no es una URL válida: "${raw.source_url}"` });
        return;
      }
      const title = raw.source_title?.trim() || raw.source_url.trim();
      sourceId = `src-${slugify(title)}` || `src-${slugify(raw.source_url)}`;
      if (!sources.has(sourceId)) {
        sources.set(sourceId, {
          id: sourceId,
          url: raw.source_url.trim(),
          title,
          publisher: raw.source_publisher?.trim() || "Sin especificar",
          publishedAt: raw.source_date?.trim() || undefined,
          accessedAt: raw.reviewed_at?.trim() || new Date().toISOString().slice(0, 10),
          sourceType: "medio-tecnico",
        });
      }
    }

    const notesFields = parseNotes(raw.notes ?? "");
    const field = raw.field?.trim();
    const value = raw.value?.trim();

    if (entity === "known_issue") {
      const working = issues.get(id) ?? { fields: {}, sourceIds: new Set<string>() };
      if (engineId) working.fields.engine_id = engineId;
      if (field && value !== undefined) working.fields[field] = value;
      for (const [k, v] of Object.entries(notesFields)) working.fields[k] = v;
      if (raw.status?.trim()) working.fields.status = raw.status.trim();
      if (sourceId) working.sourceIds.add(sourceId);
      issues.set(id, working);
    } else {
      const working = maintenance.get(id) ?? { fields: {} };
      if (engineId) working.fields.engine_id = engineId;
      if (field && value !== undefined) working.fields[field] = value;
      for (const [k, v] of Object.entries(notesFields)) working.fields[k] = v;
      if (sourceId) working.sourceId = sourceId;
      maintenance.set(id, working);
    }
  });

  const plannedIssues: PlannedKnownIssue[] = [];
  for (const [id, working] of issues) {
    const f = working.fields;
    if (!f.title || !f.severity || !f.confidence) {
      errors.push({
        row: 0,
        message: `known_issue "${id}": faltan campos obligatorios (title, severity, confidence)`,
      });
      continue;
    }
    plannedIssues.push({
      id,
      engineId: f.engine_id,
      generationId: f.generation_id,
      title: f.title,
      symptoms: f.symptoms ?? "",
      cause: f.cause ?? "",
      severity: f.severity as Severity,
      mileageMin: toInt(f.mileage_min),
      mileageMax: toInt(f.mileage_max),
      costMin: toInt(f.cost_min),
      costMax: toInt(f.cost_max),
      confidence: f.confidence as Confidence,
      status: (f.status as PublishStatus) ?? "draft",
      sourceIds: [...working.sourceIds],
    });
  }

  const plannedMaintenance: PlannedMaintenanceItem[] = [];
  for (const [id, working] of maintenance) {
    const f = working.fields;
    if (!f.item) {
      errors.push({ row: 0, message: `maintenance_item "${id}": falta el campo obligatorio 'item'` });
      continue;
    }
    if (!f.engine_id && !f.generation_id) {
      errors.push({ row: 0, message: `maintenance_item "${id}": debe asociarse a un motor o a una generación` });
      continue;
    }
    plannedMaintenance.push({
      id,
      engineId: f.engine_id,
      generationId: f.generation_id,
      item: f.item,
      intervalKm: toInt(f.interval_km),
      intervalMonths: toInt(f.interval_months),
      notes: f.free_notes,
      sourceId: working.sourceId,
    });
  }

  return {
    sources: [...sources.values()],
    knownIssues: plannedIssues,
    maintenanceItems: plannedMaintenance,
    errors,
    warnings,
  };
}
