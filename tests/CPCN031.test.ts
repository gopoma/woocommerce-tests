import { test, expect } from '@playwright/test';

test('CPCN031', async ({ page }) => {
    test.setTimeout(240000);

    // Login
    await page.goto('https://francocardenas.me/wp-login.php?redirect_to=https%3A%2F%2Ffrancocardenas.me%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').click();
    await page.getByLabel('Username or Email Address').fill('user');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill(':Y@8SmnRZuBK');
    await page.getByRole('button', { name: 'Log In' }).click();

    await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
    await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Add New', exact: true }).click();

    // Product name
    await page.waitForTimeout(5000);
    await page.getByLabel('Product name').click();
    await page.getByLabel('Product name').fill('Polo');

    // Product description
    await page.frameLocator('#content_ifr').getByRole('paragraph').click();
    await page.frameLocator('#content_ifr').locator('#tinymce').fill('Polo description');

    // Product type
    await page.getByLabel('Simple product Grouped').selectOption('variable');

    // Product SKU
    await page.getByLabel('SKU', { exact: true }).click();
    await page.getByLabel('SKU', { exact: true }).fill('epis-polo');

    // Product Attributes
    await page.getByRole('link', { name: 'Attributes' }).click();
    await page.getByText('Add existing').click();
    await page.getByRole('option', { name: 'Color' }).click();
    await page.getByPlaceholder('Select values').click();
    await page.getByRole('option', { name: 'Blue' }).click();
    await page.getByRole('cell', { name: 'Value(s): Blue Select all' }).getByRole('textbox').click();
    await page.getByRole('option', { name: 'Gray' }).click();
    await page.getByRole('row', { name: 'Name: Color Value(s): Blue' }).getByRole('textbox').click();
    await page.getByRole('option', { name: 'Green' }).click();
    await page.getByRole('button', { name: 'Save attributes' }).click();

    // Product Variations
    await page.getByRole('link', { name: 'Variations' }).click();

    await page.getByRole('button', { name: 'Add manually' }).click();
    await page.locator('select[name="attribute_pa_color\\[0\\]"]').selectOption('blue');
    //? await page.getByRole('heading', { name: 'Edit Remove  #461 Blue' }).click();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[7]/div/div[4]/div").click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByLabel('vnech-tee-blue-1.jpg').click();
    await page.getByRole('button', { name: 'Set variation image' }).click();
    await page.getByRole('textbox', { name: 'SKU' }).fill('e');
    await page.getByRole('textbox', { name: 'SKU' }).click();
    await page.getByRole('textbox', { name: 'SKU' }).fill('epis-polo-blue');
    await page.getByPlaceholder('Variation price (required)').click();
    await page.getByPlaceholder('Variation price (required)').fill('12');
    await page.getByRole('button', { name: 'Save changes' }).click();

    await page.getByRole('button', { name: 'Add manually' }).click();
    await page.locator('select[name="attribute_pa_color\\[1\\]"]').selectOption('gray');
    //? await page.getByRole('heading', { name: 'Edit Remove  #462 Gray' }).click();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[7]/div/div[5]/div[1]").click();
    await page.getByRole('textbox', { name: 'SKU' }).nth(0).click();
    await page.getByRole('textbox', { name: 'SKU' }).nth(0).fill('epis-polo-gray');
    await page.getByRole('link', { name: '' }).click();
    await page.getByLabel('tshirt-2.jpg').click();
    await page.getByRole('button', { name: 'Set variation image' }).click();
    await page.getByRole('textbox', { name: 'Regular price (S/)' }).nth(0).click();
    await page.getByRole('textbox', { name: 'Regular price (S/)' }).nth(0).fill('13');
    await page.getByRole('button', { name: 'Save changes' }).click();

    await page.getByRole('button', { name: 'Add manually' }).click();
    await page.locator('select[name="attribute_pa_color\\[2\\]"]').selectOption('green');

    //? await page.getByRole('heading', { name: 'Edit Remove  #463 Green' }).click();
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/div[7]/div/div[5]/div[1]").click();
    await page.getByRole('link', { name: '' }).click();
    await page.getByLabel('vnech-tee-green-1.jpg').click();
    await page.getByRole('button', { name: 'Set variation image' }).click();
    await page.getByRole('textbox', { name: 'Regular price (S/)' }).nth(0).click();
    await page.getByRole('textbox', { name: 'Regular price (S/)' }).nth(0).fill('16');
    await page.getByRole('textbox', { name: 'SKU' }).nth(0).click();
    await page.getByRole('textbox', { name: 'SKU' }).nth(0).fill('epis-polo-green');
    await page.getByRole('button', { name: 'Publish', exact: true }).click();

    // Visit Product Page
    await page.getByRole('link', { name: 'View Product' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Polo' })).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByLabel('Color').selectOption('blue');
    await page.waitForTimeout(5000);
    await page.getByLabel('Color').selectOption('gray');
    await page.waitForTimeout(5000);
    await page.getByLabel('Color').selectOption('green');
    await page.waitForTimeout(5000);


    // Delete Last Added From Dashboard
    await page.goto(`https://francocardenas.me/wp-admin/edit.php?post_type=product`);
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
    await page.locator("select[name='action']").selectOption("trash");
    await page.locator("input[id='doaction']").click();
    await page.waitForTimeout(3000);
});
