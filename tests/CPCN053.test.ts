import { test, expect } from '@playwright/test';

test('CPCN053', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://francocardenas.me/wp-login.php?redirect_to=https%3A%2F%2Ffrancocardenas.me%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').click();
    await page.getByLabel('Username or Email Address').fill('user');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill(':Y@8SmnRZuBK');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
    await page.getByRole('link', { name: 'All Products' }).click();
    await page.locator('#name').getByRole('link', { name: 'Name Sort ascending.' }).click();
    await page.waitForTimeout(5000);
    await page.locator('#name').getByRole('link', { name: 'Name' }).click();
    await page.waitForTimeout(5000);
});
