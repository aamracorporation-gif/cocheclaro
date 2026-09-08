"use client";

import { useMemo, useState } from "react";
import { buildMaintenancePlan, type PlanTaskInput } from "@/lib/calculations/maintenance-plan";
import { formatKm } from "@/lib/format";
import { track } from "@/lib/analytics";
import { NumberField } from "./fields";

const DEFAULT_TASKS: PlanTaskInput[] = [
  { id: "aceite", item: "Cambio de aceite y filtro", intervalKm: 15000 },
  { id: "filtro-aire", item: "Filtro de aire", intervalKm: 30000 },
  { id: "filtro-habitaculo", item: "Filtro de habitáculo", intervalKm: 30000 },
  { id: "filtro-combustible", item: "Filtro de combustible", intervalKm: 60000 },
  { id: "bujias", item: "Bujías", intervalKm: 60000 },
  { id: "liquido-frenos", item: "Líquido de frenos", intervalKm: 60000 },
  { id: "distribucion", item: "Correa de distribución", intervalKm: 120000 },
];

export function MaintenancePlanner() {
  const [started, setStarted] = useState(false);
  const [currentKm, setCurrentKm] = useState(90000);
  const [tasks, setTasks] = useState<PlanTaskInput[]>(DEFAULT_TASKS);

  const plan = useMemo(() => buildMaintenancePlan(currentKm, tasks), [currentKm, tasks]);

  function updateTask(id: string, patch: Partial<PlanTaskInput>) {
    setTasks((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  return (
    <div
      className="card"
      onFocusCapture={() => {
        if (!started) {
          setStarted(true);
          track("calculator_start", { calculator: "maintenance_plan" });
        }
      }}
    >
      <div className="max-w-xs">
        <NumberField
          label="Kilometraje actual del coche"
          value={currentKm}
          onChange={setCurrentKm}
          step={1000}
          suffix="km"
        />
      </div>

      <div className="table-wrap mt-5">
        <table className="data-table">
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Intervalo</th>
              <th>Próxima a los</th>
              <th>Faltan</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((t) => (
              <tr key={t.id} className={t.dueSoon ? "bg-amber-50" : undefined}>
                <td className="font-medium text-ink">{t.item}</td>
                <td>
                  <input
                    type="number"
                    className="w-28 rounded border border-neutral-300 px-2 py-1"
                    value={t.intervalKm ?? ""}
                    min={0}
                    step={5000}
                    aria-label={`Intervalo en km de ${t.item}`}
                    onChange={(e) =>
                      updateTask(t.id, {
                        intervalKm: e.target.valueAsNumber || undefined,
                      })
                    }
                  />{" "}
                  km
                </td>
                <td>{t.hasKmInterval && t.nextAtKm != null ? formatKm(t.nextAtKm) : "sin dato"}</td>
                <td>
                  {t.hasKmInterval && t.kmRemaining != null ? (
                    <span className={t.dueSoon ? "font-semibold text-amber-800" : ""}>
                      {formatKm(t.kmRemaining)}
                      {t.dueSoon ? " · pronto" : ""}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-sm text-ink-faint">
        Los intervalos por defecto son orientativos. Sustitúyelos por los del plan de
        mantenimiento de tu coche. Si una tarea no tiene intervalo, no se hace ninguna
        afirmación sobre ella.
      </p>

      <details className="mt-3 text-sm text-ink-soft">
        <summary className="cursor-pointer font-medium text-ink">Cómo se calcula</summary>
        <p className="mt-2">
          <code>proxima_km = ceil((km_actual + 1) / intervalo) × intervalo</code>
          <br />
          <code>faltan = proxima_km − km_actual</code>. Se marca &laquo;pronto&raquo; si faltan
          1.500 km o menos.
        </p>
      </details>
    </div>
  );
}
