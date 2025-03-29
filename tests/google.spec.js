const {test, expect} =require('@playwright/test')

test("Verify Application Title",async function({page}){

   await page.goto("http://www.google.com")

   const url=await page.url()

   console.log("Ttitle is "+url)

   const title=await page.title()

   console.log("Ttitle is "+title)

   await expect(page).toHaveTitle("Google")

})