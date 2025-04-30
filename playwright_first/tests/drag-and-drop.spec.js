import { test, expect } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");

    // Drag the small box into the large box
    await page.locator("#small-box").dragTo(page.locator(".large-box"));

    // Pause for inspection
    await page.pause();
});

test('manual test', async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    await page.locator("#small-box").hover();
    await page.mouse.down();
    await page.locator("#large-box").hover();
    await page.mouse.up();
});