/**
 * Campañas y llamadas a revisión desde la API pública de la NHTSA (EE. UU.).
 *
 * Importante (honestidad, §8 del Plan Maestro): son datos del **mercado
 * estadounidense**. Una campaña en EE. UU. a menudo tiene equivalente en la UE,
 * pero no siempre, y muchos modelos europeos no aparecen. Se etiqueta como tal
 * en la interfaz y NUNCA se presenta como "averías" ni como dato español.
 *
 * No necesita API key. Los resultados se cachean 7 días con la caché de `fetch`
 * de Next. Cualquier fallo o timeout devuelve una lista vacía: la sección nunca
 * rompe la página.
 */
import { recalls as cfg } from "@/lib/site";
import {
  brandSoldInUsa,
  nhtsaMake,
  NHTSA_OVERRIDES,
} from "@/data/nhtsa-map";
import type { Brand, Generation, Model } from "@/lib/types";

export interface Recall {
  campaign: string;
  component: string;
  summary: string;
  consequence: string;
  remedy: string;
  /** ISO (YYYY-MM-DD) o cadena original si no se pudo parsear. */
  reportDate: string;
  modelYear: number;
  overTheAir: boolean;
}

export interface RecallsResult {
  recalls: Recall[];
  /** true si la marca no se comercializa en EE. UU. (no se consulta la API). */
  notSoldInUsa: boolean;
  /** true si hubo algún error de red/timeout al consultar. */
  errored: boolean;
}

interface NhtsaRow {
  NHTSACampaignNumber?: string;
  Component?: string;
  Summary?: string;
  Consequence?: string;
  Remedy?: string;
  ReportReceivedDate?: string;
  ModelYear?: string;
  overTheAirUpdate?: boolean;
}

const TIMEOUT_MS = 6000;
const MAX_RESULTS = 12;

/** "DD/MM/YYYY" -> "YYYY-MM-DD" (formato que devuelve la NHTSA). */
function toIso(raw: string | undefined): string {
  if (!raw) return "";
  const m = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[2]}-${m[1]}` : raw;
}

/** Años de modelo a consultar: inicio, medio y fin del rango (máx. 3). */
function sampleYears(gen: Generation, override?: number[]): number[] {
  if (override && override.length) return override;
  const end = Math.min(gen.endYear ?? new Date().getFullYear(), new Date().getFullYear());
  const start = gen.startYear;
  if (end <= start) return [start];
  const mid = Math.round((start + end) / 2);
  return Array.from(new Set([start, mid, end]));
}

async function fetchOne(make: string, model: string, year: number): Promise<NhtsaRow[]> {
  const url = `${cfg.apiBase}?make=${encodeURIComponent(make)}&model=${encodeURIComponent(
    model,
  )}&modelYear=${year}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      // Caché de datos de Next: 7 días.
      next: { revalidate: 60 * 60 * 24 * 7 },
      headers: { accept: "application/json" },
    });
    if (!res.ok) return [];
    const json = (await res.json()) as { results?: NhtsaRow[] };
    return Array.isArray(json.results) ? json.results : [];
  } catch {
    throw new Error("nhtsa fetch failed");
  } finally {
    clearTimeout(timer);
  }
}

export async function getRecallsForGeneration(
  brand: Brand,
  model: Model,
  generation: Generation,
): Promise<RecallsResult> {
  if (!cfg.enabled || !brandSoldInUsa(brand.name)) {
    return { recalls: [], notSoldInUsa: !brandSoldInUsa(brand.name), errored: false };
  }

  const make = nhtsaMake(brand.name);
  if (!make) return { recalls: [], notSoldInUsa: true, errored: false };

  const override = NHTSA_OVERRIDES[generation.id];
  const models = override?.models ?? [normalizeModelName(model.name)];
  const years = sampleYears(generation, override?.years);

  const jobs: Array<Promise<NhtsaRow[]>> = [];
  for (const m of models) {
    for (const y of years) jobs.push(fetchOne(make, m, y));
  }

  let errored = false;
  const settled = await Promise.allSettled(jobs);
  const rows: NhtsaRow[] = [];
  for (const s of settled) {
    if (s.status === "fulfilled") rows.push(...s.value);
    else errored = true;
  }

  // Deduplicar por número de campaña y ordenar por fecha descendente.
  const byCampaign = new Map<string, Recall>();
  for (const r of rows) {
    const campaign = r.NHTSACampaignNumber?.trim();
    if (!campaign || byCampaign.has(campaign)) continue;
    byCampaign.set(campaign, {
      campaign,
      component: r.Component ?? "",
      summary: r.Summary ?? "",
      consequence: r.Consequence ?? "",
      remedy: r.Remedy ?? "",
      reportDate: toIso(r.ReportReceivedDate),
      modelYear: Number(r.ModelYear) || generation.startYear,
      overTheAir: Boolean(r.overTheAirUpdate),
    });
  }

  const list = [...byCampaign.values()]
    .sort((a, b) => (a.reportDate < b.reportDate ? 1 : -1))
    .slice(0, MAX_RESULTS);

  return { recalls: list, notSoldInUsa: false, errored: errored && list.length === 0 };
}

function normalizeModelName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .trim();
}

/** Traduce la categoría de componente de la NHTSA (taxonomía en inglés). */
const COMPONENT_ES: Record<string, string> = {
  "AIR BAGS": "Airbags",
  "SEAT BELTS": "Cinturones de seguridad",
  "ELECTRICAL SYSTEM": "Sistema eléctrico",
  ENGINE: "Motor",
  "ENGINE AND ENGINE COOLING": "Motor y refrigeración",
  "POWER TRAIN": "Transmisión",
  STEERING: "Dirección",
  SUSPENSION: "Suspensión",
  "SERVICE BRAKES": "Frenos",
  "SERVICE BRAKES, HYDRAULIC": "Frenos hidráulicos",
  "PARKING BRAKE": "Freno de estacionamiento",
  "FUEL SYSTEM": "Sistema de combustible",
  "FUEL SYSTEM, GASOLINE": "Sistema de combustible (gasolina)",
  "FUEL SYSTEM, DIESEL": "Sistema de combustible (diésel)",
  "VISIBILITY": "Visibilidad",
  "EXTERIOR LIGHTING": "Iluminación exterior",
  "FORWARD COLLISION AVOIDANCE": "Frenada automática de emergencia",
  "BACK OVER PREVENTION": "Cámara y sensores de marcha atrás",
  "VEHICLE SPEED CONTROL": "Control de velocidad",
  "STRUCTURE": "Carrocería y estructura",
  "LATCHES/LOCKS/LINKAGES": "Cierres, cerraduras y anclajes",
  "TIRES": "Neumáticos",
  WHEELS: "Llantas",
  "EQUIPMENT": "Equipamiento",
  "SEATS": "Asientos",
  "ELECTRICAL SYSTEM:BATTERY": "Batería",
  "TRACTION BATTERY": "Batería de tracción",
  "COMMUNICATION": "Comunicaciones",
};

/** Devuelve un título legible en español a partir del `Component` de la NHTSA. */
export function recallComponentTitle(component: string): string {
  if (!component) return "Campaña de seguridad";
  const top = component.split(/[:,]/)[0]?.trim().toUpperCase() ?? "";
  return COMPONENT_ES[component.toUpperCase()] ?? COMPONENT_ES[top] ?? "Campaña de seguridad";
}
