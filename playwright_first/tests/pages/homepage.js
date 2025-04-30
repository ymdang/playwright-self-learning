const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.menu = "//img[@alt='menu']"; // Locator for the menu
        this.logoutoption = "//button[normalize-space()='Sign out']"; // Locator for the logout option
        this.manageoption = "//span[normalize-space()='Manage']"; // Locator for the 'Manage' option
    }

    async verifyManageOption() {
        // Wait for the "Manage" button to be visible with an increased timeout
        await expect(this.page.locator(this.manageoption)).toBeVisible({ timeout: 10000 });
    }

    async logoutFromApplication() {
        // Click on the menu
        await this.page.click(this.menu);

        // Click on the logout option
        await this.page.click(this.logoutoption);
    }
}

module.exports = HomePage;
