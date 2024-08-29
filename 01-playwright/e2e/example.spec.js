// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
  console.log('beforeAll');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test.afterEach(async ({ page }) => {
  console.log('afterEach');
});

test.afterAll(async () => {
  console.log('afterAll');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
