const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("../test-data.json")))

test.use({viewport:{width: 1500, height: 864}})

test('Valid Login', async function({page}){
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login')

  // maximise the screen width
 console.log (await page.viewportSize().width)

  // maximise the screen height
  console.log (await page.viewportSize().height)

  // Fill in the username from the test data file
  await page.locator("input[name='username']").fill(testdata.username, { delay: 200 });

  // Fill in the password from the test data file (assuming you also want to fill in the password)
  await page.locator("input[name='password']").fill(testdata.password, { delay: 200 });


  
//
  // Fill in the username
  //await page.locator("input[name='username']").type("student",{delay:200})

  // Fill in the password
 // await page.locator("input[name='password']").type("Password123",{delay:100})

  // Click the submit button
 // await page.locator('//button[@class="btn"]').click()

  // Wait for 4 seconds
 // await page.waitForTimeout(4000)

  // Assert the URL contains 'successfully'
 // await expect(page).toHaveURL(/successfully/);

  // Click the logout button
 // await page.getByText("Log out").click()

  // Wait for 3 seconds
//  await page.waitForTimeout(3000)

  // Assert the URL contains 'login'
 // await expect(page).toHaveURL[/-login/]
  


});
