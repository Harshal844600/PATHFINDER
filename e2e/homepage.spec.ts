import { test, expect } from '@playwright/test';

test('homepage has title and main elements', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PathFinder/);

  // Expect the main heading to be visible
  await expect(page.getByRole('heading', { name: /YOUR CAREER PATH ISN'T A LADDER/i })).toBeVisible();

  // Expect the "GET STARTED" button to be visible
  await expect(page.getByRole('link', { name: /GET STARTED/i })).toBeVisible();
});
