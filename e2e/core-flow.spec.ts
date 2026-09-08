import { test, expect } from "@playwright/test";

test("home → buscar → ficha de generación → ficha de motor → calculadora", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Conoce el coche");

  // Buscar
  const search = page.getByRole("combobox").first();
  await search.fill("bmw 320d 2020");
  await page.getByRole("button", { name: "Buscar" }).first().click();

  await expect(page).toHaveURL(/\/buscar\?q=/);
  await page.getByRole("link", { name: /BMW Serie 3 G20/ }).first().click();

  // Ficha de generación
  await expect(page).toHaveURL("/coches/bmw/serie-3/g20");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("BMW Serie 3 G20");
  await expect(page.getByRole("heading", { name: "Antes de comprar" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Averías y puntos a revisar" })).toBeVisible();

  // A la ficha de motor
  await page.getByRole("link", { name: "B47D20" }).first().click();
  await expect(page).toHaveURL("/motores/b47d20");
  await expect(page.getByRole("heading", { name: "Coches que montan este motor" })).toBeVisible();

  // Calculadora
  await page.goto("/calculadoras/combustible");
  await page.getByLabel("Kilómetros al año").fill("20000");
  await expect(page.getByText("Coste anual de combustible")).toBeVisible();
});

test("metadatos: canonical presente y buscador con noindex", async ({ page }) => {
  await page.goto("/coches/bmw/serie-3/g20");
  const canonical = page.locator('link[rel="canonical"]');
  await expect(canonical).toHaveAttribute("href", /\/coches\/bmw\/serie-3\/g20$/);
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);

  await page.goto("/buscar?q=golf");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("admin no está indexado y no ofrece escritura en el MVP", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.getByRole("heading", { name: "Consola editorial" })).toBeVisible();
});

test("sitemap solo contiene contenido publicado y no la búsqueda", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.ok()).toBeTruthy();
  const xml = await res.text();
  expect(xml).toContain("/coches/bmw/serie-3/g20");
  expect(xml).not.toContain("/buscar");
  expect(xml).not.toContain("/comparar/libre");
  expect(xml).not.toContain("/admin");
});
