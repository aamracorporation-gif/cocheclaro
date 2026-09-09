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
];
