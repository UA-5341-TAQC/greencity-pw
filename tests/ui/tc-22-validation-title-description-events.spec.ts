import { test, expect } from '@/fixtures';

const TITLE_VALIDATION_MESSAGE = 'Enter a title up to and including 70 characters';
const DESCRIPTION_TOO_SHORT_MESSAGE = 'Not enough characters. Left: 1';
const DESCRIPTION_TOO_LONG_MESSAGE = 'The maximum character length is greater than 1';

test.describe('Events - Edit Event validation', () => {
	test('TC-22: Verify title and description validation and Save event state', async ({
		authenticatedPage,
		eventsPage,
		editEventPage,
	}) => {
		await eventsPage.navigateToEventsPage();
		await eventsPage.waitForEventsPage();

		const eventCard = await eventsPage.getFirstEditableEventCard();
		await eventCard.clickEditEvent();
		await editEventPage.waitForEditEventPage();

		const saveEventButton = editEventPage.saveEventButton;
		const titleValidationMessage = authenticatedPage.getByText(TITLE_VALIDATION_MESSAGE, {
			exact: true,
		});
		const titleCounter = authenticatedPage.getByText(/^70\s*\/\s*70$/, { exact: false });
		const descriptionRequiredMessage = authenticatedPage.getByText(/required/i).last();
		const descriptionTooShortMessage = authenticatedPage.getByText(
			DESCRIPTION_TOO_SHORT_MESSAGE,
			{ exact: true }
		);
		const descriptionTooLongMessage = authenticatedPage.getByText(
			DESCRIPTION_TOO_LONG_MESSAGE,
			{ exact: true }
		);

		await test.step('Verify the form starts with Save event enabled', async () => {
			await expect(saveEventButton).toBeEnabled();
		});

		await test.step('Clear the title and verify required length validation', async () => {
			await editEventPage.titleInput.fill('');
			await editEventPage.titleInput.press('Tab');

			await expect(saveEventButton).toBeDisabled();
			await expect(titleValidationMessage).toBeVisible();
		});

		await test.step('Enter 71 title characters and verify the 70-character limit', async () => {
			await editEventPage.titleInput.fill('');
			await editEventPage.titleInput.pressSequentially('A'.repeat(71));

			await expect(editEventPage.titleInput).toHaveValue('A'.repeat(70));
			await expect(titleCounter).toBeVisible();
			await expect(saveEventButton).toBeEnabled();
		});

		await test.step('Enter a valid title', async () => {
			await editEventPage.enterTitle('Valid Title 123');
			await editEventPage.titleInput.press('Tab');

			await expect(editEventPage.titleInput).toHaveValue('Valid Title 123');
			await expect(saveEventButton).toBeEnabled();
		});

		await test.step('Clear the description and verify its required validation', async () => {
			await editEventPage.enterDescription('');
			await editEventPage.descriptionEditor.press('Tab');

			await expect(saveEventButton).toBeDisabled();
			await expect(descriptionRequiredMessage).toBeVisible();
		});

		await test.step('Enter 9 description characters and verify the minimum length message', async () => {
			await editEventPage.enterDescription('123456789');
			await editEventPage.descriptionEditor.press('Tab');

			await expect(descriptionTooShortMessage).toBeVisible();
			await expect(saveEventButton).toBeDisabled();
		});

		await test.step('Enter 63,207 description characters and verify the maximum length message', async () => {
			await editEventPage.enterDescription('A'.repeat(63207));
			await editEventPage.descriptionEditor.press('Tab');

			await expect(descriptionTooLongMessage).toBeVisible();
			await expect(saveEventButton).toBeDisabled();
		});

		await test.step('Enter a valid 10-character description', async () => {
			await editEventPage.enterDescription('1234567890');
			await editEventPage.descriptionEditor.press('Tab');

			await expect(descriptionTooShortMessage).toBeHidden();
			await expect(descriptionTooLongMessage).toBeHidden();
			await expect(descriptionRequiredMessage).toBeHidden();
			await expect(saveEventButton).toBeEnabled();
		});
	});
});
