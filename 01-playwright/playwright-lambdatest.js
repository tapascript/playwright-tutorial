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

  await page.goto("https://ecommerce-playground.lambdatest.io/");

  try {
    await expect(page).toHaveTitle(/Your Store/);
    await page.getByPlaceholder("Search For Products").first().click();
    await page.getByPlaceholder("Search For Products").first().fill("Phone");
    await page.getByRole("button", { name: "SEARCH" }).click();
    await page.locator(".product-thumb").nth(2).click();
    await page.getByRole("button", { name: "BUY NOW" }).click();

    // Mark the test as completed or failed
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "passed", remark: "Phone products searched" } })}`);
  } catch {
    await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: { status: "failed", remark: "Phone products search Failed" } })}`);
  }

  await browser.close();
})();
