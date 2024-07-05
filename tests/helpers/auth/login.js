import { WooCommerce_BASE_URL } from '../../config';

export const login = async ({ page }) => {
    const user = "user";
    const password = "eHTxcS+/e!C8";

    await page.goto(`${WooCommerce_BASE_URL}/wp-admin`);

    await page.fill("input[name='log']", user);
    await page.fill("input[name='pwd']", password);

    await page.click("input[name='wp-submit']");
    await page.waitForTimeout(3000);
};
