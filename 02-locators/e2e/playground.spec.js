import { test, expect } from "@playwright/test";

test.describe("Testing an eCommerce playground", () => {
  // Locator - getByRole
  test("click on the search button", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByRole("button", {name: 'Search'}).click();
  });

  // Locator - getByText
  test("discount banner showing discount percentage", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await expect(page.getByText("Upto 50% Off on Fully Automatic Top Load Washing Machine", {exact: true})).toBeVisible();
    await expect(page.getByText("variations of passages")).toBeVisible();
    await expect(page.getByText("Top Trending Category", {exact: true})).toBeHidden();
  });

  // Locator - getByLabel
  test("login form", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await expect(page.getByLabel("E-Mail Address", {exact: true})).toHaveCount(1);
    await expect(page.getByLabel("Password", {exact: true})).toHaveCount(1);
    await page.getByLabel('E-Mail Address').fill('atapas@email.com');
    await page.getByLabel('Password').fill('secret');
  });

  // Locator - getByPlaceholder
  test("registration form", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    await page.getByPlaceholder('First Name').fill('Tapas');
    await page.getByPlaceholder('Last Name').fill('Adhikary');
  });

  // Locator - getByAltText
  test("iPod touch", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8");
    await expect(page.getByAltText('iPod Touch').first()).toBeVisible();
  });

  // Locator - getByTitle
  test("count Palm Treo Pro", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=18&product_id=29");
    await expect(page.getByTitle('Palm Treo Pro')).toHaveCount(24);
  });

  // Locator - getByTestId
  test("test direction button", async({page}) => {
    await page.goto("http://127.0.0.1:5500/02-locators/test.html");
    await page.getByTestId('directions').click();
  });

  // Locator - CSS
  test("test CSS locator strategy", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page.locator('#input-email').fill('atapas@email.com');
    await page.locator('input[name="password"]').fill('secret');
    await page.locator('input[type="submit"]').click();
    await expect(page.locator('#account-login .alert.alert-danger')).toBeVisible();
  });

  // Locator - XPath
  test("test XPath locator strategy", async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover('//a[@role="button"]//span[@class="title"][normalize-space()="My account"]');
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=20&product_id=36')
    await page.click('xpath=/html/body/div[1]/div[9]/div[1]/div[2]/div/div[2]/div[2]/div[10]/div/div[4]/div/div[2]/button');
    await page.click('//div[@id="entry_216842"]//button[@title="Add to Cart"][normalize-space()="Add to Cart"]');
  });

  // Locator - Combination & nth Element
  test("search products and buy", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByPlaceholder("Search For Products").first().click();
    await page.getByPlaceholder("Search For Products").first().fill("Phone");
    await page.getByRole("button", { name: "SEARCH" }).click();
    await page.locator(".product-thumb").nth(2).click();
    await page.getByRole("button", { name: "BUY NOW" }).click();
  });

  // Locator - items in list
  test("test items in list", async({page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=25&product_id=29');
    await expect(page.locator('div#entry_216826 UL LI')).toHaveCount(3);
    await expect(page.locator('div#entry_216826 UL LI')).toHaveText(['Brand: Palm', 'Viewed: 64769', 'Availability: Out Of Stock ']);
  });


});