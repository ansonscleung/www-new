import { expect, test } from "@playwright/test";
for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test("introduction and story stay readable at " + width + "px", async ({ page }) => {
    await page.setViewportSize({width, height: 900});
    await page.goto("/");
    await expect(page.getByRole("heading", {level:1, name:"Anson Leung"})).toBeVisible();
    await expect(page.locator("#home figure")).toHaveCount(0);
    await expect(page.locator(".identity-project-links a")).toHaveCount(3);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    const layout = await page.locator("#itinni").evaluate((entry) => ({
      columns: getComputedStyle(entry).gridTemplateColumns.split(" ").length,
      font: getComputedStyle(document.querySelector("h1")!).fontFamily,
    }));
    expect(layout.columns).toBe(width > 700 ? 2 : 1);
    expect(layout.font).toContain("Georgia");
  });
}
