/**
 * Punto de entrada del acceso a datos. Hoy solo existe el proveedor local
 * (data/*.ts). Para añadir Supabase: crear `./supabase.ts` con la misma firma
 * y conmutar aquí según `process.env.DATA_PROVIDER`.
 */
export * from "./local";
