import {
  HomePage,
  ProfilePage,
  EditProfilePage,
  FriendsPage,
  EcoNewsPage,
  EcoNewsDetailsPage,
  PlacesPage,
} from '@/pages';
import { AddPlaceModal, SignInModal } from '@/modals';
import env from '@/config/env';
import { test as baseTest, expect as baseExpect } from './base-fixture';

type PageFixtures = {
  homePage: HomePage;
  signInModal: SignInModal;
  profilePage: ProfilePage;
  editProfilePage: EditProfilePage;
  friendsPage: FriendsPage;
  placesPage: PlacesPage;
  addPlaceModal: AddPlaceModal;
  ecoNewsPage: EcoNewsPage;
  ecoNewsDetailsPage: EcoNewsDetailsPage;
  authenticatedUser: void;
};

export const test = baseTest.extend<PageFixtures>({
  homePage: async ({ page }, use): Promise<void> => {
    await use(new HomePage(page));
  },

  signInModal: async ({ page }, use): Promise<void> => {
    await use(new SignInModal(page));
  },
  profilePage: async ({ page }, use): Promise<void> => {
    await use(new ProfilePage(page));
  },
  editProfilePage: async ({ page }, use): Promise<void> => {
    await use(new EditProfilePage(page));
  },
  friendsPage: async ({ page }, use): Promise<void> => {
    await use(new FriendsPage(page));
  },

  placesPage: async ({ page }, use): Promise<void> => {
    await use(new PlacesPage(page));
  },

  addPlaceModal: async ({ page }, use): Promise<void> => {
    await use(new AddPlaceModal(page));
  },

  ecoNewsPage: async ({ page }, use): Promise<void> => {
    await use(new EcoNewsPage(page));
  },

  ecoNewsDetailsPage: async ({ page }, use): Promise<void> => {
    await use(new EcoNewsDetailsPage(page));
  },

  authenticatedUser: async ({ homePage, signInModal }, use): Promise<void> => {
    await homePage.navigateToHomePage();
    await homePage.waitForHomePage();

    await homePage.header.clickSignIn();
    await signInModal.waitForVisible();

    await signInModal.fillEmail(env.USER_EMAIL);
    await signInModal.fillPassword(env.USER_PASSWORD);
    await signInModal.clickSignIn();

    await signInModal.waitForHidden();

    await use();
  },
});

export { baseExpect as expect };
