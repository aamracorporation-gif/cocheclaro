/**
 * Calculadora de combustible.
 *
 * Fórmula:
 *   litros_año   = km_año × (consumo_l_100km / 100)
 *   coste_año    = litros_año × precio_litro
 *   coste_mes    = coste_año / 12
 *   coste_100km  = consumo_l_100km × precio_litro
 *
 * Todas las entradas se asumen > 0. La función es pura y no lanza:
 * los valores no válidos se normalizan a 0.
 */

export interface FuelInput {
  kmPerYear: number;
  consumptionL100km: number;
  pricePerLitre: number;
}

export interface FuelResult {
  litresPerYear: number;
  costPerYear: number;
  costPerMonth: number;
  costPer100km: number;
}

const safe = (n: number): number => (Number.isFinite(n) && n > 0 ? n : 0);
const round2 = (n: number): number => Math.round(n * 100) / 100;

export function computeFuelCost(input: FuelInput): FuelResult {
  const km = safe(input.kmPerYear);
  const consumption = safe(input.consumptionL100km);
  const price = safe(input.pricePerLitre);

  const litresPerYear = km * (consumption / 100);
  const costPerYear = litresPerYear * price;

  return {
    litresPerYear: round2(litresPerYear),
    costPerYear: round2(costPerYear),
    costPerMonth: round2(costPerYear / 12),
    costPer100km: round2(consumption * price),
  };
}
