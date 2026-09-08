import { describe, it, expect } from "vitest";
import { computeFuelCost } from "./fuel";

describe("computeFuelCost", () => {
  it("aplica la fórmula km × (consumo/100) × precio", () => {
    const r = computeFuelCost({ kmPerYear: 15000, consumptionL100km: 6, pricePerLitre: 1.6 });
    // litros = 15000 * 0.06 = 900 ; coste = 900 * 1.6 = 1440
    expect(r.litresPerYear).toBe(900);
    expect(r.costPerYear).toBe(1440);
    expect(r.costPerMonth).toBe(120);
    expect(r.costPer100km).toBe(9.6);
  });

  it("normaliza entradas no válidas a 0", () => {
    const r = computeFuelCost({ kmPerYear: -5, consumptionL100km: NaN, pricePerLitre: 1.6 });
    expect(r.costPerYear).toBe(0);
    expect(r.litresPerYear).toBe(0);
  });

  it("redondea a dos decimales", () => {
    const r = computeFuelCost({ kmPerYear: 12345, consumptionL100km: 5.7, pricePerLitre: 1.629 });
    expect(Number.isInteger(r.costPerYear * 100)).toBe(true);
  });
});
