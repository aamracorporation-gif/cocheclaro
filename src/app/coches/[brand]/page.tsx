import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  getBrands,
  getBrandBySlug,
  getModelsByBrandId,
  getGenerationsByModelId,
} from "@/lib/db";
import { yearRange } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const brands = await getBrands();
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = await getBrandBySlug(brandSlug);
  if (!brand) return buildMetadata({ title: "Marca no encontrada", description: "", path: `/coches/${brandSlug}`, noindex: true });
  return buildMetadata({
    title: `${brand.name}: modelos, motores y averías`,
    description: `Fichas de ${brand.name} usados: generaciones, motores que montan, averías conocidas y mantenimiento. Datos con fuentes en ${site.name}.`,
    path: `/coches/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: brandSlug } = await params;
  const brand = await getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const models = await getModelsByBrandId(brand.id);
  const modelsWithGens = await Promise.all(
    models.map(async (model) => ({
      model,
      generations: await getGenerationsByModelId(model.id),
    })),
  );

  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Coches", path: "/coches" },
          { name: brand.name, path: `/coches/${brand.slug}` },
        ]}
      />
      <h1 className="h1 mt-3">{brand.name}</h1>
      <p className="prose-block mt-2">
        Modelos de {brand.name} con ficha en {site.name}. Cada generación detalla sus motores,
        las averías conocidas con nivel de evidencia y los intervalos de mantenimiento.
      </p>

      <div className="mt-8 space-y-6">
        {modelsWithGens.map(({ model, generations }) => (
          <section key={model.id} className="card">
            <h2 className="h3">
              <Link href={`/coches/${brand.slug}/${model.slug}`} className="link">
                {brand.name} {model.name}
              </Link>{" "}
              <span className="text-sm font-normal text-ink-faint">· {model.bodyType}</span>
            </h2>
            {generations.length > 0 ? (
              <ul className="mt-2 space-y-1 text-sm">
                {generations.map((g) => (
                  <li key={g.id}>
                    <Link
                      href={`/coches/${brand.slug}/${model.slug}/${g.slug}`}
                      className="link"
                    >
                      {model.name} {g.code} ({yearRange(g.startYear, g.endYear)})
                    </Link>{" "}
                    <span className="text-ink-faint">— {g.oneLiner}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-ink-faint">Sin generaciones publicadas todavía.</p>
            )}
          </section>
        ))}
      </div>
    </Container>
  );
}
