import { test, expect } from '@playwright/test';

// Define URLs for different product pages. I need to programatically generate this
const productPages = [
  'https://connex.ai/uk/athena-ai-agent/',
  'https://connex.ai/uk/athena-ai-guru/',
  'https://connex.ai/uk/athena-ai-voice/',
  'https://connex.ai/uk/athena-ai-analytics/',
  'https://connex.ai/uk/athena-ai-guru/#Real-Time-Coaching',
  'https://connex.ai/uk/athena-asr/',
  'https://connex.ai/uk/athena-ai-analytics/#Sentiment-Analysis',
  'https://connex.ai/uk/athena-ai-analytics/#Keyphrase-Analysis',
  'https://connex.ai/uk/athena-ai-analytics/#Entity-Recognition',
  'https://connex.ai/uk/athena-ai/#Information-you-control',
  'https://connex.ai/uk/athena-ai-analytics/#Topic-Based-Modelling',
  'https://connex.ai/uk/sms/',
  'https://connex.ai/uk/livechat/',
  'https://connex.ai/uk/whatsapp/',
  'https://connex.ai/uk/voice/',
  'https://connex.ai/uk/email/',
  'https://connex.ai/uk/dialler/',
  'https://connex.ai/uk/pci-dss/',
  'https://connex.ai/uk/omni-social-media/',
  'https://connex.ai/uk/flow/',
  'https://connex.ai/uk/assessment-centre/',
  'https://connex.ai/uk/assessment-centre/#Scorecards',
  'https://connex.ai/uk/assessment-centre/#Transcript-Search',
  'https://connex.ai/uk/wfm-calendar/',
  'https://connex.ai/uk/wfm-calendar/#Scheduler',
  'https://connex.ai/uk/wfm-calendar/#Staff-Management',
  'https://connex.ai/uk/gamification-shop/',
  'https://connex.ai/uk/pdf-builder/',
  'https://connex.ai/uk/pricing-matrix/',
  'https://connex.ai/uk/helpcentre-themes/',
  'https://connex.ai/uk/helpcentre-article-building/',
  'https://connex.ai/uk/integrationmarketplace/',
];

productPages.forEach((url) => {
  test.describe(`Testing benefits section on product page: ${url}`, () => {
    test(`Verify "Benefits of Product" section is visible on ${url}`, async ({ page }) => {
      await page.goto(url);
      const benefitsSection = page.locator('.container-fluid.benefits-section');
      await expect(benefitsSection).toBeVisible();
    });

    test(`Verify each benefit card has 3-5 cards with an icon, title, and description on ${url}`, async ({ page }) => {
      await page.goto(url);
      const benefitCards = page.locator('.col.benefit-card');
      const cardCount = await benefitCards.count();
      expect(cardCount).toBeGreaterThanOrEqual(3);
      expect(cardCount).toBeLessThanOrEqual(5);

      for (let i = 0; i < cardCount; i++) {
        const card = benefitCards.nth(i);

        // Check for icon
        const icon = card.locator('.benefit-icon img');
        await expect(icon).toBeVisible();
        await expect(icon).toHaveAttribute('alt', /.+/);

        // Check for title
        const title = card.locator('.benefit-title h3');
        await expect(title).toBeVisible();
        expect(await title.textContent()).toMatch(/.+/);

        // Check for description
        const description = card.locator('.benefit-content p span');
        await expect(description).toBeVisible();
        expect(await description.textContent()).toMatch(/.+/);
      }
    });

    test(`Verify benefit card icon size constraints on ${url}`, async ({ page }) => {
      await page.goto(url);
      const icons = page.locator('.benefit-card .benefit-icon img');
      const iconCount = await icons.count();
      for (let i = 0; i < iconCount; i++) {
        const iconSize = await icons.nth(i).boundingBox();
        if (iconSize) {
          expect(iconSize.width).toBeGreaterThanOrEqual(40);
          expect(iconSize.width).toBeLessThanOrEqual(60);
          expect(iconSize.height).toBeGreaterThanOrEqual(40);
          expect(iconSize.height).toBeLessThanOrEqual(60);
        }
      }
    });

    test(`Verify responsive layout for benefits section on ${url}`, async ({ page }) => {
      await page.goto(url);
      const benefitsSection = page.locator('.container-fluid.benefits-section');
      const screenSizes = [1200, 768, 375]; // Desktop, tablet, and mobile

      for (const width of screenSizes) {
        await page.setViewportSize({ width, height: 800 });
        await expect(benefitsSection).toHaveCSS('display', 'block');
      }
    });


    test(`Verify flex layout for rows in the benefits section on ${url}`, async ({ page }) => {
        await page.goto(url);
  
        // Verify the first row (.benefits-title) has display: flex
        const titleRow = page.locator('.benefits-section .row').first();
        await expect(titleRow).toHaveCSS('display', 'flex');
  
        // Verify the second row (benefit cards) has display: flex
        const cardsRow = page.locator('.benefits-section .row').nth(1);
        await expect(cardsRow).toHaveCSS('display', 'flex');
      });


      test(`Verify heading starts with " Benefits of" on ${url}`, async ({ page }) => {
        await page.goto(url);

        const heading = page.locator('.benefits-title h2');

        await expect(heading).toHaveText(/^.Benefits of /);
      });

  });
});
