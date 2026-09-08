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
];
