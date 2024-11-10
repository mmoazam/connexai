import { test, expect } from '@playwright/test';

test.describe('Verify Athena Products in Left SubMenu', () => {
  const athena_products = [
    'Athena', 'Omni', 'Quality', 'Workforce', 
    'Gamify', 'Form', 'Knowledge', 'Marketplace',
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto('https://connex.ai/uk/');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
  });

  test('Each Athena product is displayed in the left subMenu', async ({ page }) => {
    const leftSubMenu = page.locator('.leftSubMenu .subMenuList');

    for (const product of athena_products) {
      const productLocator = leftSubMenu.locator(`.subMenuItem:has-text("${product}") .proxima-semi`);
      await productLocator.scrollIntoViewIfNeeded();

      await expect(productLocator).toBeVisible();
      await expect(productLocator).toHaveText(product);
    }
  });
});
