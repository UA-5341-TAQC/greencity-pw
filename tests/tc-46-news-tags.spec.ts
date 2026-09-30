import { test, expect } from '@/fixtures';
import { allureId, story, owner } from 'allure-js-commons';

test.describe('Tags on news details', () => {
  test('TC-46: Tags on news details', async ({ page, ecoNewsDetailsPage }) => {
    allureId('TC-46');
    story('Tags on news details');
    owner('Malesh Inna');

    await test.step('Preconditions', async () => {
      await ecoNewsDetailsPage.navigateToNewsDetails(13268);
      await ecoNewsDetailsPage.waitForDetailsPage();
    });

    await test.step('1:Inspect the tags section under/near the article title..', async () => {
      await ecoNewsDetailsPage.checkAllTagsVisible();
      const expCount = 3;
      const actCount = await ecoNewsDetailsPage.tagsCount();
      expect(actCount).toBe(expCount);
    });

    await test.step('2: Verify that the displayed tags are visible.', async () => {
      await ecoNewsDetailsPage.checkAllTagsVisible();

      const tagsList = await ecoNewsDetailsPage.getTagTexts();
      const currentUrl = page.url();

      expect(tagsList).toEqual(['News', 'Education', 'Initiatives']);
      await ecoNewsDetailsPage.clickTag('News');
      expect(page.url()).toBe(currentUrl);
      await ecoNewsDetailsPage.clickTag('Education');
      expect(page.url()).toBe(currentUrl);
      await ecoNewsDetailsPage.clickTag('Initiatives');
      expect(page.url()).toBe(currentUrl);
    });
  });
});
