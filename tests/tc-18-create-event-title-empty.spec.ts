import { test, expect } from '@/fixtures';

test.describe('TC-18 Create event: title field (negative)', () => {
	test('shows title validation and character count when the title is empty', async ({
		authenticatedPage,
		eventsPage,
		createEventPage,
	}) => {
		const titleValidationMessage = 'Enter a title up to and including 70 characters';
		const shortTitle = 'Any';

		await eventsPage.navigateToEventsPage();
		await eventsPage.waitForEventsPage();

		// Step 1: Open the Create event form.
		await eventsPage.clickCreateEvent();
		await createEventPage.waitForCreateEventPage();

		// Step 2: Focus the empty Title field.
		await createEventPage.focusTitle();
		expect(await createEventPage.isTitleFocused()).toBe(true);

		// Step 3: Move focus to the description and verify the title validation state.
		await createEventPage.focusDescription();
		expect(await createEventPage.isDescriptionFocused()).toBe(true);
		await expect
			.poll(() => createEventPage.isTitleValidationErrorVisible())
			.toBe(true);
		await expect.poll(() => createEventPage.isTitleInvalid()).toBe(true);
		await expect(authenticatedPage.getByText(titleValidationMessage, { exact: true })).toBeVisible();
		await expect.poll(() => createEventPage.getTitleCounter()).toBe('0 / 70');

		// Step 4: Focus the Title field again.
		await createEventPage.focusTitle();
		expect(await createEventPage.isTitleFocused()).toBe(true);

		// Step 5: Enter a three-character value and verify the counter.
		await createEventPage.fillTitle(shortTitle);
		await expect.poll(() => createEventPage.getTitle()).toBe(shortTitle);
		await expect.poll(() => createEventPage.getTitleCounter()).toBe('3 / 70');

		// Step 6: Clear the title and blur it to re-trigger validation.
		await createEventPage.fillTitle('');
		await createEventPage.focusDescription();
		expect(await createEventPage.isDescriptionFocused()).toBe(true);
		await expect
			.poll(() => createEventPage.isTitleValidationErrorVisible())
			.toBe(true);
		await expect.poll(() => createEventPage.isTitleInvalid()).toBe(true);
		await expect(authenticatedPage.getByText(titleValidationMessage, { exact: true })).toBeVisible();
		await expect.poll(() => createEventPage.getTitleCounter()).toBe('0 / 70');
	});
});
