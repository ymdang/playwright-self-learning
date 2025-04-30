const { test, expect } = require('@playwright/test');

test('Verify Checkbox Count on Signup Page', async ({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByText("New User? Signup").click()

    await page.waitForLoadState('networkidle')

    const count=await page.locator("//input[@type='checkbox']").count()

        expect (count).toBe(8)

});