import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  getBrands,
  getModelsByBrandId,
  getModelBySlug,
  getGenerationsByModelId,
} from "@/lib/db";
import { yearRange } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const brands = await getBrands();
  const out: Array<{ brand: string; model: string }> = [];
  for (const brand of brands) {
    const models = await getModelsByBrandId(brand.id);
    for (const model of models) out.push({ brand: brand.slug, model: model.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}): Promise<Metadata> {
  const { brand: brandSlug, model: modelSlug } = await params;
  const base = await getModelBySlug(brandSlug, modelSlug);
  if (!base) {
    return buildMetadata({
      title: "Modelo no encontrado",
      description: "",
      path: `/coches/${brandSlug}/${modelSlug}`,
      noindex: true,
    });
  }
  const { brand, model } = base;
  return buildMetadata({
    title: `${brand.name} ${model.name}: generaciones, motores y problemas`,
    description: `Todas las generaciones del ${brand.name} ${model.name} usadas: motores, averías conocidas, mantenimiento y coste. Datos con fuentes en ${site.name}.`,
    path: `/coches/${brand.slug}/${model.slug}`,
  });
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: brandSlug, model: modelSlug } = await params;
  const base = await getModelBySlug(brandSlug, modelSlug);
  if (!base) notFound();
  const { brand, model } = base;

  const generations = await getGenerationsByModelId(model.id);
  if (generations.length === 0) notFound();

  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Coches", path: "/coches" },
          { name: brand.name, path: `/coches/${brand.slug}` },
          { name: model.name, path: `/coches/${brand.slug}/${model.slug}` },
        ]}
      />
      <h1 className="h1 mt-3">
        {brand.name} {model.name}
      </h1>
      <p className="prose-block mt-2">
        {generations.length === 1
          ? "Generación con ficha publicada:"
          : `${generations.length} generaciones con ficha publicada. Elige la que corresponde al año del coche que te interesa.`}
      </p>

      <ul className="mt-6 space-y-3">
        {generations.map((g) => (
          <li key={g.id}>
            <Link
              href={`/coches/${brand.slug}/${model.slug}/${g.slug}`}
              className="card block transition-colors hover:border-neutral-300"
            >
              <span className="font-semibold text-ink">
                {model.name} {g.code}{" "}
                <span className="font-normal text-ink-faint">
                  ({yearRange(g.startYear, g.endYear)})
                </span>
              </span>
              <span className="mt-1 block text-sm text-ink-soft">{g.oneLiner}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
