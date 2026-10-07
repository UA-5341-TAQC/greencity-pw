import { test, expect } from '@/fixtures';
import { EventDetailsPage } from '@/pages/event-details-page';
import env from '@/config/env';

test.describe('Event Details Save', () => {
  test('TC-11: verify a registered user can save an event from Event Details', async ({
    authenticatedPage,
  }) => {
    test.setTimeout(60000);
    const eventDetailsPage = new EventDetailsPage(authenticatedPage);
    const eventId = 210;
    const targetTitle = 'Updated Automation Event 2026';

    // Reset persisted favorite state because the Details button can be stale.
    const accessToken = await authenticatedPage.evaluate(() =>
      window.localStorage.getItem('accessToken')
    );
    expect(accessToken, 'Authenticated access token is missing').toBeTruthy();
    const resetFavoriteResponse = await authenticatedPage.request.delete(
      `${env.API_GREENCITY_BASE_URL}/events/${eventId}/favorites`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const resetStatus = resetFavoriteResponse.status();
    expect(
      [200, 204, 404],
      `Could not reset favorite state: ${resetStatus} ${await resetFavoriteResponse.text()}`
    ).toContain(resetStatus);

    await eventDetailsPage.navigateToEventDetails(eventId);
    await eventDetailsPage.waitForDetailsPage();
    await expect.poll(() => eventDetailsPage.getEventTitle()).toBe(targetTitle);

    const saveButton = authenticatedPage.getByRole('button', {
      name: 'Save event',
      exact: true,
    });
    await expect(saveButton).toBeVisible();
    await expect(saveButton).toBeEnabled();

    const saveResponsePromise = authenticatedPage.waitForResponse(
      (response) =>
        response.request().method() === 'POST' &&
        response.url().includes(`/events/${eventId}/favorites`),
      { timeout: 15000 }
    );
    await eventDetailsPage.clickSaveEvent();
    const saveResponse = await saveResponsePromise;
    const saveResponseBody = await saveResponse.text();
    expect(
      saveResponse.ok(),
      `Save API returned ${saveResponse.status()}: ${saveResponseBody}`
    ).toBe(true);

    await expect
      .poll(() => eventDetailsPage.isEventSaved(), {
        timeout: 10000,
        message: 'Save event did not change to Unsave event',
      })
      .toBe(true);
  });
});
