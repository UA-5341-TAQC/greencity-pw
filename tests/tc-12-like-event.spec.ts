import { test, expect } from '@/fixtures';

test.describe('Event Details', () => {
  test('TC-12] [Event Details] Like event', async ({ 
    authenticatedPage,
    eventsDetailsPage,
   }) => {
  const EVENT_ID = 210;
  
    await test.step('Preconditions', async () => {
      await authenticatedPage.waitForLoadState('domcontentloaded');;
      await eventsDetailsPage.navigateToEventDetails(EVENT_ID);
      await eventsDetailsPage.waitForPageLoad();
    });
    
    await test.step('1.Verify the Like icon.', async () => {
      expect(await eventsDetailsPage.isLikeEnabled()).toBe(true);
      expect(await eventsDetailsPage.isLikeVisible()).toBe(true);
    });

    await test.step('2.Note the current number of likes.', async () => {
      expect(await eventsDetailsPage.isCountLikeVisible()).toBe(true);
    });

    await test.step('3.Click the Like icon.', async () => {
      const defaultCount = await eventsDetailsPage.countLike();
      await eventsDetailsPage.clickLike();
    });

    await test.step('4.Verify the Like icon state.', async () => {
      //
    });

    await test.step('5.	Verify the number of likes.', async () => {
      const updatedCount = await eventsDetailsPage.countLike();
    });
  });
});
