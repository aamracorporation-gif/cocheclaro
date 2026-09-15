import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { listSourcesForAdmin } from "@/lib/db/supabase-admin";
import { saveSourceAction } from "@/app/admin/actions";
import { ProviderGate } from "@/components/admin/ProviderGate";
import { SourceForm } from "@/components/admin/SourceForm";

export const metadata: Metadata = buildMetadata({
  title: "Fuentes — panel",
  description: "Gestión de fuentes citadas en fichas y averías.",
  path: "/admin/fuentes",
  noindex: true,
});

export default async function AdminSourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  const { edit } = await searchParams;
  const sources = await listSourcesForAdmin();
  const editing = edit ? sources.find((s) => s.id === edit) : undefined;

  return (
    <Container>
      <h1 className="h1">Fuentes</h1>
      <p className="prose-block mt-2 text-sm">
        Cada dato crítico (avería, mantenimiento) debe poder apuntar a una fuente verificable
        (§8.1).
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Tipo</th>
                <th>Editor</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>
                    <a href={s.url} target="_blank" rel="noreferrer" className="link">
                      {s.title}
                    </a>
                  </td>
                  <td>{s.sourceType}</td>
                  <td>
                    <a href={`/admin/fuentes?edit=${s.id}`} className="link text-sm">
                      Editar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SourceForm action={saveSourceAction} initial={editing} />
      </div>
    </Container>
  );
}
