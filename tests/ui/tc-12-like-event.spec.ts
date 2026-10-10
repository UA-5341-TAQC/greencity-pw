import { test, expect } from '@/fixtures';

test.describe('Event Details', () => {
  const EVENT_ID = 222;
  const LIKE_DEF = 0;

  test.beforeEach(async ({ authenticatedPage, eventDetailsPage }) => {
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(eventDetailsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    await eventDetailsPage.navigateToEventDetails(EVENT_ID);
    await eventDetailsPage.waitForDetailsPage();

    if ((await eventDetailsPage.getLikeState()) === 'liked') {
      await eventDetailsPage.clickLike();
    }

    await expect.poll(async () => await eventDetailsPage.getLikeState()).toBe('unliked');

    await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF);
  });

  test.afterEach(async ({ eventDetailsPage }) => {
    if ((await eventDetailsPage.getLikeState()) === 'liked') {
      await eventDetailsPage.clickLike();
    }

    await expect.poll(async () => await eventDetailsPage.getLikeState()).toBe('unliked');
    await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF);
  });

  test('TC-12] [Event Details] Like event', async ({ eventDetailsPage }) => {
    await test.step('1.Verify the Like icon.', async () => {
      expect(await eventDetailsPage.isLikeEnabled()).toBe(true);
      expect(await eventDetailsPage.isLikeVisible()).toBe(true);
    });

    await test.step('2.Note the current number of likes.', async () => {
      expect(await eventDetailsPage.isCountLikeVisible()).toBe(true);
    });

    await test.step('3.Click the Like icon.', async () => {
      await eventDetailsPage.clickLike();
    });

    await test.step('4.Verify the Like icon state.', async () => {
      const likeState = await eventDetailsPage.getLikeState();
      const expLikeState = 'liked';
      expect(likeState).toBe(expLikeState);
      expect(await eventDetailsPage.isLiked()).toBe(true);
    });

    await test.step('5.	Verify the number of likes.', async () => {
      await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF + 1);
    });
  });
});
