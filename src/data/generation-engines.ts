import type { GenerationEngine, Transmission, Drivetrain } from "@/lib/types";

/**
 * Relación generación ↔ motor. Datos de DEMOSTRACIÓN.
 * `trimLabel` es la etiqueta comercial; `consumption` solo se rellena
 * cuando el dato homologado está verificado (aquí es orientativo).
 */
function ge(
  generationId: string,
  engineId: string,
  trimLabel: string,
  startYear: number,
  opts: {
    transmission?: Transmission;
    drivetrain?: Drivetrain;
    endYear?: number;
    consumption?: number;
  } = {},
): GenerationEngine {
  return {
    generationId,
    engineId,
    trimLabel,
    startYear,
    endYear: opts.endYear,
    transmission: opts.transmission ?? "manual",
    drivetrain: opts.drivetrain ?? "delantera",
    consumption: opts.consumption,
  };
}

export const generationEngines: GenerationEngine[] = [
  // BMW Serie 1 F40
  ge("bmw:serie-1:f40", "b38", "118i", 2019, { transmission: "automatico", consumption: 6.0 }),
  ge("bmw:serie-1:f40", "b47d20", "118d", 2019, { transmission: "automatico", consumption: 4.5 }),
  // BMW Serie 2 Gran Coupé F44
  ge("bmw:serie-2-gran-coupe:f44", "b38", "218i", 2020, { transmission: "automatico", consumption: 6.1 }),
  ge("bmw:serie-2-gran-coupe:f44", "b47d20", "218d", 2020, { transmission: "automatico", consumption: 4.6 }),
  // BMW Serie 3 G20
  ge("bmw:serie-3:g20", "b48", "320i", 2019, { transmission: "automatico", drivetrain: "trasera", consumption: 6.4 }),
  ge("bmw:serie-3:g20", "b47d20", "320d", 2019, { transmission: "automatico", drivetrain: "trasera", consumption: 4.4 }),
  // BMW Serie 3 F30
  ge("bmw:serie-3:f30", "b48", "320i", 2015, { transmission: "automatico", drivetrain: "trasera", endYear: 2019, consumption: 6.6 }),
  ge("bmw:serie-3:f30", "b47d20", "320d", 2015, { transmission: "automatico", drivetrain: "trasera", endYear: 2019, consumption: 4.5 }),
  // BMW Serie 5 G30
  ge("bmw:serie-5:g30", "b48", "520i", 2017, { transmission: "automatico", drivetrain: "trasera", consumption: 6.6 }),
  ge("bmw:serie-5:g30", "b47d20", "520d", 2017, { transmission: "automatico", drivetrain: "trasera", consumption: 4.6 }),
  ge("bmw:serie-5:g30", "b57d30", "530d", 2017, { transmission: "automatico", drivetrain: "trasera", consumption: 5.4 }),
  // Audi A3 8Y
  ge("audi:a3:8y", "ea211-1-5-tsi", "35 TFSI", 2020, { transmission: "automatico", consumption: 5.6 }),
  ge("audi:a3:8y", "ea888-2-0-tsi", "40 TFSI quattro", 2020, { transmission: "automatico", drivetrain: "total", consumption: 7.1 }),
  ge("audi:a3:8y", "ea288-2-0-tdi", "35 TDI", 2020, { transmission: "automatico", consumption: 4.5 }),
  // Audi A3 8V
  ge("audi:a3:8v", "ea211-1-5-tsi", "1.5 TFSI", 2017, { endYear: 2020, consumption: 5.4 }),
  ge("audi:a3:8v", "ea211-1-6-tdi", "1.6 TDI", 2012, { endYear: 2020, consumption: 4.1 }),
  ge("audi:a3:8v", "ea288-2-0-tdi", "2.0 TDI", 2012, { transmission: "automatico", endYear: 2020, consumption: 4.4 }),
  // Audi A4 B9
  ge("audi:a4:b9", "ea888-2-0-tsi", "35/40 TFSI", 2015, { transmission: "automatico", endYear: 2023, consumption: 6.6 }),
  ge("audi:a4:b9", "ea288-2-0-tdi", "35/40 TDI", 2015, { transmission: "automatico", endYear: 2023, consumption: 4.5 }),
  // Audi A5 F5
  ge("audi:a5:f5", "ea888-2-0-tsi", "40 TFSI", 2016, { transmission: "automatico", endYear: 2024, consumption: 6.7 }),
  ge("audi:a5:f5", "ea288-2-0-tdi", "40 TDI", 2016, { transmission: "automatico", endYear: 2024, consumption: 4.6 }),
  // Mercedes Clase A W177
  ge("mercedes-benz:clase-a:w177", "m264", "A 250", 2018, { transmission: "automatico", endYear: 2025, consumption: 6.5 }),
  ge("mercedes-benz:clase-a:w177", "om654", "A 200 d", 2018, { transmission: "automatico", endYear: 2025, consumption: 4.5 }),
  ge("mercedes-benz:clase-a:w177", "om608-om654q", "A 180 d", 2018, { transmission: "automatico", endYear: 2025, consumption: 4.4 }),
  // Mercedes CLA C118
  ge("mercedes-benz:cla:c118", "m264", "CLA 250", 2019, { transmission: "automatico", endYear: 2025, consumption: 6.5 }),
  ge("mercedes-benz:cla:c118", "om654", "CLA 200 d", 2019, { transmission: "automatico", endYear: 2025, consumption: 4.5 }),
  // Mercedes Clase C W206
  ge("mercedes-benz:clase-c:w206", "m264", "C 200", 2021, { transmission: "automatico", drivetrain: "trasera", consumption: 6.6 }),
  ge("mercedes-benz:clase-c:w206", "om654", "C 220 d", 2021, { transmission: "automatico", drivetrain: "trasera", consumption: 4.6 }),
  // VW Golf 8
  ge("volkswagen:golf:mk8", "ea211-1-0-tsi", "1.0 TSI / eTSI", 2020, { consumption: 5.4 }),
  ge("volkswagen:golf:mk8", "ea211-1-5-tsi", "1.5 TSI / eTSI", 2020, { transmission: "automatico", consumption: 5.5 }),
  ge("volkswagen:golf:mk8", "ea288-2-0-tdi", "2.0 TDI", 2020, { transmission: "automatico", consumption: 4.3 }),
  // VW Golf 7
  ge("volkswagen:golf:mk7", "ea211-1-5-tsi", "1.5 TSI", 2017, { endYear: 2020, consumption: 5.3 }),
  ge("volkswagen:golf:mk7", "ea211-1-6-tdi", "1.6 TDI", 2012, { endYear: 2020, consumption: 4.1 }),
  ge("volkswagen:golf:mk7", "ea288-2-0-tdi", "2.0 TDI", 2012, { transmission: "automatico", endYear: 2020, consumption: 4.4 }),
  // VW Polo AW
  ge("volkswagen:polo:aw", "ea211-1-0-tsi", "1.0 TSI 95/110", 2017, { consumption: 5.2 }),
  // VW Tiguan AD1
  ge("volkswagen:tiguan:ad1", "ea211-1-5-tsi", "1.5 TSI", 2016, { endYear: 2024, consumption: 6.5 }),
  ge("volkswagen:tiguan:ad1", "ea888-2-0-tsi", "2.0 TSI 4Motion", 2016, { transmission: "automatico", drivetrain: "total", endYear: 2024, consumption: 7.8 }),
  ge("volkswagen:tiguan:ad1", "ea288-2-0-tdi", "2.0 TDI 4Motion", 2016, { transmission: "automatico", drivetrain: "total", endYear: 2024, consumption: 5.3 }),
  // SEAT Ibiza KJ
  ge("seat:ibiza:kj", "ea211-1-0-tsi", "1.0 TSI 95/110", 2017, { consumption: 5.1 }),
  ge("seat:ibiza:kj", "ea211-1-5-tsi", "1.5 TSI FR", 2017, { consumption: 5.4 }),
  // SEAT León KL
  ge("seat:leon:kl", "ea211-1-0-tsi", "1.0 TSI / eTSI", 2020, { consumption: 5.4 }),
  ge("seat:leon:kl", "ea211-1-5-tsi", "1.5 TSI / eTSI", 2020, { transmission: "automatico", consumption: 5.5 }),
  ge("seat:leon:kl", "ea288-2-0-tdi", "2.0 TDI", 2020, { transmission: "automatico", consumption: 4.3 }),
  // SEAT Ateca
  ge("seat:ateca:5fp", "ea211-1-5-tsi", "1.5 TSI", 2016, { consumption: 6.3 }),
  ge("seat:ateca:5fp", "ea888-2-0-tsi", "2.0 TSI 4Drive", 2016, { transmission: "automatico", drivetrain: "total", consumption: 7.6 }),
  ge("seat:ateca:5fp", "ea288-2-0-tdi", "2.0 TDI 4Drive", 2016, { transmission: "automatico", drivetrain: "total", consumption: 5.2 }),
  // CUPRA Formentor
  ge("cupra:formentor:km7", "ea211-1-5-tsi", "1.5 TSI 150", 2020, { consumption: 6.4 }),
  ge("cupra:formentor:km7", "ea888-2-0-tsi", "2.0 TSI VZ", 2020, { transmission: "automatico", drivetrain: "total", consumption: 8.2 }),
  // CUPRA León
  ge("cupra:leon:kl", "ea211-1-5-tsi", "1.5 eTSI 150", 2020, { transmission: "automatico", consumption: 5.6 }),
  ge("cupra:leon:kl", "ea888-2-0-tsi", "2.0 TSI 245/300", 2020, { transmission: "automatico", consumption: 7.4 }),
  // Škoda Octavia NX
  ge("skoda:octavia:nx", "ea211-1-0-tsi", "1.0 TSI / e-Tec", 2019, { consumption: 5.3 }),
  ge("skoda:octavia:nx", "ea211-1-5-tsi", "1.5 TSI / e-Tec", 2019, { transmission: "automatico", consumption: 5.4 }),
  ge("skoda:octavia:nx", "ea288-2-0-tdi", "2.0 TDI", 2019, { transmission: "automatico", consumption: 4.2 }),
  // Škoda Karoq
  ge("skoda:karoq:nu", "ea211-1-5-tsi", "1.5 TSI", 2017, { consumption: 6.2 }),
  ge("skoda:karoq:nu", "ea288-2-0-tdi", "2.0 TDI", 2017, { transmission: "automatico", consumption: 5.0 }),
  // Toyota Corolla
  ge("toyota:corolla:e210", "toyota-hsd-1-8", "125h", 2019, { transmission: "automatico", consumption: 4.6 }),
  ge("toyota:corolla:e210", "toyota-hsd-2-0", "180h / 196h", 2019, { transmission: "automatico", consumption: 4.9 }),
  // Toyota Yaris
  ge("toyota:yaris:xp210", "toyota-1-5-hybrid", "116h", 2020, { transmission: "automatico", consumption: 3.8 }),
  // Toyota C-HR 2
  ge("toyota:c-hr:ngx10", "toyota-hsd-1-8", "140h", 2023, { transmission: "automatico", consumption: 4.7 }),
  ge("toyota:c-hr:ngx10", "toyota-hsd-2-0", "200h", 2023, { transmission: "automatico", consumption: 5.0 }),
  // Nissan Qashqai J12
  ge("nissan:qashqai:j12", "tce-1-3", "1.3 DIG-T mHEV 140/158", 2021, { consumption: 6.3 }),
  // Nissan Juke F16
  ge("nissan:juke:f16", "tce-1-0", "DIG-T 114", 2019, { consumption: 5.8 }),
  ge("nissan:juke:f16", "hybrid-1-6-renault", "Hybrid 143", 2022, { transmission: "automatico", consumption: 5.0 }),
  // Peugeot 208
  ge("peugeot:208:p21", "puretech-1-2", "PureTech 100/130", 2019, { consumption: 5.3 }),
  ge("peugeot:208:p21", "bluehdi-1-5", "BlueHDi 100", 2019, { consumption: 4.0 }),
  // Peugeot 308
  ge("peugeot:308:p5", "puretech-1-2", "PureTech 130", 2021, { consumption: 5.6 }),
  ge("peugeot:308:p5", "bluehdi-1-5", "BlueHDi 130", 2021, { transmission: "automatico", consumption: 4.4 }),
  // Peugeot 3008
  ge("peugeot:3008:p84", "puretech-1-2", "PureTech 130", 2016, { endYear: 2023, consumption: 6.0 }),
  ge("peugeot:3008:p84", "bluehdi-1-5", "BlueHDi 130", 2016, { endYear: 2023, consumption: 4.6 }),
  ge("peugeot:3008:p84", "bluehdi-2-0", "BlueHDi 180", 2016, { transmission: "automatico", endYear: 2023, consumption: 5.0 }),
  // Renault Clio
  ge("renault:clio:bja", "tce-1-0", "TCe 90/100", 2019, { consumption: 5.2 }),
  ge("renault:clio:bja", "hybrid-1-6-renault", "E-Tech 145", 2019, { transmission: "automatico", consumption: 4.2 }),
  // Renault Mégane
  ge("renault:megane:bfb", "tce-1-3", "TCe 140/160", 2016, { endYear: 2022, consumption: 6.0 }),
  ge("renault:megane:bfb", "dci-1-5-blue", "Blue dCi 115", 2016, { endYear: 2022, consumption: 4.2 }),
  // Renault Captur
  ge("renault:captur:hjb", "tce-1-0", "TCe 90", 2019, { consumption: 5.6 }),
  ge("renault:captur:hjb", "tce-1-3", "TCe 140/160", 2019, { transmission: "automatico", consumption: 6.2 }),
  ge("renault:captur:hjb", "hybrid-1-6-renault", "E-Tech 145", 2019, { transmission: "automatico", consumption: 4.7 }),
  // Dacia Sandero
  ge("dacia:sandero:b8", "tce-1-0", "TCe 90 / ECO-G 100", 2020, { consumption: 5.4 }),
  // Dacia Duster
  ge("dacia:duster:hm", "tce-1-3", "TCe 130/150", 2024, { consumption: 6.4 }),
  ge("dacia:duster:hm", "hybrid-1-6-renault", "Hybrid 140", 2024, { transmission: "automatico", consumption: 4.8 }),
  // Ford Focus Mk4
  ge("ford:focus:mk4", "ecoboost-1-0", "1.0 EcoBoost mHEV 125/155", 2018, { endYear: 2025, consumption: 5.5 }),
  ge("ford:focus:mk4", "ecoblue-1-5", "1.5 EcoBlue 120", 2018, { endYear: 2025, consumption: 4.4 }),
  // Ford Fiesta Mk8
  ge("ford:fiesta:mk8", "ecoboost-1-0", "1.0 EcoBoost 100/125 mHEV", 2017, { endYear: 2023, consumption: 5.3 }),
  // Ford Puma Mk1
  ge("ford:puma:mk1", "ecoboost-1-0", "1.0 EcoBoost mHEV 125/155", 2019, { consumption: 5.6 }),
  // Hyundai Tucson NX4
  ge("hyundai:tucson:nx4", "smartstream-1-6-tgdi", "1.6 T-GDi 150/180", 2020, { consumption: 6.7 }),
  ge("hyundai:tucson:nx4", "smartstream-1-6-crdi", "1.6 CRDi 48V 136", 2020, { consumption: 5.0 }),
  ge("hyundai:tucson:nx4", "hyundai-kia-1-6-hev", "1.6 T-GDi HEV 230", 2020, { transmission: "automatico", consumption: 5.7 }),
  // Hyundai i30 PD
  ge("hyundai:i30:pd", "kappa-1-0-tgdi", "1.0 T-GDi 120", 2017, { endYear: 2024, consumption: 5.6 }),
  ge("hyundai:i30:pd", "smartstream-1-6-tgdi", "1.5/1.6 T-GDi 160/180", 2017, { endYear: 2024, consumption: 6.3 }),
  ge("hyundai:i30:pd", "smartstream-1-6-crdi", "1.6 CRDi 136", 2017, { endYear: 2024, consumption: 4.6 }),
  // Kia Sportage NQ5
  ge("kia:sportage:nq5", "smartstream-1-6-tgdi", "1.6 T-GDi 150/180", 2021, { consumption: 6.8 }),
  ge("kia:sportage:nq5", "smartstream-1-6-crdi", "1.6 CRDi 48V 136", 2021, { consumption: 5.1 }),
  ge("kia:sportage:nq5", "hyundai-kia-1-6-hev", "1.6 T-GDi HEV 230", 2021, { transmission: "automatico", consumption: 5.8 }),
  // Kia Ceed CD
  ge("kia:ceed:cd", "kappa-1-0-tgdi", "1.0 T-GDi 120", 2018, { endYear: 2024, consumption: 5.7 }),
  ge("kia:ceed:cd", "smartstream-1-6-tgdi", "1.5 T-GDi 160", 2018, { endYear: 2024, consumption: 6.2 }),
  ge("kia:ceed:cd", "smartstream-1-6-crdi", "1.6 CRDi 136", 2018, { endYear: 2024, consumption: 4.6 }),

  /* ══ Fichas ampliadas ═══════════════════════════════════════ */

  // VW Golf VI
  ge("volkswagen:golf:mk6", "ea111-1-4-tsi", "1.4 TSI 122/160", 2008, { endYear: 2012, consumption: 6.2 }),
  ge("volkswagen:golf:mk6", "ea189-1-6-tdi", "1.6 TDI 105", 2009, { endYear: 2012, consumption: 4.3 }),
  ge("volkswagen:golf:mk6", "ea189-2-0-tdi", "2.0 TDI 140", 2008, { endYear: 2012, consumption: 4.9 }),
  // VW Polo 6R
  ge("volkswagen:polo:6r", "ea211-1-2-tsi", "1.2 TSI 90/105", 2010, { consumption: 5.3 }),
  ge("volkswagen:polo:6r", "ea189-1-6-tdi", "1.6 TDI 90/105", 2009, { consumption: 4.2 }),
  // SEAT Ibiza 6J
  ge("seat:ibiza:6j", "ea211-1-2-tsi", "1.2 TSI 90/105", 2010, { consumption: 5.2 }),
  ge("seat:ibiza:6j", "ea189-1-6-tdi", "1.6 TDI 90/105", 2009, { consumption: 4.2 }),
  ge("seat:ibiza:6j", "ea111-1-4-tsi", "1.4 TSI Cupra", 2009, { transmission: "automatico", consumption: 6.5 }),
  // SEAT León 5F
  ge("seat:leon:5f", "ea211-1-0-tsi", "1.0 TSI 115", 2016, { consumption: 5.0 }),
  ge("seat:leon:5f", "ea211-1-5-tsi", "1.4/1.5 TSI 150", 2014, { consumption: 5.2 }),
  ge("seat:leon:5f", "ea189-1-6-tdi", "1.6 TDI 110", 2013, { consumption: 4.0 }),
  ge("seat:leon:5f", "ea288-2-0-tdi", "2.0 TDI 150", 2013, { consumption: 4.3 }),
  // Audi A4 B8
  ge("audi:a4:b8", "ea888-2-0-tsi", "1.8/2.0 TFSI", 2007, { endYear: 2015, consumption: 6.7 }),
  ge("audi:a4:b8", "ea189-2-0-tdi", "2.0 TDI 143/177", 2008, { transmission: "automatico", endYear: 2015, consumption: 4.8 }),
  ge("audi:a4:b8", "ea189-1-6-tdi", "2.0 TDIe 136", 2009, { endYear: 2015, consumption: 4.4 }),
  // BMW Serie 1 F20
  ge("bmw:serie-1:f20", "b38", "118i", 2015, { drivetrain: "trasera", endYear: 2019, consumption: 5.5 }),
  ge("bmw:serie-1:f20", "b48", "120i / 125i", 2016, { transmission: "automatico", drivetrain: "trasera", endYear: 2019, consumption: 6.2 }),
  ge("bmw:serie-1:f20", "b47d20", "118d / 120d", 2015, { drivetrain: "trasera", endYear: 2019, consumption: 4.2 }),
  // Mercedes Clase C W205
  ge("mercedes-benz:clase-c:w205", "m264", "C 180 / C 200", 2018, { transmission: "automatico", drivetrain: "trasera", endYear: 2021, consumption: 6.6 }),
  ge("mercedes-benz:clase-c:w205", "om654", "C 200 d / C 220 d", 2018, { transmission: "automatico", drivetrain: "trasera", endYear: 2021, consumption: 4.6 }),
  // Nissan Qashqai J11
  ge("nissan:qashqai:j11", "energy-tce-1-2", "1.2 DIG-T 115", 2014, { endYear: 2021, consumption: 5.6 }),
  ge("nissan:qashqai:j11", "tce-1-3", "1.3 DIG-T 140/160", 2019, { endYear: 2021, consumption: 6.0 }),
  ge("nissan:qashqai:j11", "dci-1-5-blue", "1.5 dCi 110/115", 2014, { endYear: 2021, consumption: 3.8 }),
  // Renault Clio IV
  ge("renault:clio:iv", "energy-tce-1-2", "1.2 TCe 120", 2012, { endYear: 2019, consumption: 5.6 }),
  ge("renault:clio:iv", "tce-1-0", "0.9 TCe 90", 2012, { endYear: 2019, consumption: 4.5 }),
  ge("renault:clio:iv", "dci-1-5-blue", "1.5 dCi 90", 2012, { endYear: 2019, consumption: 3.5 }),
  // Peugeot 308 T9
  ge("peugeot:308:t9", "puretech-1-2", "PureTech 110/130", 2014, { endYear: 2021, consumption: 5.0 }),
  ge("peugeot:308:t9", "bluehdi-1-5", "BlueHDi 100/130", 2014, { endYear: 2021, consumption: 3.8 }),
  ge("peugeot:308:t9", "hdi-2-0-dw10-older", "BlueHDi 150/180", 2014, { transmission: "automatico", endYear: 2021, consumption: 4.4 }),
  // Ford Focus Mk3
  ge("ford:focus:mk3", "ecoboost-1-0", "1.0 EcoBoost 100/125", 2012, { endYear: 2018, consumption: 5.0 }),
  ge("ford:focus:mk3", "hdi-1-6", "1.5/1.6 TDCi 95/120", 2012, { endYear: 2018, consumption: 3.9 }),
  // Dacia Sandero II
  ge("dacia:sandero:b52", "tce-1-0", "0.9 TCe 90 / ECO-G", 2013, { endYear: 2020, consumption: 5.2 }),
  ge("dacia:sandero:b52", "dci-1-5-blue", "1.5 dCi 90", 2012, { endYear: 2020, consumption: 3.6 }),
  // Dacia Duster II
  ge("dacia:duster:hs", "tce-1-3", "TCe 130/150", 2019, { endYear: 2024, consumption: 6.2 }),
  ge("dacia:duster:hs", "dci-1-5-blue", "Blue dCi 115", 2018, { endYear: 2024, consumption: 4.3 }),
  // VW Passat B8
  ge("volkswagen:passat:b8", "ea211-1-5-tsi", "1.4/1.5 TSI 150", 2014, { endYear: 2023, consumption: 5.4 }),
  ge("volkswagen:passat:b8", "ea288-2-0-tdi", "2.0 TDI 150", 2014, { transmission: "automatico", endYear: 2023, consumption: 4.4 }),
  ge("volkswagen:passat:b8", "ea288-2-0-bitdi", "2.0 BiTDI 240", 2014, { transmission: "automatico", drivetrain: "total", endYear: 2023, consumption: 5.3 }),
  // VW T-Roc
  ge("volkswagen:t-roc:a11", "ea211-1-0-tsi", "1.0 TSI 115", 2017, { consumption: 5.3 }),
  ge("volkswagen:t-roc:a11", "ea211-1-5-tsi", "1.5 TSI 150", 2017, { transmission: "automatico", consumption: 5.6 }),
  ge("volkswagen:t-roc:a11", "ea288-2-0-tdi", "2.0 TDI 150 4Motion", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.0 }),
  // VW Touran 5T
  ge("volkswagen:touran:5t", "ea211-1-2-tsi", "1.2 TSI 110", 2015, { consumption: 5.5 }),
  ge("volkswagen:touran:5t", "ea211-1-5-tsi", "1.5 TSI 150", 2015, { transmission: "automatico", consumption: 5.7 }),
  ge("volkswagen:touran:5t", "ea288-2-0-tdi", "2.0 TDI 150", 2015, { transmission: "automatico", consumption: 4.6 }),
  // VW up!
  ge("volkswagen:up:aa", "ea211-1-0-tsi", "1.0 / 1.0 TSI 90", 2011, { endYear: 2023, consumption: 4.6 }),
  // Audi Q3 F3
  ge("audi:q3:f3", "ea211-1-5-tsi", "35 TFSI", 2018, { consumption: 6.2 }),
  ge("audi:q3:f3", "ea888-2-0-tsi", "40/45 TFSI quattro", 2018, { transmission: "automatico", drivetrain: "total", consumption: 7.2 }),
  ge("audi:q3:f3", "ea288-2-0-tdi", "35 TDI", 2018, { transmission: "automatico", consumption: 4.8 }),
  // Audi Q5 FY
  ge("audi:q5:fy", "ea888-2-0-tsi", "40/45 TFSI quattro", 2017, { transmission: "automatico", drivetrain: "total", consumption: 7.4 }),
  ge("audi:q5:fy", "ea288-2-0-tdi", "40 TDI quattro", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.3 }),
  // Audi A1 GB
  ge("audi:a1:gb", "ea211-1-0-tsi", "25/30 TFSI", 2018, { consumption: 5.2 }),
  ge("audi:a1:gb", "ea211-1-5-tsi", "35 TFSI", 2018, { transmission: "automatico", consumption: 5.5 }),
  ge("audi:a1:gb", "ea888-2-0-tsi", "40 TFSI", 2019, { transmission: "automatico", consumption: 6.4 }),
  // BMW X1 F48
  ge("bmw:x1:f48", "b38", "sDrive18i", 2015, { endYear: 2022, consumption: 6.0 }),
  ge("bmw:x1:f48", "b48", "sDrive20i / xDrive25i", 2015, { transmission: "automatico", endYear: 2022, consumption: 6.6 }),
  ge("bmw:x1:f48", "b47d20", "sDrive18d / xDrive20d", 2015, { transmission: "automatico", endYear: 2022, consumption: 4.5 }),
  // BMW X3 G01
  ge("bmw:x3:g01", "b48", "xDrive20i / xDrive30i", 2017, { transmission: "automatico", drivetrain: "total", consumption: 7.4 }),
  ge("bmw:x3:g01", "b47d20", "xDrive20d", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.2 }),
  ge("bmw:x3:g01", "b57d30", "xDrive30d / M40d", 2017, { transmission: "automatico", drivetrain: "total", consumption: 6.0 }),
  // BMW Serie 4 G22
  ge("bmw:serie-4:g22", "b48", "420i / 430i", 2020, { transmission: "automatico", drivetrain: "trasera", consumption: 6.6 }),
  ge("bmw:serie-4:g22", "b47d20", "420d", 2020, { transmission: "automatico", drivetrain: "trasera", consumption: 4.6 }),
  // Mercedes Clase B W247
  ge("mercedes-benz:clase-b:w247", "m264", "B 200", 2018, { transmission: "automatico", consumption: 6.4 }),
  ge("mercedes-benz:clase-b:w247", "om654", "B 200 d / B 220 d", 2018, { transmission: "automatico", consumption: 4.5 }),
  ge("mercedes-benz:clase-b:w247", "om608-om654q", "B 180 d", 2018, { transmission: "automatico", consumption: 4.4 }),
  // Mercedes GLA H247
  ge("mercedes-benz:gla:h247", "m264", "GLA 200 / 250", 2020, { transmission: "automatico", consumption: 6.6 }),
  ge("mercedes-benz:gla:h247", "om654", "GLA 200 d / 220 d", 2020, { transmission: "automatico", consumption: 4.7 }),
  // Mercedes GLC X253
  ge("mercedes-benz:glc:x253", "m264", "GLC 200 / 300", 2019, { transmission: "automatico", drivetrain: "total", endYear: 2022, consumption: 7.6 }),
  ge("mercedes-benz:glc:x253", "om654", "GLC 220 d 4MATIC", 2019, { transmission: "automatico", drivetrain: "total", endYear: 2022, consumption: 5.2 }),
  // SEAT Arona
  ge("seat:arona:kj7", "ea211-1-0-tsi", "1.0 TSI 95/110", 2017, { consumption: 5.3 }),
  ge("seat:arona:kj7", "ea211-1-5-tsi", "1.5 TSI 150 FR", 2017, { consumption: 5.6 }),
  // SEAT Tarraco
  ge("seat:tarraco:kn2", "ea211-1-5-tsi", "1.5 TSI 150", 2018, { consumption: 6.5 }),
  ge("seat:tarraco:kn2", "ea888-2-0-tsi", "2.0 TSI 190 4Drive", 2018, { transmission: "automatico", drivetrain: "total", consumption: 7.8 }),
  ge("seat:tarraco:kn2", "ea288-2-0-tdi", "2.0 TDI 150/200 4Drive", 2018, { transmission: "automatico", drivetrain: "total", consumption: 5.4 }),

  // Škoda Fabia NJ
  ge("skoda:fabia:nj", "ea211-1-0-tsi", "1.0 MPI / TSI", 2014, { endYear: 2021, consumption: 4.9 }),
  ge("skoda:fabia:nj", "ea211-1-2-tsi", "1.2 TSI 90/110", 2014, { endYear: 2018, consumption: 4.8 }),
  ge("skoda:fabia:nj", "ea211-1-6-tdi", "1.4 TDI 90/105", 2015, { endYear: 2021, consumption: 3.4 }),
  // Škoda Superb 3V
  ge("skoda:superb:3v", "ea211-1-5-tsi", "1.4/1.5 TSI 150", 2015, { consumption: 5.4 }),
  ge("skoda:superb:3v", "ea288-2-0-tdi", "2.0 TDI 150/190", 2015, { transmission: "automatico", consumption: 4.5 }),
  ge("skoda:superb:3v", "ea288-2-0-bitdi", "2.0 BiTDI 240", 2015, { transmission: "automatico", drivetrain: "total", consumption: 5.6 }),
  // Škoda Kamiq
  ge("skoda:kamiq:nw4", "ea211-1-0-tsi", "1.0 TSI 95/110", 2019, { consumption: 5.3 }),
  ge("skoda:kamiq:nw4", "ea211-1-5-tsi", "1.5 TSI 150", 2019, { transmission: "automatico", consumption: 5.6 }),
  // Škoda Scala
  ge("skoda:scala:nw1", "ea211-1-0-tsi", "1.0 TSI 95/110", 2019, { consumption: 5.2 }),
  ge("skoda:scala:nw1", "ea211-1-5-tsi", "1.5 TSI 150", 2019, { transmission: "automatico", consumption: 5.5 }),
  ge("skoda:scala:nw1", "ea211-1-6-tdi", "1.6 TDI 115", 2019, { consumption: 4.1 }),
  // Toyota RAV4
  ge("toyota:rav4:xa50", "toyota-2-5-hybrid", "2.5 Hybrid 218/222", 2019, { transmission: "automatico", consumption: 5.6 }),
  // Toyota Aygo
  ge("toyota:aygo:ab40", "toyota-1-0-vvti", "1.0 VVT-i 72", 2014, { endYear: 2022, consumption: 4.1 }),
  // Nissan X-Trail T32
  ge("nissan:x-trail:t32", "tce-1-3", "1.3 DIG-T 160", 2019, { endYear: 2022, consumption: 6.4 }),
  ge("nissan:x-trail:t32", "dci-1-5-blue", "1.6/1.7 dCi 130", 2014, { endYear: 2022, consumption: 4.9 }),
  // Nissan Micra K14
  ge("nissan:micra:k14", "tce-1-0", "0.9 IG-T / 1.0 IG-T", 2017, { endYear: 2023, consumption: 4.8 }),
  ge("nissan:micra:k14", "dci-1-5-blue", "1.5 dCi 90", 2017, { endYear: 2020, consumption: 3.6 }),
  // Peugeot 2008 II
  ge("peugeot:2008:p24", "puretech-1-2", "PureTech 100/130", 2019, { consumption: 5.4 }),
  ge("peugeot:2008:p24", "bluehdi-1-5", "BlueHDi 100/130", 2019, { consumption: 4.1 }),
  // Peugeot 5008 II
  ge("peugeot:5008:p87", "puretech-1-2", "PureTech 130", 2017, { endYear: 2024, consumption: 6.0 }),
  ge("peugeot:5008:p87", "bluehdi-1-5", "BlueHDi 130", 2017, { transmission: "automatico", endYear: 2024, consumption: 4.6 }),
  ge("peugeot:5008:p87", "bluehdi-2-0", "BlueHDi 180", 2017, { transmission: "automatico", endYear: 2024, consumption: 5.0 }),
  // Peugeot 508 II
  ge("peugeot:508:r8", "puretech-1-2", "PureTech 130/180", 2018, { transmission: "automatico", consumption: 5.8 }),
  ge("peugeot:508:r8", "bluehdi-1-5", "BlueHDi 130", 2018, { transmission: "automatico", consumption: 4.3 }),
  ge("peugeot:508:r8", "bluehdi-2-0", "BlueHDi 160/180", 2018, { transmission: "automatico", consumption: 4.7 }),
  // Renault Kadjar
  ge("renault:kadjar:ha", "energy-tce-1-2", "1.2 TCe 130", 2015, { endYear: 2018, consumption: 5.8 }),
  ge("renault:kadjar:ha", "tce-1-3", "1.3 TCe 140/160", 2019, { endYear: 2022, consumption: 6.2 }),
  ge("renault:kadjar:ha", "dci-1-5-blue", "1.5/1.6 dCi 110/115", 2015, { endYear: 2022, consumption: 4.0 }),
  // Renault Scénic IV
  ge("renault:scenic:j9", "energy-tce-1-2", "1.2 TCe 115/130", 2016, { endYear: 2020, consumption: 5.8 }),
  ge("renault:scenic:j9", "tce-1-3", "1.3 TCe 140/160", 2019, { endYear: 2022, consumption: 6.0 }),
  ge("renault:scenic:j9", "dci-1-5-blue", "1.5/1.7 dCi 110/120", 2016, { endYear: 2022, consumption: 4.1 }),
  // Renault Twingo III
  ge("renault:twingo:iii", "tce-1-0", "SCe 75 / 0.9 TCe 90", 2014, { endYear: 2023, drivetrain: "trasera", consumption: 4.7 }),
  // Renault Austral
  ge("renault:austral:1", "tce-1-3", "1.2 TCe mild-hybrid 130/160", 2022, { consumption: 6.0 }),
  ge("renault:austral:1", "hybrid-1-6-renault", "E-Tech full hybrid 200", 2022, { transmission: "automatico", consumption: 4.8 }),
  // Dacia Jogger
  ge("dacia:jogger:1", "tce-1-0", "TCe 110 / ECO-G 100", 2021, { consumption: 5.6 }),
  ge("dacia:jogger:1", "hybrid-1-6-renault", "Hybrid 140", 2023, { transmission: "automatico", consumption: 4.8 }),
  // Dacia Logan III
  ge("dacia:logan:iii", "tce-1-0", "TCe 90 / ECO-G 100", 2020, { consumption: 5.3 }),
  // Ford Kuga Mk3
  ge("ford:kuga:mk3", "ecoboost-1-0", "1.5 EcoBoost 120/150", 2019, { consumption: 6.0 }),
  ge("ford:kuga:mk3", "ecoblue-1-5", "1.5/2.0 EcoBlue 120/190", 2019, { consumption: 4.6 }),
  // Ford Mondeo Mk5
  ge("ford:mondeo:mk5", "ecoboost-1-0", "1.5/2.0 EcoBoost 160/240", 2014, { endYear: 2022, consumption: 6.6 }),
  ge("ford:mondeo:mk5", "hdi-1-6", "1.5 TDCi 120", 2014, { endYear: 2018, consumption: 4.2 }),
  ge("ford:mondeo:mk5", "ecoblue-1-5", "2.0 TDCi / EcoBlue 150/190", 2014, { transmission: "automatico", endYear: 2022, consumption: 4.7 }),
  // Hyundai i20 BC3
  ge("hyundai:i20:bc3", "kappa-1-0-tgdi", "1.0 T-GDi 100/120", 2020, { consumption: 5.4 }),
  ge("hyundai:i20:bc3", "kappa-1-25-mpi", "1.2 MPi 84", 2020, { consumption: 5.6 }),
  // Hyundai Kona OS
  ge("hyundai:kona:os", "kappa-1-0-tgdi", "1.0 T-GDi 120", 2017, { endYear: 2023, consumption: 5.6 }),
  ge("hyundai:kona:os", "smartstream-1-6-tgdi", "1.6 T-GDi 177/198", 2017, { transmission: "automatico", drivetrain: "total", endYear: 2023, consumption: 6.7 }),
  ge("hyundai:kona:os", "smartstream-1-6-crdi", "1.6 CRDi 115/136", 2018, { endYear: 2023, consumption: 4.5 }),
  ge("hyundai:kona:os", "hyundai-kia-1-6-hev", "1.6 GDi Hybrid 141", 2019, { transmission: "automatico", endYear: 2023, consumption: 4.3 }),
  // Kia Niro DE
  ge("kia:niro:de", "hyundai-kia-1-6-hev", "1.6 GDi Hybrid / PHEV 141", 2016, { transmission: "automatico", endYear: 2022, consumption: 4.4 }),
  // Kia Picanto JA
  ge("kia:picanto:ja", "kappa-1-25-mpi", "1.0 / 1.25 MPi", 2017, { consumption: 5.0 }),
  ge("kia:picanto:ja", "kappa-1-0-tgdi", "1.0 T-GDi 100", 2018, { consumption: 4.9 }),
  // Kia Rio YB
  ge("kia:rio:yb", "kappa-1-25-mpi", "1.2 MPi 84", 2017, { consumption: 5.5 }),
  ge("kia:rio:yb", "kappa-1-0-tgdi", "1.0 T-GDi 100/120", 2017, { consumption: 5.3 }),
  // Kia Stonic YB
  ge("kia:stonic:yb", "kappa-1-0-tgdi", "1.0 T-GDi 100/120", 2017, { consumption: 5.4 }),
  ge("kia:stonic:yb", "smartstream-1-6-crdi", "1.6 CRDi 110", 2017, { endYear: 2020, consumption: 4.3 }),

  // Opel Corsa F
  ge("opel:corsa:f", "puretech-1-2", "1.2 / 1.2 Turbo 100/130", 2019, { consumption: 5.2 }),
  ge("opel:corsa:f", "bluehdi-1-5", "1.5 Diesel 102", 2019, { endYear: 2023, consumption: 3.9 }),
  // Opel Astra K
  ge("opel:astra:k", "opel-1-4-turbo", "1.0 / 1.4 Turbo 105/150", 2015, { endYear: 2021, consumption: 5.3 }),
  ge("opel:astra:k", "opel-1-6-cdti", "1.6 CDTi 110/136", 2015, { endYear: 2021, consumption: 3.9 }),
  // Opel Mokka B
  ge("opel:mokka:b", "puretech-1-2", "1.2 Turbo 100/130", 2020, { consumption: 5.5 }),
  ge("opel:mokka:b", "bluehdi-1-5", "1.5 Diesel 110", 2020, { consumption: 4.2 }),
  // Opel Crossland
  ge("opel:crossland:p2qo", "puretech-1-2", "1.2 / 1.2 Turbo 83/130", 2017, { endYear: 2024, consumption: 5.4 }),
  ge("opel:crossland:p2qo", "bluehdi-1-5", "1.5 Diesel 110/120", 2017, { endYear: 2024, consumption: 4.1 }),
  // Opel Grandland
  ge("opel:grandland:a18", "puretech-1-2", "1.2 Turbo 130", 2017, { endYear: 2024, consumption: 6.0 }),
  ge("opel:grandland:a18", "bluehdi-1-5", "1.5 Diesel 130", 2017, { transmission: "automatico", endYear: 2024, consumption: 4.5 }),
  ge("opel:grandland:a18", "bluehdi-2-0", "2.0 Diesel 177", 2017, { transmission: "automatico", endYear: 2021, consumption: 5.0 }),
  // Opel Insignia B
  ge("opel:insignia:b", "opel-1-4-turbo", "1.5 / 2.0 Turbo 140/200", 2017, { endYear: 2022, consumption: 6.4 }),
  ge("opel:insignia:b", "opel-1-6-cdti", "1.6 / 2.0 CDTi 110/174", 2017, { endYear: 2022, consumption: 4.3 }),
  // Citroën C3 III
  ge("citroen:c3:iii", "puretech-1-2", "PureTech 83/110", 2016, { consumption: 5.1 }),
  ge("citroen:c3:iii", "bluehdi-1-5", "BlueHDi 100", 2016, { consumption: 3.8 }),
  // Citroën C3 Aircross
  ge("citroen:c3-aircross:a88", "puretech-1-2", "PureTech 110/130", 2017, { consumption: 5.5 }),
  ge("citroen:c3-aircross:a88", "bluehdi-1-5", "BlueHDi 100/120", 2017, { consumption: 4.0 }),
  // Citroën C4 III
  ge("citroen:c4:iii", "puretech-1-2", "PureTech 100/130", 2020, { consumption: 5.6 }),
  ge("citroen:c4:iii", "bluehdi-1-5", "BlueHDi 110/130", 2020, { transmission: "automatico", consumption: 4.3 }),
  // Citroën C5 Aircross
  ge("citroen:c5-aircross:c84", "puretech-1-2", "PureTech 130/180", 2018, { consumption: 6.0 }),
  ge("citroen:c5-aircross:c84", "bluehdi-1-5", "BlueHDi 130", 2018, { transmission: "automatico", consumption: 4.5 }),
  ge("citroen:c5-aircross:c84", "bluehdi-2-0", "BlueHDi 180", 2018, { transmission: "automatico", endYear: 2021, consumption: 5.0 }),
  // Citroën Berlingo III
  ge("citroen:berlingo:iii", "puretech-1-2", "PureTech 110/130", 2018, { consumption: 6.2 }),
  ge("citroen:berlingo:iii", "bluehdi-1-5", "BlueHDi 100/130", 2018, { consumption: 4.5 }),
  // Mazda2 DJ
  ge("mazda:2:dj", "skyactiv-g-1-5", "1.5 Skyactiv-G 75/90/115", 2014, { consumption: 4.9 }),
  // Mazda3 BP
  ge("mazda:3:bp", "skyactiv-g-2-0", "2.0 Skyactiv-G 122/150", 2019, { consumption: 5.5 }),
  ge("mazda:3:bp", "skyactiv-x-2-0", "2.0 e-Skyactiv X 186", 2019, { consumption: 5.2 }),
  ge("mazda:3:bp", "skyactiv-d-1-8", "1.8 Skyactiv-D 116", 2019, { endYear: 2021, consumption: 4.2 }),
  // Mazda CX-30
  ge("mazda:cx-30:dm", "skyactiv-g-2-0", "2.0 Skyactiv-G 122/150", 2019, { consumption: 5.8 }),
  ge("mazda:cx-30:dm", "skyactiv-x-2-0", "2.0 e-Skyactiv X 186", 2019, { consumption: 5.5 }),
  ge("mazda:cx-30:dm", "skyactiv-d-1-8", "1.8 Skyactiv-D 116", 2019, { endYear: 2021, consumption: 4.4 }),
  // Mazda CX-5 KF
  ge("mazda:cx-5:kf", "skyactiv-g-2-0", "2.0 / 2.5 Skyactiv-G 165/194", 2017, { consumption: 6.6 }),
  ge("mazda:cx-5:kf", "skyactiv-d-2-2", "2.2 Skyactiv-D 150/184", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.2 }),
  // Mazda MX-5 ND
  ge("mazda:mx-5:nd", "skyactiv-g-1-5", "1.5 Skyactiv-G 132", 2015, { drivetrain: "trasera", consumption: 6.0 }),
  ge("mazda:mx-5:nd", "skyactiv-g-2-0", "2.0 Skyactiv-G 160/184", 2015, { drivetrain: "trasera", consumption: 6.9 }),
  // Fiat 500 312
  ge("fiat:500:312", "twinair-0-9", "0.9 TwinAir 85/105", 2010, { endYear: 2024, consumption: 4.9 }),
  ge("fiat:500:312", "firefly-1-0", "1.0 Hybrid / 1.2 8v", 2007, { endYear: 2024, consumption: 5.3 }),
  // Fiat Panda 319
  ge("fiat:panda:319", "twinair-0-9", "0.9 TwinAir 85 (incl. 4x4)", 2011, { consumption: 4.9 }),
  ge("fiat:panda:319", "firefly-1-0", "1.0 Hybrid / 1.2 8v", 2011, { consumption: 5.4 }),
  // Fiat Tipo 356
  ge("fiat:tipo:356", "firefly-1-0", "1.0 / 1.4 gasolina 100/120", 2015, { consumption: 5.7 }),
  ge("fiat:tipo:356", "fiat-1-6-multijet", "1.3 / 1.6 MultiJet 95/130", 2015, { consumption: 4.2 }),
  // Fiat 500X 334
  ge("fiat:500x:334", "firefly-1-0", "1.0 / 1.3 FireFly Turbo 120/150", 2014, { consumption: 6.0 }),
  ge("fiat:500x:334", "fiat-1-6-multijet", "1.3 / 1.6 MultiJet 95/120", 2014, { consumption: 4.6 }),
  // MINI 3 puertas F56
  ge("mini:3-puertas:f56", "b38", "One / Cooper 1.5", 2014, { endYear: 2024, consumption: 5.4 }),
  ge("mini:3-puertas:f56", "b48", "Cooper S 2.0", 2014, { transmission: "automatico", endYear: 2024, consumption: 6.3 }),
  // MINI 5 puertas F55
  ge("mini:5-puertas:f55", "b38", "One / Cooper 1.5", 2014, { endYear: 2024, consumption: 5.5 }),
  ge("mini:5-puertas:f55", "b48", "Cooper S 2.0", 2014, { transmission: "automatico", endYear: 2024, consumption: 6.4 }),
  // MINI Countryman F60
  ge("mini:countryman:f60", "b38", "One / Cooper 1.5", 2017, { endYear: 2024, consumption: 5.9 }),
  ge("mini:countryman:f60", "b48", "Cooper S 2.0 ALL4", 2017, { transmission: "automatico", drivetrain: "total", endYear: 2024, consumption: 6.8 }),
  ge("mini:countryman:f60", "b47d20", "Cooper D 2.0", 2017, { transmission: "automatico", endYear: 2024, consumption: 4.7 }),
  // Volvo XC40
  ge("volvo:xc40:536", "volvo-t3-t4", "T3 / T4 / B3 / B4", 2017, { transmission: "automatico", consumption: 7.0 }),
  ge("volvo:xc40:536", "volvo-d3-d4", "D3 / D4 AWD", 2017, { transmission: "automatico", drivetrain: "total", endYear: 2020, consumption: 5.0 }),
  // Volvo XC60
  ge("volvo:xc60:246", "volvo-t3-t4", "T5 / B5 AWD", 2017, { transmission: "automatico", drivetrain: "total", consumption: 7.6 }),
  ge("volvo:xc60:246", "volvo-d3-d4", "D3 / D4 / B4 AWD", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.3 }),
  // Volvo V40
  ge("volvo:v40:525", "volvo-t3-t4", "T2 / T3 / T4", 2012, { endYear: 2019, consumption: 6.2 }),
  ge("volvo:v40:525", "volvo-d3-d4", "D2 / D3 / D4", 2012, { endYear: 2019, consumption: 3.8 }),
  // Honda Civic X
  ge("honda:civic:x", "honda-1-0-vtec-turbo", "1.0 VTEC Turbo 126", 2017, { endYear: 2021, consumption: 5.2 }),
  ge("honda:civic:x", "honda-1-5-vtec-turbo", "1.5 VTEC Turbo 182", 2017, { endYear: 2021, consumption: 5.8 }),
  ge("honda:civic:x", "honda-1-6-idtec", "1.6 i-DTEC 120", 2018, { endYear: 2021, consumption: 3.7 }),
  // Honda Jazz GR
  ge("honda:jazz:gr", "honda-e-hev-1-5", "1.5 e:HEV 109", 2020, { transmission: "automatico", consumption: 4.5 }),
  // Honda HR-V RU
  ge("honda:hr-v:ru", "honda-1-5-vtec-turbo", "1.5 i-VTEC / VTEC Turbo", 2015, { endYear: 2021, consumption: 5.6 }),
  ge("honda:hr-v:ru", "honda-1-6-idtec", "1.6 i-DTEC 120", 2015, { endYear: 2019, consumption: 4.0 }),
  // Honda CR-V RW
  ge("honda:cr-v:rw", "honda-1-5-vtec-turbo", "1.5 VTEC Turbo 173/193", 2018, { endYear: 2023, consumption: 6.3 }),
  ge("honda:cr-v:rw", "honda-e-hev-2-0", "2.0 i-MMD Hybrid 184", 2019, { transmission: "automatico", endYear: 2023, consumption: 5.5 }),

  /* ══ Segunda ampliación: nuevas marcas ══ */
  // Alfa Romeo
  ge("alfa-romeo:giulietta:940", "alfa-1-4-tb", "1.4 TB 120/150", 2010, { consumption: 6.3 }),
  ge("alfa-romeo:giulietta:940", "alfa-1-6-jtdm", "1.6 JTDm 120", 2010, { consumption: 4.2 }),
  ge("alfa-romeo:giulietta:940", "alfa-2-0-jtdm", "2.0 JTDm 150/170", 2010, { consumption: 4.7 }),
  ge("alfa-romeo:giulia:952", "alfa-2-0-gme", "2.0 Turbo 200/280", 2016, { transmission: "automatico", consumption: 7.2 }),
  ge("alfa-romeo:giulia:952", "alfa-2-0-jtdm", "2.0 JTDm 160/190", 2016, { transmission: "automatico", consumption: 4.6 }),
  ge("alfa-romeo:stelvio:949", "alfa-2-0-gme", "2.0 Turbo Q4 200/280", 2017, { transmission: "automatico", drivetrain: "total", consumption: 8.0 }),
  ge("alfa-romeo:stelvio:949", "alfa-2-0-jtdm", "2.0 JTDm Q4 160/190", 2017, { transmission: "automatico", drivetrain: "total", consumption: 5.2 }),
  ge("alfa-romeo:mito:955", "alfa-1-4-tb", "1.4 TB 120/135", 2008, { endYear: 2018, consumption: 6.0 }),
  ge("alfa-romeo:mito:955", "alfa-1-6-jtdm", "1.6 JTDm 120", 2008, { endYear: 2018, consumption: 4.0 }),
  // Jeep
  ge("jeep:renegade:bu", "firefly-1-0", "1.3 GSE T4 150", 2014, { consumption: 6.4 }),
  ge("jeep:renegade:bu", "jeep-1-6-multijet", "1.6 MultiJet II 120", 2014, { consumption: 4.6 }),
  ge("jeep:compass:mp", "firefly-1-0", "1.3 GSE T4 130/150", 2017, { consumption: 6.5 }),
  ge("jeep:compass:mp", "jeep-1-6-multijet", "1.6 MultiJet II 120", 2017, { consumption: 4.8 }),
  ge("jeep:compass:mp", "alfa-2-0-gme", "2.0 GME 4xe (híbrido enchufable)", 2020, { transmission: "automatico", drivetrain: "total", consumption: 1.9 }),
  // Land Rover
  ge("land-rover:evoque:l551", "landrover-2-0-ingenium-d", "D150 / D180 / D240", 2019, { transmission: "automatico", drivetrain: "total", consumption: 5.8 }),
  ge("land-rover:evoque:l551", "landrover-2-0-ingenium-p", "P200 / P250", 2019, { transmission: "automatico", drivetrain: "total", consumption: 8.2 }),
  ge("land-rover:discovery-sport:l550", "landrover-2-0-ingenium-d", "D150 / D180 / D240", 2019, { transmission: "automatico", drivetrain: "total", consumption: 6.2 }),
  ge("land-rover:discovery-sport:l550", "landrover-2-0-ingenium-p", "P200 / P250", 2019, { transmission: "automatico", drivetrain: "total", consumption: 8.6 }),
  // Lexus
  ge("lexus:ct:default", "lexus-1-8-hybrid", "200h", 2011, { endYear: 2020, transmission: "automatico", consumption: 3.9 }),
  ge("lexus:nx:az10", "toyota-2-5-hybrid", "300h", 2014, { endYear: 2021, transmission: "automatico", consumption: 5.3 }),
  ge("lexus:ux:default", "lexus-2-0-hybrid", "250h", 2018, { transmission: "automatico", consumption: 4.5 }),
  ge("lexus:rx:al20", "toyota-2-5-hybrid", "450h", 2015, { endYear: 2022, transmission: "automatico", drivetrain: "total", consumption: 6.0 }),
  // DS
  ge("ds:ds3-crossback:default", "puretech-1-2-ds", "PureTech 130/155", 2019, { consumption: 5.6 }),
  ge("ds:ds3-crossback:default", "bluehdi-1-5", "BlueHDi 100/130", 2019, { consumption: 4.0 }),
  ge("ds:ds7-crossback:default", "puretech-1-2-ds", "PureTech 130/225", 2018, { consumption: 6.4 }),
  ge("ds:ds7-crossback:default", "bluehdi-1-5", "BlueHDi 130", 2018, { transmission: "automatico", consumption: 4.5 }),
  ge("ds:ds7-crossback:default", "bluehdi-2-0", "BlueHDi 180", 2018, { transmission: "automatico", consumption: 5.0 }),
  ge("ds:ds4:default", "puretech-1-2-ds", "PureTech 130/180", 2021, { consumption: 5.9 }),
  ge("ds:ds4:default", "bluehdi-1-5", "BlueHDi 130", 2021, { transmission: "automatico", consumption: 4.4 }),
  // Suzuki
  ge("suzuki:swift:az", "suzuki-1-2-dualjet", "1.2 Dualjet Hybrid 83", 2017, { consumption: 4.4 }),
  ge("suzuki:swift:az", "suzuki-1-4-boosterjet", "Sport 1.4 Boosterjet 140", 2017, { consumption: 5.8 }),
  ge("suzuki:vitara:ly", "suzuki-1-2-dualjet", "1.2 Dualjet Hybrid 83", 2015, { consumption: 5.2 }),
  ge("suzuki:vitara:ly", "suzuki-1-4-boosterjet", "1.4 Boosterjet AllGrip 129", 2015, { drivetrain: "total", consumption: 6.0 }),
  ge("suzuki:jimny:jb74", "suzuki-1-2-dualjet", "1.5 VVT 102", 2018, { drivetrain: "total", consumption: 6.9 }),
  // Mitsubishi
  ge("mitsubishi:asx:ga", "mitsubishi-1-6-mivec", "1.6 MIVEC 117", 2016, { endYear: 2023, consumption: 6.5 }),
  ge("mitsubishi:outlander:phev3", "mitsubishi-phev-2-4", "PHEV 4WD 224", 2013, { transmission: "automatico", drivetrain: "total", endYear: 2021, consumption: 1.9 }),
  ge("mitsubishi:space-star:default", "kappa-1-25-mpi", "1.2 MIVEC 80", 2013, { consumption: 5.1 }),
  // smart
  ge("smart:fortwo:453", "smart-1-0-na", "1.0 52/71", 2014, { endYear: 2023, drivetrain: "trasera", consumption: 4.5 }),
  ge("smart:forfour:453", "smart-1-0-na", "1.0 52/71", 2014, { endYear: 2022, drivetrain: "trasera", consumption: 4.7 }),
  // Tesla
  ge("tesla:model-3:default", "tesla-electric-sr", "Propulsion (tracción trasera)", 2019, { transmission: "automatico", consumption: 14.9 }),
  ge("tesla:model-3:default", "tesla-electric-awd", "Long Range / Performance AWD", 2019, { transmission: "automatico", drivetrain: "total", consumption: 15.8 }),
  ge("tesla:model-y:default", "tesla-electric-sr", "Propulsion (tracción trasera)", 2021, { transmission: "automatico", consumption: 16.9 }),
  ge("tesla:model-y:default", "tesla-electric-awd", "Long Range / Performance AWD", 2021, { transmission: "automatico", drivetrain: "total", consumption: 17.5 }),
  // MG
  ge("mg:zs:default", "mg-1-5-vti", "1.5 VTi-Tech 114", 2021, { consumption: 6.5 }),
  ge("mg:zs:default", "mg-1-5-turbo", "1.5 T-GDI 162", 2021, { transmission: "automatico", consumption: 7.0 }),
  ge("mg:zs:default", "mg-electric", "ZS EV", 2021, { transmission: "automatico", consumption: 16.5 }),
  ge("mg:mg4:default", "mg-electric", "MG4 Electric", 2022, { transmission: "automatico", consumption: 16.0 }),

  /* ══ Tercera ampliación: más modelos de marcas ya presentes ══ */
  // BMW
  ge("bmw:x5:g05", "b57d30", "xDrive30d / xDrive40d", 2018, { transmission: "automatico", drivetrain: "total", consumption: 6.8 }),
  ge("bmw:x5:g05", "bmw-b58-3-0", "xDrive40i", 2018, { transmission: "automatico", drivetrain: "total", consumption: 8.9 }),
  ge("bmw:serie-2-active-tourer:f45", "b38", "218i", 2014, { consumption: 5.8 }),
  ge("bmw:serie-2-active-tourer:f45", "b47d20", "216d / 218d", 2014, { transmission: "automatico", consumption: 4.4 }),
  ge("bmw:serie-7:g11", "bmw-n57-3-0d", "730d / 740d", 2015, { endYear: 2022, transmission: "automatico", drivetrain: "trasera", consumption: 5.8 }),
  ge("bmw:serie-7:g11", "bmw-b58-3-0", "740i", 2015, { endYear: 2022, transmission: "automatico", drivetrain: "trasera", consumption: 8.2 }),
  // Audi
  ge("audi:a6:c8", "ea288-2-0-tdi", "40 TDI", 2018, { transmission: "automatico", consumption: 5.2 }),
  ge("audi:a6:c8", "audi-3-0-tdi", "45/50 TDI quattro", 2018, { transmission: "automatico", drivetrain: "total", consumption: 6.1 }),
  ge("audi:a6:c8", "ea888-2-0-tsi", "40/45 TFSI", 2018, { transmission: "automatico", consumption: 7.0 }),
  ge("audi:q7:4m", "audi-3-0-tdi", "45/50 TDI quattro", 2015, { transmission: "automatico", drivetrain: "total", consumption: 6.8 }),
  ge("audi:q7:4m", "ea888-2-0-tsi", "55 TFSI quattro", 2015, { transmission: "automatico", drivetrain: "total", consumption: 9.0 }),
  ge("audi:tt:fv", "ea888-2-0-tsi", "40/45 TFSI / TTS", 2014, { endYear: 2023, transmission: "automatico", consumption: 6.8 }),
  // Mercedes
  ge("mercedes-benz:clase-e:w213", "om654", "E 200 d / E 220 d", 2016, { endYear: 2023, transmission: "automatico", drivetrain: "trasera", consumption: 4.8 }),
  ge("mercedes-benz:clase-e:w213", "mercedes-om656", "E 300 d", 2018, { endYear: 2023, transmission: "automatico", drivetrain: "trasera", consumption: 5.5 }),
  ge("mercedes-benz:clase-e:w213", "mercedes-m264-e", "E 200", 2016, { endYear: 2023, transmission: "automatico", drivetrain: "trasera", consumption: 7.0 }),
  ge("mercedes-benz:gle:w167", "mercedes-om656", "GLE 300 d / 350 d 4MATIC", 2019, { transmission: "automatico", drivetrain: "total", consumption: 6.4 }),
  ge("mercedes-benz:gle:w167", "m264", "GLE 350 4MATIC", 2019, { transmission: "automatico", drivetrain: "total", consumption: 8.6 }),
  // VW
  ge("volkswagen:arteon:3h", "ea211-1-5-tsi", "1.5 TSI 150", 2017, { consumption: 5.8 }),
  ge("volkswagen:arteon:3h", "ea288-2-0-tdi", "2.0 TDI 150/190 4Motion", 2017, { transmission: "automatico", consumption: 4.9 }),
  ge("volkswagen:t-cross:c1", "ea211-1-0-tsi", "1.0 TSI 95/110", 2019, { consumption: 5.4 }),
  ge("volkswagen:t-cross:c1", "ea211-1-5-tsi", "1.5 TSI 150", 2019, { consumption: 5.8 }),
  ge("volkswagen:caddy:5", "ea211-1-5-tsi", "1.5 TSI 114", 2020, { consumption: 6.4 }),
  ge("volkswagen:caddy:5", "ea288-2-0-tdi", "2.0 TDI 75/122/2.0 4Motion", 2020, { consumption: 5.2 }),
  ge("volkswagen:id3:default", "vw-meb-rwd", "Pro / Pro S", 2020, { transmission: "automatico", drivetrain: "trasera", consumption: 15.4 }),
  ge("volkswagen:id4:default", "vw-meb-rwd", "Pro / Pro Performance", 2021, { transmission: "automatico", drivetrain: "trasera", consumption: 16.3 }),
  ge("volkswagen:id4:default", "vw-meb-awd", "GTX (tracción total)", 2021, { transmission: "automatico", drivetrain: "total", consumption: 17.8 }),
  // Toyota
  ge("toyota:prius:xw50", "toyota-hsd-1-8", "122", 2016, { endYear: 2022, transmission: "automatico", consumption: 3.7 }),
  ge("toyota:camry:xv70", "toyota-2-5-hybrid", "218", 2019, { transmission: "automatico", consumption: 5.0 }),
  ge("toyota:land-cruiser:j150", "toyota-1gd-diesel", "2.8 D-4D", 2015, { endYear: 2021, transmission: "automatico", drivetrain: "total", consumption: 8.1 }),
  // Ford
  ge("ford:s-max:mk2", "ecoboost-1-0", "1.5/2.0 EcoBoost 160/240", 2015, { consumption: 7.4 }),
  ge("ford:s-max:mk2", "ecoblue-1-5", "2.0 EcoBlue/TDCi 150/190", 2015, { transmission: "automatico", consumption: 5.3 }),
  ge("ford:ranger:p703", "ecoblue-1-5", "2.0 EcoBlue bi-turbo 205", 2022, { transmission: "automatico", drivetrain: "total", consumption: 8.4 }),
  ge("ford:mustang:s550", "ford-v8-5-0", "GT V8", 2015, { endYear: 2023, transmission: "automatico", drivetrain: "trasera", consumption: 12.8 }),
  ge("ford:mustang:s550", "ford-2-3-ecoboost", "EcoBoost", 2015, { endYear: 2023, drivetrain: "trasera", consumption: 8.9 }),
  // Renault
  ge("renault:zoe:bf", "renault-electric-zoe", "ZE50 R135/R110", 2019, { transmission: "automatico", endYear: 2024, consumption: 17.2 }),
  ge("renault:espace:v", "tce-1-3", "1.3/1.8 TCe 160/225", 2015, { consumption: 6.8 }),
  ge("renault:espace:v", "dci-1-5-blue", "1.6/2.0 dCi 130/160", 2015, { transmission: "automatico", consumption: 5.0 }),
  ge("renault:talisman:default", "tce-1-3", "1.3/1.6/2.0 TCe 150/200", 2015, { endYear: 2022, consumption: 6.8 }),
  ge("renault:talisman:default", "dci-1-5-blue", "1.6/1.7/2.0 dCi 130/160", 2015, { endYear: 2022, consumption: 4.6 }),
  // Peugeot
  ge("peugeot:108:default", "toyota-1-0-vvti", "VTi 72", 2014, { endYear: 2022, consumption: 4.1 }),
  ge("peugeot:rifter:default", "puretech-1-2", "PureTech 110/130", 2018, { consumption: 6.1 }),
  ge("peugeot:rifter:default", "bluehdi-1-5", "BlueHDi 100/130", 2018, { consumption: 4.4 }),
  ge("peugeot:408:default", "puretech-1-2", "PureTech 130", 2022, { consumption: 5.7 }),
  ge("peugeot:408:default", "bluehdi-1-5", "BlueHDi 130", 2022, { transmission: "automatico", consumption: 4.3 }),
  // Opel
  ge("opel:zafira:life", "bluehdi-2-0", "2.0 Diesel 150/180", 2019, { consumption: 6.9 }),
  ge("opel:adam:default", "opel-1-4-turbo", "1.0 Turbo / 1.4 90/115", 2013, { endYear: 2019, consumption: 5.4 }),
  // SEAT / CUPRA
  ge("seat:alhambra:7n", "ea211-1-5-tsi", "1.4 TSI 150", 2010, { consumption: 7.2 }),
  ge("seat:alhambra:7n", "ea288-2-0-tdi", "2.0 TDI 150/184", 2010, { transmission: "automatico", consumption: 5.6 }),
  ge("seat:mii:default", "ea211-1-0-tsi", "1.0 60/75", 2012, { endYear: 2019, consumption: 4.6 }),
  ge("cupra:born:default", "vw-meb-rwd", "e-Boost 150/170/204", 2021, { transmission: "automatico", drivetrain: "trasera", consumption: 15.8 }),
  // Škoda
  ge("skoda:enyaq:default", "vw-meb-rwd", "60 / 80", 2021, { transmission: "automatico", drivetrain: "trasera", consumption: 16.1 }),
  ge("skoda:enyaq:default", "vw-meb-awd", "80x / RS", 2021, { transmission: "automatico", drivetrain: "total", consumption: 17.4 }),
  ge("skoda:kodiaq:ns7", "ea211-1-5-tsi", "1.5 TSI 150", 2016, { consumption: 7.0 }),
  ge("skoda:kodiaq:ns7", "ea288-2-0-tdi", "2.0 TDI 150/190 4x4", 2016, { transmission: "automatico", drivetrain: "total", consumption: 5.5 }),
  ge("skoda:yeti:5l", "ea111-1-4-tsi", "1.4 TSI 122", 2009, { endYear: 2017, consumption: 6.8 }),
  ge("skoda:yeti:5l", "ea189-2-0-tdi", "2.0 TDI 110/140 4x4", 2009, { endYear: 2017, consumption: 5.4 }),
  // Nissan
  ge("nissan:leaf:ze1", "nissan-leaf-electric", "40 kWh / e+ 62 kWh", 2017, { transmission: "automatico", consumption: 15.9 }),
  ge("nissan:note:e12", "tce-1-0", "1.2 DIG-S / IG-T 98", 2013, { endYear: 2020, consumption: 5.0 }),
  ge("nissan:note:e12", "dci-1-5-blue", "1.5 dCi 90", 2013, { endYear: 2017, consumption: 3.6 }),
  // Mazda
  ge("mazda:6:gj", "skyactiv-g-2-0", "2.0/2.5 Skyactiv-G 145/194", 2018, { endYear: 2023, consumption: 6.8 }),
  ge("mazda:6:gj", "skyactiv-d-2-2", "2.2 Skyactiv-D 150/184", 2018, { endYear: 2023, transmission: "automatico", consumption: 5.0 }),
  ge("mazda:cx-3:dk", "skyactiv-g-2-0", "2.0 Skyactiv-G 121/150", 2015, { endYear: 2021, consumption: 6.0 }),
  ge("mazda:cx-3:dk", "skyactiv-d-1-8", "1.5 Skyactiv-D 105", 2015, { endYear: 2018, consumption: 4.1 }),
  ge("mazda:mx-30:default", "mazda-mx30-ev", "e-Skyactiv EV", 2020, { transmission: "automatico", consumption: 17.9 }),
  // Hyundai
  ge("hyundai:i10:ac3", "kappa-1-25-mpi", "1.0 / 1.2 67/84", 2019, { consumption: 4.9 }),
  ge("hyundai:santa-fe:tm", "hyundai-2-2-crdi", "2.2 CRDi 200", 2018, { transmission: "automatico", drivetrain: "total", consumption: 6.4 }),
  ge("hyundai:santa-fe:tm", "hyundai-kia-1-6-hev", "1.6 T-GDi Hybrid 230", 2020, { transmission: "automatico", drivetrain: "total", consumption: 6.0 }),
  ge("hyundai:ioniq:ae", "toyota-hsd-1-8", "1.6 GDi Hybrid 141", 2016, { endYear: 2022, transmission: "automatico", consumption: 3.9 }),
  ge("hyundai:ioniq-5:default", "nissan-leaf-electric", "58 / 72,6 kWh", 2021, { transmission: "automatico", consumption: 16.7 }),
  // Kia
  ge("kia:optima:jf", "smartstream-1-6-crdi", "1.7 CRDi 141", 2015, { endYear: 2020, consumption: 4.3 }),
  ge("kia:optima:jf", "smartstream-1-6-tgdi", "1.6/2.0 T-GDi 178/245", 2015, { endYear: 2020, transmission: "automatico", consumption: 7.0 }),
  ge("kia:xceed:cd", "kappa-1-0-tgdi", "1.0 T-GDi 120", 2019, { consumption: 5.6 }),
  ge("kia:xceed:cd", "smartstream-1-6-tgdi", "1.5 T-GDi mHEV 160", 2019, { consumption: 6.3 }),
  ge("kia:xceed:cd", "smartstream-1-6-crdi", "1.6 CRDi 136", 2019, { consumption: 4.7 }),
  ge("kia:soul:sk3", "smartstream-1-6-tgdi", "1.6 GDi 123", 2019, { consumption: 6.6 }),
  ge("kia:ev6:default", "nissan-leaf-electric", "58 / 77,4 kWh RWD/AWD", 2021, { transmission: "automatico", consumption: 16.5 }),
  // Fiat
  ge("fiat:punto:199", "firefly-1-0", "1.2 8v / 1.4 16v 65/95", 2005, { endYear: 2018, consumption: 5.5 }),
  ge("fiat:punto:199", "fiat-1-6-multijet", "1.3 MultiJet 75/95", 2005, { endYear: 2018, consumption: 3.9 }),
  ge("fiat:doblo:263", "fiat-1-6-multijet", "1.6 MultiJet 105/120", 2010, { endYear: 2022, consumption: 5.0 }),
  ge("fiat:500l:default", "twinair-0-9", "0.9 TwinAir 105", 2012, { endYear: 2023, consumption: 5.2 }),
  ge("fiat:500l:default", "fiat-1-6-multijet", "1.3/1.6 MultiJet 95/120", 2012, { endYear: 2023, consumption: 4.4 }),
  // Citroën
  ge("citroen:c1:b4", "toyota-1-0-vvti", "VTi 72", 2014, { endYear: 2022, consumption: 4.1 }),
  ge("citroen:c4-picasso:b78", "puretech-1-2", "PureTech 110/130", 2013, { endYear: 2022, consumption: 5.9 }),
  ge("citroen:c4-picasso:b78", "bluehdi-1-5", "BlueHDi 100/130", 2013, { endYear: 2022, consumption: 4.4 }),
  // Volvo
  ge("volvo:xc90:256", "volvo-t3-t4", "T5 / T6 / B5 / B6 AWD", 2015, { transmission: "automatico", drivetrain: "total", consumption: 8.6 }),
  ge("volvo:xc90:256", "volvo-d3-d4", "D5 AWD", 2015, { transmission: "automatico", drivetrain: "total", consumption: 6.0 }),
  ge("volvo:v60:225", "volvo-t3-t4", "T4 / T5 / B4 / B5", 2018, { consumption: 6.6 }),
  ge("volvo:v60:225", "volvo-d3-d4", "D3 / D4", 2018, { consumption: 4.4 }),
  ge("volvo:s60:224", "volvo-t3-t4", "T4 / T5 / B4 / B5", 2018, { consumption: 6.6 }),
  ge("volvo:s60:224", "volvo-d3-d4", "D3 / D4", 2018, { endYear: 2021, consumption: 4.4 }),
  // MINI
  ge("mini:clubman:f54", "b38", "One / Cooper 1.5", 2015, { consumption: 5.8 }),
  ge("mini:clubman:f54", "b48", "Cooper S 2.0 ALL4", 2015, { transmission: "automatico", drivetrain: "total", consumption: 6.7 }),
  ge("mini:clubman:f54", "b47d20", "Cooper D 2.0", 2015, { transmission: "automatico", consumption: 4.6 }),

  /* ══ Cuarta ampliación: generaciones 2000-2010 ══ */
  ge("bmw:serie-3:e90", "bmw-n47-2-0d", "320d", 2007, { endYear: 2012, drivetrain: "trasera", consumption: 4.8 }),
  ge("bmw:serie-3:e90", "b48", "320i (N46)", 2005, { endYear: 2012, drivetrain: "trasera", consumption: 7.0 }),
  ge("bmw:serie-5:f10", "bmw-n47-2-0d", "520d (N47)", 2010, { transmission: "automatico", drivetrain: "trasera", endYear: 2015, consumption: 4.9 }),
  ge("bmw:serie-5:f10", "b47d20", "520d (B47)", 2015, { transmission: "automatico", drivetrain: "trasera", endYear: 2017, consumption: 4.4 }),
  ge("mercedes-benz:clase-c:w204", "mercedes-om651", "C 220 CDI", 2008, { transmission: "automatico", drivetrain: "trasera", consumption: 4.9 }),
  ge("mercedes-benz:clase-c:w204", "m264", "C 200", 2007, { drivetrain: "trasera", consumption: 7.2 }),
  ge("mercedes-benz:clase-a:w176", "mercedes-om651", "A 200 CDI", 2012, { transmission: "automatico", endYear: 2018, consumption: 4.3 }),
  ge("mercedes-benz:clase-a:w176", "m264", "A 200", 2012, { transmission: "automatico", endYear: 2018, consumption: 6.5 }),
  ge("volkswagen:golf:mk5", "pd-1-9-tdi", "1.9 TDI 105", 2003, { endYear: 2008, consumption: 4.6 }),
  ge("volkswagen:golf:mk5", "vag-2-0-fsi", "1.6/2.0 FSI", 2003, { endYear: 2008, consumption: 6.8 }),
  ge("volkswagen:passat:b6", "pd-1-9-tdi", "2.0 TDI PD 140", 2005, { endYear: 2010, consumption: 5.2 }),
  ge("volkswagen:passat:b6", "vag-2-0-fsi", "1.8T/2.0 TSI", 2005, { transmission: "automatico", endYear: 2010, consumption: 7.4 }),
  ge("seat:leon:1p", "pd-1-9-tdi", "1.9 TDI 105", 2005, { endYear: 2012, consumption: 4.7 }),
  ge("seat:leon:1p", "vag-2-0-fsi", "2.0 FSI/TFSI Cupra", 2005, { endYear: 2012, consumption: 7.6 }),
  ge("renault:megane:ii", "renault-1-6-16v", "1.6 16V", 2002, { endYear: 2008, consumption: 6.8 }),
  ge("renault:megane:ii", "dci-1-5-blue", "1.5/1.9 dCi", 2002, { endYear: 2008, consumption: 4.5 }),
  ge("renault:clio:iii", "renault-1-6-16v", "1.4/1.6 16V", 2005, { endYear: 2012, consumption: 6.5 }),
  ge("renault:clio:iii", "dci-1-5-blue", "1.5 dCi", 2005, { endYear: 2012, consumption: 4.1 }),
  ge("renault:scenic:ii", "renault-1-6-16v", "1.6 16V", 2003, { endYear: 2009, consumption: 7.2 }),
  ge("renault:scenic:ii", "dci-1-5-blue", "1.5/1.9 dCi", 2003, { endYear: 2009, consumption: 4.8 }),
  ge("peugeot:207:default", "psa-1-6-vti", "1.6 16V / THP", 2006, { endYear: 2014, consumption: 6.6 }),
  ge("peugeot:207:default", "hdi-1-6", "1.4/1.6 HDi", 2006, { endYear: 2014, consumption: 4.3 }),
  ge("peugeot:308:t7", "psa-1-6-vti", "1.6 16V / THP", 2007, { endYear: 2013, consumption: 6.8 }),
  ge("peugeot:308:t7", "hdi-1-6", "1.6 HDi", 2007, { endYear: 2013, consumption: 4.4 }),
  ge("citroen:c4:i", "psa-1-6-vti", "1.6 16V", 2004, { endYear: 2010, consumption: 6.8 }),
  ge("citroen:c4:i", "hdi-1-6", "1.6 HDi", 2004, { endYear: 2010, consumption: 4.4 }),
  ge("citroen:c3:ii", "psa-1-6-vti", "1.4/1.6 16V", 2009, { endYear: 2016, consumption: 6.2 }),
  ge("citroen:c3:ii", "hdi-1-6", "1.4/1.6 HDi", 2009, { endYear: 2016, consumption: 4.0 }),
  ge("opel:astra:h", "opel-1-6-16v", "1.6/1.8 16V", 2004, { endYear: 2009, consumption: 7.0 }),
  ge("opel:astra:h", "opel-1-6-cdti", "1.7/1.9 CDTi", 2004, { endYear: 2009, consumption: 4.9 }),
  ge("opel:astra:j", "opel-1-6-16v", "1.4/1.6 16V", 2009, { endYear: 2015, consumption: 6.6 }),
  ge("opel:astra:j", "opel-1-6-cdti", "1.7/2.0 CDTi", 2009, { endYear: 2015, consumption: 4.6 }),
  ge("ford:focus:mk2", "ford-1-6-tivct", "1.4/1.6/1.8 16V", 2004, { endYear: 2011, consumption: 6.9 }),
  ge("ford:focus:mk2", "hdi-1-6", "1.6 TDCi", 2004, { endYear: 2011, consumption: 4.4 }),
  ge("ford:fiesta:mk7", "ford-1-6-tivct", "1.25/1.4 Duratec", 2008, { endYear: 2017, consumption: 5.9 }),
  ge("ford:fiesta:mk7", "hdi-1-6", "1.4/1.6 TDCi", 2008, { endYear: 2013, consumption: 3.9 }),
  ge("ford:fiesta:mk7", "ecoboost-1-0", "1.0 EcoBoost 100/125", 2013, { endYear: 2017, consumption: 4.8 }),
  ge("toyota:auris:i", "toyota-1-6-vvti", "1.33/1.6/1.8 Valvematic", 2007, { endYear: 2012, consumption: 6.5 }),
  ge("toyota:auris:i", "toyota-2-0-d4d", "1.4/2.0 D-4D", 2007, { endYear: 2012, consumption: 4.9 }),
  ge("toyota:avensis:t27", "toyota-1-6-vvti", "1.6/1.8/2.0 Valvematic", 2009, { endYear: 2018, consumption: 6.9 }),
  ge("toyota:avensis:t27", "toyota-2-0-d4d", "2.0/2.2 D-4D", 2009, { endYear: 2018, consumption: 5.0 }),
  ge("honda:cr-v:mk4", "honda-2-2-idtec", "2.2 i-DTEC", 2012, { transmission: "automatico", drivetrain: "total", endYear: 2018, consumption: 5.4 }),
  ge("kia:ceed:jd", "smartstream-1-6-crdi", "1.4/1.6 CRDi", 2012, { endYear: 2018, consumption: 4.3 }),
  ge("kia:ceed:jd", "kappa-1-0-tgdi", "1.0/1.6 T-GDi", 2012, { endYear: 2018, consumption: 6.4 }),
  ge("kia:sorento:um", "hyundai-2-2-crdi", "2.2 CRDi", 2015, { transmission: "automatico", drivetrain: "total", endYear: 2020, consumption: 6.6 }),
  ge("skoda:octavia:1z", "pd-1-9-tdi", "1.9/2.0 TDI PD", 2004, { endYear: 2013, consumption: 4.8 }),
  ge("skoda:octavia:1z", "vag-2-0-fsi", "1.4/1.6/2.0 FSI", 2004, { endYear: 2013, consumption: 6.9 }),
  ge("audi:a6:c6", "audi-3-0-tdi", "2.7/3.0 TDI quattro", 2004, { transmission: "automatico", drivetrain: "total", endYear: 2011, consumption: 6.4 }),
  ge("audi:a6:c6", "ea888-2-0-tsi", "2.0 TFSI", 2004, { endYear: 2011, consumption: 7.6 }),
  ge("audi:a4:b7", "pd-1-9-tdi", "1.9/2.0 TDI PD", 2000, { endYear: 2007, consumption: 4.9 }),
  ge("audi:a4:b7", "vag-2-0-fsi", "1.8T/2.0 FSI", 2000, { endYear: 2007, consumption: 7.2 }),
  ge("hyundai:i30:gd", "smartstream-1-6-crdi", "1.4/1.6 CRDi", 2012, { endYear: 2017, consumption: 4.2 }),
  ge("hyundai:i30:gd", "kappa-1-0-tgdi", "1.6 T-GDi / GDi", 2012, { endYear: 2017, consumption: 6.6 }),
  ge("mazda:3:bl", "hdi-1-6", "1.6 MZ-CD", 2009, { endYear: 2013, consumption: 4.5 }),
  ge("mazda:3:bl", "skyactiv-g-2-0", "1.6/2.0 MZR", 2009, { endYear: 2013, consumption: 7.0 }),
  ge("seat:ibiza:6l", "pd-1-9-tdi", "1.9 TDI 100/130", 2002, { endYear: 2008, consumption: 4.7 }),
];
