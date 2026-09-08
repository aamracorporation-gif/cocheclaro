/**
 * Mapa entre las entidades de CocheClaro y la API de recalls de la NHTSA (EE. UU.).
 *
 * La NHTSA solo cubre vehículos comercializados en Estados Unidos, así que:
 *  - Marcas que no se venden en EE. UU. en el periodo relevante (SEAT, CUPRA,
 *    Škoda, Peugeot, Renault, Dacia) se omiten: no se consulta la API.
 *  - Los nombres de modelo de la NHTSA están en inglés y en mayúsculas, y a
 *    veces las campañas se archivan por acabado (BMW: "330i" en vez de
 *    "3 SERIES"). Por eso hay overrides por generación.
 */

/** Marca CocheClaro (brand.name) -> "make" de la NHTSA. */
const MAKE_BY_BRAND: Record<string, string> = {
  BMW: "BMW",
  Audi: "AUDI",
  "Mercedes-Benz": "MERCEDES BENZ",
  Volkswagen: "VOLKSWAGEN",
  Toyota: "TOYOTA",
  Nissan: "NISSAN",
  Ford: "FORD",
  Hyundai: "HYUNDAI",
  Kia: "KIA",
};

/** Marcas sin presencia en EE. UU.: no se consulta la NHTSA. */
export function brandSoldInUsa(brandName: string): boolean {
  return brandName in MAKE_BY_BRAND;
}

export function nhtsaMake(brandName: string): string | null {
  return MAKE_BY_BRAND[brandName] ?? null;
}

/**
 * Overrides por id de generación. `models`: nombres tal y como los usa la NHTSA
 * (se prueban todos y se combinan resultados). `years`: años de modelo a
 * consultar; si se omite, se muestrean del rango de la generación.
 */
export const NHTSA_OVERRIDES: Record<string, { models?: string[]; years?: number[] }> = {
  // BMW archiva las campañas por acabado, no por "3 SERIES".
  "bmw:serie-1:f40": { models: ["228I GRAN COUPE", "M235I GRAN COUPE"] },
  "bmw:serie-2-gran-coupe:f44": { models: ["228I GRAN COUPE", "M235I GRAN COUPE"] },
  "bmw:serie-3:g20": { models: ["330I", "330E", "M340I", "3 SERIES"] },
  "bmw:serie-3:f30": { models: ["320I", "328I", "330I", "340I", "328D", "3 SERIES"] },
  "bmw:serie-5:g30": { models: ["530I", "540I", "530E", "M550I", "5 SERIES"] },
  // Audi: la NHTSA usa el nombre corto.
  "audi:a3:8y": { models: ["A3"] },
  "audi:a3:8v": { models: ["A3"] },
  "audi:a4:b9": { models: ["A4", "A4 ALLROAD"] },
  "audi:a5:f5": { models: ["A5", "S5"] },
  // Mercedes.
  "mercedes-benz:clase-a:w177": { models: ["A220", "A 220"] },
  "mercedes-benz:cla:c118": { models: ["CLA250", "CLA 250", "CLA"] },
  "mercedes-benz:clase-c:w206": { models: ["C300", "C 300", "C-CLASS"] },
  // VW / Toyota / Nissan / Ford / Hyundai / Kia usan el nombre "natural".
  "volkswagen:golf:mk7": { models: ["GOLF", "GOLF GTI", "GOLF SPORTWAGEN", "E-GOLF"] },
  "volkswagen:golf:mk8": { models: ["GOLF GTI", "GOLF R"] },
  "volkswagen:tiguan:ad1": { models: ["TIGUAN"] },
  "nissan:qashqai:j12": { models: ["ROGUE SPORT", "QASHQAI"] }, // en EE. UU. se llamó Rogue Sport
  "nissan:juke:f16": { models: ["JUKE", "KICKS"] },
  "toyota:c-hr:ngx10": { models: ["C-HR", "CHR"] },
  "ford:focus:mk4": { models: ["FOCUS"] },
  "ford:fiesta:mk8": { models: ["FIESTA"] },
  "ford:puma:mk1": { models: ["PUMA", "ECOSPORT"] },
};
