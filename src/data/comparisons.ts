import type { Comparison } from "@/lib/types";

const REVIEWED = "2026-09-01";

/**
 * Comparaciones EDITORIALES indexables. Se crean una a una, con contenido
 * diferencial (§5, §11.2 del Plan Maestro). Nunca se generan automáticamente
 * todas las combinaciones posibles.
 */
export const comparisons: Comparison[] = [
  {
    id: "cmp-320d-g20-vs-a4-b9",
    slug: "bmw-320d-g20-vs-audi-a4-40-tdi-b9",
    leftGenerationId: "bmw:serie-3:g20",
    rightGenerationId: "audi:a4:b9",
    editorialSummary:
      "Dos berlinas diésel de referencia para quien hace kilómetros. El BMW 320d G20 prioriza el tacto de conducción y la tracción trasera; el Audi A4 40 TDI B9 apuesta por el aislamiento, la sensación de solidez y una interfaz algo más sencilla. En consumo real de autovía están muy parejos.",
    takeaways: [
      "Conducción: el Serie 3 G20 es más ágil y comunicativo; el A4 B9, más neutro y aislado.",
      "Fiabilidad: en ambos hay que vigilar la gestión de gases (EGR/AdBlue). En el BMW, además, la cadena del B47; en el Audi, el sistema SCR de algunas unidades.",
      "Coste de uso: mantenimiento y neumáticos algo más caros en el BMW; retención de valor ligeramente superior en el Serie 3.",
      "Recomendación: 320d si valoras cómo conduce; A4 40 TDI si priorizas confort y previsibilidad.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-corolla-e210-vs-leon-kl",
    slug: "toyota-corolla-125h-vs-seat-leon-1-5-etsi",
    leftGenerationId: "toyota:corolla:e210",
    rightGenerationId: "seat:leon:kl",
    editorialSummary:
      "El compacto híbrido 'sin sorpresas' frente al compacto turbo-gasolina del Grupo VW. El Corolla 125h gana en fiabilidad esperada y consumo urbano; el León 1.5 eTSI ofrece un interior más moderno, mejor maletero en carrocería Sportstourer y una conducción más ágil.",
    takeaways: [
      "Consumo urbano: claramente a favor del Corolla híbrido (a menudo 4-5 l/100 km).",
      "Fiabilidad esperada: el Corolla parte con ventaja por su mecánica sin turbo ni embrague convencional.",
      "Tecnología e interior: el León se siente más nuevo; multimedia mejor resuelta tras actualizaciones.",
      "Recomendación: Corolla para uso urbano y tranquilidad; León si priorizas conducción, maletero y equipamiento.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-tucson-nx4-vs-sportage-nq5",
    slug: "hyundai-tucson-nx4-vs-kia-sportage-nq5",
    leftGenerationId: "hyundai:tucson:nx4",
    rightGenerationId: "kia:sportage:nq5",
    editorialSummary:
      "Mismo coche por debajo: plataforma y motores compartidos (1.6 T-GDi, 1.6 CRDi, híbridos). La decisión se juega en diseño, ajuste de suspensión y, sobre todo, garantía: 5 años en Hyundai frente a 7 años en Kia.",
    takeaways: [
      "Mecánica: idéntica; los consejos de compra (revisar caja DCT, cuidar el aceite) valen para ambos.",
      "Garantía: 7 años Kia vs 5 años Hyundai, transferible al comprar de segunda mano si está al día.",
      "Confort: el Tucson tiende a un tarado algo más blando; el Sportage, ligeramente más firme.",
      "Recomendación: si dudas, la garantía más larga del Sportage suele inclinar la balanza.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-clio-etech-vs-208-puretech",
    slug: "renault-clio-e-tech-vs-peugeot-208-puretech",
    leftGenerationId: "renault:clio:bja",
    rightGenerationId: "peugeot:208:p21",
    editorialSummary:
      "Dos superventas del segmento B con filosofías distintas. El Clio E-Tech híbrido destaca por consumo urbano y maletero; el 208 PureTech seduce por diseño e interior, pero arrastra la duda de la correa de distribución en las series 2019-2021.",
    takeaways: [
      "Consumo: ventaja para el Clio E-Tech en ciudad; el 208 BlueHDi diésel es la alternativa sobria en carretera.",
      "Punto crítico: en el 208 PureTech hay que verificar sí o sí el estado y el historial de la correa 'húmeda'.",
      "Maletero y habitabilidad: mejores en el Clio.",
      "Recomendación: Clio E-Tech para tranquilidad y ciudad; 208 si te enamora su diseño y compruebas la correa.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-golf8-vs-a3-8y",
    slug: "volkswagen-golf-8-vs-audi-a3-8y",
    leftGenerationId: "volkswagen:golf:mk8",
    rightGenerationId: "audi:a3:8y",
    editorialSummary:
      "Plataforma, motores y cajas idénticos. Cambian el precio de ocasión (mejor en el Golf), la percepción de calidad interior (a favor del A3) y algún detalle de equipamiento y ajuste de chasis.",
    takeaways: [
      "Mecánica: la misma. Verificar software de infoentretenimiento actualizado en ambos y probar la DSG.",
      "Precio de ocasión: el Golf 8 suele salir algo más barato a igualdad de motor y año.",
      "Interior: el A3 transmite algo más de calidad y estatus.",
      "Recomendación: Golf 8 por relación precio/producto; A3 8Y si valoras la imagen premium y el interior.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
];
