import { test, expect } from '@playwright/test';

test.describe('Authentication Flows', () => {
  test('Login page has necessary fields and buttons', async ({ page }) => {
    await page.goto('/login');
    
    // Expect the main heading to be visible
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    
    // Check for form inputs
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    
    // Check for buttons
    await expect(page.getByRole('button', { name: 'Login', exact: true }).last()).toBeVisible();
    await expect(page.getByRole('button', { name: /Google/i })).toBeVisible();
  });

  test('Signup page has necessary fields and buttons', async ({ page }) => {
    await page.goto('/signup');
    
    // Expect the main heading to be visible
    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
    
    // Check for form inputs
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    
    // Check for buttons
    await expect(page.getByRole('button', { name: 'Sign Up', exact: true }).last()).toBeVisible();
    await expect(page.getByRole('button', { name: /Google/i })).toBeVisible();
  });
});
