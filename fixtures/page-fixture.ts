import { HomePage, EcoNewsPage, EcoNewsDetailsPage } from '@/pages';
import { SignInModal } from '@/modals';
import { test as baseTest, expect as baseExpect } from './base-fixture';

type PageFixtures = {
  homePage: HomePage;
  signInModal: SignInModal;
  ecoNewsPage: EcoNewsPage;
  ecoNewsDetailsPage: EcoNewsDetailsPage;
};

export const test = baseTest.extend<PageFixtures>({
  homePage: async ({ page }, use): Promise<void> => {
    await use(new HomePage(page));
  },
  signInModal: async ({ page }, use): Promise<void> => {
    await use(new SignInModal(page));
  },
  ecoNewsPage: async ({ page }, use): Promise<void> => {
    await use(new EcoNewsPage(page));
  },
  ecoNewsDetailsPage: async ({ page }, use): Promise<void> => {
    await use(new EcoNewsDetailsPage(page));
  },
});

export { baseExpect as expect };
