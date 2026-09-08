const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const eur2 = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const num = new Intl.NumberFormat("es-ES");

export function formatEur(value: number, decimals = false): string {
  return (decimals ? eur2 : eur).format(value);
}

export function formatNumber(value: number): string {
  return num.format(value);
}

export function formatKm(value: number): string {
  return `${num.format(Math.round(value))} km`;
}

export function yearRange(start: number, end?: number): string {
  return end && end !== start ? `${start}–${end}` : `${start}–actualidad`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
}

const FUEL_LABELS: Record<string, string> = {
  gasolina: "Gasolina",
  diesel: "Diésel",
  hibrido: "Híbrido",
  "hibrido-enchufable": "Híbrido enchufable",
  electrico: "Eléctrico",
  glp: "GLP",
};

export function fuelLabel(fuel: string): string {
  return FUEL_LABELS[fuel] ?? fuel;
}

const SEVERITY_LABELS: Record<string, string> = {
  baja: "Gravedad baja",
  media: "Gravedad media",
  alta: "Gravedad alta",
};

export function severityLabel(s: string): string {
  return SEVERITY_LABELS[s] ?? s;
}

const CONFIDENCE_LABELS: Record<string, string> = {
  anecdotica: "Evidencia anecdótica",
  moderada: "Evidencia moderada",
  solida: "Evidencia sólida",
};

export function confidenceLabel(c: string): string {
  return CONFIDENCE_LABELS[c] ?? c;
}
