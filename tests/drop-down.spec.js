import { test, expect } from '@playwright/test';

test("Select Values From Dropdown", async function({page})
{
  // label is better option to use

  await page.goto('https://freelance-learn-automation.vercel.app/signup')

  await page.locator("#state").selectOption({label:"Goa"})

  await page.waitForTimeout(1000)
  
  await page.locator("#state").selectOption({value:"Maharashtra"})

  await page.waitForTimeout(2000)

  await page.locator("#state").selectOption({index:4})

  const value=await page.locator("#state").textContent()

  console.log("All dropdown values " + value );

  await expect(value.includes("Kerala")).toBeTruthy()

  let state=await page.$("#state")

  let allElements=await state.$$("option")

  let ddStatus=false

  for(let i=0; i<allElements.length;i++)

    {
      let element=allElements[i]

      let value=await element.textContent()

      console.log("Value from dropdown using for loop "+value);

      if(value.includes("Jharkhand"))

        {
          ddStatus=true
          break
        }
    }
   
  await expect(ddStatus).toBeTruthy()
  
  await page.locator("#hobbies").selectOption(['Playing','Swimming'])

  await page.waitForTimeout(3000)



})