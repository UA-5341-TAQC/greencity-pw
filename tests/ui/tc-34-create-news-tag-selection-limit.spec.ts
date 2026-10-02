import { test, expect } from '@/fixtures';

test.describe('TC-34 Verify tag selection limit', () => {
	test('Verify that a maximum of three tags can be selected and replaced', async ({
		authenticatedPage,
		ecoNewsPage,
		ecoNewsCreatePage,
		cancelWarningModal,
	}) => {
		await authenticatedPage.waitForLoadState('domcontentloaded');
		await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
		await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

		await ecoNewsPage.navigateToEcoNewsPage();
		await ecoNewsPage.waitForEcoNewsPage();
		await ecoNewsPage.clickCreateNews();
		await ecoNewsCreatePage.waitForCreateNewsPage();

		await ecoNewsCreatePage.selectTag('News');
		await ecoNewsCreatePage.selectTag('Events');
		await ecoNewsCreatePage.selectTag('Education');

		let selectedTags = await ecoNewsCreatePage.getSelectedTags();
		expect(selectedTags).toHaveLength(3);
		expect(selectedTags).toEqual(expect.arrayContaining(['News', 'Events', 'Education']));

		await ecoNewsCreatePage.selectTag('Initiatives');

		selectedTags = await ecoNewsCreatePage.getSelectedTags();
		expect(selectedTags).toHaveLength(3);
		expect(selectedTags).not.toContain('Initiatives');

		await ecoNewsCreatePage.selectTag('News');

		selectedTags = await ecoNewsCreatePage.getSelectedTags();
		expect(selectedTags).toHaveLength(2);
		expect(selectedTags).toEqual(expect.arrayContaining(['Events', 'Education']));
		expect(selectedTags).not.toContain('News');

		await ecoNewsCreatePage.selectTag('Ads');

		selectedTags = await ecoNewsCreatePage.getSelectedTags();
		expect(selectedTags).toHaveLength(3);
		expect(selectedTags).toEqual(expect.arrayContaining(['Events', 'Education', 'Ads']));

		await ecoNewsPage.navigateToEcoNewsPage();
		await cancelWarningModal.cancelEditing();
		await ecoNewsPage.waitForEcoNewsPage();
	});
});
