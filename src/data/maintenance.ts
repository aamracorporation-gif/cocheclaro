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

  /* ── Fichas ampliadas: motores adicionales ────────────────── */
  { id: "m-ea111-aceite", engineId: "ea111-1-4-tsi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "No superar el intervalo: es clave para la vida de la cadena de distribución." },
  { id: "m-ea111-cadena", engineId: "ea111-1-4-tsi", item: "Revisión / sustitución del kit de cadena de distribución", intervalKm: 120000, notes: "Muchos talleres recomiendan revisar antes en las series 2007-2012." },
  { id: "m-ea111-bujias", engineId: "ea111-1-4-tsi", item: "Bujías", intervalKm: 60000 },

  { id: "m-ea211-12tsi-aceite", engineId: "ea211-1-2-tsi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-ea211-12tsi-correa", engineId: "ea211-1-2-tsi", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },

  { id: "m-ea189-16-aceite", engineId: "ea189-1-6-tdi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "Plan fijo recomendable si hay mucha ciudad." },
  { id: "m-ea189-16-correa", engineId: "ea189-1-6-tdi", item: "Correa de distribución + bomba de agua", intervalKm: 120000, intervalMonths: 96 },
  { id: "m-ea189-20-aceite", engineId: "ea189-2-0-tdi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-ea189-20-correa", engineId: "ea189-2-0-tdi", item: "Correa de distribución + bomba de agua", intervalKm: 120000, intervalMonths: 96 },
  { id: "m-ea189-combustible", engineId: "ea189-2-0-tdi", item: "Filtro de combustible", intervalKm: 60000 },

  { id: "m-pd19-aceite", engineId: "pd-1-9-tdi", item: "Cambio de aceite y filtro (aceite específico para inyector-bomba)", intervalKm: 15000, intervalMonths: 12, notes: "Usar SIEMPRE la especificación correcta: el aceite inadecuado daña las levas de inyección." },
  { id: "m-pd19-correa", engineId: "pd-1-9-tdi", item: "Correa de distribución + bomba de agua", intervalKm: 120000, intervalMonths: 96 },
  { id: "m-pd19-combustible", engineId: "pd-1-9-tdi", item: "Filtro de combustible", intervalKm: 60000 },

  { id: "m-bitdi-aceite", engineId: "ea288-2-0-bitdi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "Intervalo fijo recomendable por los turbos secuenciales." },
  { id: "m-bitdi-adblue", engineId: "ea288-2-0-bitdi", item: "Relleno de AdBlue", intervalKm: 10000 },

  { id: "m-hdi16-aceite", engineId: "hdi-1-6", item: "Cambio de aceite y filtro (grado y cantidad exactos)", intervalKm: 15000, intervalMonths: 12, notes: "Crítico para no obstruir el tubo de engrase del turbo." },
  { id: "m-hdi16-combustible", engineId: "hdi-1-6", item: "Filtro de combustible", intervalKm: 60000 },
  { id: "m-hdi20-aceite", engineId: "hdi-2-0-dw10-older", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-hdi20-adblue", engineId: "hdi-2-0-dw10-older", item: "Relleno de AdBlue", intervalKm: 10000 },

  { id: "m-puretech-na-aceite", engineId: "puretech-1-2-na", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-energy-tce12-aceite", engineId: "energy-tce-1-2", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12, notes: "Vigilar el nivel de aceite entre cambios en unidades 2013-2018." },
  { id: "m-energy-tce12-correa", engineId: "energy-tce-1-2", item: "Correa de distribución", intervalKm: 120000, intervalMonths: 96 },

  { id: "m-skyg20-aceite", engineId: "skyactiv-g-2-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-skyg20-bujias", engineId: "skyactiv-g-2-0", item: "Bujías", intervalKm: 60000 },
  { id: "m-skyg15-aceite", engineId: "skyactiv-g-1-5", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-skyx20-aceite", engineId: "skyactiv-x-2-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-skyd18-aceite", engineId: "skyactiv-d-1-8", item: "Cambio de aceite y filtro (aceite específico Skyactiv-D)", intervalKm: 12500, intervalMonths: 12, notes: "Acortar si el uso es urbano: la dilución de aceite es un punto a vigilar." },
  { id: "m-skyd22-aceite", engineId: "skyactiv-d-2-2", item: "Cambio de aceite y filtro (aceite específico Skyactiv-D)", intervalKm: 12500, intervalMonths: 12, notes: "Comprobar nivel y olor del aceite; si sube, revisar dilución." },
  { id: "m-skyd22-combustible", engineId: "skyactiv-d-2-2", item: "Filtro de combustible", intervalKm: 60000 },

  { id: "m-twinair-aceite", engineId: "twinair-0-9", item: "Cambio de aceite y filtro (grado exacto)", intervalKm: 15000, intervalMonths: 12, notes: "Vigilar el nivel entre cambios." },
  { id: "m-firefly-aceite", engineId: "firefly-1-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-fiat16mjet-aceite", engineId: "fiat-1-6-multijet", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-fiat16mjet-combustible", engineId: "fiat-1-6-multijet", item: "Filtro de combustible", intervalKm: 60000 },

  { id: "m-volvo-t-aceite", engineId: "volvo-t3-t4", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12, notes: "Vigilar nivel de aceite en las primeras series Drive-E." },
  { id: "m-volvo-t-bujias", engineId: "volvo-t3-t4", item: "Bujías", intervalKm: 60000 },
  { id: "m-volvo-d-aceite", engineId: "volvo-d3-d4", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-volvo-d-adblue", engineId: "volvo-d3-d4", item: "Relleno de AdBlue (versiones con SCR)", intervalKm: 12000 },
  { id: "m-volvo-aisin", engineId: "volvo-d3-d4", item: "Cambio de aceite de la caja automática Aisin", intervalKm: 120000, notes: "Muy recomendable aunque el fabricante la considere 'de por vida'." },

  { id: "m-honda10t-aceite", engineId: "honda-1-0-vtec-turbo", item: "Cambio de aceite y filtro", intervalKm: 12500, intervalMonths: 12 },
  { id: "m-honda15t-aceite", engineId: "honda-1-5-vtec-turbo", item: "Cambio de aceite y filtro", intervalKm: 12500, intervalMonths: 12, notes: "Comprobar nivel y olor del aceite si el uso es urbano en frío (dilución)." },
  { id: "m-honda16d-aceite", engineId: "honda-1-6-idtec", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-honda-ehev-aceite", engineId: "honda-e-hev-2-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-honda-ehev15-aceite", engineId: "honda-e-hev-1-5", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-toyota25h-aceite", engineId: "toyota-2-5-hybrid", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-toyota25h-refrig", engineId: "toyota-2-5-hybrid", item: "Líquido refrigerante del inversor y del motor", intervalKm: 100000, intervalMonths: 120 },
  { id: "m-toyota10-aceite", engineId: "toyota-1-0-vvti", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  { id: "m-opel16cdti-aceite", engineId: "opel-1-6-cdti", item: "Cambio de aceite y filtro (grado y cantidad exactos)", intervalKm: 15000, intervalMonths: 12, notes: "No alargar el intervalo: influye en la vida de la correa y del sistema de gases." },
  { id: "m-opel16cdti-correa", engineId: "opel-1-6-cdti", item: "Correa de distribución + bomba de agua", intervalKm: 90000, intervalMonths: 96 },
  { id: "m-opel14t-aceite", engineId: "opel-1-4-turbo", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-opel14t-bujias", engineId: "opel-1-4-turbo", item: "Bujías", intervalKm: 60000 },

  { id: "m-kappa125-aceite", engineId: "kappa-1-25-mpi", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },

  /* ── Segunda/tercera ampliación ────────────────────────────── */
  { id: "m-alfa16jtdm-aceite", engineId: "alfa-1-6-jtdm", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-alfa20jtdm-aceite", engineId: "alfa-2-0-jtdm", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-alfa14tb-aceite", engineId: "alfa-1-4-tb", item: "Cambio de aceite y filtro (aceite específico MultiAir)", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-alfa20gme-aceite", engineId: "alfa-2-0-gme", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-jeep16mjet-aceite", engineId: "jeep-1-6-multijet", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-lr-ingeniumd-aceite", engineId: "landrover-2-0-ingenium-d", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-lr-ingeniumd-adblue", engineId: "landrover-2-0-ingenium-d", item: "Relleno de AdBlue", intervalKm: 10000 },
  { id: "m-lr-ingeniump-aceite", engineId: "landrover-2-0-ingenium-p", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-lexus18h-aceite", engineId: "lexus-1-8-hybrid", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-lexus20h-aceite", engineId: "lexus-2-0-hybrid", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-suzuki14bj-aceite", engineId: "suzuki-1-4-boosterjet", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-suzuki12dj-aceite", engineId: "suzuki-1-2-dualjet", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-mitsu16mivec-aceite", engineId: "mitsubishi-1-6-mivec", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-mitsuphev-freno", engineId: "mitsubishi-phev-2-4", item: "Líquido de frenos (la frenada regenerativa reduce el desgaste de pastillas)", intervalMonths: 24 },
  { id: "m-smart10-aceite", engineId: "smart-1-0-na", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-tesla-sr-frenos", engineId: "tesla-electric-sr", item: "Líquido de frenos (revisión, apenas se desgastan las pastillas)", intervalMonths: 24 },
  { id: "m-tesla-sr-refrig", engineId: "tesla-electric-sr", item: "Líquido refrigerante de la batería y del motor", intervalKm: 100000, intervalMonths: 60 },
  { id: "m-tesla-awd-neumaticos", engineId: "tesla-electric-awd", item: "Rotación y revisión de neumáticos (desgaste algo más rápido por el peso)", intervalKm: 10000 },
  { id: "m-mg15vti-aceite", engineId: "mg-1-5-vti", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-mg15turbo-aceite", engineId: "mg-1-5-turbo", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-bmwn57-aceite", engineId: "bmw-n57-3-0d", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-bmwb58-aceite", engineId: "bmw-b58-3-0", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-audi30tdi-aceite", engineId: "audi-3-0-tdi", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-audi30tdi-adblue", engineId: "audi-3-0-tdi", item: "Relleno de AdBlue", intervalKm: 10000 },
  { id: "m-om656-aceite", engineId: "mercedes-om656", item: "Cambio de aceite y filtro", intervalKm: 25000, intervalMonths: 12 },
  { id: "m-om656-adblue", engineId: "mercedes-om656", item: "Relleno de AdBlue", intervalKm: 10000 },
  { id: "m-m264e-aceite", engineId: "mercedes-m264-e", item: "Cambio de aceite y filtro", intervalKm: 25000, intervalMonths: 12 },
  { id: "m-vwmeb-rwd-refrig", engineId: "vw-meb-rwd", item: "Líquido refrigerante de la batería", intervalKm: 100000, intervalMonths: 60 },
  { id: "m-vwmeb-rwd-frenos", engineId: "vw-meb-rwd", item: "Líquido de frenos", intervalMonths: 24 },
  { id: "m-vwmeb-awd-frenos", engineId: "vw-meb-awd", item: "Líquido de frenos", intervalMonths: 24 },
  { id: "m-toyota1gd-aceite", engineId: "toyota-1gd-diesel", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-fordv8-aceite", engineId: "ford-v8-5-0", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-fordv8-bujias", engineId: "ford-v8-5-0", item: "Bujías", intervalKm: 60000 },
  { id: "m-ford23eco-aceite", engineId: "ford-2-3-ecoboost", item: "Cambio de aceite y filtro", intervalKm: 15000, intervalMonths: 12 },
  { id: "m-hyundai22crdi-aceite", engineId: "hyundai-2-2-crdi", item: "Cambio de aceite y filtro", intervalKm: 20000, intervalMonths: 12 },
  { id: "m-nissanleaf-refrig", engineId: "nissan-leaf-electric", item: "Revisión del sistema de gestión térmica (sin refrigeración líquida en la mayoría de versiones)", intervalKm: 40000 },
  { id: "m-renaultzoe-refrig", engineId: "renault-electric-zoe", item: "Líquido refrigerante de la batería y del motor", intervalKm: 100000, intervalMonths: 60 },
  { id: "m-mazdamx30-refrig", engineId: "mazda-mx30-ev", item: "Líquido refrigerante de la batería", intervalKm: 100000, intervalMonths: 60 },
];
