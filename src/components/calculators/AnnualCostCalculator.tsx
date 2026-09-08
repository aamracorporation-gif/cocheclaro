"use client";

import { useMemo, useState } from "react";
import { computeAnnualCost } from "@/lib/calculations/annual-cost";
import { formatEur } from "@/lib/format";
import { track } from "@/lib/analytics";
import { NumberField, ResultRow } from "./fields";

export function AnnualCostCalculator() {
  const [started, setStarted] = useState(false);
  const [state, setState] = useState({
    kmPerYear: 15000,
    consumptionL100km: 6,
    pricePerLitre: 1.6,
    annualMaintenance: 500,
    annualInsurance: 450,
    annualRoadTax: 120,
    itvCost: 45,
    itvEveryYears: 2,
  });

  const set = <K extends keyof typeof state>(key: K) => (value: number) =>
    setState((s) => ({ ...s, [key]: value }));

  const result = useMemo(() => computeAnnualCost(state), [state]);

  return (
    <div
      className="card"
      onFocusCapture={() => {
        if (!started) {
          setStarted(true);
          track("calculator_start", { calculator: "annual_cost" });
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Kilómetros al año" value={state.kmPerYear} onChange={set("kmPerYear")} step={500} suffix="km" />
        <NumberField label="Consumo medio" value={state.consumptionL100km} onChange={set("consumptionL100km")} step={0.1} suffix="l/100 km" />
        <NumberField label="Precio del combustible" value={state.pricePerLitre} onChange={set("pricePerLitre")} step={0.01} suffix="€/l" />
        <NumberField label="Mantenimiento anual" value={state.annualMaintenance} onChange={set("annualMaintenance")} step={50} suffix="€/año" hint="Media estimada de revisiones y desgaste." />
        <NumberField label="Seguro anual" value={state.annualInsurance} onChange={set("annualInsurance")} step={25} suffix="€/año" hint="La prima que pagas tú." />
        <NumberField label="Impuesto de circulación" value={state.annualRoadTax} onChange={set("annualRoadTax")} step={10} suffix="€/año" />
        <NumberField label="Coste de una ITV" value={state.itvCost} onChange={set("itvCost")} step={5} suffix="€" />
        <NumberField label="Años entre ITV" value={state.itvEveryYears} onChange={set("itvEveryYears")} min={1} step={1} suffix="años" />
      </div>

      <div className="mt-5">
        <ResultRow label="Combustible" value={formatEur(result.fuel)} />
        <ResultRow label="Mantenimiento" value={formatEur(result.maintenance)} />
        <ResultRow label="Seguro" value={formatEur(result.insurance)} />
        <ResultRow label="Impuesto de circulación" value={formatEur(result.roadTax)} />
        <ResultRow label="ITV prorrateada" value={formatEur(result.itvProrated)} />
        <ResultRow label="Total anual" value={formatEur(result.total)} strong />
        <p className="mt-2 text-sm text-ink-faint">
          {formatEur(result.costPerMonth)}/mes · {formatEur(result.costPerKm, true)}/km.
        </p>
      </div>

      <details className="mt-4 text-sm text-ink-soft">
        <summary className="cursor-pointer font-medium text-ink">Cómo se calcula</summary>
        <p className="mt-2">
          <code>total = combustible + mantenimiento + seguro + impuesto + (coste_itv / años_entre_itv)</code>
          <br />
          El combustible usa la misma fórmula que la calculadora de combustible. No se incluye la
          depreciación del coche ni los intereses de financiación.
        </p>
      </details>
    </div>
  );
}
