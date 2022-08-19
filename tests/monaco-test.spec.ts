import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto('https://microsoft.github.io/monaco-editor/playground.html')
  await page.click('.inputarea')
});
