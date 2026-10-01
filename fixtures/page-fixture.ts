import {
  CreateEventPage,
  HomePage,
  ProfilePage,
  EditProfilePage,
  FriendsPage,
  EcoNewsPage,
  EcoNewsDetailsPage,
  CreateNewsPage,
  CreateNewsPreviewPage,
  PlacesPage,
  EventsPage,
  EventDetailsPage,
  EditEventPage,
} from '@/pages';

import env from '@/config/env';
import { test as baseTest, expect as baseExpect } from './base-fixture';
import {
  AddPlaceModal,
  SignInModal,
  SignUpModal,
  UpdatePhotoModal,
  CancelWarningModal,
} from '@/modals';

type PageFixtures = {
  createEventPage: CreateEventPage;
  homePage: HomePage;
  signInModal: SignInModal;
  updatePhotoModal: UpdatePhotoModal;
  signUpModal: SignUpModal;
  cancelWarningModal: CancelWarningModal;
  profilePage: ProfilePage;
  editProfilePage: EditProfilePage;
  friendsPage: FriendsPage;
  placesPage: PlacesPage;
  addPlaceModal: AddPlaceModal;
  ecoNewsPage: EcoNewsPage;
  ecoNewsDetailsPage: EcoNewsDetailsPage;
  authenticatedUser: ProfilePage;
  ecoNewsCreatePage: CreateNewsPage;
  ecoNewsCreatePreviewPage: CreateNewsPreviewPage;
  eventsPage: EventsPage;
  eventDetailsPage: EventDetailsPage;
  editEventPage: EditEventPage;
};

export const test = baseTest.extend<PageFixtures>({
  createEventPage: async ({ page }, use): Promise<void> => {
    await use(new CreateEventPage(page));
  },

  homePage: async ({ page }, use): Promise<void> => {
    await use(new HomePage(page));
  },

  signInModal: async ({ page }, use): Promise<void> => {
    await use(new SignInModal(page));
  },

  updatePhotoModal: async ({ page }, use): Promise<void> => {
    await use(new UpdatePhotoModal(page));
  },

  signUpModal: async ({ page }, use): Promise<void> => {
    await use(new SignUpModal(page));
  },

  cancelWarningModal: async ({ page }, use): Promise<void> => {
    await use(new CancelWarningModal(page));
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

  authenticatedUser: async ({ page, homePage, signInModal }, use): Promise<void> => {
    await homePage.navigateToHomePage();
    await homePage.waitForHomePage();

    await homePage.header.clickSignIn();
    await signInModal.waitForVisible();

    await signInModal.fillEmail(env.USER_EMAIL);
    await signInModal.fillPassword(env.USER_PASSWORD);
    await signInModal.clickSignIn();

    await signInModal.waitForHidden();

    await use(new ProfilePage(page));
  },

  ecoNewsCreatePage: async ({ page }, use): Promise<void> => {
    await use(new CreateNewsPage(page));
  },

  ecoNewsCreatePreviewPage: async ({ page }, use): Promise<void> => {
    await use(new CreateNewsPreviewPage(page));
  },

  eventsPage: async ({ page }, use): Promise<void> => {
    await use(new EventsPage(page));
  },

  eventDetailsPage: async ({ page }, use): Promise<void> => {
    await use(new EventDetailsPage(page));
  },

  editEventPage: async ({ page }, use): Promise<void> => {
    await use(new EditEventPage(page));
  },
});

export { baseExpect as expect };
