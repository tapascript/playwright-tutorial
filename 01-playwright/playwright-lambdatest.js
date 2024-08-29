const { chromium } = require('playwright')
const { expect } = require('@playwright/test');
require('dotenv').config();

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Lambdatest Build',
      'name': 'Playwright Lambdatest Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const page = await browser.newPage()

  await page.goto('https://www.creowis.com')


  try {
    await expect(page).toHaveTitle(/CreoWis/);
    await page.getByRole('link', { name: 'Let’s Start Working' }).click();
    await page.getByText('Product/Application').click();
    await page.getByPlaceholder('Your Name').click();
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Name').press('Tab');
    await page.getByPlaceholder('Your Email').fill('test@email.com');
    await page.getByPlaceholder('Your Email').press('Tab');
    await page.getByPlaceholder('Describe your idea / project').fill('Website Building');
    //await page.getByRole('button', { name: 'Send Message' }).click();
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'New User Subscribed' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'New User Subscription Failed' } })}`)
  }

 


  await browser.close()
})()