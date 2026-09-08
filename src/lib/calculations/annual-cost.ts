/**
 * Calculadora de coste anual de propiedad.
 *
 * coste_anual = combustible + mantenimiento + seguro + (impuesto/ITV prorrateados)
 *
 *   combustible          = km_año × (consumo_l_100km / 100) × precio_litro
 *   mantenimiento_anual   = introducido por el usuario (media anual estimada)
 *   seguro_anual          = introducido por el usuario (prima anual)
 *   impuesto_circulacion  = anual, introducido por el usuario (IVTM)
 *   itv_prorrateada       = coste_itv / años_entre_itv
 *
 * No se inventan importes: si el usuario deja un campo a 0, no se suma.
 * `costPerKm` divide el total entre los km/año (0 si no hay km).
 */

export interface AnnualCostInput {
  kmPerYear: number;
  consumptionL100km: number;
  pricePerLitre: number;
  annualMaintenance: number;
  annualInsurance: number;
  annualRoadTax: number;
  itvCost: number;
  /** Años entre inspecciones de ITV (p. ej. 1 o 2). */
  itvEveryYears: number;
}

export interface AnnualCostResult {
  fuel: number;
  maintenance: number;
  insurance: number;
  roadTax: number;
  itvProrated: number;
  total: number;
  costPerMonth: number;
  costPerKm: number;
}

const safe = (n: number): number => (Number.isFinite(n) && n > 0 ? n : 0);
const round2 = (n: number): number => Math.round(n * 100) / 100;

export function computeAnnualCost(input: AnnualCostInput): AnnualCostResult {
  const km = safe(input.kmPerYear);
  const fuel =
    km * (safe(input.consumptionL100km) / 100) * safe(input.pricePerLitre);

  const maintenance = safe(input.annualMaintenance);
  const insurance = safe(input.annualInsurance);
  const roadTax = safe(input.annualRoadTax);

  const itvEvery = safe(input.itvEveryYears) || 1;
  const itvProrated = safe(input.itvCost) / itvEvery;

  const total = fuel + maintenance + insurance + roadTax + itvProrated;

  return {
    fuel: round2(fuel),
    maintenance: round2(maintenance),
    insurance: round2(insurance),
    roadTax: round2(roadTax),
    itvProrated: round2(itvProrated),
    total: round2(total),
    costPerMonth: round2(total / 12),
    costPerKm: km > 0 ? round2(total / km) : 0,
  };
}
