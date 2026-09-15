/**
 * Escrituras del panel editorial (§8.2 del Plan Maestro). Usa la service role
 * key (bypassa RLS) — SOLO se importa desde Server Actions y Route Handlers
 * de /admin, nunca desde una página o componente público. El flujo
 * draft → needs_review → published solo se controla desde aquí.
 */
import { getAdminSupabaseClient } from "./supabase-client";
import { knownIssueFromRow, sourceFromRow, type KnownIssueRow, type SourceRow } from "./rows";
import type { Confidence, KnownIssue, PublishStatus, Severity, Source } from "@/lib/types";

/* `getAdminSupabaseClient` lanza si se ejecuta en el navegador (ver
 * `assertServer` en supabase-client.ts). Este módulo usa la service role key
 * y por eso solo debe importarse desde Server Actions / Route Handlers de
 * /admin, nunca desde una página o componente público. */

export interface AdminGenerationRow {
  id: string;
  code: string;
  slug: string;
  status: PublishStatus;
  startYear: number;
  endYear?: number;
  brandName: string;
  modelName: string;
}

export async function listGenerationsForAdmin(): Promise<AdminGenerationRow[]> {
  const db = getAdminSupabaseClient();
  const [gensRes, modelsRes, brandsRes] = await Promise.all([
    db.from("generations").select("id, code, slug, status, start_year, end_year, model_id"),
    db.from("models").select("id, name, brand_id"),
    db.from("brands").select("id, name"),
  ]);
  if (gensRes.error) throw new Error(gensRes.error.message);
  if (modelsRes.error) throw new Error(modelsRes.error.message);
  if (brandsRes.error) throw new Error(brandsRes.error.message);

  const brandNameById = new Map((brandsRes.data ?? []).map((b: { id: string; name: string }) => [b.id, b.name]));
  const modelById = new Map(
    (modelsRes.data ?? []).map((m: { id: string; name: string; brand_id: string }) => [m.id, m]),
  );

  return (gensRes.data ?? [])
    .map(
      (g: {
        id: string; code: string; slug: string; status: PublishStatus;
        start_year: number; end_year: number | null; model_id: string;
      }) => {
        const model = modelById.get(g.model_id);
        return {
          id: g.id,
          code: g.code,
          slug: g.slug,
          status: g.status,
          startYear: g.start_year,
          endYear: g.end_year ?? undefined,
          brandName: model ? brandNameById.get(model.brand_id) ?? "?" : "?",
          modelName: model?.name ?? "?",
        };
      },
    )
    .sort((a, b) => `${a.brandName} ${a.modelName}`.localeCompare(`${b.brandName} ${b.modelName}`, "es"));
}

export async function updateGenerationStatus(id: string, status: PublishStatus): Promise<void> {
  const db = getAdminSupabaseClient();
  const { error } = await db.from("generations").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);
}

export interface AdminComparisonRow {
  id: string;
  slug: string;
  status: PublishStatus;
}

export async function listComparisonsForAdmin(): Promise<AdminComparisonRow[]> {
  const db = getAdminSupabaseClient();
  const res = await db.from("comparisons").select("id, slug, status").order("slug");
  if (res.error) throw new Error(res.error.message);
  return res.data ?? [];
}

export async function updateComparisonStatus(id: string, status: PublishStatus): Promise<void> {
  const db = getAdminSupabaseClient();
  const { error } = await db.from("comparisons").update({ status }).eq("id", id);
  if (error) throw new Error(error.message);
}

/* ── Fuentes ───────────────────────────────────────────────── */

export async function listSourcesForAdmin(): Promise<Source[]> {
  const db = getAdminSupabaseClient();
  const res = await db.from("sources").select("*").order("id");
  if (res.error) throw new Error(res.error.message);
  return (res.data as SourceRow[]).map(sourceFromRow);
}

export interface SourceInput {
  id: string;
  url: string;
  title: string;
  publisher: string;
  publishedAt?: string;
  accessedAt: string;
  sourceType: Source["sourceType"];
}

export async function upsertSource(input: SourceInput): Promise<void> {
  const db = getAdminSupabaseClient();
  const { error } = await db.from("sources").upsert({
    id: input.id,
    url: input.url,
    title: input.title,
    publisher: input.publisher,
    published_at: input.publishedAt ?? null,
    accessed_at: input.accessedAt,
    source_type: input.sourceType,
  });
  if (error) throw new Error(error.message);
}

