import { test, expect } from '@/fixtures';

const invalidDescriptions = [
  { value: 'A', remaining: 9 },
  { value: 'Ab', remaining: 8 },
  { value: 'Abc', remaining: 7 },
  { value: 'Abcd', remaining: 6 },
  { value: 'Abcdf', remaining: 5 },
  { value: 'Abcdfg', remaining: 4 },
  { value: 'Abcdfgk', remaining: 3 },
  { value: 'Abcdfgkl', remaining: 2 },
  { value: 'Abcdfgklm', remaining: 1 },
] as const;

test.describe('Create Event - Description validation', () => {
  test('TC-39: Verify minimum character validation for Events Description', async ({
    authenticatedPage,
    eventsPage,
    createEventPage,
  }) => {
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    await eventsPage.clickCreateEvent();
    await createEventPage.waitForCreateEventPage();

    for (const { value, remaining } of invalidDescriptions) {
      await test.step(`Enter ${value.length} character${value.length === 1 ? '' : 's'}`, async () => {
        await createEventPage.fillDescription(value);

        await expect(
          createEventPage.descriptionValidationMessage,
          `Description should require ${remaining} more character${remaining === 1 ? '' : 's'}`
        ).toHaveText(`Not enough characters. Left: ${remaining}`);
      });
    }
  });
});
