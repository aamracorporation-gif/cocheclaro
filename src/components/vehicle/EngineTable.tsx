import Link from "next/link";
import type { EngineOnGeneration } from "@/lib/types";
import { fuelLabel } from "@/lib/format";

/** Tabla de motores disponibles con enlace a cada ficha de motor (§6.2). */
export function EngineTable({ engines }: { engines: EngineOnGeneration[] }) {
  if (engines.length === 0) {
    return (
      <p className="text-sm text-ink-faint">Sin motores asociados a esta generación todavía.</p>
    );
  }

  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Versión</th>
            <th>Motor</th>
            <th>Combustible</th>
            <th>Potencia</th>
            <th>Par</th>
            <th>Cambio</th>
            <th>Consumo homolog.</th>
          </tr>
        </thead>
        <tbody>
          {engines.map((e) => (
            <tr key={`${e.id}-${e.link.trimLabel}`}>
              <td className="font-medium text-ink">{e.link.trimLabel}</td>
              <td>
                <Link href={`/motores/${e.slug}`} className="link">
                  {e.code}
                </Link>
              </td>
              <td>{fuelLabel(e.fuel)}</td>
              <td>
                {e.powerHp} CV
                {e.powerKw ? ` (${e.powerKw} kW)` : ""}
              </td>
              <td>{e.torqueNm ? `${e.torqueNm} Nm` : "—"}</td>
              <td className="capitalize">
                {e.link.transmission} · {e.link.drivetrain}
              </td>
              <td>{e.link.consumption ? `${e.link.consumption} l/100 km` : "sin dato"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