/* ── Averías (known_issues) ───────────────────────────────── */

export async function listKnownIssuesForAdmin(): Promise<KnownIssue[]> {
  const db = getAdminSupabaseClient();
  const [issuesRes, linksRes] = await Promise.all([
    db.from("known_issues").select("*").order("id"),
    db.from("issue_sources").select("issue_id, source_id"),
  ]);
  if (issuesRes.error) throw new Error(issuesRes.error.message);
  if (linksRes.error) throw new Error(linksRes.error.message);

  const sourcesByIssue = new Map<string, string[]>();
  for (const link of (linksRes.data ?? []) as Array<{ issue_id: string; source_id: string }>) {
    const list = sourcesByIssue.get(link.issue_id) ?? [];
    list.push(link.source_id);
    sourcesByIssue.set(link.issue_id, list);
  }

  return (issuesRes.data as KnownIssueRow[]).map((row) => knownIssueFromRow(row, sourcesByIssue.get(row.id) ?? []));
}

export async function getKnownIssueForAdmin(id: string): Promise<KnownIssue | null> {
  const db = getAdminSupabaseClient();
  const issueRes = await db.from("known_issues").select("*").eq("id", id).maybeSingle();
  if (issueRes.error) throw new Error(issueRes.error.message);
  if (!issueRes.data) return null;
  const linksRes = await db.from("issue_sources").select("source_id").eq("issue_id", id);
  if (linksRes.error) throw new Error(linksRes.error.message);
  const sourceIds = (linksRes.data ?? []).map((r: { source_id: string }) => r.source_id);
  return knownIssueFromRow(issueRes.data as KnownIssueRow, sourceIds);
}

export interface KnownIssueInput {
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

/**
 * Crea o actualiza una avería y sincroniza sus fuentes (`issue_sources`).
 * No es una única transacción SQL (supabase-js no expone transacciones
 * multi-sentencia sin una función Postgres dedicada): si el segundo paso
 * falla, la avería queda guardada pero con las fuentes desincronizadas. Es
 * un compromiso aceptado para este MVP; revísalo en el propio panel tras
 * guardar.
 */
export async function upsertKnownIssue(input: KnownIssueInput): Promise<void> {
  const db = getAdminSupabaseClient();
  const { error: upsertError } = await db.from("known_issues").upsert({
    id: input.id,
    engine_id: input.engineId ?? null,
    generation_id: input.generationId ?? null,
    title: input.title,
    symptoms: input.symptoms,
    cause: input.cause,
    severity: input.severity,
    mileage_min: input.mileageMin ?? null,
    mileage_max: input.mileageMax ?? null,
    cost_min: input.costMin ?? null,
    cost_max: input.costMax ?? null,
    confidence: input.confidence,
    status: input.status,
  });
  if (upsertError) throw new Error(upsertError.message);

  const { error: deleteError } = await db.from("issue_sources").delete().eq("issue_id", input.id);
  if (deleteError) throw new Error(deleteError.message);

  if (input.sourceIds.length > 0) {
    const { error: insertError } = await db
      .from("issue_sources")
      .insert(input.sourceIds.map((sourceId) => ({ issue_id: input.id, source_id: sourceId })));
    if (insertError) throw new Error(insertError.message);
  }
}

/* ── Mantenimiento ─────────────────────────────────────────── */

export interface MaintenanceItemInput {
  id: string;
  engineId?: string;
  generationId?: string;
  item: string;
  intervalKm?: number;
  intervalMonths?: number;
  notes?: string;
  sourceId?: string;
}

export async function upsertMaintenanceItem(input: MaintenanceItemInput): Promise<void> {
  const db = getAdminSupabaseClient();
  const { error } = await db.from("maintenance_items").upsert({
    id: input.id,
    engine_id: input.engineId ?? null,
    generation_id: input.generationId ?? null,
    item: input.item,
    interval_km: input.intervalKm ?? null,
    interval_months: input.intervalMonths ?? null,
    notes: input.notes ?? null,
    source_id: input.sourceId ?? null,
  });
  if (error) throw new Error(error.message);
}
