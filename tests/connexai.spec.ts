import { test, expect } from '@playwright/test';

test('home page title should be "ConnexAI - UK"', async ({ page }) => {
  await page.goto('https://connex.ai/uk/');
  await expect(page).toHaveTitle(/ConnexAI - UK/);
})