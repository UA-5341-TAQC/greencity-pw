import { HomePage, ProfilePage, EditProfilePage, FriendsPage } from '@/pages';
import { SignInModal } from '@/modals';
import { test as baseTest, expect as baseExpect } from '@/fixtures/base-fixture';

type PageFixtures = {
  homePage: HomePage;
  signInModal: SignInModal;
  profilePage: ProfilePage;
  editProfilePage: EditProfilePage;
  friendsPage: FriendsPage;
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
});

export { baseExpect as expect };
