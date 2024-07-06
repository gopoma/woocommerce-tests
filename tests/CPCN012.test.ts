import { test, expect } from '@playwright/test';

test('CPCN012', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://francocardenas.me/wp-login.php?redirect_to=https%3A%2F%2Ffrancocardenas.me%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').click();
    await page.getByLabel('Username or Email Address').fill('user');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill(':Y@8SmnRZuBK');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
    await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Add New', exact: true }).click();
    await page.getByLabel('Product name').click();
    await page.getByLabel('Product name').fill('Casaca');
    await page.getByLabel('Regular price (S/)').click();
    await page.getByLabel('Regular price (S/)').fill('12.00');
    await page.getByRole('link', { name: 'Shipping' }).click();
    await page.getByPlaceholder('Height').click();
    await page.getByPlaceholder('Height').fill('-12');
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await page.getByRole('link', { name: 'Shipping' }).click();
    await expect(page.getByPlaceholder('Height')).toHaveValue('');
    await page.getByRole('link', { name: 'View Product' }).click();
});
