const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("../test-login.json")))

test.describe('Multiple login using test data', function () {

  // Iterate over each user in testdata
  for (const data of testdata) {
    test.describe(`Login with users ${data.id}`, function () {
      test('Login To Application', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://practicetestautomation.com/practice-test-login');

        // Fill in the username from the test data file
        await page.locator("input[name='username']").fill(data.username, { delay: 200 });

        // Fill in the password from the test data file
        await page.locator("input[name='password']").fill(data.password, { delay: 200 });

      });
    });
  }
});