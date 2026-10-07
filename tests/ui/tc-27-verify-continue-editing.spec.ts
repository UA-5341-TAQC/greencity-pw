import { test, expect } from '@/fixtures';

const TITLE = 'Test';
const CONTENT = 'Test content with 26 chars';
const TAG = 'News';
const WARNING_MESSAGE =
  'All created content will be lost. Do you still want to cancel news creating?';

test.describe('Create Eco News - Continue Editing', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-27 Verify Continue editing dismisses modal and retains entered data', async ({
    page,
    ecoNewsPage,
    ecoNewsCreatePage,
    cancelWarningModal,
  }) => {
    await test.step('Navigate to Eco News and open Create News page', async () => {
      await ecoNewsPage.navigateToEcoNewsPage();
      await ecoNewsPage.waitForEcoNewsPage();

      await ecoNewsPage.clickCreateNews();
      await ecoNewsCreatePage.waitForCreateNewsPage();
    });

    await test.step('Enter title', async () => {
      await ecoNewsCreatePage.enterTitle(TITLE);

      expect(await ecoNewsCreatePage.getTitleValue()).toBe(TITLE);
      expect(await ecoNewsCreatePage.getTitleInfo()).toContain('4/170');
    });

    await test.step('Enter content', async () => {
      await ecoNewsCreatePage.enterContent(CONTENT);

      expect(await ecoNewsCreatePage.getContent()).toBe(CONTENT);
      expect(await ecoNewsCreatePage.getContentEditorCounter()).toContain(
        'Number of characters: 26'
      );
    });

    await test.step('Select News tag', async () => {
      await ecoNewsCreatePage.selectNewsTag();

      expect(await ecoNewsCreatePage.isTagSelected(TAG)).toBe(true);
    });

    await test.step('Click Cancel button', async () => {
      await ecoNewsCreatePage.cancel();
    });

    await test.step('Verify confirmation modal message', async () => {
      expect(await cancelWarningModal.getWarningText()).toBe(WARNING_MESSAGE);
    });

    await test.step('Click Continue editing', async () => {
      await cancelWarningModal.continueEditing();
    });

    await test.step('Verify Create News form remains open', async () => {
      await expect(page).toHaveURL(/\/#\/greenCity\/news\/create-news$/);
    });

    await test.step('Verify title data is retained', async () => {
      expect(await ecoNewsCreatePage.getTitleValue()).toBe(TITLE);
      expect(await ecoNewsCreatePage.getTitleInfo()).toContain('4/170');
    });

    await test.step('Verify content data is retained', async () => {
      expect(await ecoNewsCreatePage.getContent()).toBe(CONTENT);
      expect(await ecoNewsCreatePage.getContentEditorCounter()).toContain(
        'Number of characters: 26'
      );
    });

    await test.step('Verify News tag is retained', async () => {
      expect(await ecoNewsCreatePage.isTagSelected(TAG)).toBe(true);
    });
  });
});
