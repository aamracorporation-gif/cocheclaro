import type { KnownIssue, Source } from "@/lib/types";
import { formatEur, formatKm, severityLabel, confidenceLabel } from "@/lib/format";

const SEVERITY_STYLE: Record<string, string> = {
  baja: "bg-emerald-50 text-emerald-800 border-emerald-200",
  media: "bg-amber-50 text-amber-800 border-amber-200",
  alta: "bg-red-50 text-red-800 border-red-200",
};

/**
 * Mapa de riesgos: síntoma → causa → gravedad → coste orientativo → evidencia
 * y fuentes (§6.2). Nunca afirma un coste sin marcar que es orientativo.
 */
export function IssuesList({
  issues,
  sources,
}: {
  issues: KnownIssue[];
  sources: Source[];
}) {
  if (issues.length === 0) {
    return (
      <p className="text-sm text-ink-faint">
        No hay averías documentadas con evidencia suficiente para esta generación/motor. Eso no
        significa que no existan: significa que aún no las hemos verificado.
      </p>
    );
  }

  const byId = new Map(sources.map((s) => [s.id, s]));

  return (
    <ul className="space-y-4">
      {issues.map((issue) => {
        const cost =
          issue.costMin != null && issue.costMax != null
            ? `${formatEur(issue.costMin)}–${formatEur(issue.costMax)}`
            : "sin dato";
        const hasMin = issue.mileageMin != null && issue.mileageMin > 0;
        const hasMax = issue.mileageMax != null && issue.mileageMax > 0;
        const mileage = hasMin
          ? hasMax
            ? `${formatKm(issue.mileageMin!)} a ${formatKm(issue.mileageMax!)}`
            : `a partir de ${formatKm(issue.mileageMin!)}`
          : hasMax
            ? `hasta ${formatKm(issue.mileageMax!)}`
            : "sin patrón claro de kilometraje";

        return (
          <li key={issue.id} className="card">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="h3 flex-1">{issue.title}</h3>
              <span
                className={`rounded border px-2 py-0.5 text-xs font-medium ${
                  SEVERITY_STYLE[issue.severity] ?? ""
                }`}
              >
                {severityLabel(issue.severity)}
              </span>
              <span className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-ink-soft">
                {confidenceLabel(issue.confidence)}
              </span>
            </div>

            <dl className="mt-3 grid gap-x-6 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Síntomas
                </dt>
                <dd className="text-ink-soft">{issue.symptoms}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Causa
                </dt>
                <dd className="text-ink-soft">{issue.cause}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Kilometraje orientativo
                </dt>
                <dd className="text-ink-soft">{mileage}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Coste orientativo de reparación
                </dt>
                <dd className="text-ink-soft">{cost}</dd>
              </div>
            </dl>

            {issue.sourceIds.length > 0 && (
              <p className="mt-3 text-xs text-ink-faint">
                Fuentes:{" "}
                {issue.sourceIds.map((id, i) => {
                  const s = byId.get(id);
                  if (!s) return null;
                  return (
                    <span key={id}>
                      {i > 0 && ", "}
                      <a
                        href={s.url}
                        target="_blank"
                        rel="nofollow noopener external"
                        className="link"
                      >
                        {s.publisher}
                      </a>
                    </span>
                  );
                })}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
