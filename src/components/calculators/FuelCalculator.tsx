"use client";

import { useMemo, useState } from "react";
import { computeFuelCost } from "@/lib/calculations/fuel";
import { formatEur, formatNumber } from "@/lib/format";
import { track } from "@/lib/analytics";
import { NumberField, ResultRow } from "./fields";

export function FuelCalculator() {
  const [started, setStarted] = useState(false);
  const [kmPerYear, setKm] = useState(15000);
  const [consumptionL100km, setConsumption] = useState(6);
  const [pricePerLitre, setPrice] = useState(1.6);

  const result = useMemo(
    () => computeFuelCost({ kmPerYear, consumptionL100km, pricePerLitre }),
    [kmPerYear, consumptionL100km, pricePerLitre],
  );

  return (
    <div
      className="card"
      onFocusCapture={() => {
        if (!started) {
          setStarted(true);
          track("calculator_start", { calculator: "fuel" });
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Kilómetros al año" value={kmPerYear} onChange={setKm} step={500} suffix="km" />
        <NumberField
          label="Consumo medio"
          value={consumptionL100km}
          onChange={setConsumption}
          step={0.1}
          suffix="l/100 km"
        />
        <NumberField
          label="Precio del combustible"
          value={pricePerLitre}
          onChange={setPrice}
          step={0.01}
          suffix="€/l"
        />
      </div>

      <div className="mt-5">
        <ResultRow label="Litros al año" value={`${formatNumber(result.litresPerYear)} l`} />
        <ResultRow label="Coste al mes" value={formatEur(result.costPerMonth)} />
        <ResultRow label="Coste por 100 km" value={formatEur(result.costPer100km, true)} />
        <ResultRow label="Coste anual de combustible" value={formatEur(result.costPerYear)} strong />
      </div>

      <details className="mt-4 text-sm text-ink-soft">
        <summary className="cursor-pointer font-medium text-ink">Cómo se calcula</summary>
        <p className="mt-2">
          <code>litros_año = km_año × (consumo_l_100km / 100)</code>
          <br />
          <code>coste_año = litros_año × precio_litro</code>
          <br />
          <code>coste_mes = coste_año / 12</code>
        </p>
      </details>
    </div>
  );
}
