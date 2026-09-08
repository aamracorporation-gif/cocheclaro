import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  getBrands,
  getModelsByBrandId,
  getAllPublishedGenerations,
  getEngines,
  getComparisons,
} from "@/lib/db";

/**
 * Sitemap generado desde los datos. Solo entra contenido PUBLICADO (§11, §20).
 * Búsqueda, comparador libre y admin quedan fuera por diseño.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const u = (path: string) => `${site.url}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/coches"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/motores"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/comparar"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: u("/calculadoras"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: u("/calculadoras/combustible"), lastModified: now, priority: 0.5 },
    { url: u("/calculadoras/coste-anual-coche"), lastModified: now, priority: 0.5 },
    { url: u("/calculadoras/mantenimiento"), lastModified: now, priority: 0.5 },
    { url: u("/metodologia"), lastModified: now, priority: 0.4 },
    { url: u("/acerca-de"), lastModified: now, priority: 0.3 },
    { url: u("/contacto"), lastModified: now, priority: 0.3 },
    { url: u("/privacidad"), lastModified: now, priority: 0.2 },
    { url: u("/cookies"), lastModified: now, priority: 0.2 },
    { url: u("/aviso-legal"), lastModified: now, priority: 0.2 },
  ];

  const brands = await getBrands();
  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: u(`/coches/${b.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const modelPages: MetadataRoute.Sitemap = [];
  for (const brand of brands) {
    const models = await getModelsByBrandId(brand.id);
    for (const model of models) {
      modelPages.push({
        url: u(`/coches/${brand.slug}/${model.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  const generations = await getAllPublishedGenerations();
  const generationPages: MetadataRoute.Sitemap = generations.map(({ generation, model, brand }) => ({
    url: u(`/coches/${brand.slug}/${model.slug}/${generation.slug}`),
    lastModified: new Date(generation.reviewedAt),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const engines = await getEngines();
  const enginePages: MetadataRoute.Sitemap = engines.map((e) => ({
    url: u(`/motores/${e.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comparisons = await getComparisons();
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map(({ comparison }) => ({
    url: u(`/comparar/${comparison.slug}`),
    lastModified: new Date(comparison.reviewedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...brandPages,
    ...modelPages,
    ...generationPages,
    ...enginePages,
    ...comparisonPages,
  ];
}
