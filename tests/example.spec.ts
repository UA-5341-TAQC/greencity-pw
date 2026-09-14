import HomePage from '@/pages/home-page';
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  const pageObject = new HomePage(page);
  await pageObject.navigateToHomePage();
  await pageObject.waitForHomePage();
  const title = await pageObject.getTitle();
  // Expect a title "to contain" a substring.
  expect(title).toEqual('GreenCity — Build Eco-Friendly Habits Today');
});
