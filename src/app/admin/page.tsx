import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { validateDataset, datasetStats } from "@/lib/validate-data";

// El panel NO se indexa (§11) y está protegido por contraseña (middleware.ts
// + ADMIN_PASSWORD). Con DATA_PROVIDER=local esta página es de solo lectura
// (src/data/*.ts es código, no una base de datos). Con DATA_PROVIDER=supabase
// se habilitan las secciones de edición (generaciones, averías, fuentes,
// comparativas) e importación CSV.
export const metadata: Metadata = buildMetadata({
  title: "Consola editorial",
  description: "Estado del dataset y validaciones.",
  path: "/admin",
  noindex: true,
});

export default function AdminPage() {
  const isSupabase = process.env.DATA_PROVIDER === "supabase";
  const issues = validateDataset();
  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warn");
  const stats = datasetStats();

  return (
    <Container>
      <div className="flex items-start justify-between gap-4">
        <h1 className="h1">Consola editorial</h1>
        <form action="/api/admin/logout" method="post">
          <button type="submit" className="btn-outline px-3 py-1.5 text-sm">
            Cerrar sesión
          </button>
        </form>
      </div>

      <p className="prose-block mt-2 text-sm">
        Proveedor de datos activo: <strong>{isSupabase ? "supabase" : "local"}</strong>.{" "}
        {isSupabase
          ? "Edición habilitada."
          : "Solo lectura — src/data/*.ts es código fuente, no una base de datos (ver README para activar Supabase)."}
      </p>

      <nav className="mt-4 flex flex-wrap gap-2">
        <Link href="/admin/generaciones" className="btn-outline px-3 py-1.5 text-sm">
          Generaciones
        </Link>
        <Link href="/admin/averias" className="btn-outline px-3 py-1.5 text-sm">
          Averías
        </Link>
        <Link href="/admin/fuentes" className="btn-outline px-3 py-1.5 text-sm">
          Fuentes
        </Link>
        <Link href="/admin/comparativas" className="btn-outline px-3 py-1.5 text-sm">
          Comparativas
        </Link>
        <Link href="/admin/importar" className="btn-outline px-3 py-1.5 text-sm">
          Importar CSV
        </Link>
      </nav>

      {!isSupabase && (
        <p className="prose-block mt-8">
          Vista de solo lectura del estado del contenido de demostración. Las secciones de arriba
          se activan con <code>DATA_PROVIDER=supabase</code> (ver README).
        </p>
      )}

      <section className="mt-8">
        <h2 className="h2">Resumen del dataset</h2>
        <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Marcas" value={stats.brands} />
          <Stat label="Modelos" value={stats.models} />
          <Stat label="Generaciones (publicadas)" value={`${stats.generationsPublished} / ${stats.generations}`} />
          <Stat label="Motores" value={stats.engines} />
          <Stat label="Averías" value={stats.knownIssues} />
          <Stat label="Ítems de mantenimiento" value={stats.maintenanceItems} />
          <Stat label="Comparativas" value={stats.comparisons} />
          <Stat label="Fuentes" value={stats.sources} />
        </dl>
        {stats.hasDemoData && (
          <p className="mt-3 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            {stats.demoGenerations} generaciones están marcadas como <strong>demo</strong>. No
            deben considerarse datos de producción.
          </p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="h2">
          Validaciones{" "}
          <span className={errors.length ? "text-red-700" : "text-emerald-700"}>
            ({errors.length} errores, {warnings.length} avisos)
          </span>
        </h2>
        {issues.length === 0 ? (
          <p className="mt-2 text-sm text-emerald-700">Sin incidencias. El dataset es coherente.</p>
        ) : (
          <ul className="mt-3 space-y-1 text-sm">
            {issues.map((i, idx) => (
              <li key={idx} className="flex gap-2">
                <span
                  className={`shrink-0 rounded px-1.5 text-xs font-semibold ${
                    i.level === "error"
                      ? "bg-red-100 text-red-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {i.level}
                </span>
                <span className="text-ink-soft">
                  <strong className="text-ink">{i.entity}</strong> — {i.message}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="h2">Pendiente de revisión</h2>
        {stats.pending.length === 0 ? (
          <p className="mt-2 text-sm text-ink-faint">
            Nada pendiente: todas las entidades están publicadas.
          </p>
        ) : (
          <ul className="mt-2 list-disc pl-5 text-sm text-ink-soft">
            {stats.pending.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="card">
      <dt className="text-xs uppercase tracking-wide text-ink-faint">{label}</dt>
      <dd className="mt-1 text-xl font-bold text-ink">{value}</dd>
    </div>
  );
}
