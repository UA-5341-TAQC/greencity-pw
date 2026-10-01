import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('Create event: time fields validation', () => {
  test.beforeEach(async ({ authenticatedUser, eventsPage }) => {
    void authenticatedUser;

    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    await eventsPage.header.switchLanguage(Language.En);
  });

  test('TC-42 Create event: Verify time fields validation (Negative)', async ({
    eventsPage,
    createEventPage,
  }) => {
    const START_TIME_ERROR = "Start time field can't be empty.";
    const END_TIME_ERROR = 'End time field can’t be empty.';

    await test.step('1: Click the "Create event" button', async () => {
      await eventsPage.clickCreateEvent();
      await createEventPage.waitForCreateEventPage();
    });

    await test.step('3: Click the "Start Time" field', async () => {
      await createEventPage.clickStartTime();

      await expect(createEventPage.getTimeListbox('Start Time')).toBeVisible();
    });

    await test.step('4: Click outside the field without selecting a time', async () => {
      await createEventPage.blurStartTime();

      await expect(createEventPage.startTimeError).toHaveText(START_TIME_ERROR);
    });

    await test.step('5: Click the "End Time" field', async () => {
      await createEventPage.clickFinishTime();

      await expect(createEventPage.getTimeListbox('End Time')).toBeVisible();
    });

    await test.step('6: Click outside the field without selecting a time', async () => {
      await createEventPage.blurFinishTime();

      await expect(createEventPage.finishTimeError).toHaveText(END_TIME_ERROR);
      await expect(createEventPage.startTimeError).toHaveText(START_TIME_ERROR);
    });

    await test.step('7: Select a time from the "Start Time" dropdown', async () => {
      await createEventPage.selectStartTime('23:00');

      expect(await createEventPage.getStartTimeValue()).toBe('23:00');
      await expect(createEventPage.startTimeError).toBeHidden();
    });

    await test.step('8: Manually delete one character from the "Start Time" field', async () => {
      await createEventPage.fillStartTime('23:0');
      await createEventPage.blurStartTime();

      await expect(createEventPage.startTimeError).toHaveText(START_TIME_ERROR);
    });

    await test.step('9: Click the "End Time" field', async () => {
      await createEventPage.clickFinishTime();

      await expect(createEventPage.getTimeListbox('End Time')).toBeVisible();
    });

    await test.step('10: Type an invalid value into the "End Time" field', async () => {
      await createEventPage.fillFinishTime('23:3');
      await createEventPage.blurFinishTime();

      await expect(createEventPage.finishTimeError).toHaveText(END_TIME_ERROR);
      await expect(createEventPage.startTimeError).toHaveText(START_TIME_ERROR);
    });
  });
});
