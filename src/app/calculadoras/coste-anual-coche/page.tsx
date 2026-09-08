import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnnualCostCalculator } from "@/components/calculators/AnnualCostCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora de coste anual de un coche",
  description:
    "Suma combustible, mantenimiento, seguro, impuesto de circulación e ITV prorrateada para estimar cuánto te cuesta tener el coche al año, al mes y por kilómetro.",
  path: "/calculadoras/coste-anual-coche",
});

export default function AnnualCostPage() {
  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras" },
          { name: "Coste anual", path: "/calculadoras/coste-anual-coche" },
        ]}
      />
      <h1 className="h1 mt-3">Calculadora de coste anual de un coche</h1>
      <p className="prose-block mt-2">
        Estima el coste de propiedad sumando combustible, mantenimiento, seguro e impuestos.
        Los importes de seguro y mantenimiento los pones tú: no inventamos cifras.
      </p>
      <div className="mt-6 max-w-2xl">
        <AnnualCostCalculator />
      </div>
    </Container>
  );
}
