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
  "Alfa Romeo": "ALFA ROMEO",
  Jeep: "JEEP",
  "Land Rover": "LAND ROVER",
  Lexus: "LEXUS",
  Mitsubishi: "MITSUBISHI",
  smart: "SMART",
  Tesla: "TESLA",
  // Opel, Citroën, Dacia, SEAT, CUPRA, Škoda, DS, Suzuki (desde 2012) y MG
  // no se comercializan en EE. UU. en el periodo relevante.
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

  // ── Segunda y tercera ampliación ──────────────────────────
  "alfa-romeo:giulia:952": { models: ["GIULIA"] },
  "alfa-romeo:stelvio:949": { models: ["STELVIO"] },
  "jeep:renegade:bu": { models: ["RENEGADE"] },
  "jeep:compass:mp": { models: ["COMPASS"] },
  "land-rover:evoque:l551": { models: ["RANGE ROVER EVOQUE"] },
  "land-rover:discovery-sport:l550": { models: ["DISCOVERY SPORT"] },
  "lexus:nx:az10": { models: ["NX 300H", "NX 200T", "NX 300", "NX"] },
  "lexus:ux:default": { models: ["UX 250H", "UX"] },
  "lexus:rx:al20": { models: ["RX 450H", "RX 350", "RX"] },
  "mitsubishi:outlander:phev3": { models: ["OUTLANDER PHEV", "OUTLANDER"] },
  "mitsubishi:asx:ga": { models: ["OUTLANDER SPORT"] },
  "mitsubishi:space-star:default": { models: ["MIRAGE"] },
  "tesla:model-3:default": { models: ["MODEL 3"] },
  "tesla:model-y:default": { models: ["MODEL Y"] },
  "smart:fortwo:453": { models: ["FORTWO"] },
  "bmw:x5:g05": { models: ["X5"] },
  "bmw:serie-7:g11": { models: ["740I", "730I", "750I", "7 SERIES"] },
  "audi:a6:c8": { models: ["A6"] },
  "audi:q7:4m": { models: ["Q7"] },
  "audi:tt:fv": { models: ["TT"] },
  "mercedes-benz:clase-e:w213": { models: ["E300", "E 300", "E-CLASS"] },
  "mercedes-benz:gle:w167": { models: ["GLE350", "GLE 350", "GLE-CLASS"] },
  "volkswagen:arteon:3h": { models: ["ARTEON"] },
  "volkswagen:id4:default": { models: ["ID.4", "ID4"] },
  "toyota:prius:xw50": { models: ["PRIUS"] },
  "toyota:camry:xv70": { models: ["CAMRY"] },
  "toyota:land-cruiser:j150": { models: ["LAND CRUISER"] },
  "ford:mustang:s550": { models: ["MUSTANG"] },
  "ford:ranger:p703": { models: ["RANGER"] },
  "nissan:leaf:ze1": { models: ["LEAF"] },
  "mazda:6:gj": { models: ["MAZDA6", "6"] },
  "mazda:cx-3:dk": { models: ["CX-3"] },
  "mazda:mx-30:default": { models: ["MX-30"] },
  "hyundai:santa-fe:tm": { models: ["SANTA FE"] },
  "hyundai:ioniq:ae": { models: ["IONIQ"] },
  "hyundai:ioniq-5:default": { models: ["IONIQ 5"] },
  "kia:optima:jf": { models: ["OPTIMA"] },
  "kia:soul:sk3": { models: ["SOUL"] },
  "kia:ev6:default": { models: ["EV6"] },
  "volvo:xc90:256": { models: ["XC90"] },
  "volvo:v60:225": { models: ["V60"] },
  "volvo:s60:224": { models: ["S60"] },
};
