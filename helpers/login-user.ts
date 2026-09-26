import env from '@/config/env';
import { expect } from '@/fixtures/page-fixture';
import { SignInModal } from '@/modals/sign-in-modal';
import { HomePage } from '@/pages';

export async function loginUser(homePage: HomePage, signInModal: SignInModal): Promise<void> {
  await homePage.header.clickSignIn();
  await signInModal.waitForVisible();
  await signInModal.fillEmail(env.USER_EMAIL);
  await signInModal.fillPassword(env.USER_PASSWORD);
  await signInModal.clickSignIn();
  await expect(homePage.header.userMenuDropdown).toBeVisible();
}
