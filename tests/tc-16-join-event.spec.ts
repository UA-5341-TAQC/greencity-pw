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
      await expect
        .poll(() => eventCard.isVisible(), {
          message: 'At least one event should be available for joining',
        })
        .toBe(true);
      await eventCard.clickMore();
      await eventDetailsPage.waitForDetailsPage();
    });

    await test.step('Verify the Join event button is visible', async () => {
      await expect
        .poll(() => eventDetailsPage.isJoinEventButtonVisible(), {
          message: 'The Join event button should be visible for an unjoined event',
        })
        .toBe(true);
    });

    await test.step('Join the event', async () => {
      await eventDetailsPage.clickJoinEvent();
      await expect(
        eventDetailsPage.toastMessage,
        'A successful join confirmation should be displayed'
      ).toContainText('You have successfully joined the event');
    });

    await test.step('Verify the button changes to Cancel Request', async () => {
      await expect
        .poll(() => eventDetailsPage.isCancelRequestButtonVisible(), {
          message: 'The Join event button should be replaced after joining',
        })
        .toBe(true);
    });

    await test.step('Refresh the Event Details page', async () => {
      await authenticatedPage.reload();
      await eventDetailsPage.waitForDetailsPage();
    });

    await test.step('Verify the current user is listed among event participants', async () => {
      await expect
        .poll(() => eventDetailsPage.getParticipantsCountText(), {
          message: 'The participants count should be displayed after joining',
        })
        .toMatch(/^\(\d+\)$/);
      await expect
        .poll(() => eventDetailsPage.getParticipantAvatarsCount(), {
          message: 'The participants section should display participant avatars',
        })
        .toBeGreaterThan(0);
    });
  });
});
