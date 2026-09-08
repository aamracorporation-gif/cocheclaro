import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { getBrands, getModelsByBrandId } from "@/lib/db";

export const metadata: Metadata = buildMetadata({
  title: "Todas las marcas de coches",
  description:
    "Explora fichas de coches usados por marca y modelo: motores, averías conocidas y coste de mantenimiento.",
  path: "/coches",
});

export const revalidate = 3600;

export default async function BrandsPage() {
  const brands = await getBrands();
  const withModels = await Promise.all(
    brands.map(async (brand) => ({ brand, models: await getModelsByBrandId(brand.id) })),
  );

  return (
    <Container>
      <Breadcrumbs crumbs={[{ name: "Inicio", path: "/" }, { name: "Coches", path: "/coches" }]} />
      <h1 className="h1 mt-3">Marcas de coches</h1>
      <p className="prose-block mt-2">
        Elige una marca para ver sus modelos y generaciones con ficha publicada.
      </p>

      <div className="mt-8 space-y-8">
        {withModels.map(({ brand, models }) => (
          <section key={brand.id}>
            <h2 className="h3">
              <Link href={`/coches/${brand.slug}`} className="link">
                {brand.name}
              </Link>{" "}
              <span className="text-sm font-normal text-ink-faint">· {brand.country}</span>
            </h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {models.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/coches/${brand.slug}/${m.slug}`}
                    className="btn-outline px-3 py-1.5 text-sm"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
