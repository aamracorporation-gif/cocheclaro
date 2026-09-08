/** Bloque "Antes de comprar": puntos fuertes y puntos a revisar (§6.2). */
export function BeforeBuying({
  strengths,
  watchouts,
}: {
  strengths: string[];
  watchouts: string[];
}) {
  return (
    <section aria-labelledby="antes-de-comprar" className="card">
      <h2 id="antes-de-comprar" className="h2">
        Antes de comprar
      </h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Puntos fuertes
          </h3>
          <ul className="mt-2 space-y-2 text-[0.97rem] text-ink-soft">
            {strengths.map((s) => (
              <li key={s} className="flex gap-2">
                <span aria-hidden className="text-emerald-600">
                  +
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-700">
            Puntos a revisar
          </h3>
          <ul className="mt-2 space-y-2 text-[0.97rem] text-ink-soft">
            {watchouts.map((w) => (
              <li key={w} className="flex gap-2">
                <span aria-hidden className="text-amber-600">
                  !
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
