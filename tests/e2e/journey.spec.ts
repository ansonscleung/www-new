import { expect, test } from "@playwright/test";
const ids = ["cuhk-study", "journey-cuhk", "journey-hkust", "journey-aalto", "protiviti"];
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
  await page.locator("#home").getByRole("link",{name:/Shoalter/}).click();
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
  await expect(page.locator("#journey-hkust h3")).toBeInViewport();
  await page.reload();
  await expect(page.locator("#journey-hkust h3")).toBeInViewport();
  await page.goto("/#journey-aalto");
  await expect(page.locator("#journey-aalto h3")).toBeInViewport();
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
  await page.locator("#home").getByRole("link",{name:/itinni/}).click();
  // The native anchor scroll is smooth: wait for its destination after font layout settles.
  await expect.poll(() => page.locator("#itinni").evaluate(entry =>
    Math.abs(entry.getBoundingClientRect().top - parseFloat(getComputedStyle(entry).scrollMarginTop))
  )).toBeLessThan(1);
  await expect(page.locator("#itinni h3")).toBeInViewport();
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
    await expect(page.locator("#journey-aalto h3")).toBeInViewport();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
    await expect(page.locator("#journey article")).toHaveCount(5);
  }
});

test("one project trail shows progression without scattering cases across background and Now", async ({page})=>{
  await page.goto("/#selected-work");
  const projectIds=["beginnings","musiccompare","itinni","shoalter","travel-planner"];
  expect(await page.locator("#selected-work article").evaluateAll(nodes=>nodes.map(n=>n.id))).toEqual(projectIds);
  const index=page.getByRole("navigation",{name:"Project trail"});
  await expect(index.getByRole("link")).toHaveCount(5);
  await index.getByRole("link",{name:"MusicCompare",exact:true}).click();
  await expect(page).toHaveURL(/#musiccompare$/);
  await expect(page.locator("#musiccompare h3")).toBeInViewport();
  await expect(page.locator("#journey")).not.toContainText("MusicCompare");
  await expect(page.locator("#now")).not.toContainText("private development");
  await page.locator("#now").getByRole("link",{name:/current Travel Planner/}).click();
  await expect(page).toHaveURL(/#travel-planner$/);
  await expect(page.locator("#travel-planner h3")).toBeInViewport();
});
