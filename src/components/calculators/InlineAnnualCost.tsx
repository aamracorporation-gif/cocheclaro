"use client";

import { useMemo, useState } from "react";
import { computeAnnualCost } from "@/lib/calculations/annual-cost";
import { formatEur } from "@/lib/format";
import { track } from "@/lib/analytics";
import { NumberField, ResultRow } from "./fields";

/**
 * Calculadora de coste anual embebida en la ficha de generación, precargada
 * con el consumo homologado si está disponible (§6.2, punto 10 del prompt).
 * El seguro lo introduce el usuario; nada se inventa.
 */
export function InlineAnnualCost({
  defaultConsumption,
  vehicleLabel,
}: {
  defaultConsumption?: number;
  vehicleLabel: string;
}) {
  const [started, setStarted] = useState(false);
  const [kmPerYear, setKm] = useState(15000);
  const [consumptionL100km, setConsumption] = useState(defaultConsumption ?? 6);
  const [pricePerLitre, setPrice] = useState(1.6);
  const [annualMaintenance, setMaintenance] = useState(500);
  const [annualInsurance, setInsurance] = useState(450);
  const [annualRoadTax, setRoadTax] = useState(120);

  const result = useMemo(
    () =>
      computeAnnualCost({
        kmPerYear,
        consumptionL100km,
        pricePerLitre,
        annualMaintenance,
        annualInsurance,
        annualRoadTax,
        itvCost: 45,
        itvEveryYears: 2,
      }),
    [kmPerYear, consumptionL100km, pricePerLitre, annualMaintenance, annualInsurance, annualRoadTax],
  );

  function onFirstInteraction() {
    if (!started) {
      setStarted(true);
      track("calculator_start", { calculator: "inline_annual_cost", vehicle: vehicleLabel });
    }
  }

  return (
    <section
      aria-labelledby="coste-anual"
      className="card"
      onFocusCapture={onFirstInteraction}
    >
      <h2 id="coste-anual" className="h2">
        Coste anual estimado
      </h2>
      <p className="mt-1 text-sm text-ink-faint">
        Precargado con el consumo homologado. Ajusta los valores a tu caso; el seguro es el que
        tú pagas.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
        <NumberField
          label="Mantenimiento anual"
          value={annualMaintenance}
          onChange={setMaintenance}
          step={50}
          suffix="€/año"
        />
        <NumberField
          label="Seguro anual (el tuyo)"
          value={annualInsurance}
          onChange={setInsurance}
          step={25}
          suffix="€/año"
        />
        <NumberField
          label="Impuesto de circulación"
          value={annualRoadTax}
          onChange={setRoadTax}
          step={10}
          suffix="€/año"
        />
      </div>

      <div className="mt-5">
        <ResultRow label="Combustible" value={formatEur(result.fuel)} />
        <ResultRow label="Mantenimiento" value={formatEur(result.maintenance)} />
        <ResultRow label="Seguro" value={formatEur(result.insurance)} />
        <ResultRow label="Impuesto + ITV prorrateada" value={formatEur(result.roadTax + result.itvProrated)} />
        <ResultRow label="Total anual" value={formatEur(result.total)} strong />
        <p className="mt-2 text-sm text-ink-faint">
          Equivale a {formatEur(result.costPerMonth)}/mes · {formatEur(result.costPerKm, true)}/km.
        </p>
      </div>

      <p className="mt-3 text-xs text-ink-faint">
        Cálculo local en tu navegador. No incluye depreciación ni financiación.{" "}
        <a href="/calculadoras/coste-anual-coche" className="link">
          Abrir la calculadora completa
        </a>
        .
      </p>
    </section>
  );
}
