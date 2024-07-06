// @ts-check
const { test, expect } = require('@playwright/test');
import { login } from './helpers/auth/login';
import { deleteLastAddedFromDashboard } from './helpers/products/deleteLastAddedFromDashboard'

test('go', async ({ page }) => {
    test.setTimeout(60000);
    
    // Login
    await login({ page });


    // Go to Add Product View
    await page.locator("//html/body/div[1]/div[1]/div[2]/ul/li[12]/a/div[3]").click();
    await page.locator("//html/body/div[1]/div[1]/div[2]/ul/li[12]/ul/li[3]/a").click();



    // Add Product
    await page.fill("input[name='post_title']", "Competitive Programmer’s Handbook");

    // Publish Product
    await page.click("input[name='publish']");
    await page.waitForTimeout(4000);

    // Get Product
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/div[2]/p/a").click();



    await deleteLastAddedFromDashboard({ page });
});
