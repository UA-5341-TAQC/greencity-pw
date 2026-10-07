import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('Event Details - Join Event', () => {
  test('TC-16: Verify joining an Event from Event Details', async ({
    authenticatedPage,
    eventsPage,
    eventDetailsPage,
  }) => {
    allureId('TC-16');
    epic('Events');
    feature('Event participation');
    story('Join an event from Event Details');
    owner('Yurii Koliada');

    await test.step('Open the Event Details page', async () => {
      await authenticatedPage.waitForLoadState('domcontentloaded');
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
      const eventCard = eventsPage.getFirstJoinableGridEventCard();
      await eventCard.waitForVisible();
      await eventCard.clickMore();
      await eventDetailsPage.waitForDetailsPage();
    });

    await test.step('Verify the Join event button is visible', async () => {
      await eventDetailsPage.waitForJoinEventButton();
    });

    await test.step('Join the event', async () => {
      await eventDetailsPage.clickJoinEvent();
      await expect(
        eventDetailsPage.toastMessage,
        'A successful join confirmation should be displayed'
      ).toContainText('You have successfully joined the event');
    });

    await test.step('Verify the button changes to Cancel Request', async () => {
      await eventDetailsPage.waitForCancelRequestButton();
    });

    await test.step('Refresh the Event Details page', async () => {
      await authenticatedPage.reload();
      await eventDetailsPage.waitForDetailsPage();
    });

    await test.step('Verify the current user is listed among event participants', async () => {
      await eventDetailsPage.waitForParticipantsCount();
      const participantsCount = await eventDetailsPage.getParticipantsCountText();
      expect(participantsCount, 'The participants count should be displayed after joining').toMatch(
        /^\(\d+\)$/
      );

      await eventDetailsPage.waitForParticipantAvatars();
      const participantAvatarsCount = await eventDetailsPage.getParticipantAvatarsCount();
      expect(
        participantAvatarsCount,
        'The participants section should display participant avatars'
      ).toBeGreaterThan(0);
    });
  });
});
