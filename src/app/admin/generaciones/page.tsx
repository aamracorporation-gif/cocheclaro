import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { listGenerationsForAdmin } from "@/lib/db/supabase-admin";
import { setGenerationStatusAction } from "@/app/admin/actions";
import { ProviderGate } from "@/components/admin/ProviderGate";

export const metadata: Metadata = buildMetadata({
  title: "Generaciones — panel",
  description: "Publicar o retirar fichas de generación.",
  path: "/admin/generaciones",
  noindex: true,
});

const STATUS_LABEL: Record<string, string> = {
  draft: "Borrador",
  needs_review: "En revisión",
  published: "Publicado",
};

export default async function AdminGenerationsPage() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  const generations = await listGenerationsForAdmin();

  return (
    <Container>
      <h1 className="h1">Generaciones</h1>
      <p className="prose-block mt-2 text-sm">
        Solo <strong>published</strong> genera URL indexable y entra en el sitemap (§8.2). Cambiar
        el estado revalida el contenido público de inmediato.
      </p>

      <div className="table-wrap mt-6">
        <table className="data-table">
          <thead>
            <tr>
              <th>Marca / modelo</th>
              <th>Generación</th>
              <th>Años</th>
              <th>Estado</th>
              <th>Cambiar a</th>
            </tr>
          </thead>
          <tbody>
            {generations.map((g) => (
              <tr key={g.id}>
                <td>
                  {g.brandName} {g.modelName}
                </td>
                <td>
                  {g.code} <span className="text-ink-faint">({g.slug})</span>
                </td>
                <td>
                  {g.startYear}
                  {g.endYear ? `–${g.endYear}` : "–actualidad"}
                </td>
                <td>{STATUS_LABEL[g.status] ?? g.status}</td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {(["draft", "needs_review", "published"] as const)
                      .filter((s) => s !== g.status)
                      .map((s) => (
                        <form key={s} action={setGenerationStatusAction}>
                          <input type="hidden" name="id" value={g.id} />
                          <input type="hidden" name="status" value={s} />
                          <button type="submit" className="btn-outline px-2 py-1 text-xs">
                            {STATUS_LABEL[s]}
                          </button>
                        </form>
                      ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
