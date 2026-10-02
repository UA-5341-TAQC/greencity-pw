import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('TC-008: Empty title validation while editing Eco News', () => {
  test('shows an error border and disables Edit without a text error', async ({
    authenticatedPage: page,
    profilePage,
    editNewsPage,
  }) => {
    allureId('TC-008');
    epic('Eco News');
    feature('Eco News editing');
    story('Empty title validation');
    owner('Yurii Koliada');

    await profilePage.navigateToProfile();
    await profilePage.waitForProfile();
    await profilePage.openTab('news');
    const ownedArticle = profilePage.newsTab.getItem(0);
    await expect(ownedArticle.title, 'An owned Eco News item is available').toBeVisible();
    const originalTitle = await ownedArticle.getTitle();

    await ownedArticle.open();
    await page.getByText('Edit news', { exact: true }).click();
    await editNewsPage.waitForEditNewsPage();
    await expect(editNewsPage.titleInput).toHaveValue(originalTitle);

    await editNewsPage.titleInput.fill('');
    await expect(editNewsPage.titleInput, 'Title is empty').toHaveValue('');
    await expect(editNewsPage.titleInfo, 'Title counter is 0/170').toHaveText('0/170');

    await editNewsPage.titleInput.press('Tab');
    await expect(editNewsPage.titleInput, 'Empty title has a red border').toHaveCSS(
      'border-color',
      'rgb(255, 0, 0)'
    );
    await expect(editNewsPage.editButton, 'Edit is disabled').toBeDisabled();
    await expect(editNewsPage.titleBlock, 'No text validation message').toHaveText(
      /^\s*Title\s*0\/170\s*$/
    );

    await page.reload();
    await editNewsPage.waitForEditNewsPage();
    await expect(editNewsPage.titleInput, 'Original title remains unchanged').toHaveValue(
      originalTitle
    );
  });
});
