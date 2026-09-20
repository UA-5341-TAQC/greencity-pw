import { HomePage, PlacesPage } from '@/pages';
import { AddPlaceModal, SignInModal } from '@/modals';
import { test as baseTest, expect as baseExpect } from './base-fixture';

type PageFixtures = {
  homePage: HomePage;
  signInModal: SignInModal;
  placesPage: PlacesPage;
  addPlaceModal: AddPlaceModal;
};

export const test = baseTest.extend<PageFixtures>({
  homePage: async ({ page }, use): Promise<void> => {
    await use(new HomePage(page));
  },

  signInModal: async ({ page }, use): Promise<void> => {
    await use(new SignInModal(page));
  },

  placesPage: async ({ page }, use): Promise<void> => {
    await use(new PlacesPage(page));
  },

  addPlaceModal: async ({ page }, use): Promise<void> => {
    await use(new AddPlaceModal(page));
  },
});

export { baseExpect as expect };
