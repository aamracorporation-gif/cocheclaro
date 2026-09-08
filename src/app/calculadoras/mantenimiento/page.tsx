import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MaintenancePlanner } from "@/components/calculators/MaintenancePlanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Planificador de mantenimiento por kilometraje",
  description:
    "Introduce el kilometraje actual y los intervalos de mantenimiento de tu coche para ver qué tareas tocan pronto.",
  path: "/calculadoras/mantenimiento",
});

export default function MaintenancePlanPage() {
  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras" },
          { name: "Mantenimiento", path: "/calculadoras/mantenimiento" },
        ]}
      />
      <h1 className="h1 mt-3">Planificador de mantenimiento</h1>
      <p className="prose-block mt-2">
        A partir del kilometraje actual y de los intervalos que introduzcas, calculamos la
        próxima vez que toca cada tarea. Ajusta los intervalos a los del plan de tu coche.
      </p>
      <div className="mt-6 max-w-3xl">
        <MaintenancePlanner />
      </div>
    </Container>
  );
}
