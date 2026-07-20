const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const appUrl = pathToFileURL(path.join(__dirname, '..', 'index.html')).href;

test('reset flow exposes named controls and status semantics', async ({ page }) => {
  await page.goto(appUrl);

  await expect(page.getByRole('textbox', { name: 'Account email' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send reset link' })).toBeVisible();
  await expect(page.getByRole('status')).toBeAttached();
});

test('reset confirmation does not reveal whether an email exists', async ({ page }) => {
  await page.goto(appUrl);
  await page.getByLabel('Account email').fill('unknown@example.test');
  await page.getByRole('button', { name: 'Send reset link' }).click();

  const status = page.getByRole('status');
  await expect(status).toContainText('If the email is registered, a reset link will be sent.');
  await expect(status).not.toContainText('No account found');
});
