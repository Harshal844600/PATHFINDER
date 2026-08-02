import { test, expect } from '@playwright/test';

test('homepage has title and main elements', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PathFinder/);

  // Expect the main heading to be visible
  await expect(page.getByRole('heading', { name: /PathFinder/i, level: 1 })).toBeVisible();

  // Expect the "Start Discovery" link to be visible
  await expect(page.getByRole('link', { name: /Start Discovery/i })).toBeVisible();
});
