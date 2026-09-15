import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { csvToObjects } from "./parse-csv";
import { buildImportPlan, slugify } from "./build-plan";

const engineByCode = new Map([["B47D20", "b47d20"]]);

describe("slugify", () => {
  it("normaliza acentos y espacios", () => {
    expect(slugify("Boletín técnico BMW")).toBe("boletin-tecnico-bmw");
  });
});

describe("parseCsv + buildImportPlan con la plantilla real", () => {
  const csvPath = resolve(__dirname, "../../../DATA_IMPORT_TEMPLATE.csv");
  const rows = csvToObjects(readFileSync(csvPath, "utf-8"));

  it("parsea la cabecera y todas las filas de la plantilla", () => {
    expect(rows.length).toBeGreaterThan(0);
    expect(Object.keys(rows[0] ?? {})).toContain("entity");
  });

  it("construye la avería b47-cadena con todos sus campos y una fuente", () => {
    const plan = buildImportPlan(rows, engineByCode);
    expect(plan.errors).toEqual([]);

    const issue = plan.knownIssues.find((i) => i.id === "issue-b47-cadena");
    expect(issue).toBeDefined();
    expect(issue?.engineId).toBe("b47d20");
    expect(issue?.title).toBe("Desgaste de la cadena de distribución");
    expect(issue?.severity).toBe("alta");
    expect(issue?.confidence).toBe("moderada");
    expect(issue?.mileageMin).toBe(120000);
    expect(issue?.mileageMax).toBe(220000);
    expect(issue?.costMin).toBe(900);
    expect(issue?.costMax).toBe(2200);
    expect(issue?.sourceIds.length).toBe(1);

    const source = plan.sources.find((s) => s.id === issue?.sourceIds[0]);
    expect(source?.publisher).toBe("Red oficial");
    expect(source?.url).toContain("example-tsb.com");
  });

  it("construye el ítem de mantenimiento con sus intervalos", () => {
    const plan = buildImportPlan(rows, engineByCode);
    const item = plan.maintenanceItems.find((m) => m.id === "m-b47-aceite");
    expect(item).toBeDefined();
    expect(item?.engineId).toBe("b47d20");
    expect(item?.item).toBe("Cambio de aceite y filtro");
    expect(item?.intervalKm).toBe(20000);
    expect(item?.intervalMonths).toBe(24);
    expect(item?.sourceId).toBeDefined();
  });

  it("marca como aviso (no error) las filas de tipos aún no soportados por CSV", () => {
    const plan = buildImportPlan(rows, engineByCode);
    // La plantilla incluye filas "generation", "engine" y "generation_engine".
    expect(plan.warnings.some((w) => w.message.includes("generation"))).toBe(true);
    expect(plan.errors).toEqual([]);
  });
});

describe("buildImportPlan casos límite", () => {
  it("reporta error si engine_code no existe", () => {
    const rows = [
      {
        entity: "known_issue", slug: "x", engine_code: "NO-EXISTE", field: "title", value: "Algo",
        notes: "severity=baja;confidence=anecdotica",
      },
    ];
    const plan = buildImportPlan(rows, new Map());
    expect(plan.errors.length).toBe(1);
    expect(plan.errors[0]?.message).toContain("NO-EXISTE");
  });

  it("reporta error si falta 'slug'", () => {
    const rows = [{ entity: "known_issue", field: "title", value: "Algo" }];
    const plan = buildImportPlan(rows, engineByCode);
    expect(plan.errors.length).toBe(1);
  });

  it("reporta error si source_url no es una URL válida", () => {
    const rows = [
      {
        entity: "known_issue", slug: "x", engine_code: "B47D20", field: "title", value: "Algo",
        source_url: "no-es-url", notes: "severity=baja;confidence=anecdotica",
      },
    ];
    const plan = buildImportPlan(rows, engineByCode);
    expect(plan.errors.some((e) => e.message.includes("URL"))).toBe(true);
  });

  it("da aviso y no error para una entity desconocida", () => {
    const rows = [{ entity: "modelo-raro", slug: "x" }];
    const plan = buildImportPlan(rows, engineByCode);
    expect(plan.errors).toEqual([]);
    expect(plan.warnings.length).toBe(1);
  });

  it("agrega dos fuentes distintas al mismo known_issue", () => {
    const rows: Array<Record<string, string>> = [
      {
        entity: "known_issue", slug: "x", engine_code: "B47D20", field: "title", value: "Algo",
        source_url: "https://a.example.com", source_title: "Fuente A",
        notes: "severity=baja;confidence=anecdotica",
      },
      {
        entity: "known_issue", slug: "x", engine_code: "B47D20",
        source_url: "https://b.example.com", source_title: "Fuente B",
      },
    ];
    const plan = buildImportPlan(rows, engineByCode);
    expect(plan.errors).toEqual([]);
    expect(plan.knownIssues[0]?.sourceIds.length).toBe(2);
    expect(plan.sources.length).toBe(2);
  });
});
