import { expect, test } from "@playwright/test";
const ids = ["cuhk-study", "itinni", "journey-hkust", "protiviti", "shoalter"];
test("story is chronological, complete and naturally scrolling", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#journey article")).toHaveCount(5);
  expect(await page.locator("#journey article").evaluateAll(nodes => nodes.map(n => n.id))).toEqual(ids);
  await expect(page.locator("#itinni")).toContainText("December 2019–December 2021");
  await expect(page.locator("#journey-aalto")).toContainText("postgraduate");
  await expect(page.locator("#journey-aalto")).toContainText("April–June 2022");
  await expect(page.locator("main")).not.toContainText(/OOCL|GreenTomato|December 2022/);
  await expect(page.locator(".journey-stage")).toHaveCount(0);
  for (const id of ids) {
    const item=page.locator("#"+id);
    expect(await item.evaluate(e=>getComputedStyle(e).position)).toBe("relative");
  }
});
test("work links, keyboard disclosures and private case route work", async ({ page }) => {
  await page.goto("/");
  await page.goto("/#shoalter");
  await expect(page).toHaveURL(/#shoalter$/);
  const disclosure=page.locator("#shoalter details");
  const summary=disclosure.locator("summary");
  await expect(disclosure).not.toHaveAttribute("open");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(disclosure).toHaveAttribute("open","");
  await expect(disclosure.getByText(/Company context, separate/)).toBeVisible();
  await expect(disclosure.getByRole("link",{name:/2024 annual results/})).toHaveAttribute("target","_blank");
  await page.keyboard.press("Enter");
  await expect(disclosure).not.toHaveAttribute("open");
  await page.locator("#travel-planner").getByRole("link",{name:/Read the Travel Planner/}).click();
  await expect(page.getByRole("heading",{level:1,name:"Travel Planner"})).toBeVisible();
  await page.getByRole("link",{name:/Back to explorations/}).click();
  await expect(page).toHaveURL(/#explorations$/);
  await expect(page.locator("#travel-planner")).toContainText("private development");
});
test("old anchors resolve after direct navigation, reload and back", async ({ page }) => {
  await page.goto("/#journey-hkust");
  await expect(page.locator("#journey-hkust")).toBeInViewport();
  await page.reload();
  await expect(page.locator("#journey-hkust")).toBeInViewport();
  await page.goto("/#journey-aalto");
  await expect(page.locator("#journey-aalto")).toBeInViewport();
  await page.goBack();
  await expect(page).toHaveURL(/#journey-hkust$/);
  for(const id of ["education","experience","capabilities","impact","journey-now","labs","quote","explorations","travel-planner"]) {
    await page.goto("/#"+id);
    await expect(page.locator("#"+id)).toHaveCount(1);
    await expect.poll(()=>page.locator("#"+id).evaluate(e=>Math.abs(e.getBoundingClientRect().top)<innerHeight)).toBe(true);
  }
});
test("native disclosures and links work without JavaScript", async ({ browser, baseURL }) => {
  const context=await browser.newContext({javaScriptEnabled:false});
  const page=await context.newPage();
  await page.goto(baseURL!);
  await page.evaluate(() => document.fonts.ready);
  await page.goto(baseURL! + "/#itinni");
  // The native anchor scroll is smooth: wait for its destination after font layout settles.
  await expect.poll(() => page.locator("#itinni").evaluate(entry =>
    Math.abs(entry.getBoundingClientRect().top - parseFloat(getComputedStyle(entry).scrollMarginTop))
  )).toBeLessThan(1);
  await expect(page.locator("#itinni")).toBeInViewport();
  await page.locator("#itinni summary").click();
  await expect(page.locator("#itinni details")).toHaveAttribute("open","");
  await expect(page.locator("#itinni details")).toContainText("Elastic Beanstalk");
  await page.locator("#travel-planner").getByRole("link",{name:/Read the Travel Planner/}).click();
  await expect(page.getByRole("heading",{level:1,name:"Travel Planner"})).toBeVisible();
  await context.close();
});
test("short windows, reduced motion and zoom-equivalent layouts retain the story", async ({ page }) => {
  await page.emulateMedia({reducedMotion:"reduce"});
  for(const viewport of [{width:844,height:390},{width:1440,height:600},{width:720,height:450}]) {
    await page.setViewportSize(viewport);
    await page.goto("/#journey-aalto");
    await expect(page.locator("#journey-aalto")).toBeInViewport();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
    await expect(page.locator("#journey article")).toHaveCount(5);
  }
});

test("projects stay within their experience and the current prototype stays in Now", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#cuhk-study #musiccompare")).toHaveCount(1);
  await expect(page.locator("#journey-hkust #journey-aalto")).toHaveCount(1);
  await expect(page.locator("#now #travel-planner")).toHaveCount(1);
  await expect(page.locator("#beginnings")).toHaveCount(0);
  await expect(page.locator(".project-trail")).toHaveCount(0);
  await expect(page.locator("#musiccompare")).toContainText("course project");
  await expect(page.locator("#travel-planner")).toContainText("private development");
});

test("desktop images stick only inside their own row and release on leaving it", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("desktop"), "Desktop sticky coverage");
  await page.goto("/#shoalter");
  await page.locator("#shoalter summary").click();
  const row = page.locator("#shoalter > .story-row");
  const photo = row.locator("figure");
  const target = await row.evaluate(e => window.scrollY + e.getBoundingClientRect().top + 140);
  await page.evaluate(y => window.scrollTo({top: y, behavior:"instant"}), target);
  await expect.poll(() => photo.evaluate(e => Math.round(e.getBoundingClientRect().top))).toBe(112);
  await page.evaluate(y => window.scrollTo({top:y + 90,behavior:"instant"}), target);
  await expect.poll(() => photo.evaluate(e => Math.round(e.getBoundingClientRect().top))).toBe(112);
  await page.locator("#now").evaluate(e => e.scrollIntoView({block:"start",behavior:"instant"}));
  expect(await photo.evaluate(e => e.getBoundingClientRect().bottom)).toBeLessThan(112);
});

test("photos return to static flow on mobile, short windows and reduced motion", async ({ page }) => {
  for (const [width,height,reduced] of [[390,844,"no-preference"],[1440,600,"no-preference"],[1440,900,"reduce"]] as const) {
    await page.setViewportSize({width,height});
    await page.emulateMedia({reducedMotion:reduced});
    await page.goto("/#journey-hkust");
    expect(await page.locator(".story-photo--hkust").evaluate(e => getComputedStyle(e).position)).toBe("static");
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
  }
});

test("short chapters do not reserve empty scroll distance after their content", async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const unusedSpace = await page.locator(".story-row--illustrated").evaluateAll(rows =>
    rows.map(row => row.getBoundingClientRect().height -
      Math.max(...Array.from(row.children, child => child.getBoundingClientRect().height)))
  );
  // Allow the figure's 4px top margin, but no viewport-height spacer.
  for (const space of unusedSpace) expect(space).toBeLessThanOrEqual(5);
  const gap = await page.locator("#musiccompare").evaluate(part => {
    const previous = part.previousElementSibling!;
    return part.querySelector(".story-row")!.getBoundingClientRect().top - previous.getBoundingClientRect().bottom;
  });
  expect(gap).toBeLessThanOrEqual(33);
});
