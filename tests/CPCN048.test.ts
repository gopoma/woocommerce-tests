import { test, expect } from '@playwright/test';

test('CPCN048', async ({ page }) => {
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
    await page.getByLabel('Regular price (S/)').fill('12.50');
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await expect(page.getByLabel('Product name')).toHaveValue('Casaca');
    await expect(page.getByLabel('Regular price (S/)')).toHaveValue('12.50');
    await page.getByRole('link', { name: 'All Products' }).click();

    await page.waitForTimeout(5000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]").hover();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/td[2]/div[3]/span[4]/a").click();

    await page.waitForTimeout(5000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/ul/li[4]/a").click();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
    await page.locator('#bulk-action-selector-top').selectOption('delete');
    await page.locator('#doaction').click();
    await page.goto('https://francocardenas.me/wp-admin/edit.php?post_type=product');

    await page.waitForTimeout(5000);
});
