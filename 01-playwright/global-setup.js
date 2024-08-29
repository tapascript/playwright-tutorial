import { chromium } from '@playwright/test';

async function globalSetup(config) {
  console.log("Perform Global SetUp")
}

export default globalSetup;