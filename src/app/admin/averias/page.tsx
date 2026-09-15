import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { listKnownIssuesForAdmin } from "@/lib/db/supabase-admin";
import { ProviderGate } from "@/components/admin/ProviderGate";

export const metadata: Metadata = buildMetadata({
  title: "Averías — panel",
  description: "Gestión de averías conocidas.",
  path: "/admin/averias",
  noindex: true,
});

const STATUS_LABEL: Record<string, string> = {
  draft: "Borrador",
  needs_review: "En revisión",
  published: "Publicado",
};

export default async function AdminIssuesPage() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  const issues = await listKnownIssuesForAdmin();

  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="h1">Averías</h1>
        <Link href="/admin/averias/nueva" className="btn">
          Nueva avería
        </Link>
      </div>
      <p className="prose-block mt-2 text-sm">
        No se puede publicar una avería sin al menos una fuente (§8: no publicar como &laquo;común&raquo;
        sin evidencia suficiente).
      </p>

      <div className="table-wrap mt-6">
        <table className="data-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Gravedad</th>
              <th>Confianza</th>
              <th>Fuentes</th>
              <th>Estado</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td>{i.severity}</td>
                <td>{i.confidence}</td>
                <td>{i.sourceIds.length}</td>
                <td>{STATUS_LABEL[i.status] ?? i.status}</td>
                <td>
                  <Link href={`/admin/averias/${i.id}`} className="link text-sm">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
