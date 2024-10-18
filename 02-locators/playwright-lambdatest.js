const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
require("dotenv").config();

(async () => {
  const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 11",
      build: "Playwright Lambdatest Build",
      name: "Playwright Lambdatest Test",
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true,
    },
  };

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`,
  });

  const page = await browser.newPage();

  try {
    // Locator - CSS
  
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page.locator('#input-email').fill('atapas@email.com');
    await page.locator('input[name="password"]').fill('secret');
    await page.locator('input[type="submit"]').click();
    await expect(page.locator('#account-login .alert.alert-danger')).toBeVisible();
 

    // Locator - XPATH
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover('//a[@role="button"]//span[@class="title"][normalize-space()="My account"]');
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=20&product_id=36')
    await page.click('xpath=/html/body/div[1]/div[9]/div[1]/div[2]/div/div[2]/div[2]/div[10]/div/div[4]/div/div[2]/button');
    await page.click('//div[@id="entry_216842"]//button[@title="Add to Cart"][normalize-space()="Add to Cart"]');



    // Mark the test as completed or failed
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "passed", remark: "Phone products searched" } })}`);
  } catch {
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "failed", remark: "Phone products search Failed" } })}`);
  }

  await browser.close();
})();
