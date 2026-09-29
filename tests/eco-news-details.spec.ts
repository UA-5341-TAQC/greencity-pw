import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('Eco News Details Page', () => {
  test('TC-44: Verify Eco News details page content displays correctly', async ({
    ecoNewsPage,
    ecoNewsDetailsPage,
  }) => {
    allureId('TC-44');
    epic('Eco News');
    feature('Eco News details');
    story('Eco News details view');
    owner('Yurii Koliada');

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();

    const newsCardsCount = await ecoNewsPage.getNewsCardsCount();
    expect(newsCardsCount).toBeGreaterThan(0);

    await ecoNewsPage.getNewsCardLocator(0).click();
    await ecoNewsDetailsPage.waitForDetailsPage();

    const title = await ecoNewsDetailsPage.getTitleText();
    expect(title.length).toBeGreaterThan(0);

    const isImageVisible = await ecoNewsDetailsPage.isCoverImageVisible();
    expect(isImageVisible).toBe(true);

    const author = await ecoNewsDetailsPage.getAuthorName();
    expect(author.length).toBeGreaterThan(0);

    const date = await ecoNewsDetailsPage.getPublicationDate();
    expect(date.length).toBeGreaterThan(0);

    const content = await ecoNewsDetailsPage.getContentText();
    expect(content.length).toBeGreaterThan(0);

    const tagTexts = await ecoNewsDetailsPage.getTagTexts();
    expect(tagTexts.length).toBeGreaterThan(0);
  });
});
