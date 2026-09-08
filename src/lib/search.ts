/**
 * Búsqueda de coches. Se construye un índice en memoria a partir del dataset
 * y se puntúan las coincidencias. Objetivo (§4 del Plan Maestro): que el
 * usuario escriba "bmw 320d 2018" o "qué motor lleva un 518d" y aterrice en
 * la ficha correcta.
 *
 * Cada entrada tiene dos zonas de texto:
 *  - `strong`: marca, modelo, código, slug, motores, carrocería. Un acierto
 *     aquí pesa mucho.
 *  - `weak`: años y frase de resumen. Un acierto aquí solo desempata.
 */
import { brands } from "@/data/brands";
import { models } from "@/data/models";
import { generations } from "@/data/generations";
import { engines } from "@/data/engines";
import { generationEngines } from "@/data/generation-engines";
import type { SearchResult } from "@/lib/types";

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita tildes y diacríticos
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface IndexEntry {
  kind: SearchResult["kind"];
  title: string;
  subtitle: string;
  href: string;
  strong: string;
  weak: string;
  weight: number;
}

let cachedIndex: IndexEntry[] | null = null;

function rangeYears(start: number, end: number): string {
  const out: string[] = [];
  for (let y = start; y <= end; y++) out.push(String(y));
  return out.join(" ");
}

function buildIndex(): IndexEntry[] {
  if (cachedIndex) return cachedIndex;
  const entries: IndexEntry[] = [];

  for (const brand of brands) {
    entries.push({
      kind: "brand",
      title: brand.name,
      subtitle: "Marca",
      href: `/coches/${brand.slug}`,
      strong: normalize(`${brand.name} ${brand.slug}`),
      weak: "",
      weight: 0.6,
    });
  }

  for (const model of models) {
    const brand = brands.find((b) => b.id === model.brandId);
    if (!brand) continue;
    entries.push({
      kind: "model",
      title: `${brand.name} ${model.name}`,
      subtitle: model.bodyType,
      href: `/coches/${brand.slug}/${model.slug}`,
      strong: normalize(`${brand.name} ${model.name} ${model.slug} ${model.bodyType}`),
      weak: "",
      weight: 0.8,
    });
  }

  for (const generation of generations) {
    if (generation.status !== "published") continue;
    const model = models.find((m) => m.id === generation.modelId);
    if (!model) continue;
    const brand = brands.find((b) => b.id === model.brandId);
    if (!brand) continue;

    // Generaciones aún a la venta: expandir años hasta el actual.
    const lastYear = generation.endYear ?? new Date().getFullYear();

    const genEngineText = generationEngines
      .filter((l) => l.generationId === generation.id)
      .map((l) => {
        const e = engines.find((x) => x.id === l.engineId);
        return `${l.trimLabel} ${e?.code ?? ""} ${e?.fuel ?? ""}`;
      })
      .join(" ");

    entries.push({
      kind: "generation",
      title: `${brand.name} ${model.name} ${generation.code}`,
      subtitle: `${generation.bodyType} · ${generation.startYear}${
        generation.endYear ? `–${generation.endYear}` : "–actualidad"
      }`,
      href: `/coches/${brand.slug}/${model.slug}/${generation.slug}`,
      strong: normalize(
        `${brand.name} ${model.name} ${generation.code} ${generation.slug} ${genEngineText} ${generation.bodyType}`,
      ),
      weak: normalize(`${rangeYears(generation.startYear, lastYear)} ${generation.oneLiner}`),
      weight: 1,
    });
  }

  for (const engine of engines) {
    entries.push({
      kind: "engine",
      title: engine.code,
      subtitle: `Motor ${engine.fuel} · ${engine.powerHp} CV`,
      href: `/motores/${engine.slug}`,
      strong: normalize(`${engine.code} ${engine.slug} ${engine.fuel} ${engine.architecture}`),
      weak: normalize(engine.summary),
      weight: 0.9,
    });
  }

  cachedIndex = entries;
  return entries;
}

/**
 * Relleno frecuente en consultas ("qué motor lleva un…", "problemas del…").
 * No exige coincidencia; solo suma un poco si aparece.
 */
const STOPWORDS = new Set([
  "que", "cual", "como", "cuanto", "cuanta", "cuantos", "donde", "cuando",
  "el", "la", "los", "las", "un", "una", "unos", "unas", "de", "del", "al",
  "y", "o", "en", "con", "por", "para", "mi", "me", "su", "es", "son",
  "lleva", "monta", "tiene", "da", "cuesta", "vale", "comprar", "coche",
  "motor", "problema", "problemas", "averia", "averias", "fallo", "fallos",
  "fiable", "fiabilidad", "opinion", "opiniones", "review", "prueba",
  "ano", "anos", "km", "kilometraje", "mejor", "vs", "versus",
]);

function wordMatch(hay: string, token: string): boolean {
  return (
    hay === token ||
    hay.startsWith(`${token} `) ||
    hay.endsWith(` ${token}`) ||
    hay.includes(` ${token} `)
  );
}

export function search(query: string, limit = 20): SearchResult[] {
  const q = normalize(query);
  if (q.length < 2) return [];
  const allTokens = q.split(" ").filter(Boolean);
  const contentTokens = allTokens.filter((t) => !STOPWORDS.has(t));
  const required = contentTokens.length > 0 ? contentTokens : allTokens;

  const scored: SearchResult[] = [];

  for (const entry of buildIndex()) {
    let score = 0;
    let ok = true;

    for (const token of allTokens) {
      const isRequired = required.includes(token);
      let hit = 0;

      if (wordMatch(entry.strong, token)) {
        hit = 6;
      } else if ((token.length >= 2 || /\d/.test(token)) && entry.strong.includes(token)) {
        // Tokens con dígito ("8", "a3", "c4") importan aunque sean cortos:
        // "golf 8" debe encontrar el "Mk8".
        hit = 3;
      } else if (wordMatch(entry.weak, token)) {
        hit = 2;
      } else if (token.length >= 3 && entry.weak.includes(token)) {
        hit = 1;
      }

      if (hit === 0 && isRequired) {
        ok = false;
        break;
      }
      score += isRequired ? hit : hit * 0.2;
    }

    if (!ok || score === 0) continue;

    if (normalize(entry.title).includes(q)) score += 8;
    score *= entry.weight;

    scored.push({
      kind: entry.kind,
      title: entry.title,
      subtitle: entry.subtitle,
      href: entry.href,
      score: Math.round(score * 100) / 100,
    });
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}
