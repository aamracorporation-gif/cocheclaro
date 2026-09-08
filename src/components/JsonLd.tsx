/** Inyecta un bloque <script type="application/ld+json">. El dato lo generamos
 *  nosotros a partir del dataset, nunca es entrada directa del usuario. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
