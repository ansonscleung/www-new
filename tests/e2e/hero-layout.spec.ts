import { expect, test } from "@playwright/test";
for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test("introduction and story stay readable at " + width + "px", async ({ page }) => {
    await page.setViewportSize({width, height: 900});
    await page.goto("/");
    await expect(page.getByRole("heading", {level:1, name:"Anson Leung"})).toBeVisible();
    await expect(page.locator("#home figure")).toHaveCount(0);
    await expect(page.locator(".identity-project-links a")).toHaveCount(2);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)).toBe(false);
    const layout = await page.locator("#itinni > .story-row").evaluate((entry) => ({
      columns: getComputedStyle(entry).gridTemplateColumns.split(" ").length,
      font: getComputedStyle(document.querySelector("h1")!).fontFamily,
    }));
    expect(layout.columns).toBe(width >= 900 ? 2 : 1);
    expect(layout.font).toContain("Geologica");
    const boxes = await page.locator(".page-shell").evaluateAll(nodes => nodes.map(node => {
      const rect=node.getBoundingClientRect(), style=getComputedStyle(node);
      return {left:rect.left+parseFloat(style.paddingLeft),right:rect.right-parseFloat(style.paddingRight)};
    }));
    for (const box of boxes) {
      expect(box.left).toBeCloseTo(boxes[0].left,0);
      expect(box.right).toBeCloseTo(boxes[0].right,0);
    }
    const brandLeft=await page.locator(".navbar-brand > .navbar-item").evaluate(e=>e.getBoundingClientRect().left);
    expect(brandLeft).toBeCloseTo(boxes[0].left,0);
    const rows=await page.locator(".story-row--illustrated").evaluateAll(nodes=>nodes.map(row=>{
      const text=row.querySelector(".story-content")!, photo=row.querySelector("figure")!;
      return {first:row.firstElementChild===text,text:text.getBoundingClientRect().toJSON(),photo:photo.getBoundingClientRect().toJSON()};
    }));
    for(const row of rows) {
      expect(row.first).toBe(true);
      if(width>=900) expect(row.text.right).toBeLessThan(row.photo.left);
      else expect(row.text.bottom).toBeLessThanOrEqual(row.photo.top);
    }

  });
}
