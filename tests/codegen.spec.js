import { test, expect } from '@playwright/test';

test('Login Test Auto Generated by PW', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(2000)

  await page.locator('span').getByRole('img', {name: 'profile picture'}).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  
});