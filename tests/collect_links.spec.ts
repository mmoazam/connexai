import { test, expect, Page } from '@playwright/test';

/**
 * Collect href links from each innerSubMenu in rightSubMenu. I will turn this into a function later
 * Used to provide the array for benefits test.
 */

test.describe('Verify Athena Products in Left SubMenu', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://connex.ai/uk/');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
  });


  test('Collect href links from each innerSubMenu in rightSubMenu', async ({ page }) => {
    // Locate the right submenu container
    const rightSubMenu = page.locator('.rightSubMenu ');
    const allHrefLinks: string[] = [];

    // Find each inner submenu container using a single locator
    const innerSubMenus = rightSubMenu.locator('[id^="innerSubMenu68738"]');

    // Iterate through each inner submenu directly
    for (let i = 0; i < await innerSubMenus.count(); i++) {
      const innerSubMenu = innerSubMenus.nth(i);

      // Collect all links inside the current inner submenu
      const links = innerSubMenu.locator('a');

      for (let j = 0; j < await links.count(); j++) {
        const href = await links.nth(j).getAttribute('href');
        if (href) {
          allHrefLinks.push(href);
        }
      }
    }

    // Log all collected href links
    console.log('Collected href links from rightSubMenu:', allHrefLinks);
  });

}); // end of describe

