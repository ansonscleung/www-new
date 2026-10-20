import { expect, test, type Page } from "@playwright/test";

const ids = ["cuhk", "aalto", "hkust", "now"];

async function positionChapter(page: Page, index: number, fraction = 0.15) {
  await page.evaluate(({ index, fraction }) => {
    const track = document.querySelector(".journey-track")!;
    const header = document.querySelector(".refined-header")!.getBoundingClientRect().height;
    const height = innerHeight - header;
    scrollTo({ top: track.getBoundingClientRect().top + scrollY - header + (index + fraction) * height, behavior: "instant" });
  }, { index, fraction });
}

test("journey follows native scroll, fast jumps, reverse scroll and releases at the end", async ({ page }, info) => {
  await page.goto("/");
  const track = page.locator(".journey-track");
  if (info.project.name.includes("mobile")) {
    await expect(track).toHaveAttribute("data-enhanced", "false");
    for (const id of ids) {
      const chapter = page.locator("#journey-" + id);
      await chapter.scrollIntoViewIfNeeded();
      await expect(chapter.getByRole("heading")).toBeInViewport();
    }
    return;
  }
  await expect(track).toHaveAttribute("data-enhanced", "true");
  for (const index of [0, 1, 3, 2, 0]) {
    await positionChapter(page, index);
    await expect(track).toHaveAttribute("data-active-chapter", String(index));
    const geometry = await page.locator(".journey-stage").evaluate((stage) => ({
      top: stage.getBoundingClientRect().top,
      header: document.querySelector(".refined-header")!.getBoundingClientRect().height,
    }));
    expect(Math.abs(geometry.top - geometry.header)).toBeLessThan(2);
  }
  await positionChapter(page, 4, 0.5);
  const top = await page.locator(".journey-stage").evaluate((stage) => stage.getBoundingClientRect().top);
  expect(top).toBeLessThan(0);
});

test("chapter links, direct hashes, history and skip land in the right place", async ({ page }, info) => {
  await page.goto("/#journey-hkust");
  const track = page.locator(".journey-track");
  const desktop = !info.project.name.includes("mobile");
  if (desktop) await expect(track).toHaveAttribute("data-active-chapter", "2");
  else await expect(page.locator("#journey-hkust").getByRole("heading")).toBeInViewport();
  const chapters = page.getByRole("navigation", { name: "Journey chapters" });
  await chapters.getByRole("link", { name: /04 Now/ }).click();
  await expect(page).toHaveURL(/#journey-now$/);
  if (desktop) await expect(track).toHaveAttribute("data-active-chapter", "3");
  await page.reload();
  if (desktop) {
    await expect(track).toHaveAttribute("data-active-chapter", "3");
    await expect.poll(() => page.locator(".journey-stage").evaluate((stage) =>
      Math.abs(stage.getBoundingClientRect().top - document.querySelector(".refined-header")!.getBoundingClientRect().height)
    )).toBeLessThan(2);
  }
  await chapters.getByRole("link", { name: /01 CUHK/ }).click();
  await page.goBack();
  await expect(page).toHaveURL(/#journey-now$/);
  if (desktop) await expect(track).toHaveAttribute("data-active-chapter", "3");
  await chapters.getByRole("link", { name: /Skip journey/ }).click();
  await expect(page).toHaveURL(/#explorations$/);
  await expect(page.locator("#explorations").getByRole("heading", { name: "Explorations & personal work" })).toBeInViewport();
  await page.goto("/#education");
  if (desktop) await expect(track).toHaveAttribute("data-active-chapter", "0");
  for (const id of ["experience", "labs", "quote"]) {
    await page.goto("/#" + id);
    await expect(page.locator("#" + id)).toHaveCount(1);
  }
});

test("small and short viewports and reduced motion keep all four chapters readable", async ({ page }) => {
  await page.goto("/");
  for (const viewport of [
    { width: 320, height: 800 }, { width: 390, height: 844 },
    { width: 768, height: 900 }, { width: 844, height: 390 },
    { width: 1440, height: 600 }, { width: 720, height: 450 },
  ]) {
    await page.setViewportSize(viewport);
    await expect(page.locator(".journey-track")).toHaveAttribute("data-enhanced", "false");
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    const positions = await page.locator(".journey-chapter").evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().top));
    expect(positions.every((top, index) => !index || top > positions[index - 1])).toBe(true);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "dark" });
  await expect(page.locator(".journey-track")).toHaveAttribute("data-enhanced", "false");
  await expect(page.locator("#journey-hkust")).toContainText("photographer arranged by the department");
  await page.locator("#journey-now").scrollIntoViewIfNeeded();
  await expect(page.locator("#journey-now").getByRole("heading")).toBeInViewport();
});

test("server-rendered story and navigation work with JavaScript disabled", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(baseURL + "/#journey-hkust");
  await expect(page.locator(".journey-track")).toHaveAttribute("data-enhanced", "false");
  await expect(page.locator("#journey-hkust").getByRole("heading")).toBeInViewport();
  await expect(page.locator("#journey-cuhk")).toContainText("BSc Computer Science");
  await expect(page.locator("#journey-aalto")).toContainText("Exchange studies");
  await expect(page.locator("#journey-hkust")).toContainText("MSc Information Systems Management");
  await page.getByRole("link", { name: "Explorations", exact: true }).click();
  await expect(page).toHaveURL(/#explorations$/);
  await expect(page.locator("#explorations")).toContainText("Private prototype");
  await context.close();
});

test("desktop stage keeps every chapter inside the viewport across desktop sizes", async ({ page }) => {
  await page.goto("/");
  for (const viewport of [{ width: 1024, height: 700 }, { width: 1440, height: 900 }, { width: 1920, height: 1080 }]) {
    await page.setViewportSize(viewport);
    await expect(page.locator(".journey-track")).toHaveAttribute("data-enhanced", "true");
    for (let index = 0; index < ids.length; index++) {
      await positionChapter(page, index);
      await expect(page.locator(".journey-track")).toHaveAttribute("data-active-chapter", String(index));
      const bounds = await page.locator("#journey-" + ids[index] + " .journey-copy").evaluate((copy) => ({
        top: copy.getBoundingClientRect().top, bottom: copy.getBoundingClientRect().bottom,
        header: document.querySelector(".refined-header")!.getBoundingClientRect().height,
        color: getComputedStyle(copy.querySelector("p")!).color,
      }));
      expect(bounds.top).toBeGreaterThanOrEqual(bounds.header);
      expect(bounds.bottom).toBeLessThanOrEqual(viewport.height);
      expect(bounds.color).toBe("rgb(255, 255, 255)");
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
  }
});

test("keyboard can choose a chapter and skip to explorations", async ({ page }, info) => {
  await page.goto("/#journey");
  const nav = page.getByRole("navigation", { name: "Journey chapters" });
  await nav.getByRole("link", { name: /01 CUHK/ }).focus();
  await page.keyboard.press("Tab");
  await expect(nav.getByRole("link", { name: /02 Aalto/ })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#journey-aalto$/);
  if (!info.project.name.includes("mobile")) await expect(page.locator(".journey-track")).toHaveAttribute("data-active-chapter", "1");
  await nav.getByRole("link", { name: /Skip journey/ }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#explorations$/);
  await expect(page.getByRole("heading", { name: "Explorations & personal work" })).toBeInViewport();
});
