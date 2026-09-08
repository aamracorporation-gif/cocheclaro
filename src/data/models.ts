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
];
