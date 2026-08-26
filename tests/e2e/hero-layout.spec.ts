import { expect, test } from "@playwright/test";

const wideViewports = [
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
];

for (const viewport of wideViewports) {
  test(`hero stays within the viewport and uses one compact surface at ${viewport.width}x${viewport.height}`, async ({
    page,
  }, testInfo) => {
    test.skip(!testInfo.project.name.includes("desktop"), "Desktop wide-viewport coverage");
    await page.setViewportSize(viewport);
    await page.goto("/");

    const layout = await page.locator("#home").evaluate((hero) => {
      const surfaces = Array.from(
        hero.querySelectorAll(".identity-surface")
      ) as HTMLElement[];
      const heroRect = hero.getBoundingClientRect();

      return {
        heroHeight: heroRect.height,
        viewportHeight: window.innerHeight,
        surfaceHeights: surfaces.map((surface) => surface.getBoundingClientRect().height),
      };
    });

    expect(layout.heroHeight).toBeLessThanOrEqual(layout.viewportHeight + 1);
    expect(layout.surfaceHeights).toHaveLength(1);
    expect(layout.surfaceHeights[0]).toBeLessThan(layout.viewportHeight * 0.4);
  });
}

test("hero keeps mobile controls visible without page-level horizontal overflow", async (
  { page },
  testInfo
) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile viewport coverage");
  await page.goto("/");

  const controls = page.locator("#home .identity-controls");
  await expect(controls).toBeVisible();
  await expect(page.getByRole("button", { name: "Pause carousel", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Show Foundation stage", exact: true })).toBeVisible();

  const layout = await page.locator("#home").evaluate((hero) => ({
    heroBottom: hero.getBoundingClientRect().bottom,
    controlsBottom: (hero.querySelector(".identity-controls") as HTMLElement).getBoundingClientRect()
      .bottom,
    hasPageOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));

  expect(layout.controlsBottom).toBeLessThanOrEqual(layout.heroBottom + 1);
  expect(layout.hasPageOverflow).toBe(false);
});

test("hero keeps controls inside a short desktop viewport", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("desktop"), "Desktop short-height coverage");
  await page.setViewportSize({ width: 1280, height: 640 });
  await page.goto("/");

  const layout = await page.locator("#home").evaluate((hero) => ({
    heroBottom: hero.getBoundingClientRect().bottom,
    controlsBottom: (hero.querySelector(".identity-controls") as HTMLElement).getBoundingClientRect()
      .bottom,
    hasPageOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  }));

  expect(layout.controlsBottom).toBeLessThanOrEqual(layout.heroBottom + 1);
  expect(layout.hasPageOverflow).toBe(false);
});
