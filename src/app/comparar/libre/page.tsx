import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FreeComparator } from "@/components/FreeComparator";
import { buildMetadata } from "@/lib/seo";
import { getAllGenerationSummaries } from "@/lib/compare";

// Comparador libre: NO indexable (§7.2). Solo las comparaciones editoriales
// entran en el índice.
export const metadata: Metadata = buildMetadata({
  title: "Comparador libre de coches",
  description: "Compara dos fichas cualquiera al vuelo.",
  path: "/comparar/libre",
  noindex: true,
});

export const revalidate = 3600;

export default async function FreeComparePage() {
  const items = await getAllGenerationSummaries();

  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Comparar", path: "/comparar" },
          { name: "Comparador libre", path: "/comparar/libre" },
        ]}
      />
      <h1 className="h1 mt-3">Comparador libre</h1>
      <p className="prose-block mt-2">
        Elige dos fichas para verlas enfrentadas. Esta página no se indexa: las comparativas que
        publicamos en buscadores son las{" "}
        <a href="/comparar" className="link">
          comparativas curadas
        </a>
        .
      </p>
      <div className="mt-6">
        <FreeComparator items={items} />
      </div>
    </Container>
  );
}
