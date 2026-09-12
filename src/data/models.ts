import type { Model } from "@/lib/types";

/** id = `${brandId}:${slug}` para garantizar unicidad global. */
export const models: Model[] = [
  // BMW
  { id: "bmw:serie-1", brandId: "bmw", slug: "serie-1", name: "Serie 1", bodyType: "Compacto" },
  { id: "bmw:serie-2-gran-coupe", brandId: "bmw", slug: "serie-2-gran-coupe", name: "Serie 2 Gran Coupé", bodyType: "Berlina" },
  { id: "bmw:serie-3", brandId: "bmw", slug: "serie-3", name: "Serie 3", bodyType: "Berlina" },
  { id: "bmw:serie-5", brandId: "bmw", slug: "serie-5", name: "Serie 5", bodyType: "Berlina" },
  // Audi
  { id: "audi:a3", brandId: "audi", slug: "a3", name: "A3", bodyType: "Compacto" },
  { id: "audi:a4", brandId: "audi", slug: "a4", name: "A4", bodyType: "Berlina" },
  { id: "audi:a5", brandId: "audi", slug: "a5", name: "A5", bodyType: "Coupé / Sportback" },
  // Mercedes-Benz
  { id: "mercedes-benz:clase-a", brandId: "mercedes-benz", slug: "clase-a", name: "Clase A", bodyType: "Compacto" },
  { id: "mercedes-benz:cla", brandId: "mercedes-benz", slug: "cla", name: "CLA", bodyType: "Berlina coupé" },
  { id: "mercedes-benz:clase-c", brandId: "mercedes-benz", slug: "clase-c", name: "Clase C", bodyType: "Berlina" },
  // Volkswagen
  { id: "volkswagen:golf", brandId: "volkswagen", slug: "golf", name: "Golf", bodyType: "Compacto" },
  { id: "volkswagen:polo", brandId: "volkswagen", slug: "polo", name: "Polo", bodyType: "Utilitario" },
  { id: "volkswagen:tiguan", brandId: "volkswagen", slug: "tiguan", name: "Tiguan", bodyType: "SUV" },
  // SEAT
  { id: "seat:ibiza", brandId: "seat", slug: "ibiza", name: "Ibiza", bodyType: "Utilitario" },
  { id: "seat:leon", brandId: "seat", slug: "leon", name: "León", bodyType: "Compacto" },
  { id: "seat:ateca", brandId: "seat", slug: "ateca", name: "Ateca", bodyType: "SUV" },
  // CUPRA
  { id: "cupra:formentor", brandId: "cupra", slug: "formentor", name: "Formentor", bodyType: "SUV coupé" },
  { id: "cupra:leon", brandId: "cupra", slug: "leon", name: "León", bodyType: "Compacto" },
  // Škoda
  { id: "skoda:octavia", brandId: "skoda", slug: "octavia", name: "Octavia", bodyType: "Berlina" },
  { id: "skoda:karoq", brandId: "skoda", slug: "karoq", name: "Karoq", bodyType: "SUV" },
  // Toyota
  { id: "toyota:yaris", brandId: "toyota", slug: "yaris", name: "Yaris", bodyType: "Utilitario" },
  { id: "toyota:corolla", brandId: "toyota", slug: "corolla", name: "Corolla", bodyType: "Compacto" },
  { id: "toyota:c-hr", brandId: "toyota", slug: "c-hr", name: "C-HR", bodyType: "SUV coupé" },
  // Nissan
  { id: "nissan:qashqai", brandId: "nissan", slug: "qashqai", name: "Qashqai", bodyType: "SUV" },
  { id: "nissan:juke", brandId: "nissan", slug: "juke", name: "Juke", bodyType: "SUV" },
  // Peugeot
  { id: "peugeot:208", brandId: "peugeot", slug: "208", name: "208", bodyType: "Utilitario" },
  { id: "peugeot:308", brandId: "peugeot", slug: "308", name: "308", bodyType: "Compacto" },
  { id: "peugeot:3008", brandId: "peugeot", slug: "3008", name: "3008", bodyType: "SUV" },
  // Renault
  { id: "renault:clio", brandId: "renault", slug: "clio", name: "Clio", bodyType: "Utilitario" },
  { id: "renault:megane", brandId: "renault", slug: "megane", name: "Mégane", bodyType: "Compacto" },
  { id: "renault:captur", brandId: "renault", slug: "captur", name: "Captur", bodyType: "SUV" },
  // Dacia
  { id: "dacia:sandero", brandId: "dacia", slug: "sandero", name: "Sandero", bodyType: "Utilitario" },
  { id: "dacia:duster", brandId: "dacia", slug: "duster", name: "Duster", bodyType: "SUV" },
  // Ford
  { id: "ford:focus", brandId: "ford", slug: "focus", name: "Focus", bodyType: "Compacto" },
  { id: "ford:fiesta", brandId: "ford", slug: "fiesta", name: "Fiesta", bodyType: "Utilitario" },
  { id: "ford:puma", brandId: "ford", slug: "puma", name: "Puma", bodyType: "SUV" },
  // Hyundai
  { id: "hyundai:tucson", brandId: "hyundai", slug: "tucson", name: "Tucson", bodyType: "SUV" },
  { id: "hyundai:i30", brandId: "hyundai", slug: "i30", name: "i30", bodyType: "Compacto" },
  // Kia
  { id: "kia:sportage", brandId: "kia", slug: "sportage", name: "Sportage", bodyType: "SUV" },
  { id: "kia:ceed", brandId: "kia", slug: "ceed", name: "Ceed", bodyType: "Compacto" },
  { id: "kia:niro", brandId: "kia", slug: "niro", name: "Niro", bodyType: "SUV" },
  { id: "kia:picanto", brandId: "kia", slug: "picanto", name: "Picanto", bodyType: "Urbano" },
  { id: "kia:rio", brandId: "kia", slug: "rio", name: "Rio", bodyType: "Utilitario" },
  { id: "kia:stonic", brandId: "kia", slug: "stonic", name: "Stonic", bodyType: "SUV" },

  // Volkswagen (ampliación)
  { id: "volkswagen:passat", brandId: "volkswagen", slug: "passat", name: "Passat", bodyType: "Berlina" },
  { id: "volkswagen:t-roc", brandId: "volkswagen", slug: "t-roc", name: "T-Roc", bodyType: "SUV" },
  { id: "volkswagen:touran", brandId: "volkswagen", slug: "touran", name: "Touran", bodyType: "Monovolumen" },
  { id: "volkswagen:up", brandId: "volkswagen", slug: "up", name: "up!", bodyType: "Urbano" },

  // Audi (ampliación)
  { id: "audi:q3", brandId: "audi", slug: "q3", name: "Q3", bodyType: "SUV" },
  { id: "audi:q5", brandId: "audi", slug: "q5", name: "Q5", bodyType: "SUV" },
  { id: "audi:a1", brandId: "audi", slug: "a1", name: "A1", bodyType: "Utilitario" },

  // BMW (ampliación)
  { id: "bmw:x1", brandId: "bmw", slug: "x1", name: "X1", bodyType: "SUV" },
  { id: "bmw:x3", brandId: "bmw", slug: "x3", name: "X3", bodyType: "SUV" },
  { id: "bmw:serie-4", brandId: "bmw", slug: "serie-4", name: "Serie 4", bodyType: "Coupé / Gran Coupé" },

  // Mercedes-Benz (ampliación)
  { id: "mercedes-benz:clase-b", brandId: "mercedes-benz", slug: "clase-b", name: "Clase B", bodyType: "Monovolumen compacto" },
  { id: "mercedes-benz:gla", brandId: "mercedes-benz", slug: "gla", name: "GLA", bodyType: "SUV" },
  { id: "mercedes-benz:glc", brandId: "mercedes-benz", slug: "glc", name: "GLC", bodyType: "SUV" },

  // SEAT (ampliación)
  { id: "seat:arona", brandId: "seat", slug: "arona", name: "Arona", bodyType: "SUV" },
  { id: "seat:tarraco", brandId: "seat", slug: "tarraco", name: "Tarraco", bodyType: "SUV" },

  // Škoda (ampliación)
  { id: "skoda:fabia", brandId: "skoda", slug: "fabia", name: "Fabia", bodyType: "Utilitario" },
  { id: "skoda:superb", brandId: "skoda", slug: "superb", name: "Superb", bodyType: "Berlina" },
  { id: "skoda:kamiq", brandId: "skoda", slug: "kamiq", name: "Kamiq", bodyType: "SUV" },
  { id: "skoda:scala", brandId: "skoda", slug: "scala", name: "Scala", bodyType: "Compacto" },

  // Toyota (ampliación)
  { id: "toyota:rav4", brandId: "toyota", slug: "rav4", name: "RAV4", bodyType: "SUV" },
  { id: "toyota:aygo", brandId: "toyota", slug: "aygo", name: "Aygo", bodyType: "Urbano" },

  // Nissan (ampliación)
  { id: "nissan:x-trail", brandId: "nissan", slug: "x-trail", name: "X-Trail", bodyType: "SUV" },
  { id: "nissan:micra", brandId: "nissan", slug: "micra", name: "Micra", bodyType: "Utilitario" },

  // Peugeot (ampliación)
  { id: "peugeot:2008", brandId: "peugeot", slug: "2008", name: "2008", bodyType: "SUV" },
  { id: "peugeot:5008", brandId: "peugeot", slug: "5008", name: "5008", bodyType: "SUV 7 plazas" },
  { id: "peugeot:508", brandId: "peugeot", slug: "508", name: "508", bodyType: "Berlina" },

  // Renault (ampliación)
  { id: "renault:austral", brandId: "renault", slug: "austral", name: "Austral", bodyType: "SUV" },
  { id: "renault:kadjar", brandId: "renault", slug: "kadjar", name: "Kadjar", bodyType: "SUV" },
  { id: "renault:scenic", brandId: "renault", slug: "scenic", name: "Scénic", bodyType: "Monovolumen" },
  { id: "renault:twingo", brandId: "renault", slug: "twingo", name: "Twingo", bodyType: "Urbano" },

  // Dacia (ampliación)
  { id: "dacia:jogger", brandId: "dacia", slug: "jogger", name: "Jogger", bodyType: "Familiar 7 plazas" },
  { id: "dacia:logan", brandId: "dacia", slug: "logan", name: "Logan", bodyType: "Berlina" },

  // Ford (ampliación)
  { id: "ford:kuga", brandId: "ford", slug: "kuga", name: "Kuga", bodyType: "SUV" },
  { id: "ford:mondeo", brandId: "ford", slug: "mondeo", name: "Mondeo", bodyType: "Berlina" },

  // Hyundai (ampliación)
  { id: "hyundai:i20", brandId: "hyundai", slug: "i20", name: "i20", bodyType: "Utilitario" },
  { id: "hyundai:kona", brandId: "hyundai", slug: "kona", name: "Kona", bodyType: "SUV" },

  // Opel
  { id: "opel:corsa", brandId: "opel", slug: "corsa", name: "Corsa", bodyType: "Utilitario" },
  { id: "opel:astra", brandId: "opel", slug: "astra", name: "Astra", bodyType: "Compacto" },
  { id: "opel:mokka", brandId: "opel", slug: "mokka", name: "Mokka", bodyType: "SUV" },
  { id: "opel:crossland", brandId: "opel", slug: "crossland", name: "Crossland", bodyType: "SUV" },
  { id: "opel:grandland", brandId: "opel", slug: "grandland", name: "Grandland", bodyType: "SUV" },
  { id: "opel:insignia", brandId: "opel", slug: "insignia", name: "Insignia", bodyType: "Berlina" },

  // Citroën
  { id: "citroen:c3", brandId: "citroen", slug: "c3", name: "C3", bodyType: "Utilitario" },
  { id: "citroen:c3-aircross", brandId: "citroen", slug: "c3-aircross", name: "C3 Aircross", bodyType: "SUV" },
  { id: "citroen:c4", brandId: "citroen", slug: "c4", name: "C4", bodyType: "Compacto" },
  { id: "citroen:c5-aircross", brandId: "citroen", slug: "c5-aircross", name: "C5 Aircross", bodyType: "SUV" },
  { id: "citroen:berlingo", brandId: "citroen", slug: "berlingo", name: "Berlingo", bodyType: "Furgoneta de pasajeros" },

  // Mazda
  { id: "mazda:2", brandId: "mazda", slug: "2", name: "Mazda2", bodyType: "Utilitario" },
  { id: "mazda:3", brandId: "mazda", slug: "3", name: "Mazda3", bodyType: "Compacto" },
  { id: "mazda:cx-30", brandId: "mazda", slug: "cx-30", name: "CX-30", bodyType: "SUV" },
  { id: "mazda:cx-5", brandId: "mazda", slug: "cx-5", name: "CX-5", bodyType: "SUV" },
  { id: "mazda:mx-5", brandId: "mazda", slug: "mx-5", name: "MX-5", bodyType: "Descapotable" },

  // Fiat
  { id: "fiat:500", brandId: "fiat", slug: "500", name: "500", bodyType: "Urbano" },
  { id: "fiat:panda", brandId: "fiat", slug: "panda", name: "Panda", bodyType: "Urbano" },
  { id: "fiat:tipo", brandId: "fiat", slug: "tipo", name: "Tipo", bodyType: "Compacto" },
  { id: "fiat:500x", brandId: "fiat", slug: "500x", name: "500X", bodyType: "SUV" },

  // MINI
  { id: "mini:3-puertas", brandId: "mini", slug: "3-puertas", name: "3 puertas", bodyType: "Utilitario" },
  { id: "mini:5-puertas", brandId: "mini", slug: "5-puertas", name: "5 puertas", bodyType: "Utilitario" },
  { id: "mini:countryman", brandId: "mini", slug: "countryman", name: "Countryman", bodyType: "SUV" },

  // Volvo
  { id: "volvo:xc40", brandId: "volvo", slug: "xc40", name: "XC40", bodyType: "SUV" },
  { id: "volvo:xc60", brandId: "volvo", slug: "xc60", name: "XC60", bodyType: "SUV" },
  { id: "volvo:v40", brandId: "volvo", slug: "v40", name: "V40", bodyType: "Compacto" },

  // Honda
  { id: "honda:civic", brandId: "honda", slug: "civic", name: "Civic", bodyType: "Compacto" },
  { id: "honda:jazz", brandId: "honda", slug: "jazz", name: "Jazz", bodyType: "Utilitario" },
  { id: "honda:hr-v", brandId: "honda", slug: "hr-v", name: "HR-V", bodyType: "SUV" },
  { id: "honda:cr-v", brandId: "honda", slug: "cr-v", name: "CR-V", bodyType: "SUV" },
  { id: "honda:accord", brandId: "honda", slug: "accord", name: "Accord", bodyType: "Berlina" },

  /* ═══ Segunda ampliación: más marcas y modelos ═══ */

  // Alfa Romeo
  { id: "alfa-romeo:giulietta", brandId: "alfa-romeo", slug: "giulietta", name: "Giulietta", bodyType: "Compacto" },
  { id: "alfa-romeo:giulia", brandId: "alfa-romeo", slug: "giulia", name: "Giulia", bodyType: "Berlina" },
  { id: "alfa-romeo:stelvio", brandId: "alfa-romeo", slug: "stelvio", name: "Stelvio", bodyType: "SUV" },
  { id: "alfa-romeo:mito", brandId: "alfa-romeo", slug: "mito", name: "MiTo", bodyType: "Utilitario" },

  // Jeep
  { id: "jeep:renegade", brandId: "jeep", slug: "renegade", name: "Renegade", bodyType: "SUV" },
  { id: "jeep:compass", brandId: "jeep", slug: "compass", name: "Compass", bodyType: "SUV" },
  { id: "jeep:cherokee", brandId: "jeep", slug: "cherokee", name: "Cherokee", bodyType: "SUV" },

  // Land Rover
  { id: "land-rover:evoque", brandId: "land-rover", slug: "evoque", name: "Range Rover Evoque", bodyType: "SUV" },
  { id: "land-rover:discovery-sport", brandId: "land-rover", slug: "discovery-sport", name: "Discovery Sport", bodyType: "SUV" },

  // Lexus
  { id: "lexus:ct", brandId: "lexus", slug: "ct", name: "CT", bodyType: "Compacto" },
  { id: "lexus:nx", brandId: "lexus", slug: "nx", name: "NX", bodyType: "SUV" },
  { id: "lexus:ux", brandId: "lexus", slug: "ux", name: "UX", bodyType: "SUV" },
  { id: "lexus:rx", brandId: "lexus", slug: "rx", name: "RX", bodyType: "SUV" },

  // DS Automobiles
  { id: "ds:ds3-crossback", brandId: "ds", slug: "ds3-crossback", name: "DS 3 Crossback", bodyType: "SUV" },
  { id: "ds:ds7-crossback", brandId: "ds", slug: "ds7-crossback", name: "DS 7 Crossback", bodyType: "SUV" },
  { id: "ds:ds4", brandId: "ds", slug: "ds4", name: "DS 4", bodyType: "Compacto" },

  // Suzuki
  { id: "suzuki:swift", brandId: "suzuki", slug: "swift", name: "Swift", bodyType: "Utilitario" },
  { id: "suzuki:vitara", brandId: "suzuki", slug: "vitara", name: "Vitara", bodyType: "SUV" },
  { id: "suzuki:s-cross", brandId: "suzuki", slug: "s-cross", name: "S-Cross", bodyType: "SUV" },
  { id: "suzuki:ignis", brandId: "suzuki", slug: "ignis", name: "Ignis", bodyType: "Urbano" },
  { id: "suzuki:jimny", brandId: "suzuki", slug: "jimny", name: "Jimny", bodyType: "Todoterreno" },

  // Mitsubishi
  { id: "mitsubishi:asx", brandId: "mitsubishi", slug: "asx", name: "ASX", bodyType: "SUV" },
  { id: "mitsubishi:outlander", brandId: "mitsubishi", slug: "outlander", name: "Outlander", bodyType: "SUV" },
  { id: "mitsubishi:space-star", brandId: "mitsubishi", slug: "space-star", name: "Space Star", bodyType: "Urbano" },

  // smart
  { id: "smart:fortwo", brandId: "smart", slug: "fortwo", name: "ForTwo", bodyType: "Urbano 2 plazas" },
  { id: "smart:forfour", brandId: "smart", slug: "forfour", name: "ForFour", bodyType: "Urbano" },

  // Tesla
  { id: "tesla:model-3", brandId: "tesla", slug: "model-3", name: "Model 3", bodyType: "Berlina eléctrica" },
  { id: "tesla:model-y", brandId: "tesla", slug: "model-y", name: "Model Y", bodyType: "SUV eléctrico" },

  // MG
  { id: "mg:zs", brandId: "mg", slug: "zs", name: "ZS", bodyType: "SUV" },
  { id: "mg:mg3", brandId: "mg", slug: "mg3", name: "MG3", bodyType: "Utilitario" },
  { id: "mg:hs", brandId: "mg", slug: "hs", name: "HS", bodyType: "SUV" },
  { id: "mg:mg4", brandId: "mg", slug: "mg4", name: "MG4", bodyType: "Compacto eléctrico" },

  // BMW (2ª ampliación)
  { id: "bmw:x5", brandId: "bmw", slug: "x5", name: "X5", bodyType: "SUV" },
  { id: "bmw:serie-2-active-tourer", brandId: "bmw", slug: "serie-2-active-tourer", name: "Serie 2 Active Tourer", bodyType: "Monovolumen compacto" },
  { id: "bmw:serie-7", brandId: "bmw", slug: "serie-7", name: "Serie 7", bodyType: "Berlina" },

  // Audi (2ª ampliación)
  { id: "audi:a6", brandId: "audi", slug: "a6", name: "A6", bodyType: "Berlina y Avant" },
  { id: "audi:q7", brandId: "audi", slug: "q7", name: "Q7", bodyType: "SUV 7 plazas" },
  { id: "audi:tt", brandId: "audi", slug: "tt", name: "TT", bodyType: "Coupé" },

  // Mercedes-Benz (2ª ampliación)
  { id: "mercedes-benz:clase-e", brandId: "mercedes-benz", slug: "clase-e", name: "Clase E", bodyType: "Berlina y Estate" },
  { id: "mercedes-benz:gle", brandId: "mercedes-benz", slug: "gle", name: "GLE", bodyType: "SUV" },

  // Volkswagen (2ª ampliación)
  { id: "volkswagen:arteon", brandId: "volkswagen", slug: "arteon", name: "Arteon", bodyType: "Berlina liftback" },
  { id: "volkswagen:t-cross", brandId: "volkswagen", slug: "t-cross", name: "T-Cross", bodyType: "SUV" },
  { id: "volkswagen:caddy", brandId: "volkswagen", slug: "caddy", name: "Caddy", bodyType: "Furgoneta de pasajeros" },
  { id: "volkswagen:id3", brandId: "volkswagen", slug: "id3", name: "ID.3", bodyType: "Compacto eléctrico" },
  { id: "volkswagen:id4", brandId: "volkswagen", slug: "id4", name: "ID.4", bodyType: "SUV eléctrico" },

  // Toyota (2ª ampliación)
  { id: "toyota:prius", brandId: "toyota", slug: "prius", name: "Prius", bodyType: "Compacto híbrido" },
  { id: "toyota:camry", brandId: "toyota", slug: "camry", name: "Camry", bodyType: "Berlina" },
  { id: "toyota:land-cruiser", brandId: "toyota", slug: "land-cruiser", name: "Land Cruiser", bodyType: "Todoterreno" },

  // Ford (2ª ampliación)
  { id: "ford:s-max", brandId: "ford", slug: "s-max", name: "S-Max", bodyType: "Monovolumen" },
  { id: "ford:ranger", brandId: "ford", slug: "ranger", name: "Ranger", bodyType: "Pick-up" },
  { id: "ford:mustang", brandId: "ford", slug: "mustang", name: "Mustang", bodyType: "Coupé deportivo" },

  // Renault (2ª ampliación)
  { id: "renault:zoe", brandId: "renault", slug: "zoe", name: "Zoe", bodyType: "Utilitario eléctrico" },
  { id: "renault:espace", brandId: "renault", slug: "espace", name: "Espace", bodyType: "Monovolumen / SUV" },
  { id: "renault:talisman", brandId: "renault", slug: "talisman", name: "Talisman", bodyType: "Berlina" },

  // Peugeot (2ª ampliación)
  { id: "peugeot:108", brandId: "peugeot", slug: "108", name: "108", bodyType: "Urbano" },
  { id: "peugeot:rifter", brandId: "peugeot", slug: "rifter", name: "Rifter", bodyType: "Furgoneta de pasajeros" },
  { id: "peugeot:408", brandId: "peugeot", slug: "408", name: "408", bodyType: "Berlina fastback" },

  // Opel (2ª ampliación)
  { id: "opel:zafira", brandId: "opel", slug: "zafira", name: "Zafira Life", bodyType: "Furgoneta de pasajeros" },
  { id: "opel:adam", brandId: "opel", slug: "adam", name: "Adam", bodyType: "Urbano" },

  // SEAT / CUPRA (2ª ampliación)
  { id: "seat:alhambra", brandId: "seat", slug: "alhambra", name: "Alhambra", bodyType: "Monovolumen" },
  { id: "seat:mii", brandId: "seat", slug: "mii", name: "Mii", bodyType: "Urbano" },
  { id: "cupra:born", brandId: "cupra", slug: "born", name: "Born", bodyType: "Compacto eléctrico" },

  // Škoda (2ª ampliación)
  { id: "skoda:enyaq", brandId: "skoda", slug: "enyaq", name: "Enyaq", bodyType: "SUV eléctrico" },
  { id: "skoda:kodiaq", brandId: "skoda", slug: "kodiaq", name: "Kodiaq", bodyType: "SUV 7 plazas" },
  { id: "skoda:yeti", brandId: "skoda", slug: "yeti", name: "Yeti", bodyType: "SUV" },

  // Nissan (2ª ampliación)
  { id: "nissan:leaf", brandId: "nissan", slug: "leaf", name: "Leaf", bodyType: "Compacto eléctrico" },
  { id: "nissan:note", brandId: "nissan", slug: "note", name: "Note", bodyType: "Utilitario" },

  // Mazda (2ª ampliación)
  { id: "mazda:6", brandId: "mazda", slug: "6", name: "Mazda6", bodyType: "Berlina y Wagon" },
  { id: "mazda:cx-3", brandId: "mazda", slug: "cx-3", name: "CX-3", bodyType: "SUV" },
  { id: "mazda:mx-30", brandId: "mazda", slug: "mx-30", name: "MX-30", bodyType: "SUV eléctrico/híbrido" },

  // Hyundai (2ª ampliación)
  { id: "hyundai:i10", brandId: "hyundai", slug: "i10", name: "i10", bodyType: "Urbano" },
  { id: "hyundai:santa-fe", brandId: "hyundai", slug: "santa-fe", name: "Santa Fe", bodyType: "SUV 7 plazas" },
  { id: "hyundai:ioniq", brandId: "hyundai", slug: "ioniq", name: "Ioniq", bodyType: "Compacto híbrido/eléctrico" },
  { id: "hyundai:ioniq-5", brandId: "hyundai", slug: "ioniq-5", name: "Ioniq 5", bodyType: "SUV eléctrico" },

  // Kia (2ª ampliación)
  { id: "kia:optima", brandId: "kia", slug: "optima", name: "Optima", bodyType: "Berlina" },
  { id: "kia:xceed", brandId: "kia", slug: "xceed", name: "XCeed", bodyType: "SUV" },
  { id: "kia:soul", brandId: "kia", slug: "soul", name: "Soul", bodyType: "SUV compacto" },
  { id: "kia:ev6", brandId: "kia", slug: "ev6", name: "EV6", bodyType: "SUV eléctrico" },

  // Fiat (2ª ampliación)
  { id: "fiat:punto", brandId: "fiat", slug: "punto", name: "Punto", bodyType: "Utilitario" },
  { id: "fiat:doblo", brandId: "fiat", slug: "doblo", name: "Doblò", bodyType: "Furgoneta de pasajeros" },
  { id: "fiat:500l", brandId: "fiat", slug: "500l", name: "500L", bodyType: "Monovolumen compacto" },

  // Citroën (2ª ampliación)
  { id: "citroen:c1", brandId: "citroen", slug: "c1", name: "C1", bodyType: "Urbano" },
  { id: "citroen:c4-picasso", brandId: "citroen", slug: "c4-picasso", name: "C4 Picasso / SpaceTourer", bodyType: "Monovolumen" },

  // Volvo (2ª ampliación)
  { id: "volvo:xc90", brandId: "volvo", slug: "xc90", name: "XC90", bodyType: "SUV 7 plazas" },
  { id: "volvo:v60", brandId: "volvo", slug: "v60", name: "V60", bodyType: "Familiar" },
  { id: "volvo:s60", brandId: "volvo", slug: "s60", name: "S60", bodyType: "Berlina" },

  // MINI (2ª ampliación)
  { id: "mini:clubman", brandId: "mini", slug: "clubman", name: "Clubman", bodyType: "Familiar" },

  /* ═══ Tercera ampliación: generaciones muy presentes en el
     mercado de ocasión español (2000-2010s) y algunos modelos
     nuevos necesarios para alojarlas ═══ */
  { id: "peugeot:207", brandId: "peugeot", slug: "207", name: "207", bodyType: "Utilitario" },
  { id: "toyota:auris", brandId: "toyota", slug: "auris", name: "Auris", bodyType: "Compacto" },
  { id: "toyota:avensis", brandId: "toyota", slug: "avensis", name: "Avensis", bodyType: "Berlina y Familiar" },
  { id: "kia:sorento", brandId: "kia", slug: "sorento", name: "Sorento", bodyType: "SUV 7 plazas" },

  /* ═══ Cuarta ampliación: más nameplates de marcas ya presentes
     + SsangYong y Chevrolet ═══ */
  { id: "audi:a8", brandId: "audi", slug: "a8", name: "A8", bodyType: "Berlina de representación" },
  { id: "audi:q8", brandId: "audi", slug: "q8", name: "Q8", bodyType: "SUV coupé" },
  { id: "mercedes-benz:cls", brandId: "mercedes-benz", slug: "cls", name: "CLS", bodyType: "Berlina coupé" },
  { id: "mercedes-benz:gls", brandId: "mercedes-benz", slug: "gls", name: "GLS", bodyType: "SUV 7 plazas" },
  { id: "volkswagen:beetle", brandId: "volkswagen", slug: "beetle", name: "Beetle", bodyType: "Urbano" },
  { id: "volkswagen:scirocco", brandId: "volkswagen", slug: "scirocco", name: "Scirocco", bodyType: "Coupé deportivo" },
  { id: "volkswagen:transporter", brandId: "volkswagen", slug: "transporter", name: "Transporter / Multivan", bodyType: "Furgoneta de pasajeros" },
  { id: "cupra:tavascan", brandId: "cupra", slug: "tavascan", name: "Tavascan", bodyType: "SUV coupé eléctrico" },
  { id: "toyota:verso", brandId: "toyota", slug: "verso", name: "Verso", bodyType: "Monovolumen" },
  { id: "toyota:hilux", brandId: "toyota", slug: "hilux", name: "Hilux", bodyType: "Pick-up" },
  { id: "nissan:navara", brandId: "nissan", slug: "navara", name: "Navara", bodyType: "Pick-up" },
  { id: "peugeot:206", brandId: "peugeot", slug: "206", name: "206", bodyType: "Utilitario" },
  { id: "peugeot:307", brandId: "peugeot", slug: "307", name: "307", bodyType: "Compacto" },
  { id: "peugeot:407", brandId: "peugeot", slug: "407", name: "407", bodyType: "Berlina y SW" },
  { id: "renault:laguna", brandId: "renault", slug: "laguna", name: "Laguna", bodyType: "Berlina" },
  { id: "renault:koleos", brandId: "renault", slug: "koleos", name: "Koleos", bodyType: "SUV" },
  { id: "dacia:spring", brandId: "dacia", slug: "spring", name: "Spring", bodyType: "Urbano eléctrico" },
  { id: "ford:ka", brandId: "ford", slug: "ka", name: "Ka", bodyType: "Urbano" },
  { id: "ford:c-max", brandId: "ford", slug: "c-max", name: "C-Max", bodyType: "Monovolumen compacto" },
  { id: "ford:ecosport", brandId: "ford", slug: "ecosport", name: "EcoSport", bodyType: "SUV" },
  { id: "ford:galaxy", brandId: "ford", slug: "galaxy", name: "Galaxy", bodyType: "Monovolumen 7 plazas" },
  { id: "hyundai:bayon", brandId: "hyundai", slug: "bayon", name: "Bayon", bodyType: "SUV" },
  { id: "kia:carnival", brandId: "kia", slug: "carnival", name: "Carnival (Sedona)", bodyType: "Monovolumen 7/8 plazas" },
  { id: "opel:meriva", brandId: "opel", slug: "meriva", name: "Meriva", bodyType: "Monovolumen pequeño" },
  { id: "opel:vectra", brandId: "opel", slug: "vectra", name: "Vectra", bodyType: "Berlina y familiar" },
  { id: "opel:antara", brandId: "opel", slug: "antara", name: "Antara", bodyType: "SUV" },
  { id: "citroen:xsara", brandId: "citroen", slug: "xsara", name: "Xsara", bodyType: "Compacto" },
  { id: "citroen:saxo", brandId: "citroen", slug: "saxo", name: "Saxo", bodyType: "Urbano" },
  { id: "citroen:c2", brandId: "citroen", slug: "c2", name: "C2", bodyType: "Urbano" },
  { id: "mazda:5", brandId: "mazda", slug: "5", name: "Mazda5", bodyType: "Monovolumen" },
  { id: "fiat:sedici", brandId: "fiat", slug: "sedici", name: "Sedici", bodyType: "SUV pequeño" },
  { id: "volvo:v50", brandId: "volvo", slug: "v50", name: "V50", bodyType: "Familiar compacto" },
  { id: "volvo:s40", brandId: "volvo", slug: "s40", name: "S40", bodyType: "Berlina compacta" },
  { id: "volvo:c30", brandId: "volvo", slug: "c30", name: "C30", bodyType: "Compacto deportivo" },
  { id: "alfa-romeo:147", brandId: "alfa-romeo", slug: "147", name: "147", bodyType: "Compacto" },
  { id: "alfa-romeo:156", brandId: "alfa-romeo", slug: "156", name: "156", bodyType: "Berlina" },
  { id: "jeep:grand-cherokee", brandId: "jeep", slug: "grand-cherokee", name: "Grand Cherokee", bodyType: "SUV" },
  { id: "jeep:wrangler", brandId: "jeep", slug: "wrangler", name: "Wrangler", bodyType: "Todoterreno" },
  { id: "land-rover:range-rover", brandId: "land-rover", slug: "range-rover", name: "Range Rover", bodyType: "SUV de lujo" },
  { id: "land-rover:defender", brandId: "land-rover", slug: "defender", name: "Defender", bodyType: "Todoterreno" },
  { id: "land-rover:discovery", brandId: "land-rover", slug: "discovery", name: "Discovery", bodyType: "SUV 7 plazas" },
  { id: "lexus:is", brandId: "lexus", slug: "is", name: "IS", bodyType: "Berlina deportiva" },
  { id: "lexus:es", brandId: "lexus", slug: "es", name: "ES", bodyType: "Berlina" },
  { id: "suzuki:sx4", brandId: "suzuki", slug: "sx4", name: "SX4", bodyType: "Compacto / SUV" },
  { id: "suzuki:baleno", brandId: "suzuki", slug: "baleno", name: "Baleno", bodyType: "Utilitario" },
  { id: "mitsubishi:colt", brandId: "mitsubishi", slug: "colt", name: "Colt", bodyType: "Utilitario" },
  { id: "mitsubishi:pajero", brandId: "mitsubishi", slug: "pajero", name: "Pajero", bodyType: "Todoterreno" },
  { id: "mitsubishi:l200", brandId: "mitsubishi", slug: "l200", name: "L200", bodyType: "Pick-up" },
  { id: "tesla:model-s", brandId: "tesla", slug: "model-s", name: "Model S", bodyType: "Berlina eléctrica grande" },
  { id: "tesla:model-x", brandId: "tesla", slug: "model-x", name: "Model X", bodyType: "SUV eléctrico grande" },
  { id: "mg:mg5", brandId: "mg", slug: "mg5", name: "MG5", bodyType: "Familiar eléctrico" },
  { id: "ssangyong:korando", brandId: "ssangyong", slug: "korando", name: "Korando", bodyType: "SUV" },
  { id: "ssangyong:tivoli", brandId: "ssangyong", slug: "tivoli", name: "Tivoli", bodyType: "SUV pequeño" },
  { id: "ssangyong:rexton", brandId: "ssangyong", slug: "rexton", name: "Rexton", bodyType: "SUV grande 7 plazas" },
  { id: "chevrolet:aveo", brandId: "chevrolet", slug: "aveo", name: "Aveo", bodyType: "Utilitario" },
  { id: "chevrolet:cruze", brandId: "chevrolet", slug: "cruze", name: "Cruze", bodyType: "Compacto" },
  { id: "chevrolet:captiva", brandId: "chevrolet", slug: "captiva", name: "Captiva", bodyType: "SUV 7 plazas" },
];
