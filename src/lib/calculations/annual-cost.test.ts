import { describe, it, expect } from "vitest";
import { computeAnnualCost } from "./annual-cost";

const base = {
  kmPerYear: 15000,
  consumptionL100km: 6,
  pricePerLitre: 1.6,
  annualMaintenance: 500,
  annualInsurance: 450,
  annualRoadTax: 120,
  itvCost: 45,
  itvEveryYears: 2,
};

describe("computeAnnualCost", () => {
  it("suma todas las partidas", () => {
    const r = computeAnnualCost(base);
    // combustible 1440 + mant 500 + seguro 450 + impuesto 120 + itv 22.5
    expect(r.fuel).toBe(1440);
    expect(r.itvProrated).toBe(22.5);
    expect(r.total).toBe(2532.5);
    expect(r.costPerMonth).toBe(211.04);
  });

  it("no suma partidas dejadas a 0", () => {
    const r = computeAnnualCost({ ...base, annualInsurance: 0, annualMaintenance: 0 });
    expect(r.insurance).toBe(0);
    expect(r.maintenance).toBe(0);
    expect(r.total).toBe(1440 + 120 + 22.5);
  });

  it("evita dividir por cero en itvEveryYears y costPerKm", () => {
    const r = computeAnnualCost({ ...base, itvEveryYears: 0, kmPerYear: 0 });
    expect(Number.isFinite(r.itvProrated)).toBe(true);
    expect(r.costPerKm).toBe(0);
  });
});
