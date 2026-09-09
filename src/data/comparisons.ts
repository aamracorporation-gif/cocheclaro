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
  {
    id: "cmp-golf7-vs-leon5f",
    slug: "volkswagen-golf-7-vs-seat-leon-mk3",
    leftGenerationId: "volkswagen:golf:mk7",
    rightGenerationId: "seat:leon:5f",
    editorialSummary:
      "Dos compactos de ocasión sobre la misma plataforma MQB. El Golf VII retiene mejor el valor y transmite algo más de calidad; el León Mk3 sale más barato y tiene un punto más de dinamismo.",
    takeaways: [
      "Mecánica: idéntica (1.0/1.4/1.5 TSI, 1.6/2.0 TDI). Los consejos de compra valen para ambos.",
      "Precio de ocasión: el León Mk3 suele salir claramente más barato a igualdad de año y motor.",
      "Retención de valor: mejor en el Golf VII.",
      "Recomendación: León Mk3 por relación precio/producto; Golf VII si priorizas reventa y percepción de calidad.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-qashqai-j11-vs-kadjar",
    slug: "nissan-qashqai-j11-vs-renault-kadjar",
    leftGenerationId: "nissan:qashqai:j11",
    rightGenerationId: "renault:kadjar:ha",
    editorialSummary:
      "Mismo fondo técnico de la Alianza: comparten plataforma y motores (1.5 dCi, 1.2/1.3 TCe). La decisión se juega en diseño, equipamiento y precio de ocasión.",
    takeaways: [
      "Mecánica: prácticamente la misma; el 1.5 dCi es la opción más tranquila en ambos.",
      "Puntos a vigilar: consumo de aceite del 1.2 TCe y caja automática (CVT en el Nissan, EDC en el Renault).",
      "El Qashqai suele tener más oferta y mejor reventa; el Kadjar, precio de compra algo menor.",
      "Recomendación: elige por diseño y por la unidad concreta con mejor historial; mecánicamente están empatados.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-rav4-vs-cx5",
    slug: "toyota-rav4-hybrid-vs-mazda-cx-5",
    leftGenerationId: "toyota:rav4:xa50",
    rightGenerationId: "mazda:cx-5:kf",
    editorialSummary:
      "El SUV medio híbrido más racional frente al que mejor se conduce. El RAV4 Hybrid gana en consumo urbano y fiabilidad esperada; el CX-5 ofrece mejor tacto de conducción y un interior que fue subiendo de calidad.",
    takeaways: [
      "Consumo: claramente a favor del RAV4 Hybrid, sobre todo en ciudad.",
      "Conducción e interior: el CX-5 se siente más premium y noble al volante.",
      "Mecánica: el RAV4 híbrido no tiene turbo ni embrague; el CX-5 diésel 2.2 pide recorridos largos.",
      "Recomendación: RAV4 Hybrid para tranquilidad y ahorro; CX-5 si valoras cómo se conduce y el interior.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
  {
    id: "cmp-x1-vs-q3",
    slug: "bmw-x1-f48-vs-audi-q3-f3",
    leftGenerationId: "bmw:x1:f48",
    rightGenerationId: "audi:q3:f3",
    editorialSummary:
      "Dos SUV premium compactos de kilómetros. El X1 F48 prioriza espacio y un diésel B47 sobrio; el Q3 F3 ofrece un interior algo más cuidado y mecánicas del Grupo VW muy conocidas.",
    takeaways: [
      "Espacio: muy parejo; el X1 aprovecha muy bien el interior para su tamaño.",
      "Puntos a vigilar: cadena y EGR del B47 en el BMW; DSG y Haldex en el Audi.",
      "Interior: ligera ventaja para el Q3 en percepción de calidad.",
      "Recomendación: X1 sDrive18d o Q3 35 TDI según cuál encuentres con mejor historial y precio.",
    ],
    status: "published", reviewedAt: REVIEWED,
  },
];
