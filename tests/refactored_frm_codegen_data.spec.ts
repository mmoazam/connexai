import { test, expect } from '@playwright/test';

test('ConnexAI Platform Navigation Test', async ({ page }) => {
    // Helper function to navigate and verify content
    async function navigateAndVerify(linkText, expectedContent) {
        await page.getByRole('link', { name: linkText }).click();
        await expect(page.locator('#page')).toContainText(expectedContent);
    }

    // Helper function to verify visibility of multiple elements
    async function verifyVisibleElements(selectors) {
        for (const selector of selectors) {
            await expect(page.getByRole('link', { name: selector })).toBeVisible();
        }
    }

    // Main navigation
    await page.goto('https://connex.ai/uk/');
    await expect(page.locator('#menuArea').getByText('AI Platform', { exact: true })).toBeVisible();
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();

    // Athena AI Platform
    await page.getByRole('link', { name: 'Athena ' }).click();
    const athenaElements = ['AI Agent', 'AI Analytics', 'Automatic Speech Recognition', 'AI Guru', 'AI Voice'];
    for (const element of athenaElements) {
        await expect(page.locator('#page')).toContainText(element);
    }

    // Verify Athena AI Platform sub-pages
    const athenaSubPages = [
        { link: 'AI Agent Coherent AI-driven', content: 'Benefits of AI Agent' },
        { link: 'AI Analytics Dig deeper into', content: 'Benefits of AI Analytics' },
        { link: 'Automatic Speech Recognition', content: 'Benefits of Automatic Speech Recognition' },
        { link: 'AI Guru Real-time intelligent', content: 'Benefits of AI Guru' },
        { link: 'AI Voice Empower your brand', content: 'Benefits of AI Voice' }
    ];

    for (const subPage of athenaSubPages) {
        await page.goto('https://connex.ai/uk/athena-ai/');
        await navigateAndVerify(subPage.link, subPage.content);
    }

    // Omni Platform
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Omni ' }).click();

    const omniElements = [
        'SMS Support straight to your', 'Voice Organised and', 'Live Chat Prompt website',
        'PCI DSS Secure and trusted', 'Athena Conversations Automate', 'WhatsApp Contact over 2',
        'Email Keep responses neat and', 'Dialler Next level features', 'Flow Click-and-drop tool for',
        'Social Media Connect with'
    ];
    await verifyVisibleElements(omniElements);

    // Verify Omni Platform sub-pages
    const omniSubPages = [
        { link: 'SMS Support straight to your', content: 'Benefits of SMS' },
        { link: 'Voice Organised and', content: 'Benefits of Inbound Voice' },
        { link: 'Live Chat Prompt website', content: 'Benefits of Live Chat' },
        { link: 'PCI DSS Secure and trusted', content: 'Social Media' },
        { link: 'Social Media Connect with', content: 'Omni | Social Media' },
        { link: 'Athena Conversations Automate', content: 'Benefits of AI Agent' },
        { link: 'WhatsApp Contact over 2', content: 'Benefits of WhatsApp' },
        { link: 'Email Keep responses neat and', content: 'Benefits of Email' },
        { link: 'Dialler Next level features', content: 'Benefits of Dialler' },
        { link: 'Flow Click-and-drop tool for', content: 'Benefits of Flow' }
    ];

    for (const subPage of omniSubPages) {
        await page.goto('https://connex.ai/uk/omnichannel/');
        await navigateAndVerify(subPage.link, subPage.content);
    }

});
