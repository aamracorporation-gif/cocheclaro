/**
 * Modelo de datos de CocheClaro (ver §9 del Plan Maestro).
 *
 * Regla de oro: las fichas NO son un blob de texto. Todo dato relevante es
 * un campo estructurado y todo dato crítico puede apuntar a una fuente.
 */

export type PublishStatus = "draft" | "needs_review" | "published";

/** Marca de procedencia del dato, para no presentar demo como real. */
export type DataStatus = "demo" | "verified";

export type FuelType =
  | "gasolina"
  | "diesel"
  | "hibrido"
  | "hibrido-enchufable"
  | "electrico"
  | "glp";

export type Transmission = "manual" | "automatico";
export type Drivetrain = "delantera" | "trasera" | "total";
export type Severity = "baja" | "media" | "alta";
/** Nivel de evidencia detrás de una avería conocida. */
export type Confidence = "anecdotica" | "moderada" | "solida";

export interface Source {
  id: string;
  url: string;
  title: string;
  publisher: string;
  /** ISO date. */
  publishedAt?: string;
  /** ISO date en que se consultó. */
  accessedAt: string;
  sourceType:
    | "fabricante"
    | "homologacion"
    | "boletin-tecnico"
    | "medio-tecnico"
    | "organismo-publico"
    | "comunidad";
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  country: string;
}

export interface Model {
  id: string;
  brandId: string;
  slug: string;
  name: string;
  bodyType: string;
}

export interface Engine {
  id: string;
  slug: string;
  /** Código técnico del motor, p. ej. "B47D20". */
  code: string;
  fuel: FuelType;
  displacementCc: number;
  cylinders: number;
  powerKw?: number;
  powerHp: number;
  torqueNm?: number;
  /** Arquitectura, p. ej. "4 en línea turbo". */
  architecture: string;
  summary: string;
  dataStatus: DataStatus;
}

export interface GenerationEngine {
  generationId: string;
  engineId: string;
  /** Etiqueta comercial del acabado/versión. */
  trimLabel: string;
  transmission: Transmission;
  drivetrain: Drivetrain;
  startYear: number;
  endYear?: number;
  /** Consumo homologado l/100km (o kWh/100km en eléctricos), si está verificado. */
  consumption?: number;
}

export interface MaintenanceItem {
  id: string;
  /** Se asocia a un motor o a una generación. */
  engineId?: string;
  generationId?: string;
  item: string;
  intervalKm?: number;
  intervalMonths?: number;
  notes?: string;
  sourceId?: string;
}

export interface KnownIssue {
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

export interface Generation {
  id: string;
  modelId: string;
  /** Código interno de generación, p. ej. "G20". */
  code: string;
  slug: string;
  startYear: number;
  endYear?: number;
  /** Resumen de una línea para el hero. */
  oneLiner: string;
  /** Intro editorial de 80-140 palabras. */
  intro: string;
  /** Veredicto corto redactado a partir de los datos. */
  verdict: string;
  strengths: string[];
  /** Puntos a revisar antes de comprar. */
  watchouts: string[];
  faq: Array<{ q: string; a: string }>;
  status: PublishStatus;
  dataStatus: DataStatus;
  /** ISO date de última revisión editorial. */
  reviewedAt: string;
  bodyType: string;
  /** Dimensiones y maletero, si están verificadas. */
  lengthMm?: number;
  bootLitres?: number;
}

export interface Comparison {
  id: string;
  slug: string;
  leftGenerationId: string;
  rightGenerationId: string;
  editorialSummary: string;
  /** Diferencias redactadas editorialmente. */
  takeaways: string[];
  status: PublishStatus;
  reviewedAt: string;
}

/* ── Tipos compuestos que consume la UI ────────────────────── */

export interface EngineOnGeneration extends Engine {
  link: GenerationEngine;
}

export interface GenerationDetail {
  generation: Generation;
  model: Model;
  brand: Brand;
  engines: EngineOnGeneration[];
  knownIssues: KnownIssue[];
  maintenance: MaintenanceItem[];
  sources: Source[];
  relatedComparisons: Comparison[];
}

export interface EngineDetail {
  engine: Engine;
  knownIssues: KnownIssue[];
  maintenance: MaintenanceItem[];
  sources: Source[];
  fittedIn: Array<{ generation: Generation; model: Model; brand: Brand; link: GenerationEngine }>;
}

export interface SearchResult {
  kind: "generation" | "engine" | "model" | "brand";
  title: string;
  subtitle: string;
  href: string;
  score: number;
}
