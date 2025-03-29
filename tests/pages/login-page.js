const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.header = "//h2[@class='header' and normalize-space(text())='Sign In']";
        this.username = "#email1";
        this.password = "//input[@placeholder='Enter Password']";
        this.loginbutton = "//button[text()='Sign in']";
    }

    // Method to login to the application
    async loginToApplication() 
    {
        await this.page.fill(this.username, "admin@email.com");  // Fill in the username
        await this.page.fill(this.password, "admin@123");        // Fill in the password
        await this.page.click(this.loginbutton);                 // Click on the login button
    }

    async VerifySignIn()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports = LoginPage;
