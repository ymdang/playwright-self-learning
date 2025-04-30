const { test, expect } = require('@playwright/test')

test.skip("Working with Multiple Tabs", async ({browser})=>{

    const context=await browser.newContext()

    const page=await context.newPage();
    
 // Navigate to the target website
 await page.goto('https://the-internet.herokuapp.com/windows');
  
 // Wait for the link that will open a new window (modify this to your actual target element)
 const linkLocator = await page.locator('a[href="/windows/new"]');
 await linkLocator.waitFor();  // Wait for the link to be available
 
 // Click the link to open a new window
 await linkLocator.click();

  // Wait for the new page or tab to load (if it opens a new tab)
  const newPage = await page.context().waitForEvent('page'); // This listens for a new page
 
 // Verify that the new page loaded correctly
 console.log('https://the-internet.herokuapp.com/windows/new', newPage.url());  // Logs the URL of the new page
 
 // Wait for 3 seconds
 await newPage.waitForTimeout(3000)
 
});



test.skip("Working with Multiple Tabs 2", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),  // Wait for a new page (new tab/window)
    page.locator("(//a[contains(@href, 'facebook')])[1]").click() // Click the Facebook link
  
  ]);

  // Wait for the new page to load (optional)
  await newPage.waitForLoadState('domcontentloaded'); // Ensures the new page is loaded
  
  // Optionally wait for an element to be available before filling the email input
  await newPage.locator("(//input[@name='email'])[2]").waitFor({ state: 'visible' });

  // Fill in the email field on the new page
  await newPage.locator("(//input[@name='email'])[2]").fill("susie@gmail.com");

  // Optionally, wait for another 3 seconds after filling in the email
  await newPage.waitForTimeout(3000);

  // Optionally close the new page and original page
  await newPage.close();
  await page.close();
});


test('Handling Sign In with same tab', async ({ browser }) => {
  // Create a new browser context
  const context = await browser.newContext();
  
  // Create a new page
  const page = await context.newPage();

  // Navigate to the X.com login page 
  await page.goto('https://x.com/');

   // Wait for the "Create Account" button to be visible and click it
   await page.waitForSelector('text=Create Account'); 
   await page.getByText('Create Account').click();
 
   // Wait for the URL to change to the sign-up page
  await page.waitForURL('https://x.com/i/flow/signup'); 

  // Wait for the email input field to be visible on the sign-up page
  await page.waitForSelector('input[name="email"]'); 

  // Fill the email field with the desired email
  await page.locator('input[name="email"]').fill('susie@gmail.com'); 

  //  Wait a few seconds to ensure everything is filled correctly
  await page.waitForTimeout(3000);
 
   
 });