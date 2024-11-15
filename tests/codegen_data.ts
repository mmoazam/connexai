import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://connex.ai/uk/');
    await expect(page.locator('#menuArea').getByText('AI Platform', { exact: true })).toBeVisible();
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Athena ' }).click();
    await expect(page.locator('#page')).toContainText('AI Agent');
    await expect(page.locator('#page')).toContainText('AI Analytics');
    await expect(page.locator('#page')).toContainText('Automatic Speech Recognition');
    await expect(page.locator('#page')).toContainText('AI Guru');
    await expect(page.locator('#page')).toContainText('AI Voice');
    await page.getByRole('link', { name: 'AI Agent Coherent AI-driven' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of AI Agent');
    await page.goto('https://connex.ai/uk/athena-ai/');
    await page.getByRole('link', { name: 'AI Analytics Dig deeper into' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of AI Analytics');
    await page.goto('https://connex.ai/uk/athena-ai/');
    await page.getByRole('link', { name: 'Automatic Speech Recognition' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Automatic Speech Recognition');
    await page.goto('https://connex.ai/uk/athena-ai/');
    await page.getByRole('link', { name: 'AI Guru Real-time intelligent' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of AI Guru');
    await page.goto('https://connex.ai/uk/athena-ai/');
    await page.getByRole('link', { name: 'AI Voice Empower your brand' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of AI Voice');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Omni ' }).click();
    await expect(page.getByRole('link', { name: 'SMS Support straight to your' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Voice Organised and' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live Chat Prompt website' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'PCI DSS Secure and trusted' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Athena Conversations Automate' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'WhatsApp Contact over 2' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email Keep responses neat and' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dialler Next level features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Flow Click-and-drop tool for' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Social Media Connect with' })).toBeVisible();
    await page.getByRole('link', { name: 'SMS Support straight to your' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of SMS');
    await page.goto('https://connex.ai/uk/omnichannel/');
    await page.getByRole('link', { name: 'Voice Organised and' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Inbound Voice');
    await page.goto('https://connex.ai/uk/omnichannel/');
    await page.getByRole('link', { name: 'Live Chat Prompt website' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Live Chat');
    await page.goto('https://connex.ai/uk/omnichannel/');
    await page.getByRole('link', { name: 'PCI DSS Secure and trusted' }).click();
    await expect(page.locator('#page')).toContainText('Social Media');
    await page.getByRole('link', { name: 'Social Media Connect with' }).click();
    await expect(page.locator('#page')).toContainText('Omni | Social Media');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Athena Conversations Automate' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of AI Agent');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'WhatsApp Contact over 2' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of WhatsApp');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Email Keep responses neat and' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Email');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Dialler Next level features' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Dialler');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Flow Click-and-drop tool for' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Flow');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Flow Click-and-drop tool for' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Flow');
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.getByRole('link', { name: 'Omni Overview All channels -' }).click();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    // await page.goto('https://connex.ai/uk/pci-dss/');
    // await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    // await page.getByRole('link', { name: 'Quality ' }).click();
    // await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    // await page.goto('https://connex.ai/uk/pci-dss/');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Quality ' }).click();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await page.goto('https://connex.ai/uk/pci-dss/');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Quality ' }).click();
    await expect(page.getByRole('link', { name: 'Assessment Centre Complete' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Scorecards Mark interaction' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Transcript Search Review' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Athena Automate QM with speed' })).toBeVisible();
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Quality ' }).click();
    await page.getByRole('link', { name: 'Assessment Centre Complete' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Assessment Centre');
    await page.goto('https://connex.ai/uk/qualitymanagement/');
    await page.getByRole('link', { name: 'Scorecards Mark interaction' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Assessment Centre');
    await page.goto('https://connex.ai/uk/qualitymanagement/');
    await page.getByRole('link', { name: 'Scorecards Mark interaction' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Assessment Centre');
    await page.goto('https://connex.ai/uk/qualitymanagement/');
    await page.getByRole('link', { name: 'Transcript Search Review' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Assessment Centre');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Workforce ' }).click();
    await expect(page.getByRole('heading', { name: 'Workforce', exact: true })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Calendar Manage team training' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forecasting Plan ahead for' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Schedule Plan team management' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Gamify Monitor and' })).toBeVisible();
    await page.getByRole('link', { name: 'Calendar Manage team training' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Calendar');
    await page.goto('https://connex.ai/uk/workforce-management/');
    await page.getByRole('link', { name: 'Forecasting Plan ahead for' }).click();
    await page.getByRole('link', { name: 'Forecasting Plan ahead for' }).click();
    await page.getByRole('link', { name: 'Schedule Plan team management' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Calendar');
    await page.goto('https://connex.ai/uk/workforce-management/');
    await page.getByRole('link', { name: 'Gamify Monitor and' }).click();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Gamify ' }).click();
    await expect(page.getByRole('heading', { name: 'Gamify', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Gamify Shop Inspire your' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Custom Game Events Set your' })).toBeVisible();
    await page.getByRole('link', { name: 'Gamify Shop Inspire your' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Shop');
    await page.goto('https://connex.ai/uk/gamification/');
    await page.getByRole('link', { name: 'Custom Game Events Set your' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Shop');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Form ' }).click();
    await expect(page.getByRole('heading', { name: 'Form', exact: true })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'PDF Builder A user-friendly' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing Matrix Product rules' })).toBeVisible();
    await page.getByRole('link', { name: 'PDF Builder A user-friendly' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of PDF Builder');
    await page.goto('https://connex.ai/uk/formbuilder/');
    await page.getByRole('link', { name: 'Pricing Matrix Product rules' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Pricing Matrix');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Knowledge ' }).click();
    await expect(page.locator('h3').filter({ hasText: 'Knowledge' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Themes Personalise to match' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Article Building Construct' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Knowledge Organise and' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Training Use guides as a' })).toBeVisible();
    await page.getByRole('link', { name: 'Themes Personalise to match' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Themes');
    await page.goto('https://connex.ai/uk/helpcentre/');
    await page.getByRole('link', { name: 'Article Building Construct' }).click();
    await expect(page.locator('#page')).toContainText('Benefits of Article Building');
    await page.goto('https://connex.ai/uk/helpcentre/');
    await page.getByRole('link', { name: 'Knowledge Organise and' }).click();
    await expect(page.locator('div').filter({ hasText: '% Increase in workforce productivity 60% Average increase in sales 99% Of our' }).nth(1)).toBeVisible();
    await page.goto('https://connex.ai/uk/pricing-matrix/');
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Knowledge ' }).click();
    await page.getByRole('link', { name: 'Training Use guides as a' }).click();
    await page.locator('#menuArea').getByText('AI Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'Marketplace ' }).click();
    await expect(page.getByRole('heading', { name: 'ConnexAI | Marketplace' })).toBeVisible();
    await expect(page.locator('#page')).toContainText('Benefits of Integrations');
});