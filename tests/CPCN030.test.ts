import { test, expect } from '@playwright/test';

test('CPCN030', async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://francocardenas.me/wp-login.php?redirect_to=https%3A%2F%2Ffrancocardenas.me%2Fwp-admin%2F&reauth=1');
    await page.getByLabel('Username or Email Address').click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByLabel('Username or Email Address').fill('user');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill(':Y@8SmnRZuBK');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
    await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Add New', exact: true }).click();
    await page.getByLabel('Product name').click();
    await page.getByLabel('Product name').fill('Chaqueta Tommy Hilfiger');
    await page.frameLocator('#content_ifr').getByRole('paragraph').click();
    await page.frameLocator('#content_ifr').locator('#tinymce').fill('Chaqueta Tommy Hilfiger description');
    await page.getByLabel('Simple product Grouped').selectOption('external');
    await page.getByPlaceholder('https://').click();
    await page.getByPlaceholder('https://').fill('https://www.amazon.com/-/es/Tommy-Hilfiger-Ultra-Loft-Chaqueta/dp/B07GFPDQWB/?_encoding=UTF8&pd_rd_w=qbFY3&content-id=amzn1.sym.8772d971-b514-4f50-bfa9-886eb1375467&pf_rd_p=8772d971-b514-4f50-bfa9-886eb1375467&pf_rd_r=NJ3JXCPN227QDTWPSFCV&pd_rd_wg=ikFW6&pd_rd_r=fda66f2a-53af-47d0-8718-3053bb977f1b&ref_=pd_hp_d_btf_exports_top_sellers_unrec');
    await page.getByPlaceholder('Buy product').click();
    await page.getByPlaceholder('Buy product').fill('Comprar producto');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await page.getByRole('link', { name: 'View Product' }).click();

    await expect(page.getByRole('heading', { level: 1, name: 'Chaqueta Tommy Hilfiger' })).toBeVisible();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Comprar producto' }).click();


    //? Delete Last Added From Dashboard
    await page.goto(`https://francocardenas.me/wp-admin/edit.php?post_type=product`);
    await page.waitForTimeout(3000);
    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
    await page.locator("select[name='action']").selectOption("trash");
    await page.locator("input[id='doaction']").click();
    await page.waitForTimeout(3000);
});
