import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.creowis.com/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/CreoWis/);
});

test('testimonial link', async ({ page }) => {
  await page.getByRole('link', { name: 'Testimonials' }).click();
  // Expects page to have a heading with the name of Customers Say.
  await expect(page.getByRole('heading', { name: 'Customers Say' })).toBeVisible();
});

test('start working action', async ({ page }) => {
  await page.getByRole('link', { name: 'Let’s Start Working' }).click();
  await page.getByText('Product/Application').click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill('Test User');
  await page.getByPlaceholder('Your Name').press('Tab');
  await page.getByPlaceholder('Your Email').fill('test@email.com');
  await page.getByPlaceholder('Your Email').press('Tab');
  await page.getByPlaceholder('Describe your idea / project').fill('Website Building');
  //await page.getByRole('button', { name: 'Send Message' }).click();
});
