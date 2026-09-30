import { test, expect } from '@/fixtures';

test.describe('Page layout and key sections', () => {
  test('TC-35 Verify profile page layout and key sections after login', async ({
    page,
    ecoNewsPage,
    ecoNewsDetailsPage,
  }) => {
    await test.step('Preconditions', async () => {
      await ecoNewsPage.navigateToEcoNewsPage();
      await ecoNewsPage.waitForPageLoad();
      await ecoNewsDetailsPage.navigateToNewsDetails(13268);
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
      expect(page.url()).toContain('/greenCity/news/13268');
    });
  });
});
