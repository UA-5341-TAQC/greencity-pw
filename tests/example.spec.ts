import { test, expect } from '@/fixtures/page-fixture';

test('has title', async ({ homePage }) => {
  await homePage.navigateToHomePage();
  await homePage.waitForHomePage();
  const title = await homePage.getTitle();
  // Expect a title "to contain" a substring.
  expect(title).toEqual('GreenCity — Build Eco-Friendly Habits Today');
});

test('clicks the start forming button', async ({ homePage, signInModal }) => {
  await homePage.navigateToHomePage();
  await homePage.waitForHomePage();

  await homePage.clickStartFormingButton(0);

  await signInModal.waitForVisible();

  await expect(signInModal.isSignInButtonEnabled()).resolves.toBe(false);

  await signInModal.fillEmail('user@example.com');
  await signInModal.fillPassword('password123');

  await expect(signInModal.isSignInButtonEnabled()).resolves.toBe(true);
});
