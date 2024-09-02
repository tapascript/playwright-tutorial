import { test, expect } from "@playwright/test";

test.describe("testing a eCommerce playground", () => {
  test("has title", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await expect(page).toHaveTitle(/Your Store/);
  });

  test("special link", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByRole("link", { name: "Special Hot", exact: true }).click();
    await page.getByRole("link", { name: "Continue" }).click();
  });

  test("search products and buy", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByPlaceholder("Search For Products").first().click();
    await page.getByPlaceholder("Search For Products").first().fill("Phone");
    await page.getByRole("button", { name: "SEARCH" }).click();
    await page.locator(".product-thumb").nth(2).click();
    await page.getByRole("button", { name: "BUY NOW" }).click();
  });
});
