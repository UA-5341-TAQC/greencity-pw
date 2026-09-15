import { HomePage } from '@/pages';
import { SignInModal } from '@/modals';
import { test as baseTest, expect as baseExpect } from './base-fixture';

type PageFixtures = {
  homePage: HomePage;
  signInModal: SignInModal;
};

export const test = baseTest.extend<PageFixtures>({
  homePage: async ({ page }, use): Promise<void> => {
    await use(new HomePage(page));
  },
  signInModal: async ({ page }, use): Promise<void> => {
    await use(new SignInModal(page));
  },
});

export { baseExpect as expect };
