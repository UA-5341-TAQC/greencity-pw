import { test, expect } from '@/fixtures';
import { allureId, story, owner } from 'allure-js-commons';

test.describe('Tags on news details', () => {

  test('TC-46: Tags on news details', async ({ ecoNewsPage, ecoNewsDetailsPage,}) => {
    allureId('TC-46');
    story('Tags on news details');
    owner('Malesh Inna');

    // Preconditions:
    // The user has access to the GreenCity website.
    // The user is on a news details page for an article that has at least one tag.
    await ecoNewsDetailsPage.navigateToNewsDetails(13268);
    await ecoNewsDetailsPage.waitForDetailsPage();

    //const tagsList = await ecoNewsDetailsPage.getTagTexts();

    // Step 1: Inspect the tags section under/near the article title.
    const isTagsVisible = await ecoNewsDetailsPage.isTagsVisible();
    expect(isTagsVisible).toBe(true);

    // Step 2: Click on one of the tags.
    await ecoNewsDetailsPage.clickTag('News');
    await ecoNewsPage.waitForPageLoad();

    //const isTagHighlighted

  });

});
