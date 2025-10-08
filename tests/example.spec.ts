import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Quasar Form - Name Input Validation', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:9000/#/');
  await expect(page.locator('#q-app')).toBeVisible();
  await expect(page.locator('form')).toBeVisible();

  // Test name input validation
  const submitBtn = page.getByRole('button', { name: /submit/i });
  const nameInput = page.getByLabel('Your name');
  
  // Submit with empty name
  await submitBtn.click();
  await expect(page.locator('.q-field__messages').first()).toContainText(/please type something/i);

  // Fill name and submit
  await nameInput.fill('John Doe');
  await submitBtn.click();
  
  // Check that name error is gone
  await expect(page.locator('.q-field__messages').first()).not.toContainText(/please|invalid|error/i);
});

test('Quasar Form - Age Input Validation', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:9000/#/');
  await expect(page.locator('#q-app')).toBeVisible();
  await expect(page.locator('form')).toBeVisible();

  const submitBtn = page.getByRole('button', { name: /submit/i });
  const nameInput = page.getByLabel('Your name');
  const ageInput = page.getByLabel('Your age');

  // Fill name first
  await nameInput.fill('John Doe');
  
  // Submit with empty age
  await submitBtn.click();
  await expect(page.locator('.q-field__messages').nth(1)).toContainText(/please type.*age/i);

  // Test negative age
  await ageInput.fill('-1');
  await submitBtn.click();
  await expect(page.locator('.q-field__messages').nth(1)).toContainText(/real age|greater than 0/i);
});

test('Quasar Form - Terms Acceptance', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:9000/#/');
  await expect(page.locator('#q-app')).toBeVisible();
  await expect(page.locator('form')).toBeVisible();

  const submitBtn = page.getByRole('button', { name: /submit/i });
  const nameInput = page.getByLabel('Your name');
  const ageInput = page.getByLabel('Your age');
  const termsSwitch = page.getByRole('switch', { name: /i accept/i });

  // Fill form
  await nameInput.fill('John Doe');
  await ageInput.fill('25');

  // Submit without accepting terms
  await submitBtn.click();
  await expect(termsSwitch).toHaveAttribute('aria-checked', 'false');

  // Accept terms and submit
  await termsSwitch.click();
  await expect(termsSwitch).toHaveAttribute('aria-checked', 'true');
  await submitBtn.click();
});

test('Quasar Form - Reset Functionality', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://localhost:9000/#/');
  await expect(page.locator('#q-app')).toBeVisible();
  await expect(page.locator('form')).toBeVisible();

  const nameInput = page.getByLabel('Your name');
  const ageInput = page.getByLabel('Your age');
  const termsSwitch = page.getByRole('switch', { name: /i accept/i });
  const resetBtn = page.getByRole('button', { name: /reset/i });

  // Fill form
  await nameInput.fill('John Doe');
  await ageInput.fill('25');
  await termsSwitch.click();

  // Reset form
  await resetBtn.click();

  // Verify form is reset
  await expect(nameInput).toHaveValue('');
  await expect(ageInput).toHaveValue('');
  await expect(termsSwitch).toHaveAttribute('aria-checked', 'false');
});