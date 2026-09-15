import { describe, it, expect } from "vitest";
import { search, normalize } from "./search";

describe("normalize", () => {
  it("quita acentos, mayúsculas y signos", () => {
    expect(normalize("BMW  Série-3, 320d!")).toBe("bmw serie 3 320d");
  });
});

describe("search", () => {
  it("encuentra una generación por marca + motor + año", async () => {
    const r = await search("bmw 320d 2020");
    expect(r[0]?.href).toBe("/coches/bmw/serie-3/g20");
  });

  it("encuentra un motor por su código", async () => {
    const r = await search("b47d20");
    expect(r.some((x) => x.href === "/motores/b47d20")).toBe(true);
  });

  it("responde a consultas en lenguaje natural", async () => {
    const r = await search("que motor lleva un golf 8");
    expect(r[0]?.href).toContain("/coches/volkswagen/golf/mk8");
  });

  it("no devuelve nada con menos de 2 caracteres", async () => {
    expect(await search("a")).toEqual([]);
  });

  it("exige que todos los tokens hagan match", async () => {
    const r = await search("bmw zzzznomatch");
    expect(r).toEqual([]);
  });
});
