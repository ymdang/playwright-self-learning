const { test, expect } = require('@playwright/test')

test.use({viewport:{width: 1500, height: 864}})

test('Handle Auto Suggestions', async function({page}){

  await page.goto('https://www.bing.com')

  await page.locator("textarea[name='q']").type("Funny Emoji",{delay:200})

  await page.waitForSelector("//li[@role='option']")

  await page.keyboard.press("ArrowDown")

  await page.waitForTimeout(1000)

  await page.keyboard.press("ArrowDown")

  await page.waitForTimeout(1000)

  await page.keyboard.press("ArrowDown")

  await page.waitForTimeout(2000)

  await page.keyboard.press("Enter")


})


test.only('Handle Auto Suggestions Two', async function({page}){

    await page.goto('https://www.bing.com')
  
    await page.locator("textarea[name='q']").type("Funny Emoji",{delay:200})
  
    await page.waitForSelector("//li[@role='option']")

    const elements=await page.$$("//li[@role='option']")

    for (let i=0;i<elements.length;i++)
    {
        const text=await elements[i].textContent()

        if(text.includes ('combos'))
        {
            await elements[i].click()
            break
        }
    }



  
  
    await page.keyboard.press("Enter")


})