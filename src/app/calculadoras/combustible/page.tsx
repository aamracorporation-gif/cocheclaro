import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FuelCalculator } from "@/components/calculators/FuelCalculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculadora de gasto de combustible",
  description:
    "Calcula cuánto gastas en combustible al año, al mes y por cada 100 km según tus kilómetros, tu consumo medio y el precio del carburante.",
  path: "/calculadoras/combustible",
});

export default function FuelCalcPage() {
  return (
    <Container>
      <Breadcrumbs
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Calculadoras", path: "/calculadoras" },
          { name: "Combustible", path: "/calculadoras/combustible" },
        ]}
      />
      <h1 className="h1 mt-3">Calculadora de gasto de combustible</h1>
      <p className="prose-block mt-2">
        Introduce tus kilómetros al año, el consumo medio real del coche y el precio del
        combustible. El cálculo se hace en tu navegador.
      </p>
      <div className="mt-6 max-w-2xl">
        <FuelCalculator />
      </div>
    </Container>
  );
}
