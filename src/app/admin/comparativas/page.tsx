import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { listComparisonsForAdmin } from "@/lib/db/supabase-admin";
import { setComparisonStatusAction } from "@/app/admin/actions";
import { ProviderGate } from "@/components/admin/ProviderGate";

export const metadata: Metadata = buildMetadata({
  title: "Comparativas — panel",
  description: "Publicar o retirar comparativas curadas.",
  path: "/admin/comparativas",
  noindex: true,
});

const STATUS_LABEL: Record<string, string> = {
  draft: "Borrador",
  needs_review: "En revisión",
  published: "Publicado",
};

export default async function AdminComparisonsPage() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  const comparisons = await listComparisonsForAdmin();

  return (
    <Container>
      <h1 className="h1">Comparativas</h1>
      <p className="prose-block mt-2 text-sm">
        Solo las comparativas <strong>published</strong> son indexables (§11.2: nunca generar ni
        indexar automáticamente todas las combinaciones posibles).
      </p>

      <div className="table-wrap mt-6">
        <table className="data-table">
          <thead>
            <tr>
              <th>Slug</th>
              <th>Estado</th>
              <th>Cambiar a</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((c) => (
              <tr key={c.id}>
                <td>{c.slug}</td>
                <td>{STATUS_LABEL[c.status] ?? c.status}</td>
                <td>
                  <div className="flex flex-wrap gap-1">
                    {(["draft", "needs_review", "published"] as const)
                      .filter((s) => s !== c.status)
                      .map((s) => (
                        <form key={s} action={setComparisonStatusAction}>
                          <input type="hidden" name="id" value={c.id} />
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
