import { expect, test } from "@playwright/test";

const viewports = [
  { width: 390, height: 844 },
  { width: 820, height: 900 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

for (const viewport of [...viewports, { width: 320, height: 800 }]) {
  test(`working-systems hero is readable without overflow at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeVisible();
    await expect(page.getByText("From intent to working systems.")).toBeVisible();
    await expect(page.getByRole("link", { name: "Explore selected work" })).toBeVisible();
    await expect(page.getByRole("figure", { name: /four photographs from my journey/i })).toBeVisible();

    const layout = await page.locator("#home").evaluate((hero) => ({
      heroWidth: hero.getBoundingClientRect().width,
      viewportWidth: window.innerWidth,
      hasPageOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }));

    expect(layout.heroWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.hasPageOverflow).toBe(false);
    await expect(page.getByRole("button", { name: /pause carousel/i })).toHaveCount(0);
  });
}

test("hero photographs form a responsive chapter index", async ({ page }) => {
  await page.goto("/");
  const links = page.locator(".identity-memories li > a");
  await expect(links).toHaveCount(4);
  const layout = await page.locator(".identity-memories ol").evaluate((strip) => ({
    columns: getComputedStyle(strip).gridTemplateColumns.split(" ").length,
    expected: innerWidth > 800 ? 4 : 2,
    transforms: Array.from(strip.querySelectorAll("picture img")).map((img) => getComputedStyle(img).transform),
  }));
  expect(layout.columns).toBe(layout.expected);
  expect(layout.transforms.every((value) => value === "none" || value === "matrix(1, 0, 0, 1, 0, 0)")).toBe(true);
  await links.last().click();
  await expect(page).toHaveURL(/#journey-now$/);
  const track = page.locator(".journey-track");
  if (await track.getAttribute("data-enhanced") === "true") {
    await expect(page.locator("#journey-now")).toHaveAttribute("data-active", "true");
  } else {
    await expect(page.locator("#journey-now h3")).toBeInViewport();
  }
});
