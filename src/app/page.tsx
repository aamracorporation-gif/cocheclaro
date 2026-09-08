import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SearchBox } from "@/components/SearchBox";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { getFeaturedGenerations, getComparisons, counts } from "@/lib/db";
import { yearRange } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — conoce el coche antes de comprarlo`,
  description:
    "Fichas de coches usados en España con motores, averías conocidas, mantenimiento y coste real. Busca por marca, modelo, generación o código de motor.",
  path: "/",
});

export default async function HomePage() {
  const [featured, comparisons, stats] = await Promise.all([
    getFeaturedGenerations(),
    getComparisons(),
    counts(),
  ]);

  return (
    <Container>
      {/* Hero */}
      <section className="py-6 sm:py-10">
        <h1 className="h1 max-w-3xl">Conoce el coche antes de comprarlo</h1>
        <p className="prose-block mt-3">
          Identifica el motor exacto, sus averías conocidas y cuánto cuesta mantenerlo. Sin
          rodeos y con fuentes.
        </p>
        <div className="mt-6 max-w-2xl">
          <SearchBox size="lg" autoFocus />
          <p className="mt-2 text-sm text-ink-faint">
            Prueba: &laquo;BMW 320d 2018&raquo;, &laquo;B47 cadena&raquo;, &laquo;qué motor lleva
            un 518d 2016&raquo;.
          </p>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="grid gap-3 sm:grid-cols-3">
        <QuickLink href="/coches" title="Buscar por marca" desc="Marca → modelo → generación → motor." />
        <QuickLink href="/comparar" title="Comparar coches" desc="Diferencias reales entre alternativas cercanas." />
        <QuickLink
          href="/calculadoras/coste-anual-coche"
          title="Calcular coste anual"
          desc="Combustible, seguro, mantenimiento e impuestos."
        />
      </section>

      {/* Modelos destacados (selección editorial) */}
      <section className="mt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="h2">Fichas destacadas</h2>
          <Link href="/coches" className="link text-sm">
            Ver todas las marcas
          </Link>
        </div>
        <p className="mt-1 text-sm text-ink-faint">
          Selección editorial, no un listado automático.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {featured.map(({ generation, model, brand }) => (
            <li key={generation.id}>
              <Link
                href={`/coches/${brand.slug}/${model.slug}/${generation.slug}`}
                className="card block transition-colors hover:border-neutral-300"
              >
                <span className="eyebrow">{brand.name}</span>
                <span className="mt-1 block font-semibold text-ink">
                  {model.name} {generation.code}{" "}
                  <span className="font-normal text-ink-faint">
                    ({yearRange(generation.startYear, generation.endYear)})
                  </span>
                </span>
                <span className="mt-1 block text-sm text-ink-soft">{generation.oneLiner}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Cómo verificamos los datos */}
      <section className="mt-12 card bg-neutral-50">
        <h2 className="h2">Cómo verificamos los datos</h2>
        <div className="prose-block mt-3">
          <p>
            Cada ficha se construye a partir de campos estructurados (código de motor, potencia,
            par, intervalos de mantenimiento, averías con síntomas y gravedad). Todo dato crítico
            puede vincularse a una fuente y a una fecha de revisión.
          </p>
          <p className="mt-2">
            No publicamos una avería como &laquo;común&raquo; sin evidencia suficiente, y marcamos
            los huecos como &laquo;sin dato&raquo; en lugar de rellenarlos con estimaciones.
          </p>
          <Link href="/metodologia" className="link mt-2 inline-block">
            Leer la metodología completa
          </Link>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          <Stat n={stats.generations} label="Fichas de generación" />
          <Stat n={stats.engines} label="Fichas de motor" />
          <Stat n={stats.issues} label="Averías documentadas" />
          <Stat n={stats.brands} label="Marcas" />
        </dl>
      </section>

      {/* Comparaciones */}
      <section className="mt-12">
        <h2 className="h2">Comparativas curadas</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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
      </section>
    </Container>
  );
}

function QuickLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="card transition-colors hover:border-neutral-300">
      <span className="font-semibold text-ink">{title}</span>
      <span className="mt-1 block text-sm text-ink-soft">{desc}</span>
    </Link>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <dt className="text-2xl font-bold text-ink">{n}</dt>
      <dd className="text-xs text-ink-faint">{label}</dd>
    </div>
  );
}
