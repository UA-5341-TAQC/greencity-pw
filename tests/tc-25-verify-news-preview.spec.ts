import { test, expect } from '@/fixtures';

test.describe('TC-25 Verify news preview content', () => {
  test('Verify that user can preview news content after entering valid data and that preview matches the input', async ({
    authenticatedPage,
    ecoNewsPage,
    ecoNewsCreatePage,
    ecoNewsCreatePreviewPage,
  }) => {
    const testTitle = 'Test Preview';
    const testContent = 'This is a test preview content';

    // Preconditions:
    // 1. User is registered and logged into the GreenCity platform (authenticated via API & LocalStorageManager)
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    // 2. User has navigated to the "Eco News" section and clicked "Create news"
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickCreateNews();

    // 3. The "Create news" form is open and fully loaded
    await ecoNewsCreatePage.waitForCreateNewsPage();

    // Step 1: Enter a valid title in the "Title" field ("Test Preview")
    await ecoNewsCreatePage.enterTitle(testTitle);
    expect(await ecoNewsCreatePage.getTitleValue()).toBe(testTitle);
    const titleCounterText = await ecoNewsCreatePage.getTitleInfo();
    expect(titleCounterText).toContain('12/170');

    // Step 2: Select minimum required tags (at least 1: "News")
    await ecoNewsCreatePage.selectNewsTag();
    expect(await ecoNewsCreatePage.isTagSelected('News')).toBe(true);

    // Step 3: Scroll down to the "Content" section - verify editor is visible
    expect(await ecoNewsCreatePage.isContentEditorVisible()).toBe(true);

    // Step 4: Enter valid content in the "Content" field ("This is a test preview content")
    await ecoNewsCreatePage.enterContent(testContent);
    const enteredContent = await ecoNewsCreatePage.getContent();
    expect(enteredContent).toContain(testContent);
    const contentCounterText = await ecoNewsCreatePage.getContentEditorCounter();
    expect(contentCounterText).toContain('30');

    // Step 5: Verify date field contains current date
    const formDate = await ecoNewsCreatePage.getDate();
    expect(formDate).not.toBe('');

    // Step 6: Verify author field displays logged-in user
    const formAuthor = await ecoNewsCreatePage.getAuthor();
    expect(formAuthor).not.toBe('');

    // Step 7: Click the "Preview" button
    await ecoNewsCreatePage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();

    // Step 8: Verify entered title is displayed in preview
    const previewTitle = await ecoNewsCreatePreviewPage.getNewsTitle();
    expect(previewTitle).toBe(testTitle);

    // Step 9: Verify entered content is displayed in preview
    const previewContent = await ecoNewsCreatePreviewPage.getNewsContent();
    expect(previewContent).toContain(testContent);

    // Step 10: Verify current date is displayed in preview
    const previewDate = await ecoNewsCreatePreviewPage.getDate();
    expect(previewDate).not.toBe('');
    expect(previewDate).toContain(formDate);

    // Step 11: Verify author name is displayed in preview
    const previewAuthor = await ecoNewsCreatePreviewPage.getAuthor();
    expect(previewAuthor).not.toBe('');
    expect(previewAuthor).toContain(formAuthor);

    // Step 12: Verify selected tags are displayed in preview
    expect(await ecoNewsCreatePreviewPage.isNewsTagVisible()).toBe(true);

    // Step 13: Locate and verify "Back to editing" button/link is available
    expect(await ecoNewsCreatePreviewPage.isBackButtonVisible()).toBe(true);
    expect(await ecoNewsCreatePreviewPage.isBackButtonEnabled()).toBe(true);

    // Step 14: Locate and verify "Publish" button is available
    expect(await ecoNewsCreatePreviewPage.isPublishButtonVisible()).toBe(true);
    expect(await ecoNewsCreatePreviewPage.isPublishButtonEnabled()).toBe(true);

    // Postconditions: Return to eco news page
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
  });
});
