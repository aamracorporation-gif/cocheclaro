import type { Source } from "@/lib/types";
import { formatDate } from "@/lib/format";

/** Caja visible de fuentes + última revisión en páginas técnicas (§11). */
export function SourcesBox({
  sources,
  reviewedAt,
}: {
  sources: Source[];
  reviewedAt?: string;
}) {
  return (
    <section aria-labelledby="fuentes" className="card bg-neutral-50">
      <h2 id="fuentes" className="h3">
        Fuentes y última revisión
      </h2>
      {reviewedAt && (
        <p className="mt-1 text-sm text-ink-faint">
          Última revisión editorial: {formatDate(reviewedAt)}
        </p>
      )}
      {sources.length > 0 ? (
        <ul className="mt-3 space-y-2 text-sm">
          {sources.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                rel="nofollow noopener external"
                target="_blank"
                className="link"
              >
                {s.title}
              </a>{" "}
              <span className="text-ink-faint">
                — {s.publisher}
                {s.publishedAt ? `, ${formatDate(s.publishedAt)}` : ""} (consultado{" "}
                {formatDate(s.accessedAt)})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm text-ink-faint">
          Sin fuentes asociadas a los datos mostrados en esta página todavía.
        </p>
      )}
      <p className="mt-4 text-xs text-ink-faint">
        Metodología: los datos estructurados se contrastan con documentación técnica y se
        marcan como &laquo;sin dato&raquo; cuando no hay evidencia suficiente.{" "}
        <a href="/metodologia" className="link">
          Cómo verificamos los datos
        </a>
        .
      </p>
    </section>
  );
}
