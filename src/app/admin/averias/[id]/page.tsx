import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { getEngines } from "@/lib/db";
import { getKnownIssueForAdmin, listGenerationsForAdmin, listSourcesForAdmin } from "@/lib/db/supabase-admin";
import { saveKnownIssueAction } from "@/app/admin/actions";
import { ProviderGate } from "@/components/admin/ProviderGate";
import { KnownIssueForm } from "@/components/admin/KnownIssueForm";

export const metadata: Metadata = buildMetadata({
  title: "Editar avería — panel",
  description: "Crear o editar una avería conocida.",
  path: "/admin/averias/nueva",
  noindex: true,
});

export default async function AdminIssueEditPage({ params }: { params: Promise<{ id: string }> }) {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  const { id } = await params;
  const isNew = id === "nueva";

  const [engines, generations, sources, existing] = await Promise.all([
    getEngines(),
    listGenerationsForAdmin(),
    listSourcesForAdmin(),
    isNew ? Promise.resolve(null) : getKnownIssueForAdmin(id),
  ]);

  if (!isNew && !existing) notFound();

  return (
    <Container>
      <h1 className="h1">{isNew ? "Nueva avería" : `Editar: ${existing?.title}`}</h1>
      <div className="mt-6 max-w-2xl">
        <KnownIssueForm
          action={saveKnownIssueAction}
          initial={existing ?? undefined}
          engines={engines}
          generations={generations}
          sources={sources}
        />
      </div>
    </Container>
  );
}
