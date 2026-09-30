import { test, expect } from '@/fixtures';

test.describe('Navigation from news details', () => {
  test('TC-47: Back navigation from news details', async ({
    page,
    ecoNewsPage,
    ecoNewsDetailsPage,
  }) => {
    const ECO_NEWS_ID = 13268
    
    await test.step('Preconditions', async () => {
      await ecoNewsPage.navigateToEcoNewsPage();
      await ecoNewsPage.waitForPageLoad();
      await ecoNewsDetailsPage.navigateToNewsDetails(ECO_NEWS_ID);
      await ecoNewsDetailsPage.waitForPageLoad();
    });

    await test.step('1.Locate the "Back"/breadcrumb element on the news details page.', async () => {
      const buttonState = await ecoNewsDetailsPage.isBackButtonVisible();
      expect(buttonState).toBe(true);
    });

    await test.step('2.	Click the "Back" element.', async () => {
      await ecoNewsDetailsPage.clickBack();
      await ecoNewsPage.waitForPageLoad();
      expect(page.url()).toContain('/greenCity/news');
    });

    await test.step("3.	Use the browser's back button instead.", async () => {
      await page.goBack();
      await page.waitForLoadState();
      expect(page.url()).toContain('/greenCity/news/{ECO_NEWS_ID}');
    });
  });
});
