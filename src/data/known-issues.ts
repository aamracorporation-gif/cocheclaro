import type { KnownIssue } from "@/lib/types";

/**
 * Averías conocidas. Dataset de DEMOSTRACIÓN: descripciones plausibles con
 * nivel de evidencia (`confidence`) y fuentes de ejemplo. En producción NO
 * debe publicarse una avería como "común" sin evidencia suficiente (§8).
 */
export const knownIssues: KnownIssue[] = [
  // ── B47 diésel BMW ────────────────────────────────────────
  {
    id: "issue-b47-cadena", engineId: "b47d20",
    title: "Desgaste de la cadena de distribución (parte trasera del motor)",
    symptoms: "Ruido metálico o 'sonajero' en el arranque en frío que dura unos segundos; en casos avanzados, tintineo constante y códigos de sincronización de árbol de levas.",
    cause: "Tensor y guías de la cadena de distribución con desgaste prematuro en parte de la producción, agravado por cambios de aceite espaciados o aceite inadecuado.",
    severity: "alta", mileageMin: 120000, mileageMax: 220000, costMin: 900, costMax: 2200,
    confidence: "moderada", status: "published",
    sourceIds: ["src-boletin-tecnico", "src-comunidad"],
  },
  {
    id: "issue-b47-egr", engineId: "b47d20",
    title: "Fallo o atasco de la válvula EGR / refrigerador de gases",
    symptoms: "Pérdida de potencia, modo emergencia, testigo de motor encendido y, en casos graves, riesgo de sobrecalentamiento localizado.",
    cause: "Acumulación de carbonilla y grietas en el refrigerador de EGR; problema tratado con campañas y piezas revisadas en varios mercados.",
    severity: "media", mileageMin: 90000, mileageMax: 180000, costMin: 350, costMax: 900,
    confidence: "solida", status: "published",
    sourceIds: ["src-fabricante-generico", "src-boletin-tecnico"],
  },
  // ── B48 gasolina BMW ──────────────────────────────────────
  {
    id: "issue-b48-bomba-agua", engineId: "b48",
    title: "Fugas por la bomba de agua eléctrica y junta de la tapa de balancines",
    symptoms: "Nivel de refrigerante bajando lentamente, olor dulce en caliente, manchas en el bajo motor; con la junta, consumo de aceite y humo puntual.",
    cause: "Bomba de agua eléctrica con vida útil limitada y juntas que endurecen con los ciclos térmicos.",
    severity: "media", mileageMin: 80000, mileageMax: 160000, costMin: 300, costMax: 700,
    confidence: "moderada", status: "published",
    sourceIds: ["src-comunidad", "src-medio-tecnico"],
  },
  // ── PureTech 1.2 ──────────────────────────────────────────
  {
    id: "issue-puretech-correa", engineId: "puretech-1-2",
    title: "Degradación de la correa de distribución 'húmeda' (series 2019-2021)",
    symptoms: "Ruido de rodadura o silbido del cárter, testigo de presión de aceite, restos de goma en el filtro y en el colador de la bomba de aceite; en el peor caso, rotura y daño de válvulas.",
    cause: "La correa de distribución trabaja sumergida en aceite y su recubrimiento se deshace antes de tiempo, soltando partículas que obstruyen el circuito de lubricación.",
    severity: "alta", mileageMin: 60000, mileageMax: 150000, costMin: 700, costMax: 2500,
    confidence: "solida", status: "published",
    sourceIds: ["src-fabricante-generico", "src-medio-tecnico", "src-comunidad"],
  },
  {
    id: "issue-puretech-carbonilla", engineId: "puretech-1-2",
    title: "Carbonilla en válvulas de admisión con uso urbano",
    symptoms: "Ralentí irregular, tirones a baja carga, ligero aumento de consumo tras muchos kilómetros de ciudad.",
    cause: "Inyección directa sin lavado de las válvulas de admisión; se acentúa con trayectos cortos y aceite de baja calidad.",
    severity: "baja", mileageMin: 90000, costMin: 200, costMax: 500,
    confidence: "moderada", status: "published",
    sourceIds: ["src-medio-tecnico"],
  },
  // ── 1.3 TCe Renault/Nissan/Mercedes ──────────────────────
  {
    id: "issue-tce13-aceite", engineId: "tce-1-3",
    title: "Consumo elevado de aceite y desgaste de camisas en primeras series",
    symptoms: "Necesidad de rellenar aceite entre revisiones, humo azulado en aceleraciones fuertes tras retención, tirones en frío.",
    cause: "Lotes iniciales (aprox. 2018-2020) con tratamiento de camisas y segmentos por debajo de tolerancia; corregido en producción posterior y con campañas.",
    severity: "media", mileageMin: 30000, mileageMax: 120000, costMin: 0, costMax: 3000,
    confidence: "moderada", status: "published",
    sourceIds: ["src-fabricante-generico", "src-comunidad"],
  },
  // ── 1.5 dCi ──────────────────────────────────────────────
  {
    id: "issue-dci15-turbo", engineId: "dci-1-5-blue",
    title: "Desgaste del turbo y del volante bimasa con muchos kilómetros",
    symptoms: "Silbido agudo creciente, pérdida de empuje, humo; en el volante, traqueteo al ralentí y vibración al soltar el embrague.",
    cause: "Componentes de desgaste normal en un motor de alto kilometraje; se adelanta con aceite sucio o conducción muy exigente en frío.",
    severity: "media", mileageMin: 150000, mileageMax: 250000, costMin: 600, costMax: 1600,
    confidence: "moderada", status: "published",
    sourceIds: ["src-medio-tecnico", "src-comunidad"],
  },
  // ── EA288 2.0 TDI ────────────────────────────────────────
  {
    id: "issue-ea288-egr-adblue", engineId: "ea288-2-0-tdi",
    title: "Averías del sistema AdBlue / SCR y de la EGR",
    symptoms: "Aviso de 'arranque no posible en X km', testigo de motor, entrada en modo taller; con la EGR, humo y pérdida de potencia.",
    cause: "Sensores de NOx, bomba e inyector de AdBlue sensibles; EGR con carbonilla en uso urbano.",
    severity: "media", mileageMin: 90000, mileageMax: 180000, costMin: 300, costMax: 1200,
    confidence: "solida", status: "published",
    sourceIds: ["src-boletin-tecnico", "src-comunidad"],
  },
  // ── EA211 1.5 TSI ────────────────────────────────────────
  {
    id: "issue-15tsi-tirones", engineId: "ea211-1-5-tsi",
    title: "Tirones y vacilaciones a baja carga en primeras series",
    symptoms: "Sensación de 'ahogo' o microcortes al circular suave a pocas revoluciones, sobre todo en frío.",
    cause: "Mapa de gestión demasiado agresivo con el corte de cilindros y el EGR; resuelto en gran medida por actualización de software.",
    severity: "baja", mileageMin: 0, costMin: 0, costMax: 120,
    confidence: "solida", status: "published",
    sourceIds: ["src-fabricante-generico", "src-medio-tecnico"],
  },
  // ── 1.0 EcoBoost ─────────────────────────────────────────
  {
    id: "issue-ecoboost-refrigeracion", engineId: "ecoboost-1-0",
    title: "Fallos de refrigeración en series antiguas (tubo de degas)",
    symptoms: "Pérdida de refrigerante sin fuga visible, calentón, en casos graves fisura de culata.",
    cause: "Conducto de refrigeración de plástico y diseño del circuito en versiones 2012-2017; mitigado en el Focus/Fiesta recientes y en las versiones mHEV.",
    severity: "alta", mileageMin: 60000, mileageMax: 160000, costMin: 400, costMax: 3000,
    confidence: "moderada", status: "published",
    sourceIds: ["src-medio-tecnico", "src-comunidad"],
  },
  // ── DSG seca (a nivel de generación, VW/SEAT/Skoda) ───────
  {
    id: "issue-dsg-dq200", generationId: "volkswagen:golf:mk7",
    title: "Desgaste de la mecatrónica de la caja DSG seca (DQ200)",
    symptoms: "Tirones al arrancar, retención al soltar freno, entradas de marcha bruscas, testigo de caja.",
    cause: "Módulo mecatrónico y embragues secos sensibles al uso urbano intensivo y a atascos frecuentes.",
    severity: "media", mileageMin: 90000, mileageMax: 180000, costMin: 700, costMax: 1800,
    confidence: "moderada", status: "published",
    sourceIds: ["src-comunidad", "src-medio-tecnico"],
  },
  {
    id: "issue-golf8-software", generationId: "volkswagen:golf:mk8",
    title: "Fallos de infoentretenimiento y conectividad (2020-2021)",
    symptoms: "Reinicios de la pantalla central, cámara de visión trasera que no carga, fallos de Car-Net/actualizaciones OTA, congelaciones.",
    cause: "Software inmaduro en el lanzamiento del sistema MIB3; corregido de forma progresiva con actualizaciones en taller y OTA.",
    severity: "baja", mileageMin: 0, costMin: 0, costMax: 200,
    confidence: "solida", status: "published",
    sourceIds: ["src-fabricante-generico", "src-medio-tecnico"],
  },
  {
    id: "issue-w177-7gdct", generationId: "mercedes-benz:clase-a:w177",
    title: "Tirones de la caja 7G-DCT de doble embrague en frío y maniobras",
    symptoms: "Retenciones y 'saltos' al aparcar, respuesta perezosa al reanudar la marcha, ruido de embragues en frío.",
    cause: "Comportamiento propio de la caja de doble embrague seca; se atenúa con adaptaciones y software actualizado.",
    severity: "baja", mileageMin: 0, mileageMax: 120000, costMin: 0, costMax: 400,
    confidence: "moderada", status: "published",
    sourceIds: ["src-comunidad"],
  },
  {
    id: "issue-g30-neumatica", generationId: "bmw:serie-5:g30",
    title: "Fallo de la suspensión neumática trasera (si la equipa)",
    symptoms: "Trasera hundida tras aparcar, compresor trabajando en exceso, aviso de suspensión, marcha dura.",
    cause: "Fugas en fuelles neumáticos y desgaste del compresor con los años y el frío.",
    severity: "media", mileageMin: 100000, mileageMax: 200000, costMin: 400, costMax: 1400,
    confidence: "moderada", status: "published",
    sourceIds: ["src-comunidad", "src-medio-tecnico"],
  },
  {
    id: "issue-n47-cadena", generationId: "bmw:serie-3:f30",
    title: "Cadena de distribución del diésel N47 (unidades 2012-2014)",
    symptoms: "Ruido de cadena en frío por la parte trasera del motor, tintineo bajo carga; riesgo de salto de sincronización si se ignora.",
    cause: "Tensor y guías del N47 con desgaste prematuro; los B47 posteriores mejoraron el diseño.",
    severity: "alta", mileageMin: 120000, mileageMax: 200000, costMin: 1000, costMax: 2500,
    confidence: "moderada", status: "published",
    sourceIds: ["src-comunidad", "src-medio-tecnico"],
  },
];
