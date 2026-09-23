import { test, expect } from '@/fixtures';
import { TEST_IMAGE_PATH } from '@/assets';

test.describe('TC-24 Create News', () => {
  test('Verify successful creation and publication of news with all required and optional fields filled', async ({
    authenticatedPage,
    ecoNewsPage,
    createNewsPage,
    createNewsPreviewPage,
  }) => {
    const timestamp = Date.now();
    const testTitle = `New environmental initiative launched in Lviv ${timestamp}`;
    const testTags = ['News', 'Initiatives', 'Education'];
    const testSource = 'https://example.com/article';
    const testContent =
      'Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.';

    // Preconditions:
    // 1. User is registered and logged into the GreenCity platform (authenticated via API & LocalStorageManager)
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    // 2. User has navigated to the "Eco News" section
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();

    // 3. User clicked the "Create news" button
    await ecoNewsPage.clickCreateNews();

    // 4. The "Create news" form is open and fully loaded
    await createNewsPage.waitForCreateNewsPage();

    // Step 1: Fill in the "Title" field with a valid news title
    await createNewsPage.enterTitle(testTitle);
    const counterText = await createNewsPage.getTitleInfo();
    expect(counterText.trim()).toBe(`${testTitle.length}/170`);

    // Step 2: Select 1-3 tags from the available options
    for (const tag of testTags) {
      await createNewsPage.selectTag(tag);
    }
    const selectedTags = await createNewsPage.getSelectedTags();
    expect(selectedTags).toEqual(expect.arrayContaining(testTags));

    // Step 3: Upload an optional picture
    await createNewsPage.uploadPicture(TEST_IMAGE_PATH);
    await createNewsPage.submitPictureInput();
    expect(await createNewsPage.isPictureBoxVisible()).toBe(true);

    // Step 4: Fill in the "Source (optional)" field
    await createNewsPage.enterSource(testSource);
    expect(await createNewsPage.getSource()).toBe(testSource);

    // Step 5 & 6: Fill in the "Content" field with news description
    await createNewsPage.enterContent(testContent);
    const content = await createNewsPage.getContent();
    expect(content.trim()).toContain(testContent);

    // Step 7: Verify the pre-filled "Date" field
    const dateText = await createNewsPage.getDate();
    expect(dateText).not.toBe('');

    // Step 8: Verify the pre-filled "Author" field
    const authorText = await createNewsPage.getAuthor();
    expect(authorText).not.toBe('');

    // Step 9: Click the "Preview" button
    await createNewsPage.preview();
    await createNewsPreviewPage.waitForPreviewPage();
    expect(await createNewsPreviewPage.getNewsTitle()).toBe(testTitle);
    expect(await createNewsPreviewPage.getAuthor()).toContain(authorText);
    expect(await createNewsPreviewPage.getNewsContent()).toContain(testContent);

    // Step 10: Click "Publish" button on preview
    await createNewsPreviewPage.publish();

    // Verify publication success: redirected back to news page or toast appeared
    await ecoNewsPage.waitForEcoNewsPage();

    // Step 11: Verify news appears in the "Eco news" feed
    const firstCardTitle = await ecoNewsPage.getFirstNewsCardTitle();
    expect(firstCardTitle).toBe(testTitle);
  });
});
