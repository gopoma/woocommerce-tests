import { test, expect } from '@playwright/test';

test('CPCN057', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://francocardenas.me/wp-login.php?redirect_to=https%3A%2F%2Ffrancocardenas.me%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').click();
    await page.getByLabel('Username or Email Address').fill('user');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill(':Y@8SmnRZuBK');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
    await page.goto('https://francocardenas.me/wp-admin/edit.php?post_type=product');
    await page.waitForTimeout(3000);
    await page.locator('#date').getByRole('link', { name: 'Date' }).click();
    await page.waitForTimeout(3000);

    await expect(page.getByRole('link', { name: 'V-Neck T-Shirt', exact: true })).toBeVisible();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]").hover();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/td[2]/div[3]/span[6]/a").click();

    await expect(page.getByLabel('Product name')).toHaveValue('V-Neck T-Shirt (Copy)');
    await expect(page.getByLabel('SKU', { exact: true })).toBeDefined();
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await expect(page.getByLabel('Product name')).toHaveValue('V-Neck T-Shirt (Copy)');
    await expect(page.getByLabel('SKU', { exact: true })).toBeDefined();
    await page.getByRole('link', { name: 'View Product' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'V-Neck T-Shirt (Copy)' })).toBeVisible();
    await page.waitForTimeout(5000);

    //? Delete Last Added From Dashboard
    await page.goto(`https://francocardenas.me/wp-admin/edit.php?post_type=product`);
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
    await page.locator("select[name='action']").selectOption("trash");
    await page.locator("input[id='doaction']").click();
    await page.waitForTimeout(3000);
});
