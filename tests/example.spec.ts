import { test, expect } from '@/fixtures/page-fixture';

test('has title', async ({ homePage }) => {
  await homePage.navigateToHomePage();
  await homePage.waitForHomePage();
  const title = await homePage.getTitle();
  // Expect a title "to contain" a substring.
  expect(title).toEqual('GreenCity — Build Eco-Friendly Habits Today');
});
