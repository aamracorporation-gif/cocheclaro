import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { getComparisons } from "@/lib/db";

export const metadata: Metadata = buildMetadata({
  title: "Comparativas de coches usados",
  description:
    "Comparaciones curadas entre alternativas realmente cercanas: diferencias de conducción, fiabilidad y coste de uso.",
  path: "/comparar",
});

export const revalidate = 3600;

export default async function CompareIndexPage() {
  const comparisons = await getComparisons();

  return (
    <Container>
      <Breadcrumbs crumbs={[{ name: "Inicio", path: "/" }, { name: "Comparar", path: "/comparar" }]} />
      <h1 className="h1 mt-3">Comparativas</h1>
      <p className="prose-block mt-2">
        Solo publicamos comparaciones cuando aportan algo que un artículo genérico no resuelve.
        ¿Quieres comparar dos fichas concretas al vuelo?{" "}
        <Link href="/comparar/libre" className="link">
          Usa el comparador libre
        </Link>
        .
      </p>

      <ul className="mt-8 space-y-3">
        {comparisons.map(({ comparison, left, right }) => (
          <li key={comparison.id}>
            <Link
              href={`/comparar/${comparison.slug}`}
              className="card block transition-colors hover:border-neutral-300"
            >
              <span className="font-semibold text-ink">
                {left.title} vs {right.title}
              </span>
              <span className="mt-1 block text-sm text-ink-soft">
                {comparison.editorialSummary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
