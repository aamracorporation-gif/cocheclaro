import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SearchBox } from "@/components/SearchBox";
import { buildMetadata } from "@/lib/seo";
import { search } from "@/lib/search";

// Búsqueda interna: SIEMPRE noindex (§5, §11).
export const metadata: Metadata = buildMetadata({
  title: "Buscar coche",
  description: "Busca por marca, modelo, generación, año o código de motor.",
  path: "/buscar",
  noindex: true,
});

const KIND_LABEL: Record<string, string> = {
  generation: "Generación",
  engine: "Motor",
  model: "Modelo",
  brand: "Marca",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query.length >= 2 ? search(query, 40) : [];

  return (
    <Container>
      <div className="py-6">
        <h1 className="h1">Buscar coche</h1>
        <div className="mt-5 max-w-2xl">
          <SearchBox initialQuery={query} autoFocus />
        </div>

        {query.length >= 2 && (
          <p className="mt-6 text-sm text-ink-faint">
            {results.length} resultado{results.length === 1 ? "" : "s"} para &laquo;{query}&raquo;
          </p>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="prose-block mt-4">
            <p>
              No hay ninguna ficha publicada que coincida. El catálogo crece a partir de la
              demanda real: si buscabas un coche concreto, es posible que aún no tenga ficha.
            </p>
          </div>
        )}

        <ul className="mt-4 divide-y divide-neutral-200">
          {results.map((r) => (
            <li key={r.href} className="py-3">
              <Link href={r.href} className="group flex items-baseline justify-between gap-3">
                <span>
                  <span className="font-medium text-ink group-hover:underline">{r.title}</span>{" "}
                  <span className="text-sm text-ink-faint">· {r.subtitle}</span>
                </span>
                <span className="shrink-0 text-xs uppercase tracking-wide text-ink-faint">
                  {KIND_LABEL[r.kind]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
