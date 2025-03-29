const { test, expect } = require('@playwright/test');
const { error } = require('console');

test('Verify Error Message', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login')

  // Fill in the username
  await page.locator("input[name='username']").type("student")

  // Fill in the wrong password
  await page.locator("input[name='password']").type("Password12453")

  // Click the submit button
  await page.locator('//button[@class="btn"]').click()

  // Wait for the error message to appear and gt the text content of the error message
  const errorMessage = await page.locator('.show').textContent()

  // Log the error message
  console.log("Error message is: "+errorMessage);

  // Assert that the error message includes the word "invalid"
  expect(errorMessage.includes("invalid")).toBeTruthy()

  // Assert that the error message matches the exact string
  expect(errorMessage==="Your password is invalid!").toBeTruthy()

});
