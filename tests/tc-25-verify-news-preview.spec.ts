import { test, expect } from '@/fixtures';

test.describe('TC-25 Verify news preview content', () => {
  test('Verify that user can preview news content after entering valid data and that preview matches the input', async ({
    authenticatedPage,
    ecoNewsPage,
    createNewsPage,
    createNewsPreviewPage,
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
    await createNewsPage.waitForCreateNewsPage();

    // Step 1: Enter a valid title in the "Title" field ("Test Preview")
    await createNewsPage.enterTitle(testTitle);
    expect(await createNewsPage.getTitleValue()).toBe(testTitle);
    const titleCounterText = await createNewsPage.getTitleInfo();
    expect(titleCounterText).toContain('12/170');

    // Step 2: Select minimum required tags (at least 1: "News")
    await createNewsPage.selectNewsTag();
    expect(await createNewsPage.isTagSelected('News')).toBe(true);

    // Step 3: Scroll down to the "Content" section - verify editor is visible
    expect(await createNewsPage.isContentEditorVisible()).toBe(true);

    // Step 4: Enter valid content in the "Content" field ("This is a test preview content")
    await createNewsPage.enterContent(testContent);
    const enteredContent = await createNewsPage.getContent();
    expect(enteredContent).toContain(testContent);
    const contentCounterText = await createNewsPage.getContentEditorCounter();
    expect(contentCounterText).toContain('30');

    // Step 5: Verify date field contains current date
    const formDate = await createNewsPage.getDate();
    expect(formDate).not.toBe('');

    // Step 6: Verify author field displays logged-in user
    const formAuthor = await createNewsPage.getAuthor();
    expect(formAuthor).not.toBe('');

    // Step 7: Click the "Preview" button
    await createNewsPage.preview();
    await createNewsPreviewPage.waitForPreviewPage();

    // Step 8: Verify entered title is displayed in preview
    const previewTitle = await createNewsPreviewPage.getNewsTitle();
    expect(previewTitle).toBe(testTitle);

    // Step 9: Verify entered content is displayed in preview
    const previewContent = await createNewsPreviewPage.getNewsContent();
    expect(previewContent).toContain(testContent);

    // Step 10: Verify current date is displayed in preview
    const previewDate = await createNewsPreviewPage.getDate();
    expect(previewDate).not.toBe('');
    expect(previewDate).toContain(formDate);

    // Step 11: Verify author name is displayed in preview
    const previewAuthor = await createNewsPreviewPage.getAuthor();
    expect(previewAuthor).not.toBe('');
    expect(previewAuthor).toContain(formAuthor);

    // Step 12: Verify selected tags are displayed in preview
    expect(await createNewsPreviewPage.isNewsTagVisible()).toBe(true);

    // Step 13: Locate and verify "Back to editing" button/link is available
    expect(await createNewsPreviewPage.isBackButtonVisible()).toBe(true);
    expect(await createNewsPreviewPage.isBackButtonEnabled()).toBe(true);

    // Step 14: Locate and verify "Publish" button is available
    expect(await createNewsPreviewPage.isPublishButtonVisible()).toBe(true);
    expect(await createNewsPreviewPage.isPublishButtonEnabled()).toBe(true);

    // Postconditions: Return to eco news page
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
  });
});
