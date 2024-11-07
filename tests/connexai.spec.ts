import { test, expect } from '@playwright/test';

test('home page title should be "ConnexAI - UK"', async ({ page }) => {
  await page.goto('https://connex.ai/uk/');
  await expect(page).toHaveTitle(/ConnexAI - UK/);
})

test('clicking AI Platform dropdown link should take you to the AI platform page', async ({ page }) => {
  await page.goto('https://connex.ai/uk/');
  await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
  await page.getByRole('heading', { name: 'Our AI Platform' }).click(); 
})