import { expect, test, type Page } from "@playwright/test";

const sectionOrder = [
  "home",
  "capabilities",
  "impact",
  "selected-work",
  "experience",
  "labs",
  "education",
  "quote",
  "contact",
];

const collectRuntimeErrors = (page: Page) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
};

test("homepage presents the complete narrative and bilingual quote", async ({
  page,
}) => {
  const errors = collectRuntimeErrors(page);
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "Anson Leung" })).toBeVisible();
  await expect
    .poll(() => page.locator("main > section").evaluateAll((sections) => sections.map(({ id }) => id)))
    .toEqual(sectionOrder);

  const selectedWork = page.locator("#selected-work");
  await expect(selectedWork.getByText(/278,000\+ unique customers/i)).toBeVisible();
  await expect(selectedWork.getByText(/approximately 70,000 product items/i)).toBeVisible();
  await expect(
    selectedWork.getByRole("link", { name: /Unlimited Add-on — 2024 annual results/i })
  ).toHaveAttribute("target", "_blank");
  await expect(
    selectedWork.getByRole("link", { name: /3 Hr Mart — 2025 annual results/i })
  ).toHaveAttribute("target", "_blank");

  const englishQuote = page.locator(".quote-en");
  const chineseQuote = page.locator('.quote-zh[lang="zh-Hant"]');
  await expect(englishQuote).toBeVisible();
  await expect(chineseQuote).toBeVisible();
  await expect(page.locator(".quote-attribution p")).toContainText("·");
  await expect(page.locator(".quote-attribution cite")).toContainText("·");

  const firstQuote = await englishQuote.textContent();
  await page.getByRole("button", { name: "Another quote" }).click();
  await expect(englishQuote).not.toHaveText(firstQuote ?? "");

  expect(await page.locator("#contact").count()).toBe(1);
  expect(errors).toEqual([]);
});

test("Travel Planner opens as a complete case study", async ({ page }) => {
  const errors = collectRuntimeErrors(page);
  await page.goto("/work/travel-planner/");

  await expect(page.getByRole("heading", { level: 1, name: "Travel Planner" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "From constraints to validation" })).toBeVisible();
  await expect(page.locator(".travel-case__flow > li")).toHaveCount(5);
  await expect(page.getByRole("link", { name: /Back to selected work/ })).toHaveAttribute(
    "href",
    "/#selected-work"
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
  await page.getByRole("link", { name: "Labs", exact: true }).click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#labs$/);

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
  await expect(hero).toBeVisible();
  await expect(page.getByRole("button", { name: "Pause carousel" })).toBeVisible();
  await expect(page.locator(".quote-en")).toBeVisible();
  expect(errors).toEqual([]);
});
