import {
  HomePage,
  ProfilePage,
  EditProfilePage,
  FriendsPage,
  EcoNewsPage,
  EcoNewsDetailsPage,
  PlacesPage,
  CreateNewsPage,
  CreateNewsPreviewPage,
} from '@/pages';
import { AddPlaceModal, SignInModal } from '@/modals';
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
  ecoNewsCreatePage: CreateNewsPage;
  ecoNewsCreatePreviewPage: CreateNewsPreviewPage;
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

  ecoNewsCreatePage: async ({ page }, use): Promise<void> => {
    await use(new CreateNewsPage(page));
  },

  ecoNewsCreatePreviewPage: async ({ page }, use): Promise<void> => {
    await use(new CreateNewsPreviewPage(page));
  },
});

export { baseExpect as expect };
