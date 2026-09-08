/**
 * Planificador de mantenimiento.
 *
 * Dado el kilometraje actual y una lista de tareas con intervalo en km,
 * calcula la próxima ocurrencia de cada tarea:
 *
 *   proxima_km = ceil((km_actual + 1) / intervalo_km) × intervalo_km
 *   km_restantes = proxima_km − km_actual
 *
 * Si una tarea no tiene intervalo en km, se marca como "sin dato" y NO se
 * hace ninguna afirmación (§7.2: "indicar próximos servicios sin hacer
 * afirmaciones si faltan datos").
 *
 * `dueSoon` es cierto si faltan DUE_SOON_KM o menos para la próxima tarea.
 */

export const DUE_SOON_KM = 1500;

export interface PlanTaskInput {
  id: string;
  item: string;
  intervalKm?: number;
  intervalMonths?: number;
  notes?: string;
}

export interface PlanTaskResult {
  id: string;
  item: string;
  notes?: string;
  hasKmInterval: boolean;
  intervalKm?: number;
  nextAtKm?: number;
  kmRemaining?: number;
  /** true si faltan DUE_SOON_KM o menos para la próxima tarea. */
  dueSoon: boolean;
}

export function buildMaintenancePlan(
  currentKm: number,
  tasks: PlanTaskInput[],
): PlanTaskResult[] {
  const km = Number.isFinite(currentKm) && currentKm > 0 ? Math.floor(currentKm) : 0;

  return tasks
    .map((task): PlanTaskResult => {
      if (!task.intervalKm || task.intervalKm <= 0) {
        return {
          id: task.id,
          item: task.item,
          notes: task.notes,
          hasKmInterval: false,
          dueSoon: false,
        };
      }
      const cycles = Math.max(1, Math.ceil((km + 1) / task.intervalKm));
      const nextAtKm = cycles * task.intervalKm;
      const kmRemaining = nextAtKm - km;
      return {
        id: task.id,
        item: task.item,
        notes: task.notes,
        hasKmInterval: true,
        intervalKm: task.intervalKm,
        nextAtKm,
        kmRemaining,
        dueSoon: kmRemaining <= DUE_SOON_KM,
      };
    })
    .sort((a, b) => {
      if (a.hasKmInterval && b.hasKmInterval) {
        return (a.kmRemaining ?? 0) - (b.kmRemaining ?? 0);
      }
      return a.hasKmInterval ? -1 : 1;
    });
}
