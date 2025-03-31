const {test, expect} =require('@playwright/test')

test.skip('Verify file upload', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./upload/smile.jpg");

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")


});


test('Verify file upload multiple', async ({ page }) => {

// Go to the imghippo website
await page.goto("https://postimages.org/");

// Locate the file input element for uploading files
const fileInput = await page.$('input[type="file"]');

// Set the files to upload (adjust with the actual file paths on your system)
await fileInput.setInputFiles(['./upload/smile.jpg', './upload/yourself.jpg']); // Update paths accordingly

// Wait for the file input to process the files
await page.waitForTimeout(3000);

// Wait for the "Upload completed!" text to appear after the upload is finished
const uploadCompleteText = page.locator('text=Upload completed!'); 
await uploadCompleteText.waitFor({ state: 'visible', timeout: 30000 });


});

