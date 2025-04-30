const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/login-page'); // Path to LoginPage
const HomePage = require('./pages/homepage');  // Path to HomePage

test('Login To Application Using POM', async ({ page }) => {
    // Navigate to the login page
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Create an instance of LoginPage
    const loginPage = new LoginPage(page);

    // Use the loginToApplication method to log in
    await loginPage.loginToApplication();

    // Create an instance of HomePage to access the logout functionality
    const homepage = new HomePage(page);

    console.log("Verifying Manage option...");
    await homepage.verifyManageOption();
  
    // Log out from the application
    await homepage.logoutFromApplication();

    await loginPage.VerifySignIn();
    
});
