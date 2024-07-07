import { test, expect } from '@playwright/test';

test('CPCN029', async ({ page }) => {
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
    await page.getByLabel('Product name').fill('Kit de invierno');

    await page.frameLocator('#content_ifr').getByRole('paragraph').click();
    await page.frameLocator('#content_ifr').locator('#tinymce').fill('Kit de invierno description');

    await page.getByLabel('Simple product Grouped').selectOption('grouped');

    await page.getByLabel('SKU', { exact: true }).fill('epis-kit-invierno');
    await page.getByLabel('SKU', { exact: true }).click();

    await page.getByRole('link', { name: 'Linked Products' }).click();
    await page.locator('p').filter({ hasText: 'Grouped products' }).getByPlaceholder('Search for a product…').click();
    await page.locator('p').filter({ hasText: 'Grouped products' }).getByPlaceholder('Search for a product…').fill('Hoodie with Log');
    await page.locator('p').filter({ hasText: 'Grouped products' }).getByPlaceholder('Search for a product…').press('o');
    await page.getByRole('option', { name: 'Hoodie with Logo (woo-hoodie-' }).click();
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[4]/div[1]/p/span[1]/span[1]/span/ul/li[2]/input").fill('T-Shirt with Log');
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[4]/div[1]/p/span[1]/span[1]/span/ul/li[2]/input").press('o')
    await page.getByRole('option', { name: 'T-Shirt with Logo (Woo-tshirt' }).click();
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[4]/div[1]/p/span[1]/span[1]/span/ul/li[3]/input").fill('Beanie with Log');
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[4]/div[1]/p/span[1]/span[1]/span/ul/li[3]/input").press('o');
    await page.getByRole('option', { name: 'Beanie with Logo (Woo-beanie-' }).click();
    await page.waitForTimeout(3000);

    await page.frameLocator('#excerpt_ifr').getByRole('paragraph').click();
    await page.frameLocator('#excerpt_ifr').locator('#tinymce').fill('Kit de invierno short description content');
    await page.getByRole('link', { name: 'Set product image' }).click();
    await page.getByLabel('logo-1.jpg', { exact: true }).click();
    await page.getByRole('button', { name: 'Set product image' }).click();
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await expect(page.getByLabel('Product name')).toHaveValue('Kit de invierno');
    await expect(page.getByLabel('SKU', { exact: true })).toHaveValue('epis-kit-invierno');
    await page.getByRole('link', { name: 'View Product' }).click();

    await expect(page.getByRole('heading', { level: 1, name: 'Kit de invierno' })).toBeVisible();
    await page.waitForTimeout(5000);

    //? Delete Last Added From Dashboard
    await page.goto(`https://francocardenas.me/wp-admin/edit.php?post_type=product`);
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
    await page.locator("select[name='action']").selectOption("trash");
    await page.locator("input[id='doaction']").click();
    await page.waitForTimeout(3000);
});
