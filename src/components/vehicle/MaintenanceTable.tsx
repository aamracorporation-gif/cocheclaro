import type { MaintenanceItem } from "@/lib/types";
import { formatNumber } from "@/lib/format";

/** Tabla de intervalos de mantenimiento (§6.2). */
export function MaintenanceTable({ items }: { items: MaintenanceItem[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-ink-faint">Sin intervalos de mantenimiento registrados todavía.</p>;
  }

  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Intervalo (km)</th>
            <th>Intervalo (meses)</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          {items.map((m) => (
            <tr key={m.id}>
              <td className="font-medium text-ink">{m.item}</td>
              <td>{m.intervalKm ? `${formatNumber(m.intervalKm)} km` : "sin dato"}</td>
              <td>{m.intervalMonths ? `${m.intervalMonths} meses` : "sin dato"}</td>
              <td>{m.notes ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
