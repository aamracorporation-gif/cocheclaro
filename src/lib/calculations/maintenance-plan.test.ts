import { describe, it, expect } from "vitest";
import { buildMaintenancePlan, DUE_SOON_KM } from "./maintenance-plan";

describe("buildMaintenancePlan", () => {
  it("calcula la próxima ocurrencia y los km restantes", () => {
    const [oil] = buildMaintenancePlan(92000, [
      { id: "oil", item: "Aceite", intervalKm: 15000 },
    ]);
    // ceil(92001 / 15000) = 7 -> 105000
    expect(oil?.nextAtKm).toBe(105000);
    expect(oil?.kmRemaining).toBe(13000);
    expect(oil?.dueSoon).toBe(false);
  });

  it("marca dueSoon cuando falta poco", () => {
    const [t] = buildMaintenancePlan(29200, [
      { id: "air", item: "Filtro de aire", intervalKm: 30000 },
    ]);
    expect(t?.kmRemaining).toBe(800);
    expect(t?.dueSoon).toBe(true);
    expect(800).toBeLessThanOrEqual(DUE_SOON_KM);
  });

  it("no afirma nada si la tarea no tiene intervalo en km", () => {
    const [t] = buildMaintenancePlan(50000, [{ id: "x", item: "Sin intervalo" }]);
    expect(t?.hasKmInterval).toBe(false);
    expect(t?.nextAtKm).toBeUndefined();
    expect(t?.dueSoon).toBe(false);
  });

  it("ordena por km restantes, dejando al final las tareas sin dato", () => {
    const plan = buildMaintenancePlan(10000, [
      { id: "far", item: "Distribución", intervalKm: 120000 },
      { id: "soon", item: "Aceite", intervalKm: 15000 },
      { id: "none", item: "Sin intervalo" },
    ]);
    expect(plan.map((t) => t.id)).toEqual(["soon", "far", "none"]);
  });
});
