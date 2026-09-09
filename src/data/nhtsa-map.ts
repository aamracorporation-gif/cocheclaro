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
  Mazda: "MAZDA",
  MINI: "MINI",
  Volvo: "VOLVO",
  Honda: "HONDA",
  Fiat: "FIAT",
  // Opel, Citroën, Dacia, SEAT, CUPRA y Škoda no se comercializan en EE. UU.
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

  // ── Fichas ampliadas ──────────────────────────────────────
  "bmw:x1:f48": { models: ["X1"] },
  "bmw:x3:g01": { models: ["X3"] },
  "bmw:serie-4:g22": { models: ["430I", "440I", "M440I", "4 SERIES"] },
  "bmw:serie-1:f20": { models: ["1 SERIES", "228I", "M235I"] },
  "audi:q3:f3": { models: ["Q3"] },
  "audi:q5:fy": { models: ["Q5"] },
  "audi:a4:b8": { models: ["A4", "A4 ALLROAD", "S4"] },
  "mercedes-benz:gla:h247": { models: ["GLA250", "GLA 250", "GLA-CLASS"] },
  "mercedes-benz:glc:x253": { models: ["GLC300", "GLC 300", "GLC-CLASS"] },
  "mercedes-benz:clase-c:w205": { models: ["C300", "C 300", "C-CLASS"] },
  "volkswagen:passat:b8": { models: ["PASSAT"] },
  "toyota:rav4:xa50": { models: ["RAV4"] },
  "nissan:qashqai:j11": { models: ["ROGUE SPORT"] },
  "nissan:x-trail:t32": { models: ["ROGUE"] },
  "ford:kuga:mk3": { models: ["ESCAPE"] },
  "ford:mondeo:mk5": { models: ["FUSION"] },
  "ford:focus:mk3": { models: ["FOCUS"] },
  "hyundai:kona:os": { models: ["KONA", "KONA ELECTRIC"] },
  "kia:niro:de": { models: ["NIRO", "NIRO EV", "NIRO PLUG-IN HYBRID"] },
  "kia:rio:yb": { models: ["RIO"] },
  "mazda:3:bp": { models: ["MAZDA3", "3"] },
  "mazda:cx-30:dm": { models: ["CX-30"] },
  "mazda:cx-5:kf": { models: ["CX-5"] },
  "mazda:mx-5:nd": { models: ["MX-5 MIATA", "MX-5"] },
  "mazda:2:dj": { models: ["MAZDA2", "2"] },
  "mini:3-puertas:f56": { models: ["COOPER", "HARDTOP", "COOPER S"] },
  "mini:5-puertas:f55": { models: ["COOPER", "HARDTOP 4 DOOR", "COOPER S"] },
  "mini:countryman:f60": { models: ["COUNTRYMAN", "COOPER COUNTRYMAN"] },
  "volvo:xc40:536": { models: ["XC40"] },
  "volvo:xc60:246": { models: ["XC60"] },
  "honda:civic:x": { models: ["CIVIC"] },
  "honda:cr-v:rw": { models: ["CR-V"] },
  "honda:hr-v:ru": { models: ["HR-V"] },
  "honda:jazz:gr": { models: ["FIT"] },
  "fiat:500:312": { models: ["500"] },
  "fiat:500x:334": { models: ["500X"] },
};
