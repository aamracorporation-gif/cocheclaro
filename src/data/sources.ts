import type { Source } from "@/lib/types";

/**
 * Fuentes. En este dataset de DEMOSTRACIÓN las URLs apuntan a documentación
 * pública genérica; en producción cada fuente debe ser específica y verificada
 * (ver §8.1 del Plan Maestro).
 */
export const sources: Source[] = [
  {
    id: "src-fabricante-generico",
    url: "https://www.example-fabricante.com/documentacion-tecnica",
    title: "Documentación técnica oficial del fabricante (demo)",
    publisher: "Fabricante",
    accessedAt: "2026-09-01",
    sourceType: "fabricante",
  },
  {
    id: "src-homologacion-wltp",
    url: "https://www.example-homologacion.eu/wltp",
    title: "Ficha de homologación WLTP (demo)",
    publisher: "Organismo de homologación",
    accessedAt: "2026-09-01",
    sourceType: "homologacion",
  },
  {
    id: "src-boletin-tecnico",
    url: "https://www.example-tsb.com/boletines",
    title: "Boletín técnico de servicio (demo)",
    publisher: "Red oficial de talleres",
    accessedAt: "2026-09-01",
    sourceType: "boletin-tecnico",
  },
  {
    id: "src-medio-tecnico",
    url: "https://www.example-medio-tecnico.com/analisis",
    title: "Análisis de medio técnico reputado (demo)",
    publisher: "Medio técnico",
    accessedAt: "2026-09-01",
    sourceType: "medio-tecnico",
  },
  {
    id: "src-comunidad",
    url: "https://www.example-foro-propietarios.com/hilo",
    title: "Experiencias de propietarios (demo, evidencia anecdótica)",
    publisher: "Comunidad de propietarios",
    accessedAt: "2026-09-01",
    sourceType: "comunidad",
  },
];
