import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://connex.ai/uk/');
  await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
  await page.getByRole('heading', { name: 'Our AI Platform' }).click();
  await page.getByRole('link', { name: 'Athena ' }).click();
  await page.goto('https://connex.ai/uk/');
  await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
  await page.getByRole('link', { name: 'Omni ' }).click();
  await page.getByText('133%').click();
  await page.locator('svg').filter({ hasText: '133%' }).click();
  await page.getByText('Increase in workforce').click();
  await page.getByText('133% Increase in workforce').click();
  await page.getByText('% Average increase in sales').click();
  await page.getByText('99% Of our clients would').click();
  await page.getByText('36% Increase in customer').click();
  await page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1).click();
});