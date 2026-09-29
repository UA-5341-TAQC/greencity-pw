import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';
import { type FriendItemComponent } from '@/components';

test.describe('Friends Page', () => {
  test('TC-38: Verify user can open Friends page, send a friend request, and cancel it', async ({
    authenticatedPage,
    profilePage,
    friendsPage,
  }) => {
    allureId('TC-38');
    epic('Profile');
    feature('Friends');
    story('Send and cancel friend request');
    owner('Yurii Koliada');

    await test.step('1. Open user profile and verify "My Friends" widget', async () => {
      await profilePage.navigateToProfile();
      await profilePage.waitForProfile();
      await expect(
        profilePage.friendsWidget.title,
        'Friends widget title should display "My Friends"'
      ).toHaveText(/My Friends|Мої Друзі/i);
      await expect(
        profilePage.friendsWidget.quantity,
        'Friends counter should display number of connections'
      ).toHaveText(/\d+\s+(connections|зв'язків)/i);
    });

    await test.step('2. Navigate to Friends page via widget "+" button', async () => {
      await profilePage.friendsWidget.clickAddFriend();
      await friendsPage.waitForFriends();
      await expect(friendsPage.heading, 'Friends page heading should display "Friends"').toHaveText(
        /Friends|Друзі/i
      );
      await expect(
        friendsPage.backToProfileLink,
        'Back to profile link should be visible'
      ).toBeVisible();

      const isFindFriendActive = await friendsPage.isTabActive('findFriend');
      expect(isFindFriendActive, 'Find Friends tab should be active by default').toBe(true);
      await expect(friendsPage.searchInput, 'Search input field should be visible').toBeVisible();
    });

    let userCard: FriendItemComponent;

    await test.step('3. Verify first recommended friend card in the list', async () => {
      await friendsPage.waitForCardsLoaded();

      const cardCount = await friendsPage.getFriendCardCount();
      expect(cardCount, 'Friends list should contain at least one friend card').toBeGreaterThan(0);

      userCard = await friendsPage.getFirstAddableCard();
      const friendName = await userCard.getName();
      expect(friendName.length, 'Friend card should display user name').toBeGreaterThan(0);

      const friendRate = await userCard.getRate();
      expect(friendRate, 'Friend card should display rating info').toMatch(/Rate:|Рейтинг:/i);

      await expect(
        userCard.actionButton,
        'Friend card action button should be "Add friend"'
      ).toHaveText(/add friend|додати/i);
    });

    await test.step('4. Send friend request and verify confirmation toast', async () => {
      await userCard.clickActionButton();
      await expect(
        userCard.actionButton,
        'Action button should switch to "Cancel request"'
      ).toHaveText(/cancel request|відхилити/i);

      await expect(
        friendsPage.toastMessage,
        'Success toast message for sent friend request should be displayed'
      ).toHaveText(/sent|надіслано/i);
    });

    await test.step('5. Cancel friend request and verify button resets to "Add friend"', async () => {
      await userCard.clickActionButton();
      await expect(
        friendsPage.toastMessage,
        'Success toast message for canceled friend request should be displayed'
      ).toHaveText(/cancel|скасовано/i);
      await expect(
        userCard.actionButton,
        'Action button should switch back to "Add friend"'
      ).toHaveText(/add friend|додати/i);
    });

    await test.step('6. Return to profile page via back link', async () => {
      await friendsPage.clickBackToProfile();
      await profilePage.waitForProfile();
      await expect(
        authenticatedPage,
        'User should be redirected back to profile page URL'
      ).toHaveURL(new RegExp('.*/profile/\\d+.*'));
    });
  });
});
