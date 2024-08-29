import { chromium } from '@playwright/test';

async function globalTeardown(config) {
  console.log("Perform Global Teardown")
}

export default globalTeardown;