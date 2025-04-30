const {test, expect} =require('@playwright/test')

test('keyboard Events In Playwright', async ({ page }) => {

    await page.goto("https://www.bing.com/")

    //await page.locator("textarea[name='q']").type("being positive",{delay:200})

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("being positive!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for (let i = 0; i <'positive'.length; i++) 
    {
        await page.keyboard.press('ArrowLeft');
    }
    
    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

    await page.waitForTimeout(3000)


 /*   await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")

    await page.keyboard.press("Control+V")

    //await page.keyboard.press("Enter")

    await page.waitForTimeout(3000)

    */



})