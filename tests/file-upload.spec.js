const {test, expect} =require('@playwright/test')

test('Verify file upload', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./upload/smile.jpg");

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")


})