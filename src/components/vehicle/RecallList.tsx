import { recallComponentTitle, type RecallsResult } from "@/lib/recalls";
import { formatDate } from "@/lib/format";

/**
 * Campañas y llamadas a revisión (datos de la NHTSA, EE. UU.). Se muestra con
 * un aviso claro de que es información del mercado estadounidense y no
 * sustituye a una comprobación del historial del vehículo en España.
 */
export function RecallList({ data }: { data: RecallsResult }) {
  if (data.notSoldInUsa) {
    return (
      <p className="text-sm text-ink-faint">
        Esta marca no se comercializa en Estados Unidos en el periodo relevante, así que no hay
        datos de campañas de la NHTSA para este modelo. Para campañas oficiales en España,
        consulta al fabricante o a la DGT con el número de bastidor.
      </p>
    );
  }

  if (data.errored) {
    return (
      <p className="text-sm text-ink-faint">
        No se pudieron cargar las campañas de la NHTSA en este momento.
      </p>
    );
  }

  if (data.recalls.length === 0) {
    return (
      <p className="text-sm text-ink-faint">
        No constan campañas en la base de datos de la NHTSA (EE. UU.) para este modelo y periodo.
        Puede haber campañas en Europa que no figuren aquí.
      </p>
    );
  }

  return (
    <div>
      <p className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-ink-soft">
        Datos de la <strong>NHTSA de Estados Unidos</strong>. Una campaña en EE. UU. suele tener
        equivalente en la UE, pero no siempre. Verifica siempre con el número de bastidor ante el
        fabricante para saber si una unidad concreta tiene campañas pendientes.
      </p>
      <ul className="mt-4 space-y-4">
        {data.recalls.map((r) => (
          <li key={r.campaign} className="card">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="h3 flex-1">{recallComponentTitle(r.component)}</h3>
              {r.overTheAir && (
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800">
                  Actualización OTA
                </span>
              )}
              <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-ink-soft">
                {r.campaign}
              </span>
            </div>
            {r.component && (
              <p className="mt-1 text-xs text-ink-faint">Componente NHTSA: {r.component}</p>
            )}
            <dl className="mt-3 space-y-2 text-[0.95rem]">
              <Field label="Resumen (texto original en inglés)" value={r.summary} />
              <Field label="Riesgo" value={r.consequence} />
              <Field label="Solución" value={r.remedy} />
            </dl>
            <p className="mt-3 text-xs text-ink-faint">
              Año de modelo {r.modelYear}
              {r.reportDate ? ` · comunicada el ${formatDate(r.reportDate)}` : ""} · fuente: NHTSA
              (EE. UU.)
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</dt>
      <dd className="text-ink-soft">{value}</dd>
    </div>
  );
}
