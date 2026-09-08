import type { MaintenanceItem } from "@/lib/types";

/**
 * Intervalos de mantenimiento. Dataset de DEMOSTRACIÓN. Los intervalos reales
 * dependen del país, el año, el tipo de aceite y el plan del fabricante; en
 * producción cada fila debe tener `sourceId` verificado.
 */
export const maintenanceItems: MaintenanceItem[] = [
  // Genéricos por combustible (asociados a motores concretos como ejemplo)
  { id: "m-b47-aceite", engineId: "b47d20", item: "Cambio de aceite y filtro (aceite específico low-SAPS)", intervalKm: 20000, intervalMonths: 24, notes: "Acortar a 15.000 km / 12 meses en uso urbano intensivo para cuidar la cadena.", sourceId: "src-fabricante-generico" },
  { id: "m-b47-filtro-aire", engineId: "b47d20", item: "Filtro de aire y filtro de habitáculo", intervalKm: 40000, intervalMonths: 24 },
  { id: "m-b47-combustible", engineId: "b47d20", item: "Filtro de combustible (diésel)", intervalKm: 60000, intervalMonths: 48 },
  { id: "m-b47-adblue", engineId: "b47d20", item: "Relleno de AdBlue", intervalKm: 12000, notes: "Consumo aproximado 1-1,5 l cada 1.000 km." },

  { id: "m-b48-aceite", engineId: "b48", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 24 },
  { id: "m-b48-bujias", engineId: "b48", item: "Bujías de encendido", intervalKm: 60000, intervalMonths: 72 },

  { id: "m-ea288-aceite", engineId: "ea288-2-0-tdi", item: "Cambio de aceite y filtro (long-life o fijo según uso)", intervalKm: 30000, intervalMonths: 24, notes: "Recomendable plan fijo (15.000 km) si hay mucha ciudad." },
  { id: "m-ea288-correa", engineId: "ea288-2-0-tdi", item: "Correa de distribución + bomba de agua", intervalKm: 120000, intervalMonths: 96, sourceId: "src-fabricante-generico" },
  { id: "m-ea288-combustible", engineId: "ea288-2-0-tdi", item: "Filtro de combustible", intervalKm: 60000 },
  { id: "m-ea288-adblue", engineId: "ea288-2-0-tdi", item: "Relleno de AdBlue", intervalKm: 10000 },

  { id: "m-15tsi-aceite", engineId: "ea211-1-5-tsi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "Evitar intervalos long-life si el uso es urbano." },
  { id: "m-15tsi-correa", engineId: "ea211-1-5-tsi", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },
  { id: "m-15tsi-bujias", engineId: "ea211-1-5-tsi", item: "Bujías", intervalKm: 60000 },

  { id: "m-10tsi-aceite", engineId: "ea211-1-0-tsi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-10tsi-correa", engineId: "ea211-1-0-tsi", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },

  { id: "m-puretech-aceite", engineId: "puretech-1-2", item: "Cambio de aceite y filtro (aceite exacto de especificación)", intervalKm: 15000, intervalMonths: 12, notes: "Clave para la vida de la correa 'húmeda'. No superar el intervalo." },
  { id: "m-puretech-correa", engineId: "puretech-1-2", item: "Correa de distribución 'húmeda' (kit actualizado)", intervalKm: 100000, intervalMonths: 72, notes: "Muchos talleres recomiendan adelantar a 60.000-80.000 km en las series 2019-2021.", sourceId: "src-medio-tecnico" },

  { id: "m-bluehdi15-aceite", engineId: "bluehdi-1-5", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-bluehdi15-adblue", engineId: "bluehdi-1-5", item: "Relleno de AdBlue", intervalKm: 8000 },
  { id: "m-bluehdi15-combustible", engineId: "bluehdi-1-5", item: "Filtro de combustible", intervalKm: 60000 },

  { id: "m-dci15-aceite", engineId: "dci-1-5-blue", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-dci15-correa", engineId: "dci-1-5-blue", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },

  { id: "m-tce13-aceite", engineId: "tce-1-3", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "Vigilar nivel entre cambios en unidades de primeras series." },
  { id: "m-tce13-correa", engineId: "tce-1-3", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },

  { id: "m-tce10-aceite", engineId: "tce-1-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-toyhsd18-aceite", engineId: "toyota-hsd-1-8", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-toyhsd18-bujias", engineId: "toyota-hsd-1-8", item: "Bujías (larga duración)", intervalKm: 100000 },
  { id: "m-toyhsd18-refrig", engineId: "toyota-hsd-1-8", item: "Líquido refrigerante del inversor y del motor", intervalKm: 100000, intervalMonths: 120 },
  { id: "m-toyhsd18-filtro-hv", engineId: "toyota-hsd-1-8", item: "Filtro de la batería híbrida (ventilación)", intervalKm: 40000 },

  { id: "m-toy15h-aceite", engineId: "toyota-1-5-hybrid", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-toyhsd20-aceite", engineId: "toyota-hsd-2-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-hev16-aceite", engineId: "hyundai-kia-1-6-hev", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-crdi16-aceite", engineId: "smartstream-1-6-crdi", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-crdi16-combustible", engineId: "smartstream-1-6-crdi", item: "Filtro de combustible", intervalKm: 60000 },
  { id: "m-tgdi16-aceite", engineId: "smartstream-1-6-tgdi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-tgdi10-aceite", engineId: "kappa-1-0-tgdi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-ecoboost10-aceite", engineId: "ecoboost-1-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-ecoboost10-correa", engineId: "ecoboost-1-0", item: "Correa de distribución 'húmeda'", intervalKm: 150000, intervalMonths: 120, notes: "Intervalo estricto; consultar plan de la unidad." },
  { id: "m-ecoblue15-aceite", engineId: "ecoblue-1-5", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-ecoblue15-correa", engineId: "ecoblue-1-5", item: "Correa de distribución 'húmeda' en aceite", intervalKm: 150000, intervalMonths: 120, notes: "Respetar el intervalo de forma estricta." },

  { id: "m-om654-aceite", engineId: "om654", item: "Cambio de aceite y filtro", intervalKm: 25000, intervalMonths: 12 },
  { id: "m-om654-adblue", engineId: "om654", item: "Relleno de AdBlue", intervalKm: 10000 },
  { id: "m-m264-aceite", engineId: "m264", item: "Cambio de aceite y filtro", intervalKm: 25000, intervalMonths: 12 },

  { id: "m-hybrid16ren-aceite", engineId: "hybrid-1-6-renault", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-hybrid16ren-freno", engineId: "hybrid-1-6-renault", item: "Líquido de frenos (la frenada regenerativa reduce el desgaste de pastillas)", intervalMonths: 24 },

  // A nivel de generación: elementos comunes
  { id: "m-g20-filtro-hab", generationId: "bmw:serie-3:g20", item: "Filtro de habitáculo (antipolen)", intervalMonths: 24, intervalKm: 30000 },
  { id: "m-g20-frenos", generationId: "bmw:serie-3:g20", item: "Líquido de frenos", intervalMonths: 24 },
  { id: "m-tiguan-haldex", generationId: "volkswagen:tiguan:ad1", item: "Aceite del embrague Haldex (tracción 4Motion)", intervalKm: 60000, notes: "Muy a menudo omitido; su falta acorta la vida del Haldex." },
  { id: "m-ateca-haldex", generationId: "seat:ateca:5fp", item: "Aceite del embrague Haldex (tracción 4Drive)", intervalKm: 60000 },
];
