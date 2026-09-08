/** FAQ editorial: solo preguntas con respuesta útil y verificable (§6.2). */
export function Faq({ items }: { items: Array<{ q: string; a: string }> }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="faq">
      <h2 id="faq" className="h2">
        Preguntas frecuentes
      </h2>
      <div className="mt-4 divide-y divide-neutral-200">
        {items.map((item) => (
          <details key={item.q} className="group py-3">
            <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
              <span className="inline-flex w-full items-center justify-between gap-2">
                {item.q}
                <span aria-hidden className="text-ink-faint transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-[0.97rem] text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
