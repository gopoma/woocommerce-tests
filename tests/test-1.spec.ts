import { test, expect } from '@playwright/test';
import { deleteLastAddedFromDashboard } from './helpers/products/deleteLastAddedFromDashboard';

test('test', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('http://ec2-54-91-190-145.compute-1.amazonaws.com/wp-login.php?redirect_to=http%3A%2F%2Fec2-54-91-190-145.compute-1.amazonaws.com%2Fwp-admin%2F&reauth=1');
  await page.getByLabel('Username or Email Address').fill('user');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('eHTxcS+/e!C8');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('#menu-posts-product').getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Add New', exact: true }).click();
  await page.getByLabel('Product name').fill('Casaca');
  await page.frameLocator('#content_ifr').locator('#tinymce').click();
  await page.getByLabel('Regular price (S/)').click();
  await page.getByLabel('Regular price (S/)').fill('80.00');
  await page.getByLabel('Sale price (S/)').click();
  await page.getByLabel('Sale price (S/)').fill('70.00');
  await page.getByRole('link', { name: 'Inventory' }).click();
  await page.getByLabel('SKU', { exact: true }).click();
  await page.getByLabel('SKU', { exact: true }).fill('CAS-ALT-FIN-1');
  await page.getByLabel('Stock management').check();
  await page.getByLabel('Quantity', { exact: true }).click();
  await page.getByLabel('Quantity', { exact: true }).fill('50');
  await page.getByPlaceholder('Store-wide threshold (2)').click();
  await page.getByPlaceholder('Store-wide threshold (2)').fill('10');
  await page.getByRole('group', { name: 'Allow backorders?' }).click();
  await page.getByLabel('Allow, but notify customer').dblclick();
  await page.getByLabel('Do not allow').check();
  await page.getByLabel('Sold individually').check();
  await page.getByRole('link', { name: 'Shipping' }).click();
  await page.getByRole('link', { name: 'Linked Products' }).click();
  await page.locator('p').filter({ hasText: 'Upsells' }).getByPlaceholder('Search for a product…').click();
  await page.locator('p').filter({ hasText: 'Upsells' }).getByPlaceholder('Search for a product…').press('CapsLock');
  await page.locator('p').filter({ hasText: 'Upsells' }).getByPlaceholder('Search for a product…').fill('P');
  await page.locator('p').filter({ hasText: 'Upsells' }).getByPlaceholder('Search for a product…').press('CapsLock');
  await page.locator('p').filter({ hasText: 'Upsells' }).getByPlaceholder('Search for a product…').fill('Polo');
  await page.getByRole('option', { name: 'Polo (woo-polo)' }).click();
  await page.getByRole('textbox', { name: 'Search for a product…' }).click();
  await page.getByRole('textbox', { name: 'Search for a product…' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search for a product…' }).fill('P');
  await page.getByRole('textbox', { name: 'Search for a product…' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search for a product…' }).fill('Polo');
  await page.getByRole('option', { name: 'Polo (woo-polo)' }).click();
  await page.getByRole('link', { name: 'Attributes' }).click();
  await page.getByLabel('Add existing').locator('span').nth(2).click();
  await page.getByText('Add existing').click();
  await page.getByLabel('Add existing').click();
  await page.getByRole('option', { name: 'Color' }).press('CapsLock');
  await page.getByRole('combobox').nth(3).fill('C');
  await page.getByRole('combobox').nth(3).press('CapsLock');
  await page.getByRole('combobox').nth(3).fill('Color');
  await page.getByRole('option', { name: 'Color' }).click();
  await page.getByRole('link', { name: 'Advanced' }).click();
  await page.getByLabel('Purchase note').click();
  await page.getByLabel('Purchase note').fill('No hay reembolso, solo se cambiará el producto a uno nuevo');
  await page.getByLabel('Menu order').click();
  await page.getByLabel('Menu order').fill('5');
  await page.getByRole('link', { name: 'Get more options' }).click();
  await page.getByRole('link', { name: 'Pinterest' }).click();
  await page.getByLabel('Condition', { exact: true }).selectOption('new');
  await page.getByText('Search for a category…').click();
  await page.getByRole('combobox').nth(4).fill('Clo');

  await page.getByRole('option', { name: 'Apparel & Accessories > Clothing', exact: true }).click();
  await page.frameLocator('#excerpt_ifr').locator('html').click();
  await page.getByRole('checkbox', { name: 'Clothing' }).check();
  await page.getByLabel('Add new tag').click();
  await page.getByLabel('Add new tag').press('CapsLock');
  await page.getByLabel('Add new tag').fill('A');
  await page.getByLabel('Add new tag').press('CapsLock');
  await page.getByLabel('Add new tag').fill('Alta');
  await page.getByRole('option', { name: 'Alta Calidad' }).click();
  await page.getByRole('link', { name: 'Set product image' }).click();
  await page.getByLabel('Processed with VSCO with t1').click();
  await page.getByRole('button', { name: 'Set product image' }).click();
  await page.getByRole('link', { name: 'Edit', exact: true }).click();
  await page.getByLabel('This is a featured product').check();
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  await page.getByRole('link', { name: 'http://ec2-54-91-190-145.' }).click();

  //?await page.waitForTimeout(2000);
  await page.goto(`http://ec2-54-91-190-145.compute-1.amazonaws.com/wp-admin/edit.php?post_type=product`);
  await page.waitForTimeout(3000);
  await page.locator("//html/body/div[1]/div[2]/div[3]/div[1]/div[6]/form[1]/table/tbody/tr[1]/th/input").click();
  await page.locator("select[name='action']").selectOption("trash");
  await page.locator("input[id='doaction']").click();
});