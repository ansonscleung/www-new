import { expect, test, type Page } from "@playwright/test";
import { quotes } from "../../src/data/quotes";
import { quoteIndexForDate } from "../../src/utils/quote-of-day";

const sectionOrder = ["home", "journey", "current", "contact"];

const collectRuntimeErrors = (page: Page) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
};

test("homepage presents the working-systems narrative and bilingual quote", async ({
  page,
}) => {
  const errors = collectRuntimeErrors(page);
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeVisible();
  await expect(page.getByText("From intent to working systems.")).toBeVisible();
  await expect(page.locator("#home").getByRole("link", { name: /My experience/ })).toBeVisible();
  await expect.poll(() => page.locator("main > section").evaluateAll(nodes => nodes.map(n => n.id))).toEqual(sectionOrder);
  await expect(page.locator("#shoalter")).toContainText("February 2023–August 2026");
  await expect(page.locator("#shoalter")).toContainText("October 2025");
  await expect(page.locator("#itinni")).toContainText("December 2019–December 2021");
  await expect(page.locator("#journey-aalto")).toContainText("postgraduate");
  const englishQuote = page.locator(".quote-en");
  const chineseQuote = page.locator('.quote-zh[lang="zh-Hant"]');
  await expect(englishQuote).toBeVisible();
  await expect(chineseQuote).toBeVisible();
  await expect(page.locator(".quote-attribution p")).toContainText("·");
  await expect(page.locator(".quote-attribution cite")).toContainText("·");

  // Wait for the date-based client selection, rather than capturing the SSR fallback.
  await expect(englishQuote).toHaveText("“" + quotes[quoteIndexForDate(new Date(), quotes.length)].text.en + "”");
  const firstQuote = await englishQuote.textContent();
  await page.getByRole("button", { name: "Another quote" }).click();
  await expect(englishQuote).not.toHaveText(firstQuote ?? "");

  const buttonRadii = await page.locator(".button").evaluateAll((buttons) =>
    buttons.map((button) => getComputedStyle(button).borderTopLeftRadius)
  );
  expect(new Set(buttonRadii).size).toBe(1);

  expect(await page.locator("#contact").count()).toBe(1);
  expect(errors).toEqual([]);
});

test("Travel Planner opens as a private work-in-progress case study", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto("/work/travel-planner/");

  await expect(page.getByRole("heading", { level: 1, name: "Travel Planner" })).toBeVisible();
  await expect(page.getByText("Work in progress")).toBeVisible();
  await expect(page.getByText(/Private development build/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "From constraints to validation" })).toBeVisible();
  await expect(page.locator(".travel-case__flow > li")).toHaveCount(5);
  await expect(page.getByRole("link", { name: /Back to explorations/ })).toHaveAttribute(
    "href",
    "/#explorations"
  );
  expect(errors).toEqual([]);
});

test("mobile navigation reaches sections without horizontal overflow", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile viewport coverage");
  const errors = collectRuntimeErrors(page);
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Toggle navigation menu" });
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "Now", exact: true }).click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#now$/);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );
  expect(hasHorizontalOverflow).toBe(false);
  expect(errors).toEqual([]);
});

test("dark and reduced-motion preferences keep the hero usable", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.includes("desktop"), "Desktop preference coverage");
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  const errors = collectRuntimeErrors(page);
  await page.goto("/");

  const hero = page.locator("#home");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(hero).toBeVisible();
  await expect(hero.getByRole("link", { name: /My experience/ })).toBeVisible();
  await expect(hero.locator("figure")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Pause carousel" })).toHaveCount(0);
  await expect(page.locator(".quote-en")).toBeVisible();
  expect(errors).toEqual([]);
});

test("not-found page uses the portfolio navigation and theme control", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto("/404/");

  await expect(page.getByRole("heading", { level: 1, name: "Page not found." })).toBeVisible();
  await expect(page.getByRole("group", { name: "Colour theme" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to the homepage" })).toHaveAttribute(
    "href",
    "/"
  );
  expect(errors).toEqual([]);
});

test("theme control follows the system and remembers forced choices", async ({
  page,
}, testInfo) => {
  test.skip(!testInfo.project.name.includes("desktop"), "Desktop theme coverage");
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  const themeControl = page.getByRole("group", { name: "Colour theme" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(themeControl.getByRole("button", { name: "System" })).toHaveAttribute(
    "aria-pressed",
    "true"
  );

  await themeControl.getByRole("button", { name: "Light" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(themeControl.getByRole("button", { name: "Light" })).toHaveAttribute(
    "aria-pressed",
    "true"
  );
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await themeControl.getByRole("button", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await themeControl.getByRole("button", { name: "System" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
