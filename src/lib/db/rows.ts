/**
 * Filas tal como las devuelve Postgres (snake_case) y su conversión a los
 * tipos de la app (camelCase, `src/lib/types.ts`). Compartido entre el
 * adaptador de lectura (`supabase.ts`) y el de escritura (`supabase-admin.ts`)
 * para que ambos mapeen exactamente igual.
 */
import type {
  Brand,
  Comparison,
  Confidence,
  DataStatus,
  Drivetrain,
  Engine,
  FuelType,
  Generation,
  GenerationEngine,
  KnownIssue,
  MaintenanceItem,
  Model,
  PublishStatus,
  Severity,
  Source,
  Transmission,
} from "@/lib/types";

export interface BrandRow {
  id: string;
  slug: string;
  name: string;
  country: string;
}
export const brandFromRow = (r: BrandRow): Brand => ({ id: r.id, slug: r.slug, name: r.name, country: r.country });

export interface ModelRow {
  id: string;
  brand_id: string;
  slug: string;
  name: string;
  body_type: string;
}
export const modelFromRow = (r: ModelRow): Model => ({
  id: r.id,
  brandId: r.brand_id,
  slug: r.slug,
  name: r.name,
  bodyType: r.body_type,
});

export interface GenerationRow {
  id: string;
  model_id: string;
  code: string;
  slug: string;
  start_year: number;
  end_year: number | null;
  one_liner: string;
  intro: string;
  verdict: string;
  strengths: string[];
  watchouts: string[];
  faq: Array<{ q: string; a: string }>;
  status: PublishStatus;
  data_status: DataStatus;
  reviewed_at: string;
  body_type: string;
  length_mm: number | null;
  boot_litres: number | null;
}
export const generationFromRow = (r: GenerationRow): Generation => ({
  id: r.id,
  modelId: r.model_id,
  code: r.code,
  slug: r.slug,
  startYear: r.start_year,
  endYear: r.end_year ?? undefined,
  oneLiner: r.one_liner,
  intro: r.intro,
  verdict: r.verdict,
  strengths: r.strengths ?? [],
  watchouts: r.watchouts ?? [],
  faq: r.faq ?? [],
  status: r.status,
  dataStatus: r.data_status,
  reviewedAt: r.reviewed_at,
  bodyType: r.body_type,
  lengthMm: r.length_mm ?? undefined,
  bootLitres: r.boot_litres ?? undefined,
});

export interface EngineRow {
  id: string;
  slug: string;
  code: string;
  fuel: FuelType;
  displacement_cc: number;
  cylinders: number;
  power_kw: number | null;
  power_hp: number;
  torque_nm: number | null;
  architecture: string;
  summary: string;
  data_status: DataStatus;
}
export const engineFromRow = (r: EngineRow): Engine => ({
  id: r.id,
  slug: r.slug,
  code: r.code,
  fuel: r.fuel,
  displacementCc: r.displacement_cc,
  cylinders: r.cylinders,
  powerKw: r.power_kw ?? undefined,
  powerHp: r.power_hp,
  torqueNm: r.torque_nm ?? undefined,
  architecture: r.architecture,
  summary: r.summary,
  dataStatus: r.data_status,
});

export interface GenerationEngineRow {
  generation_id: string;
  engine_id: string;
  trim_label: string;
  transmission: Transmission;
  drivetrain: Drivetrain;
  start_year: number;
  end_year: number | null;
  consumption: number | null;
}
export const generationEngineFromRow = (r: GenerationEngineRow): GenerationEngine => ({
  generationId: r.generation_id,
  engineId: r.engine_id,
  trimLabel: r.trim_label,
  transmission: r.transmission,
  drivetrain: r.drivetrain,
  startYear: r.start_year,
  endYear: r.end_year ?? undefined,
  consumption: r.consumption ?? undefined,
});

export interface MaintenanceItemRow {
  id: string;
  engine_id: string | null;
  generation_id: string | null;
  item: string;
  interval_km: number | null;
  interval_months: number | null;
  notes: string | null;
  source_id: string | null;
}
export const maintenanceFromRow = (r: MaintenanceItemRow): MaintenanceItem => ({
  id: r.id,
  engineId: r.engine_id ?? undefined,
  generationId: r.generation_id ?? undefined,
  item: r.item,
  intervalKm: r.interval_km ?? undefined,
  intervalMonths: r.interval_months ?? undefined,
  notes: r.notes ?? undefined,
  sourceId: r.source_id ?? undefined,
});

export interface KnownIssueRow {
  id: string;
  engine_id: string | null;
  generation_id: string | null;
  title: string;
  symptoms: string;
  cause: string;
  severity: Severity;
  mileage_min: number | null;
  mileage_max: number | null;
  cost_min: number | null;
  cost_max: number | null;
  confidence: Confidence;
  status: PublishStatus;
}
export const knownIssueFromRow = (r: KnownIssueRow, sourceIds: string[]): KnownIssue => ({
  id: r.id,
  engineId: r.engine_id ?? undefined,
  generationId: r.generation_id ?? undefined,
  title: r.title,
  symptoms: r.symptoms,
  cause: r.cause,
  severity: r.severity,
  mileageMin: r.mileage_min ?? undefined,
  mileageMax: r.mileage_max ?? undefined,
  costMin: r.cost_min ?? undefined,
  costMax: r.cost_max ?? undefined,
  confidence: r.confidence,
  status: r.status,
  sourceIds,
});

export interface SourceRow {
  id: string;
  url: string;
  title: string;
  publisher: string;
  published_at: string | null;
  accessed_at: string;
  source_type: Source["sourceType"];
}
export const sourceFromRow = (r: SourceRow): Source => ({
  id: r.id,
  url: r.url,
  title: r.title,
  publisher: r.publisher,
  publishedAt: r.published_at ?? undefined,
  accessedAt: r.accessed_at,
  sourceType: r.source_type,
});

export interface ComparisonRow {
  id: string;
  slug: string;
  left_generation_id: string;
  right_generation_id: string;
  editorial_summary: string;
  takeaways: string[];
  status: PublishStatus;
  reviewed_at: string;
}
export const comparisonFromRow = (r: ComparisonRow): Comparison => ({
  id: r.id,
  slug: r.slug,
  leftGenerationId: r.left_generation_id,
  rightGenerationId: r.right_generation_id,
  editorialSummary: r.editorial_summary,
  takeaways: r.takeaways ?? [],
  status: r.status,
  reviewedAt: r.reviewed_at,
});
