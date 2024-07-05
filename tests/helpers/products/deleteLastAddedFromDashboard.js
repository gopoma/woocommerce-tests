import { WooCommerce_BASE_URL } from '../../config';

export const deleteLastAddedFromDashboard = async ({ page }) => {
    await page.goto(`${WooCommerce_BASE_URL}/wp-admin/edit.php?post_type=product`);

    await page.waitForTimeout(3000);

    await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();

    await page.locator("select[name='action']").selectOption("trash");

    await page.locator("input[id='doaction']").click();

    await page.waitForTimeout(10000);
};
