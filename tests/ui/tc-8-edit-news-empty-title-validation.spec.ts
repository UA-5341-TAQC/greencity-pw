import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('TC-008: Empty title validation while editing Eco News', () => {
  test('shows an error border and disables Edit without a text error', async ({
    authenticatedPage: page,
    ecoNewsPage,
    ecoNewsDetailsPage,
    ecoNewsCreatePage,
    ecoNewsCreatePreviewPage,
    editNewsPage,
  }) => {
    allureId('TC-008');
    epic('Eco News');
    feature('Eco News editing');
    story('Empty title validation');
    owner('Yurii Koliada');

    const originalTitle = `TC-008 validation ${Date.now()}`;

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickCreateNews();
    await ecoNewsCreatePage.waitForCreateNewsPage();
    await ecoNewsCreatePage.enterTitle(originalTitle);
    await ecoNewsCreatePage.selectNewsTag();
    await ecoNewsCreatePage.enterContent('Temporary article created for TC-008 validation.');
    await ecoNewsCreatePage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();
    await ecoNewsCreatePreviewPage.publish();
    await ecoNewsPage.waitForEcoNewsPage();

    const createdArticleCard = ecoNewsPage.galleryViewCards
      .filter({ hasText: originalTitle })
      .first();
    await expect(createdArticleCard, 'The test article is published').toBeVisible();
    await createdArticleCard.click();
    await ecoNewsDetailsPage.waitForDetailsPage();

    await ecoNewsDetailsPage.clickEditNews();
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
