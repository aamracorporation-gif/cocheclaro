import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/seo";
import { ProviderGate } from "@/components/admin/ProviderGate";
import { ImportForm } from "@/components/admin/ImportForm";

export const metadata: Metadata = buildMetadata({
  title: "Importar CSV — panel",
  description: "Importación de averías y mantenimiento por lote.",
  path: "/admin/importar",
  noindex: true,
});

export default function AdminImportPage() {
  if (process.env.DATA_PROVIDER !== "supabase") {
    return (
      <Container>
        <ProviderGate />
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="h1">Importar CSV</h1>
      <p className="prose-block mt-2 text-sm">
        Formato largo (una fila = un campo), ver{" "}
        <a href="/DATA_IMPORT_TEMPLATE.csv" className="link">
          DATA_IMPORT_TEMPLATE.csv
        </a>
        . Esta versión importa <strong>averías</strong> y <strong>mantenimiento</strong>; otros
        tipos de fila se avisan pero no bloquean el resto del fichero. No es una transacción
        atómica: si falla a mitad, revisa qué quedó aplicado en /admin/averias y /admin/fuentes.
      </p>

      <div className="mt-6 max-w-3xl">
        <ImportForm />
      </div>
    </Container>
  );
}
