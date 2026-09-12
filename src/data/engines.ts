import type { Engine } from "@/lib/types";

/**
 * Motores. Datos de DEMOSTRACIÓN (dataStatus: "demo"). Las cifras son
 * aproximadas y coherentes, pero deben sustituirse por datos verificados
 * con fuente antes de publicar en producción.
 */
export const engines: Engine[] = [
  // ── Grupo Volkswagen (VAG) ─────────────────────────────────
  {
    id: "ea211-1-0-tsi", slug: "ea211-1-0-tsi", code: "EA211 1.0 TSI",
    fuel: "gasolina", displacementCc: 999, cylinders: 3, powerKw: 81, powerHp: 110, torqueNm: 200,
    architecture: "3 cilindros en línea, turbo, inyección directa",
    summary: "Tricilíndrico turbo de acceso del Grupo VW. Elástico en ciudad y contenido en consumo; vigilar carbonilla en admisión con uso urbano intensivo.",
    dataStatus: "demo",
  },
  {
    id: "ea211-1-5-tsi", slug: "ea211-1-5-tsi", code: "EA211 evo 1.5 TSI",
    fuel: "gasolina", displacementCc: 1498, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 250,
    architecture: "4 cilindros en línea, turbo, desconexión de cilindros (ACT)",
    summary: "El gasolina más común del Grupo VW en compactos y SUV. Buen equilibrio prestaciones/consumo; primeras series con tirones a baja carga que se corrigieron por software.",
    dataStatus: "demo",
  },
  {
    id: "ea888-2-0-tsi", slug: "ea888-2-0-tsi", code: "EA888 gen3/gen4 2.0 TSI",
    fuel: "gasolina", displacementCc: 1984, cylinders: 4, powerKw: 140, powerHp: 190, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, inyección directa + indirecta",
    summary: "Gasolina de las versiones potentes (GTI, S line, cabezas de gama). Prestaciones sólidas; controlar consumo de aceite en las generaciones más antiguas.",
    dataStatus: "demo",
  },
  {
    id: "ea288-2-0-tdi", slug: "ea288-2-0-tdi", code: "EA288 2.0 TDI",
    fuel: "diesel", displacementCc: 1968, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 360,
    architecture: "4 cilindros en línea, turbo, common-rail, AdBlue (SCR)",
    summary: "Diésel de referencia para quien hace muchos kilómetros. Bajo consumo en autopista; mantenimiento de EGR, AdBlue y filtro de partículas al día.",
    dataStatus: "demo",
  },
  {
    id: "ea211-1-6-tdi", slug: "ea211-1-6-tdi", code: "EA288 1.6 TDI",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 85, powerHp: 115, torqueNm: 250,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "Diésel pequeño para utilitarios y compactos de uso mixto-carretera. Suave y sobrio; poco recomendable si el uso es exclusivamente urbano y de trayectos cortos.",
    dataStatus: "demo",
  },

  // ── BMW ────────────────────────────────────────────────────
  {
    id: "b38", slug: "b38", code: "B38",
    fuel: "gasolina", displacementCc: 1499, cylinders: 3, powerKw: 103, powerHp: 140, torqueNm: 220,
    architecture: "3 cilindros en línea, turbo TwinPower",
    summary: "Tricilíndrico modular de BMW/MINI (118i, 218i, X1 sDrive18i). Refinado para ser un 3 cilindros; carbonilla en admisión con muchos kilómetros urbanos.",
    dataStatus: "demo",
  },
  {
    id: "b48", slug: "b48", code: "B48",
    fuel: "gasolina", displacementCc: 1998, cylinders: 4, powerKw: 135, powerHp: 184, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo TwinPower",
    summary: "Gasolina 2.0 modular de BMW (320i, 330i, 520i). Buen empuje y suavidad; vigilar fugas por la junta de la tapa de balancines y la bomba de agua eléctrica.",
    dataStatus: "demo",
  },
  {
    id: "b47d20", slug: "b47d20", code: "B47D20",
    fuel: "diesel", displacementCc: 1995, cylinders: 4, powerKw: 140, powerHp: 190, torqueNm: 400,
    architecture: "4 cilindros en línea, turbo, common-rail, cadena de distribución trasera",
    summary: "El 2.0d de BMW que montan 118d, 320d, 520d y varios X. Consumo muy bajo en autovía; la cadena de distribución (parte del volante motor) y el EGR son los puntos a vigilar.",
    dataStatus: "demo",
  },
  {
    id: "b57d30", slug: "b57d30", code: "B57D30",
    fuel: "diesel", displacementCc: 2993, cylinders: 6, powerKw: 195, powerHp: 265, torqueNm: 620,
    architecture: "6 cilindros en línea, turbo, common-rail",
    summary: "Seis en línea diésel (530d, 730d, X5 30d). Prestaciones y refinamiento de referencia; mantenimiento caro y sensible al aceite correcto.",
    dataStatus: "demo",
  },

  // ── Mercedes-Benz ──────────────────────────────────────────
  {
    id: "m264", slug: "m264", code: "M264",
    fuel: "gasolina", displacementCc: 1991, cylinders: 4, powerKw: 140, powerHp: 190, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo, sistema de 48 V (EQ Boost) en algunas versiones",
    summary: "Gasolina 2.0 de Clase A/C/CLA (C 200, CLA 250). Suave y moderno; la microhibridación de 48 V añade complejidad electrónica.",
    dataStatus: "demo",
  },
  {
    id: "om654", slug: "om654", code: "OM654",
    fuel: "diesel", displacementCc: 1950, cylinders: 4, powerKw: 143, powerHp: 194, torqueNm: 400,
    architecture: "4 cilindros en línea aluminio, turbo, SCR con AdBlue",
    summary: "Diésel 2.0 moderno de Mercedes (200 d, 220 d). Muy sobrio y silencioso; sistema de postratamiento complejo que exige mantenimiento riguroso.",
    dataStatus: "demo",
  },
  {
    id: "om608-om654q", slug: "om608-om654q", code: "OM608 / OM654q 1.5-1.3d",
    fuel: "diesel", displacementCc: 1461, cylinders: 4, powerKw: 70, powerHp: 95, torqueNm: 260,
    architecture: "4 cilindros, turbo, base Renault en OM608",
    summary: "Diésel pequeño de acceso de Clase A/B (180 d). Correcto para uso mixto; menos refinado que el OM654 grande.",
    dataStatus: "demo",
  },

  // ── PSA / Stellantis ───────────────────────────────────────
  {
    id: "puretech-1-2", slug: "puretech-1-2", code: "PureTech 1.2 (EB2)",
    fuel: "gasolina", displacementCc: 1199, cylinders: 3, powerKw: 96, powerHp: 130, torqueNm: 230,
    architecture: "3 cilindros en línea, turbo, inyección directa",
    summary: "Tricilíndrico de Peugeot/Citroën/Opel (208, 2008, 308, Corsa). Premiado por prestaciones/consumo; las series 2017-2021 con correa de distribución bañada en aceite generaron mucha preocupación por su desgaste prematuro.",
    dataStatus: "demo",
  },
  {
    id: "bluehdi-1-5", slug: "bluehdi-1-5", code: "BlueHDi 1.5 (DV5)",
    fuel: "diesel", displacementCc: 1499, cylinders: 4, powerKw: 96, powerHp: 130, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo, SCR con AdBlue",
    summary: "Diésel 1.5 de Stellantis (308, 3008, Corsa). Bajo consumo real; vigilar el sistema AdBlue y la EGR en coches muy urbanos.",
    dataStatus: "demo",
  },
  {
    id: "bluehdi-2-0", slug: "bluehdi-2-0", code: "BlueHDi 2.0 (DW10)",
    fuel: "diesel", displacementCc: 1997, cylinders: 4, powerKw: 130, powerHp: 177, torqueNm: 400,
    architecture: "4 cilindros en línea, turbo, SCR con AdBlue",
    summary: "Diésel 2.0 para las versiones altas de 3008/508. Buen par y consumo en viaje; motor probado y con buena reputación de fiabilidad.",
    dataStatus: "demo",
  },

  // ── Renault / Dacia / Nissan ───────────────────────────────
  {
    id: "tce-1-3", slug: "tce-1-3", code: "TCe 1.3 (HR13 / M282)",
    fuel: "gasolina", displacementCc: 1332, cylinders: 4, powerKw: 103, powerHp: 140, torqueNm: 260,
    architecture: "4 cilindros en línea, turbo, co-desarrollado con Mercedes-Benz",
    summary: "Gasolina 1.3 turbo de Renault, Dacia y Nissan (Mégane, Captur, Qashqai, Duster). Buen rendimiento; primeras series con consumo de aceite y problemas de camisas en ciertos lotes.",
    dataStatus: "demo",
  },
  {
    id: "tce-1-0", slug: "tce-1-0", code: "TCe 1.0 (H4D)",
    fuel: "gasolina", displacementCc: 999, cylinders: 3, powerKw: 66, powerHp: 90, torqueNm: 160,
    architecture: "3 cilindros en línea, turbo",
    summary: "Tricilíndrico de acceso de Clio, Sandero y Captur. Suficiente para ciudad y uso mixto ligero; algo justo con el coche cargado.",
    dataStatus: "demo",
  },
  {
    id: "dci-1-5-blue", slug: "dci-1-5-blue", code: "Blue dCi 1.5 (K9K)",
    fuel: "diesel", displacementCc: 1461, cylinders: 4, powerKw: 85, powerHp: 115, torqueNm: 260,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El 1.5 dCi, uno de los diésel más fabricados de Europa (Clio, Mégane, Captur, Qashqai). Muy sobrio; turbo y volante bimasa son los gastos típicos con kilómetros.",
    dataStatus: "demo",
  },
  {
    id: "hybrid-1-6-renault", slug: "hybrid-1-6-renault", code: "E-Tech Hybrid 1.6",
    fuel: "hibrido", displacementCc: 1598, cylinders: 4, powerKw: 105, powerHp: 143, torqueNm: 205,
    architecture: "4 cilindros atmosférico + 2 motores eléctricos, caja multimodo sin embrague",
    summary: "Híbrido de Clio, Captur y Mégane. Muy eficiente en ciudad; caja de cambios peculiar sin embrague convencional, con buena fiabilidad hasta la fecha.",
    dataStatus: "demo",
  },

  // ── Toyota ─────────────────────────────────────────────────
  {
    id: "toyota-hsd-1-8", slug: "toyota-hsd-1-8", code: "2ZR-FXE 1.8 Hybrid",
    fuel: "hibrido", displacementCc: 1798, cylinders: 4, powerKw: 90, powerHp: 122, torqueNm: 142,
    architecture: "4 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT",
    summary: "Híbrido 1.8 de Corolla y C-HR. Referencia de fiabilidad y bajo consumo urbano; mantenimiento barato y sin embrague ni correa que se rompa.",
    dataStatus: "demo",
  },
  {
    id: "toyota-hsd-2-0", slug: "toyota-hsd-2-0", code: "M20A-FXS 2.0 Hybrid",
    fuel: "hibrido", displacementCc: 1987, cylinders: 4, powerKw: 112, powerHp: 152, torqueNm: 190,
    architecture: "4 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT",
    summary: "Híbrido 2.0 de Corolla y C-HR (184 CV de sistema). Más brío que el 1.8 manteniendo el consumo y la fiabilidad de la marca.",
    dataStatus: "demo",
  },
  {
    id: "toyota-1-5-hybrid", slug: "toyota-1-5-hybrid", code: "M15A-FXE 1.5 Hybrid",
    fuel: "hibrido", displacementCc: 1490, cylinders: 3, powerKw: 68, powerHp: 92, torqueNm: 120,
    architecture: "3 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT",
    summary: "Híbrido del Yaris (116 CV de sistema). Consumos urbanos muy bajos y mecánica robusta; algo ruidoso al exigirle.",
    dataStatus: "demo",
  },

  // ── Hyundai / Kia ──────────────────────────────────────────
  {
    id: "kappa-1-0-tgdi", slug: "kappa-1-0-tgdi", code: "1.0 T-GDi (Kappa)",
    fuel: "gasolina", displacementCc: 998, cylinders: 3, powerKw: 88, powerHp: 120, torqueNm: 200,
    architecture: "3 cilindros en línea, turbo, inyección directa, 48 V opcional",
    summary: "Tricilíndrico de i20, i30, Ceed y Stonic. Cumplidor y con buena garantía de marca; carbonilla en admisión a vigilar con el tiempo.",
    dataStatus: "demo",
  },
  {
    id: "smartstream-1-6-tgdi", slug: "smartstream-1-6-tgdi", code: "1.6 T-GDi (Smartstream)",
    fuel: "gasolina", displacementCc: 1598, cylinders: 4, powerKw: 132, powerHp: 180, torqueNm: 265,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "Gasolina 1.6 turbo de Tucson, Sportage, i30 N Line. Buen rendimiento; en generaciones previas (Theta II) hubo campañas por fallos de biela, resueltas en esta familia.",
    dataStatus: "demo",
  },
  {
    id: "smartstream-1-6-crdi", slug: "smartstream-1-6-crdi", code: "1.6 CRDi (Smartstream)",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 100, powerHp: 136, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail, 48 V mild-hybrid opcional",
    summary: "Diésel 1.6 de Tucson, Sportage, i30 y Ceed. Sobrio y suave; el sistema mild-hybrid de 48 V y el DPF son los elementos a mantener.",
    dataStatus: "demo",
  },
  {
    id: "hyundai-kia-1-6-hev", slug: "hyundai-kia-1-6-hev", code: "1.6 GDi Hybrid",
    fuel: "hibrido", displacementCc: 1580, cylinders: 4, powerKw: 97, powerHp: 141, torqueNm: 265,
    architecture: "4 cilindros + motor eléctrico, caja automática de 6 marchas con embrague",
    summary: "Híbrido de Tucson, Sportage y Niro. A diferencia del sistema Toyota usa una caja automática convencional; consumos algo mayores en ciudad pero conducción más 'normal'.",
    dataStatus: "demo",
  },

  // ── Ford ───────────────────────────────────────────────────
  {
    id: "ecoboost-1-0", slug: "ecoboost-1-0", code: "1.0 EcoBoost",
    fuel: "gasolina", displacementCc: 999, cylinders: 3, powerKw: 92, powerHp: 125, torqueNm: 210,
    architecture: "3 cilindros en línea, turbo, inyección directa, mild-hybrid 48 V (mHEV) opcional",
    summary: "Tricilíndrico de Fiesta, Focus y Puma. Brillante de conducir; en series 2012-2017 hubo problemas de refrigeración (tubo de degas) que en las versiones mHEV están corregidos.",
    dataStatus: "demo",
  },
  {
    id: "ecoblue-1-5", slug: "ecoblue-1-5", code: "1.5 EcoBlue",
    fuel: "diesel", displacementCc: 1499, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "Diésel 1.5 de Focus y Puma. Consumo real bajo en carretera; correa de distribución bañada en aceite con intervalo estricto de sustitución.",
    dataStatus: "demo",
  },

  // ── Grupo Volkswagen (generaciones anteriores) ────────────
  {
    id: "ea111-1-4-tsi", slug: "ea111-1-4-tsi", code: "EA111 1.4 TSI Twincharger",
    fuel: "gasolina", displacementCc: 1390, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 240,
    architecture: "4 cilindros en línea, compresor + turbo (versiones 150-180 CV), inyección directa, cadena de distribución",
    summary: "El 1.4 TSI de Golf VI, León II y Scirocco. Prestaciones sorprendentes para la cilindrada, pero mala fama por estiramiento de la cadena de distribución y consumo de aceite en las series 2007-2012.",
    dataStatus: "demo",
  },
  {
    id: "ea211-1-2-tsi", slug: "ea211-1-2-tsi", code: "EA211 1.2 TSI",
    fuel: "gasolina", displacementCc: 1197, cylinders: 4, powerKw: 66, powerHp: 90, torqueNm: 160,
    architecture: "4 cilindros en línea, turbo, inyección directa, correa de distribución",
    summary: "Gasolina de acceso de Polo, Ibiza y Golf VII de primeras series. Cumplidor en ciudad; menos elástico que el 1.0 TSI tricilíndrico que lo sustituyó.",
    dataStatus: "demo",
  },
  {
    id: "ea189-1-6-tdi", slug: "ea189-1-6-tdi", code: "EA189 1.6 TDI",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 77, powerHp: 105, torqueNm: 250,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "Diésel 1.6 de Golf VI/VII, A3 8P/8V, León II/III y Octavia II/III (2009-2015). Motor del caso de emisiones (dieselgate); tras la actualización, algunos propietarios reportan EGR y sensores más delicados.",
    dataStatus: "demo",
  },
  {
    id: "ea189-2-0-tdi", slug: "ea189-2-0-tdi", code: "EA189 2.0 TDI",
    fuel: "diesel", displacementCc: 1968, cylinders: 4, powerKw: 103, powerHp: 140, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El 2.0 TDI de la generación anterior al EA288 (2008-2015). Muy sobrio en viaje; también afectado por el caso de emisiones. Volante bimasa, EGR y turbo son los gastos con kilómetros.",
    dataStatus: "demo",
  },
  {
    id: "pd-1-9-tdi", slug: "pd-1-9-tdi", code: "1.9 TDI PD (BXE/BLS)",
    fuel: "diesel", displacementCc: 1896, cylinders: 4, powerKw: 77, powerHp: 105, torqueNm: 250,
    architecture: "4 cilindros en línea, turbo, inyector-bomba (PD)",
    summary: "El 1.9 TDI de bomba-inyector (Golf V, León II, Octavia II, A3 8P). Fama de indestructible en la base; los puntos débiles son el colector de admisión, la EGR y el volante bimasa. Muchas versiones sin filtro de partículas.",
    dataStatus: "demo",
  },
  {
    id: "ea288-2-0-bitdi", slug: "ea288-2-0-bitdi", code: "2.0 BiTDI 240 CV",
    fuel: "diesel", displacementCc: 1968, cylinders: 4, powerKw: 176, powerHp: 240, torqueNm: 500,
    architecture: "4 cilindros en línea, doble turbo secuencial, common-rail",
    summary: "El 2.0 TDI biturbo de 240 CV (Passat B8, Tiguan, Kodiaq de gama alta). Prestaciones de un seis cilindros; mantenimiento riguroso y aceite exacto para cuidar los turbos.",
    dataStatus: "demo",
  },

  // ── PSA / Stellantis (generaciones anteriores) ───────────
  {
    id: "hdi-1-6", slug: "hdi-1-6", code: "1.6 HDi / TDCi (DV6)",
    fuel: "diesel", displacementCc: 1560, cylinders: 4, powerKw: 84, powerHp: 115, torqueNm: 270,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El 1.6 HDi de PSA (208, 308, C3, C4, Berlingo; también Ford Focus/Fiesta como 1.6 TDCi). Sobrio; el turbo de geometría variable y el circuito de aceite piden aceite fresco para durar.",
    dataStatus: "demo",
  },
  {
    id: "puretech-1-2-na", slug: "puretech-1-2-na", code: "PureTech 1.2 atmosférico (EB2)",
    fuel: "gasolina", displacementCc: 1199, cylinders: 3, powerKw: 60, powerHp: 82, torqueNm: 118,
    architecture: "3 cilindros en línea, atmosférico, inyección indirecta, cadena de distribución",
    summary: "Versión atmosférica del PureTech (208, C3, 108). Sin turbo ni correa bañada en aceite, evita el problema del PureTech turbo, pero rinde poco con el coche cargado o en cuesta.",
    dataStatus: "demo",
  },
  {
    id: "hdi-2-0-dw10-older", slug: "hdi-2-0-dw10-older", code: "2.0 HDi (DW10)",
    fuel: "diesel", displacementCc: 1997, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 340,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El 2.0 HDi de 150-163 CV de 308, 3008, 508 y C5 de generación anterior. Muy buena reputación de fiabilidad y consumo en viaje; de los diésel más recomendables de PSA de esa época.",
    dataStatus: "demo",
  },

  // ── Mazda ────────────────────────────────────────────────
  {
    id: "skyactiv-g-2-0", slug: "skyactiv-g-2-0", code: "Skyactiv-G 2.0",
    fuel: "gasolina", displacementCc: 1998, cylinders: 4, powerKw: 89, powerHp: 122, torqueNm: 213,
    architecture: "4 cilindros en línea, atmosférico, alta compresión, inyección directa",
    summary: "El 2.0 atmosférico de Mazda3, CX-30 y MX-5. Sin turbo: respuesta lineal, mantenimiento sencillo y gran fiabilidad. A cambio hay que exprimirlo y el consumo urbano no baja tanto como un turbo pequeño.",
    dataStatus: "demo",
  },
  {
    id: "skyactiv-d-1-8", slug: "skyactiv-d-1-8", code: "Skyactiv-D 1.8",
    fuel: "diesel", displacementCc: 1759, cylinders: 4, powerKw: 85, powerHp: 116, torqueNm: 270,
    architecture: "4 cilindros en línea, turbo, baja compresión, common-rail",
    summary: "Diésel de Mazda3 y CX-30. Refinado y elástico; su baja compresión reduce tensiones, pero exige recorridos largos y aceite específico para no acumular carbonilla ni diluir el aceite.",
    dataStatus: "demo",
  },
  {
    id: "skyactiv-x-2-0", slug: "skyactiv-x-2-0", code: "e-Skyactiv X 2.0",
    fuel: "gasolina", displacementCc: 1998, cylinders: 4, powerKw: 137, powerHp: 186, torqueNm: 240,
    architecture: "4 cilindros en línea, ignición por compresión controlada por chispa (SPCCI), 24 V mild-hybrid",
    summary: "El gasolina que quiere consumir como un diésel. Tecnología única y suave; en la práctica el ahorro real frente al Skyactiv-G 2.0 es modesto y el sobreprecio de ocasión, alto.",
    dataStatus: "demo",
  },

  // ── Fiat ─────────────────────────────────────────────────
  {
    id: "twinair-0-9", slug: "twinair-0-9", code: "0.9 TwinAir",
    fuel: "gasolina", displacementCc: 875, cylinders: 2, powerKw: 63, powerHp: 85, torqueNm: 145,
    architecture: "2 cilindros en línea, turbo, distribución MultiAir",
    summary: "El bicilíndrico turbo de 500, Panda y Tipo. Simpático y con carácter, pero el consumo real está lejos del homologado y algunas unidades gastan aceite. Poca suavidad abajo.",
    dataStatus: "demo",
  },
  {
    id: "firefly-1-0", slug: "firefly-1-0", code: "1.0 FireFly",
    fuel: "gasolina", displacementCc: 999, cylinders: 3, powerKw: 51, powerHp: 70, torqueNm: 92,
    architecture: "3 cilindros en línea, atmosférico (versión mHEV con 12 V)",
    summary: "Tricilíndrico moderno de 500, Panda y Tipo. En versión mild-hybrid mejora la respuesta en ciudad. Sencillo y barato de mantener; justo de fuerza en carretera.",
    dataStatus: "demo",
  },
  {
    id: "fiat-1-6-multijet", slug: "fiat-1-6-multijet", code: "1.6 MultiJet",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "Diésel 1.6 de Tipo, 500X y varios modelos del grupo. Correcto en consumo; DPF y EGR piden uso de carretera y no solo ciudad.",
    dataStatus: "demo",
  },

  // ── Volvo (Drive-E) ──────────────────────────────────────
  {
    id: "volvo-t3-t4", slug: "volvo-t3-t4", code: "2.0 T3 / T4 (Drive-E)",
    fuel: "gasolina", displacementCc: 1969, cylinders: 4, powerKw: 140, powerHp: 190, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "El 2.0 gasolina de XC40, XC60 y V40/V60. Suave y con buen empuje; en primeras series hubo consumo de aceite y algún caso de cadena de distribución que Volvo fue corrigiendo.",
    dataStatus: "demo",
  },
  {
    id: "volvo-d3-d4", slug: "volvo-d3-d4", code: "2.0 D3 / D4 (Drive-E)",
    fuel: "diesel", displacementCc: 1969, cylinders: 4, powerKw: 140, powerHp: 190, torqueNm: 400,
    architecture: "4 cilindros en línea, turbo (D4 con doble turbo secuencial), common-rail",
    summary: "El 2.0 diésel de XC40, XC60, V40 y V60. Consumo de autovía muy bajo; revisar el colector de admisión, la EGR y el filtro de partículas.",
    dataStatus: "demo",
  },

  // ── Honda ────────────────────────────────────────────────
  {
    id: "honda-1-0-vtec-turbo", slug: "honda-1-0-vtec-turbo", code: "1.0 VTEC Turbo",
    fuel: "gasolina", displacementCc: 988, cylinders: 3, powerKw: 95, powerHp: 129, torqueNm: 200,
    architecture: "3 cilindros en línea, turbo, VTEC, inyección directa",
    summary: "Tricilíndrico turbo de Civic X y HR-V. Rendimiento notable y buena fiabilidad general; en algunos Civic 2016-2018 hubo dilución de gasolina en el aceite en uso urbano en frío.",
    dataStatus: "demo",
  },
  {
    id: "honda-1-5-vtec-turbo", slug: "honda-1-5-vtec-turbo", code: "1.5 VTEC Turbo",
    fuel: "gasolina", displacementCc: 1498, cylinders: 4, powerKw: 134, powerHp: 182, torqueNm: 240,
    architecture: "4 cilindros en línea, turbo, VTEC, inyección directa",
    summary: "El 1.5 turbo de Civic y CR-V. Ágil y con buen consumo en carretera; misma precaución de dilución de aceite en trayectos cortos con frío en las primeras series.",
    dataStatus: "demo",
  },
  {
    id: "honda-e-hev-2-0", slug: "honda-e-hev-2-0", code: "2.0 i-MMD e:HEV",
    fuel: "hibrido", displacementCc: 1993, cylinders: 4, powerKw: 135, powerHp: 184, torqueNm: 315,
    architecture: "4 cilindros ciclo Atkinson + dos motores eléctricos, sin caja de cambios convencional",
    summary: "Híbrido de Civic, HR-V y CR-V. En ciudad y mixto circula casi siempre en eléctrico con el motor como generador; muy eficiente y refinado, con buena fiabilidad hasta la fecha.",
    dataStatus: "demo",
  },

  // ── Toyota (ampliación) ──────────────────────────────────
  {
    id: "toyota-2-5-hybrid", slug: "toyota-2-5-hybrid", code: "A25A-FXS 2.5 Hybrid",
    fuel: "hibrido", displacementCc: 2487, cylinders: 4, powerKw: 131, powerHp: 178, torqueNm: 221,
    architecture: "4 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT, tracción total eléctrica opcional (E-Four)",
    summary: "Híbrido 2.5 de RAV4 y Camry (218-222 CV de sistema). Prestaciones holgadas, consumo contenido para un SUV grande y la fiabilidad habitual de la marca.",
    dataStatus: "demo",
  },
  {
    id: "toyota-1-0-vvti", slug: "toyota-1-0-vvti", code: "1KR-FE 1.0 VVT-i",
    fuel: "gasolina", displacementCc: 998, cylinders: 3, powerKw: 53, powerHp: 72, torqueNm: 93,
    architecture: "3 cilindros en línea, atmosférico, cadena de distribución",
    summary: "Tricilíndrico atmosférico de Aygo y Yaris de acceso (también Peugeot 108/Citroën C1). Muy fiable y barato de mantener; hay que llevarlo revolucionado y va justo en autovía.",
    dataStatus: "demo",
  },

  // ── Renault / Nissan (generaciones anteriores) ───────────
  {
    id: "energy-tce-1-2", slug: "energy-tce-1-2", code: "1.2 TCe (H5Ft)",
    fuel: "gasolina", displacementCc: 1197, cylinders: 4, powerKw: 85, powerHp: 115, torqueNm: 190,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "El 1.2 TCe de Clio IV, Captur I, Mégane III y Kadjar. Buen rendimiento, pero con historial notable de consumo de aceite y averías de segmentos en 2013-2018; revisar niveles e historial.",
    dataStatus: "demo",
  },

  // ── Opel (etapa pre-PSA) ─────────────────────────────────
  {
    id: "opel-1-6-cdti", slug: "opel-1-6-cdti", code: "1.6 CDTi (B16DT)",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 100, powerHp: 136, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El diésel 1.6 propio de Opel (Astra K, Corsa E, Mokka X, Insignia B), anterior a la etapa PSA. Silencioso para su clase; vigilar EGR, DPF y la correa de distribución.",
    dataStatus: "demo",
  },
  {
    id: "opel-1-4-turbo", slug: "opel-1-4-turbo", code: "1.4 Turbo (B14XFT)",
    fuel: "gasolina", displacementCc: 1399, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 245,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "Gasolina 1.4 turbo de Astra K, Corsa E y Mokka X. Elástico y suficiente; algunas unidades consumen aceite y la bomba de agua es un punto a vigilar.",
    dataStatus: "demo",
  },
  {
    id: "skyactiv-g-1-5", slug: "skyactiv-g-1-5", code: "Skyactiv-G 1.5",
    fuel: "gasolina", displacementCc: 1496, cylinders: 4, powerKw: 66, powerHp: 90, torqueNm: 148,
    architecture: "4 cilindros en línea, atmosférico, alta compresión, inyección directa",
    summary: "El 1.5 atmosférico de Mazda2, MX-5 y Mazda3 de acceso. Sin turbo: lineal, fiable y sencillo de mantener; hay que revolucionarlo para ir con brío.",
    dataStatus: "demo",
  },
  {
    id: "skyactiv-d-2-2", slug: "skyactiv-d-2-2", code: "Skyactiv-D 2.2",
    fuel: "diesel", displacementCc: 2191, cylinders: 4, powerKw: 110, powerHp: 150, torqueNm: 380,
    architecture: "4 cilindros en línea, doble turbo secuencial, baja compresión, common-rail",
    summary: "El 2.2 diésel de CX-5, Mazda6 y CX-60. Elástico y con buen consumo en viaje; en uso solo urbano puede acumular carbonilla y diluir aceite, así que pide recorridos largos.",
    dataStatus: "demo",
  },
  {
    id: "honda-e-hev-1-5", slug: "honda-e-hev-1-5", code: "1.5 i-MMD e:HEV",
    fuel: "hibrido", displacementCc: 1498, cylinders: 4, powerKw: 80, powerHp: 109, torqueNm: 253,
    architecture: "4 cilindros ciclo Atkinson + dos motores eléctricos, sin caja de cambios convencional",
    summary: "Híbrido del Jazz y del HR-V. En ciudad circula casi siempre en eléctrico con el motor de gasolina como generador; muy eficiente y con buena fiabilidad.",
    dataStatus: "demo",
  },
  {
    id: "honda-1-6-idtec", slug: "honda-1-6-idtec", code: "1.6 i-DTEC",
    fuel: "diesel", displacementCc: 1597, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 300,
    architecture: "4 cilindros en línea, turbo, common-rail (motor propio de Honda)",
    summary: "El diésel 1.6 propio de Honda (Civic, HR-V, CR-V). Ligero y sobrio en consumo; como todo diésel moderno, EGR y filtro de partículas piden uso de carretera.",
    dataStatus: "demo",
  },
  {
    id: "kappa-1-25-mpi", slug: "kappa-1-25-mpi", code: "1.25 MPi (Kappa)",
    fuel: "gasolina", displacementCc: 1248, cylinders: 4, powerKw: 62, powerHp: 84, torqueNm: 122,
    architecture: "4 cilindros en línea, atmosférico, inyección multipunto, cadena de distribución",
    summary: "El 1.25 atmosférico de Picanto, Rio y i20 de acceso. Sencillo, fiable y barato de mantener; justo de fuerza en autovía y cargado.",
    dataStatus: "demo",
  },

  /* ── Segunda ampliación: más motores ─────────────────────── */
  {
    id: "alfa-1-6-jtdm", slug: "alfa-1-6-jtdm", code: "1.6 JTDm",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail (motor Fiat/GM 'Multijet')",
    summary: "Diésel de acceso de Giulietta y Giulia. Sobrio en carretera; EGR y DPF piden uso de carretera y no solo ciudad.",
    dataStatus: "demo",
  },
  {
    id: "alfa-2-0-jtdm", slug: "alfa-2-0-jtdm", code: "2.0 JTDm",
    fuel: "diesel", displacementCc: 1956, cylinders: 4, powerKw: 118, powerHp: 160, torqueNm: 380,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El diésel grande de Giulietta, Giulia y Stelvio. Buen empuje y consumo en viaje; el sistema de admisión y la EGR son los puntos a vigilar con kilómetros.",
    dataStatus: "demo",
  },
  {
    id: "alfa-1-4-tb", slug: "alfa-1-4-tb", code: "1.4 TB Multiair",
    fuel: "gasolina", displacementCc: 1368, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 215,
    architecture: "4 cilindros en línea, turbo, distribución MultiAir",
    summary: "Gasolina turbo de Giulietta y MiTo. Ágil y con sonido agradable; el sistema MultiAir pide aceite y bujías al día para no dar sustos.",
    dataStatus: "demo",
  },
  {
    id: "alfa-2-0-gme", slug: "alfa-2-0-gme", code: "2.0 Turbo (GME)",
    fuel: "gasolina", displacementCc: 1995, cylinders: 4, powerKw: 147, powerHp: 200, torqueNm: 330,
    architecture: "4 cilindros en línea, turbo, inyección directa (motor compartido con el grupo FCA/Stellantis)",
    summary: "El gasolina de Giulia y Stelvio, también usado por Jeep. Buen empuje y sonido; correa de distribución con intervalo a respetar.",
    dataStatus: "demo",
  },
  {
    id: "jeep-1-6-multijet", slug: "jeep-1-6-multijet", code: "1.6 MultiJet II",
    fuel: "diesel", displacementCc: 1598, cylinders: 4, powerKw: 88, powerHp: 120, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "Diésel de acceso de Renegade y Compass. Correcto en consumo; DPF y EGR piden recorridos de carretera.",
    dataStatus: "demo",
  },
  {
    id: "landrover-2-0-ingenium-d", slug: "landrover-2-0-ingenium-d", code: "2.0 Ingenium D180/D240",
    fuel: "diesel", displacementCc: 1997, cylinders: 4, powerKw: 132, powerHp: 180, torqueNm: 430,
    architecture: "4 cilindros en línea, turbo (D240 con doble turbo), common-rail",
    summary: "El diésel Ingenium propio de Land Rover en Evoque y Discovery Sport. Buen par para el todocamino; sistema de admisión y EGR exigen mantenimiento estricto.",
    dataStatus: "demo",
  },
  {
    id: "landrover-2-0-ingenium-p", slug: "landrover-2-0-ingenium-p", code: "2.0 Ingenium P200/P250",
    fuel: "gasolina", displacementCc: 1997, cylinders: 4, powerKw: 147, powerHp: 200, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "Gasolina Ingenium de Evoque y Discovery Sport. Suficiente y refinado para uso urbano-mixto; consumo real alto por el peso del coche.",
    dataStatus: "demo",
  },
  {
    id: "lexus-1-8-hybrid", slug: "lexus-1-8-hybrid", code: "1.8 Hybrid (2ZR-FXE)",
    fuel: "hibrido", displacementCc: 1798, cylinders: 4, powerKw: 74, powerHp: 101, torqueNm: 142,
    architecture: "4 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT",
    summary: "El híbrido del Lexus CT 200h, compartido con el Toyota Prius/Corolla de su época. Muy fiable y silencioso en ciudad; prestaciones ajustadas si se exige.",
    dataStatus: "demo",
  },
  {
    id: "lexus-2-0-hybrid", slug: "lexus-2-0-hybrid", code: "2.0 Hybrid",
    fuel: "hibrido", displacementCc: 1987, cylinders: 4, powerKw: 107, powerHp: 146, torqueNm: 190,
    architecture: "4 cilindros ciclo Atkinson + motor eléctrico, cambio e-CVT",
    summary: "Híbrido del Lexus UX. Consumo urbano muy bajo y la fiabilidad de la mecánica híbrida de Toyota/Lexus.",
    dataStatus: "demo",
  },
  {
    id: "puretech-1-2-ds", slug: "puretech-1-2-ds", code: "PureTech 130/155",
    fuel: "gasolina", displacementCc: 1199, cylinders: 3, powerKw: 96, powerHp: 130, torqueNm: 230,
    architecture: "3 cilindros en línea, turbo, inyección directa",
    summary: "El PureTech en su versión de gama alta para DS 3/DS 4/DS 7. Mismas cautelas que el resto de PureTech turbo: revisar historial de la correa de distribución.",
    dataStatus: "demo",
  },
  {
    id: "suzuki-1-4-boosterjet", slug: "suzuki-1-4-boosterjet", code: "1.4 Boosterjet",
    fuel: "gasolina", displacementCc: 1373, cylinders: 4, powerKw: 103, powerHp: 140, torqueNm: 220,
    architecture: "4 cilindros en línea, turbo, inyección directa, mild-hybrid 12 V opcional",
    summary: "El turbo de Swift Sport y Vitara S. Elástico y con buena respuesta; motor moderno con historial de fiabilidad todavía corto pero sin problemas destacados.",
    dataStatus: "demo",
  },
  {
    id: "suzuki-1-2-dualjet", slug: "suzuki-1-2-dualjet", code: "1.2 Dualjet Mild Hybrid",
    fuel: "hibrido", displacementCc: 1242, cylinders: 4, powerKw: 66, powerHp: 90, torqueNm: 120,
    architecture: "4 cilindros en línea, atmosférico, mild-hybrid 12 V (Suzuki Hybrid)",
    summary: "El atmosférico con microhibridación de Swift, Ignis y Vitara. Consumo urbano bajo para no llevar turbo; mecánica muy sencilla y fiable.",
    dataStatus: "demo",
  },
  {
    id: "mitsubishi-1-6-mivec", slug: "mitsubishi-1-6-mivec", code: "1.6 MIVEC",
    fuel: "gasolina", displacementCc: 1590, cylinders: 4, powerKw: 86, powerHp: 117, torqueNm: 154,
    architecture: "4 cilindros en línea, atmosférico, distribución variable MIVEC",
    summary: "Gasolina atmosférico del ASX. Sencillo y fiable, sin turbo ni correa bañada en aceite; justo de fuerza con el coche cargado.",
    dataStatus: "demo",
  },
  {
    id: "mitsubishi-phev-2-4", slug: "mitsubishi-phev-2-4", code: "2.4 PHEV (Outlander)",
    fuel: "hibrido-enchufable", displacementCc: 2360, cylinders: 4, powerKw: 94, powerHp: 128, torqueNm: 195,
    architecture: "4 cilindros atmosférico + dos motores eléctricos (uno por eje), tracción total eléctrica",
    summary: "El híbrido enchufable pionero del Outlander PHEV, con tracción total mediante dos motores eléctricos. Tecnología muy probada por el tiempo en el mercado; revisar el estado de la batería de tracción en unidades de más recorrido.",
    dataStatus: "demo",
  },
  {
    id: "smart-1-0-na", slug: "smart-1-0-na", code: "1.0 Turbo / 1.0",
    fuel: "gasolina", displacementCc: 999, cylinders: 3, powerKw: 52, powerHp: 71, torqueNm: 91,
    architecture: "3 cilindros en línea (atmosférico o turbo), motor trasero",
    summary: "El tricilíndrico trasero del smart ForTwo/ForFour (453). Ágil en ciudad por el giro cortísimo; nada de espacio ni de autovía es su fuerte.",
    dataStatus: "demo",
  },
  {
    id: "tesla-electric-sr", slug: "tesla-electric-sr", code: "Motor eléctrico (tracción trasera)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 208, powerHp: 283, torqueNm: 420,
    architecture: "Motor eléctrico de inducción/imanes permanentes, tracción trasera, batería de iones de litio",
    summary: "La versión de acceso de Tesla Model 3/Model Y. Sin motor de combustión: sin distribución, sin embrague, sin aceite de motor. Mantenimiento mínimo; el coste a vigilar es la batería y el software.",
    dataStatus: "demo",
  },
  {
    id: "tesla-electric-awd", slug: "tesla-electric-awd", code: "Motor eléctrico dual (tracción total)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 324, powerHp: 440, torqueNm: 493,
    architecture: "Dos motores eléctricos (uno por eje), tracción total, batería de iones de litio",
    summary: "La versión Dual Motor de Model 3/Model Y. Prestaciones muy altas y tracción total; el mismo mantenimiento mínimo que la versión de acceso.",
    dataStatus: "demo",
  },
  {
    id: "mg-1-5-vti", slug: "mg-1-5-vti", code: "1.5 VTi-Tech",
    fuel: "gasolina", displacementCc: 1498, cylinders: 4, powerKw: 84, powerHp: 114, torqueNm: 150,
    architecture: "4 cilindros en línea, atmosférico, inyección multipunto",
    summary: "El atmosférico de acceso de ZS y MG3. Sencillo y sin sobrealimentación; justo de fuerza en autovía y con el coche cargado.",
    dataStatus: "demo",
  },
  {
    id: "mg-1-5-turbo", slug: "mg-1-5-turbo", code: "1.5 T-GDI",
    fuel: "gasolina", displacementCc: 1490, cylinders: 4, powerKw: 119, powerHp: 162, torqueNm: 250,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "El turbo de gama alta de ZS y HS. Prestaciones notables por el precio; mecánica moderna con historial de fiabilidad todavía corto.",
    dataStatus: "demo",
  },
  {
    id: "mg-electric", slug: "mg-electric", code: "Motor eléctrico MG",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 125, powerHp: 170, torqueNm: 280,
    architecture: "Motor eléctrico síncrono, tracción delantera, batería de iones de litio",
    summary: "El motor eléctrico de MG4 y ZS EV. Sin mecánica de combustión que mantener; el precio de entrada al eléctrico más bajo del mercado.",
    dataStatus: "demo",
  },
  {
    id: "bmw-n57-3-0d", slug: "bmw-n57-3-0d", code: "N57 3.0d",
    fuel: "diesel", displacementCc: 2993, cylinders: 6, powerKw: 190, powerHp: 258, torqueNm: 560,
    architecture: "6 cilindros en línea, turbo, common-rail",
    summary: "El seis cilindros diésel de BMW de la década de 2010 (X5, Serie 5, Serie 7). Refinamiento y empuje notables; mantenimiento caro y sensible al aceite correcto.",
    dataStatus: "demo",
  },
  {
    id: "bmw-b58-3-0", slug: "bmw-b58-3-0", code: "B58 3.0",
    fuel: "gasolina", displacementCc: 2998, cylinders: 6, powerKw: 250, powerHp: 340, torqueNm: 500,
    architecture: "6 cilindros en línea, turbo, inyección directa",
    summary: "El seis en línea gasolina moderno de BMW (M340i, X5 40i). De los motores turbo más fiables y suaves del mercado; consumo elevado si se exige.",
    dataStatus: "demo",
  },
  {
    id: "audi-3-0-tdi", slug: "audi-3-0-tdi", code: "3.0 TDI V6",
    fuel: "diesel", displacementCc: 2967, cylinders: 6, powerKw: 160, powerHp: 218, torqueNm: 500,
    architecture: "6 cilindros en V, turbo, common-rail, SCR con AdBlue",
    summary: "El diésel V6 de Audi (A6, Q7). Refinado y con mucho par; el sistema SCR y la EGR requieren mantenimiento riguroso.",
    dataStatus: "demo",
  },
  {
    id: "mercedes-om656", slug: "mercedes-om656", code: "OM656 3.0d",
    fuel: "diesel", displacementCc: 2925, cylinders: 6, powerKw: 210, powerHp: 286, torqueNm: 600,
    architecture: "6 cilindros en línea, turbo, common-rail, SCR con AdBlue",
    summary: "El seis cilindros diésel moderno de Mercedes (Clase E, GLE). Muy suave y potente; sistema de postratamiento complejo que exige mantenimiento al día.",
    dataStatus: "demo",
  },
  {
    id: "mercedes-m264-e", slug: "mercedes-m264-e", code: "M264 2.0 (Clase E)",
    fuel: "gasolina", displacementCc: 1991, cylinders: 4, powerKw: 145, powerHp: 197, torqueNm: 320,
    architecture: "4 cilindros en línea, turbo, sistema de 48 V en varias versiones",
    summary: "El 2.0 gasolina de la Clase E (E 200). Suave y suficiente para una berlina grande; la microhibridación de 48 V añade complejidad electrónica.",
    dataStatus: "demo",
  },

  /* ── Tercera ampliación: motores eléctricos propios y grandes ── */
  {
    id: "vw-meb-rwd", slug: "vw-meb-rwd", code: "Motor eléctrico MEB (tracción trasera)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 150, powerHp: 204, torqueNm: 310,
    architecture: "Motor eléctrico síncrono en el eje trasero, batería de iones de litio (plataforma MEB del Grupo VW)",
    summary: "El motor eléctrico de la plataforma MEB que comparten VW ID.3/ID.4, CUPRA Born y Škoda Enyaq. Sin mecánica de combustión que mantener; revisar autonomía real y actualizaciones de software de la unidad.",
    dataStatus: "demo",
  },
  {
    id: "vw-meb-awd", slug: "vw-meb-awd", code: "Motor eléctrico MEB dual (tracción total)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 220, powerHp: 299, torqueNm: 460,
    architecture: "Dos motores eléctricos (uno por eje), tracción total, batería de iones de litio (plataforma MEB)",
    summary: "La versión de tracción total de la plataforma MEB (ID.4 GTX, Enyaq RS). Prestaciones altas y tracción total; mismo mantenimiento mínimo que la versión de acceso.",
    dataStatus: "demo",
  },
  {
    id: "nissan-leaf-electric", slug: "nissan-leaf-electric", code: "Motor eléctrico Nissan (40/62 kWh)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 110, powerHp: 150, torqueNm: 320,
    architecture: "Motor eléctrico síncrono de imanes permanentes, tracción delantera, batería sin refrigeración líquida en la mayoría de versiones",
    summary: "El motor eléctrico propio de Nissan del Leaf, de los más probados del mercado por sus años de recorrido comercial. Revisar el estado de salud (SOH) de la batería antes de comprar.",
    dataStatus: "demo",
  },
  {
    id: "renault-electric-zoe", slug: "renault-electric-zoe", code: "Motor eléctrico R135/R110 (Zoe)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 100, powerHp: 135, torqueNm: 245,
    architecture: "Motor eléctrico síncrono, tracción delantera, batería de iones de litio (52 kWh en la versión ZE50)",
    summary: "El motor eléctrico propio de Renault de la Zoe. Buena autonomía real para un eléctrico urbano; en unidades antiguas verificar si la batería es en propiedad o estaba en régimen de alquiler.",
    dataStatus: "demo",
  },
  {
    id: "mazda-mx30-ev", slug: "mazda-mx30-ev", code: "Motor eléctrico e-Skyactiv (MX-30)",
    fuel: "electrico", displacementCc: 0, cylinders: 0, powerKw: 107, powerHp: 145, torqueNm: 271,
    architecture: "Motor eléctrico síncrono, tracción delantera, batería de 35,5 kWh (capacidad reducida a propósito)",
    summary: "El motor eléctrico del Mazda MX-30, con una batería deliberadamente más pequeña que la media para priorizar peso y comportamiento sobre autonomía máxima.",
    dataStatus: "demo",
  },
  {
    id: "toyota-1gd-diesel", slug: "toyota-1gd-diesel", code: "2.8 D-4D (1GD-FTV)",
    fuel: "diesel", displacementCc: 2755, cylinders: 4, powerKw: 130, powerHp: 177, torqueNm: 450,
    architecture: "4 cilindros en línea, turbo, common-rail (motor robusto usado también en Hilux)",
    summary: "El diésel del Land Cruiser en su última etapa, compartido con el Hilux. Reputación de robustez y durabilidad extrema; mantenimiento caro pero mecánica muy fiable si se respeta.",
    dataStatus: "demo",
  },
  {
    id: "ford-v8-5-0", slug: "ford-v8-5-0", code: "V8 5.0 Ti-VCT (Mustang GT)",
    fuel: "gasolina", displacementCc: 4951, cylinders: 8, powerKw: 331, powerHp: 450, torqueNm: 529,
    architecture: "8 cilindros en V, atmosférico, distribución variable Ti-VCT",
    summary: "El V8 atmosférico del Mustang GT. Sonido y carácter de referencia; consumo alto y mantenimiento propio de un V8 americano en Europa (recambios y mano de obra especializada).",
    dataStatus: "demo",
  },
  {
    id: "ford-2-3-ecoboost", slug: "ford-2-3-ecoboost", code: "2.3 EcoBoost (Mustang)",
    fuel: "gasolina", displacementCc: 2261, cylinders: 4, powerKw: 231, powerHp: 314, torqueNm: 434,
    architecture: "4 cilindros en línea, turbo, inyección directa",
    summary: "La versión de 4 cilindros turbo del Mustang. Más ligero sobre el eje delantero que el V8 y más sobrio; pierde el sonido y el carácter del ocho cilindros.",
    dataStatus: "demo",
  },
  {
    id: "hyundai-2-2-crdi", slug: "hyundai-2-2-crdi", code: "2.2 CRDi",
    fuel: "diesel", displacementCc: 2199, cylinders: 4, powerKw: 147, powerHp: 200, torqueNm: 440,
    architecture: "4 cilindros en línea, turbo, common-rail",
    summary: "El diésel grande de Hyundai para SUV familiares (Santa Fe). Buen par para remolcar y viajar cargado; EGR y sistema de postratamiento exigen mantenimiento al día.",
    dataStatus: "demo",
  },
];
