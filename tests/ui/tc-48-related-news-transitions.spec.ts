import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('TC-48: Related news transitions', () => {
  test('opens the selected related article and displays its content', async ({
    page,
    ecoNewsPage,
    ecoNewsDetailsPage,
  }) => {
    allureId('TC-48');
    epic('Eco News');
    feature('Eco News details');
    story('Transition to a related news article');
    owner('Yurii Koliada');

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();

    await ecoNewsPage.getNewsCardLocator(0).click();
    await ecoNewsDetailsPage.waitForDetailsPage();

    await ecoNewsDetailsPage.relatedNews.scrollIntoView();
    await expect(
      ecoNewsDetailsPage.relatedNews.heading,
      'Related news section is visible'
    ).toBeVisible();
    await expect(
      ecoNewsDetailsPage.relatedNews.items.first(),
      'Related news contains an article'
    ).toBeVisible();

    const currentUrl = page.url();
    const selectedRelatedTitle = await ecoNewsDetailsPage.relatedNews.getItemTitle(0);
    const selectedRelatedSummary = await ecoNewsDetailsPage.relatedNews.getItemSummary(0);
    expect(selectedRelatedTitle, 'Related article has a title').not.toBe('');
    expect(selectedRelatedSummary, 'Related article has a summary').not.toBe('');

    await ecoNewsDetailsPage.relatedNews.openItem(0);

    await expect(page, 'Related article opens a different URL').not.toHaveURL(currentUrl);
    await expect(page, 'Related article opens a news details URL').toHaveURL(/\/news\/\d+$/);
    await expect(ecoNewsDetailsPage.title, 'Opened article has the selected title').toHaveText(
      selectedRelatedTitle
    );
    await expect(
      ecoNewsDetailsPage.content,
      'Opened article contains the selected summary'
    ).toContainText(selectedRelatedSummary);
  });
});
