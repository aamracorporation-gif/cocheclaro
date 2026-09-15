/**
 * Punto de entrada del acceso a datos. Conmuta entre el proveedor local
 * (`data/*.ts`, por defecto, sin dependencias) y Supabase según
 * `DATA_PROVIDER`. Ambos proveedores exponen exactamente la misma firma
 * (ver `./local.ts` y `./supabase.ts`), así que el resto de la app no sabe
 * ni le importa cuál está activo.
 */
import * as local from "./local";
import * as supabase from "./supabase";

const provider = process.env.DATA_PROVIDER === "supabase" ? supabase : local;

export const getBrands = provider.getBrands;
export const getBrandBySlug = provider.getBrandBySlug;
export const getModelsByBrandId = provider.getModelsByBrandId;
export const getAllModels = provider.getAllModels;
export const getAllGenerationEngineLinks = provider.getAllGenerationEngineLinks;
export const getModelBySlug = provider.getModelBySlug;
export const getGenerationsByModelId = provider.getGenerationsByModelId;
export const getAllPublishedGenerations = provider.getAllPublishedGenerations;
export const getGenerationDetail = provider.getGenerationDetail;
export const getEngines = provider.getEngines;
export const getEngineBySlug = provider.getEngineBySlug;
export const getEngineDetail = provider.getEngineDetail;
export const getComparisons = provider.getComparisons;
export const getComparisonBySlug = provider.getComparisonBySlug;
export const getFeaturedGenerations = provider.getFeaturedGenerations;
export const counts = provider.counts;

export type { GenerationLite } from "./local";
