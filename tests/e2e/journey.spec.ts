import { expect, test } from "@playwright/test";
const ids = ["hkoi", "hkage", "cuhk-study", "itinni", "journey-hkust", "protiviti", "shoalter"];
test("story is chronological, complete and naturally scrolling", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#journey article")).toHaveCount(7);
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
  await page.goto(baseURL! + "/#student-representation");
  await expect.poll(() => page.locator("#student-representation").evaluate(entry =>
    Math.abs(entry.getBoundingClientRect().top - parseFloat(getComputedStyle(entry).scrollMarginTop))
  )).toBeLessThan(1);
  await page.locator("#student-representation summary").click();
  await expect(page.locator("#student-representation details")).toHaveAttribute("open","");
  await expect(page.locator("#student-representation details")).toContainText("50th session (2020–2021): Appointed member for Morningside College, until 31 July 2020.");
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
    await expect(page.locator("#journey article")).toHaveCount(7);
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

test("images scroll naturally with their text instead of sticking", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.locator("#shoalter summary").click();
  const photo = page.locator("#shoalter > .story-row figure");
  expect(await photo.evaluate(e => getComputedStyle(e).position)).toBe("static");
  await photo.scrollIntoViewIfNeeded();
  const before = await photo.evaluate(e => ({top:e.getBoundingClientRect().top, scroll:scrollY}));
  await page.evaluate(y => scrollTo({top:y + 90,behavior:"instant"}),before.scroll);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeCloseTo(before.scroll + 90,0);
  // Measure document position as well as viewport motion, so native scroll completion is explicit.
  await expect.poll(() => photo.evaluate(e => e.getBoundingClientRect().top + scrollY)).toBeCloseTo(before.top + before.scroll,0);
});

test("photos stay static on desktop, mobile, short windows and reduced motion", async ({ page }) => {
  for (const [width,height,reduced] of [[1440,900,"no-preference"],[390,844,"no-preference"],[1440,600,"no-preference"],[1440,900,"reduce"]] as const) {
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

test("personal timeline retains early roles, overlaps and keyboard-accessible council terms", async ({page}) => {
  await page.goto("/#hkage");
  await expect(page.locator("#hkage h3")).toBeInViewport();
  await expect(page.locator("#hkage")).toContainText("July–December 2016");
  await expect(page.locator("#hkoi")).toContainText("HKOI 2014–2015");
  await expect(page.locator("#cuhk-study #stem-teaching")).toContainText("December 2016–June 2020");
  await expect(page.locator("#cuhk-study #cuacs")).toContainText("Publication Officer, 24th session");
  await expect(page.locator("#cuhk-study #psm")).toContainText("July 2020");
  await expect(page.locator(".story-compact figure")).toHaveCount(0);
  await expect(page.locator("#journey")).not.toContainText(/JA Company|Pascal|December 2013|Chief Technology Officer/);
  await page.goto("/#student-representation");
  const summary=page.locator("#student-representation summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#student-representation details")).toHaveAttribute("open","");
  await expect(page.locator("#student-representation details")).toContainText("April 2017–March 2018");
  await expect(page.locator("#student-representation details")).toContainText("50th session (2020–2021): Appointed member for Morningside College, until 31 July 2020.");
  await page.keyboard.press("Enter");
  await expect(page.locator("#student-representation details")).not.toHaveAttribute("open");
  await page.reload();
  await expect(page.locator("#student-representation h4")).toBeInViewport();
});
