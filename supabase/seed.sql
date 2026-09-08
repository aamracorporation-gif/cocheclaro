-- CocheClaro · seed
--
-- El dataset de demostración vive en src/data/*.ts y es lo que usa la app por
-- defecto (DATA_PROVIDER=local). Para cargarlo en Supabase, genera este seed
-- desde esos archivos con:
--
--   npx tsx scripts/export-seed.ts > supabase/seed.generated.sql
--
-- (script pendiente de crear en la fase de Supabase). No se incluye un volcado
-- manual aquí para no mantener los datos en dos sitios.
--
-- Recuerda: NUNCA publiques datos "demo" como reales en producción. Cambia
-- data_status a 'verified' y status a 'published' solo tras revisión con fuente.

select 'Ejecuta el generador de seed; ver comentario en este archivo.' as nota;
