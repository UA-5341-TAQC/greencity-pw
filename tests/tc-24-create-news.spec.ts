import { test, expect } from '@/fixtures';
import env from '@/config/env';
import { TEST_IMAGE_PATH } from '@/assets';

test.describe('TC-24 Create News', () => {
  test('Verify successful creation and publication of news with all required and optional fields filled', async ({
    homePage,
    signInModal,
    ecoNewsPage,
    ecoNewsCreatePage,
    ecoNewsCreatePreviewPage,
  }) => {
    const timestamp = Date.now();
    const testTitle = `New environmental initiative launched in Lviv ${timestamp}`;
    const testTags = ['News', 'Initiatives', 'Education'];
    const testSource = 'https://example.com/article';
    const testContent =
      'Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.';

    // Preconditions:
    // 1. User is registered and logged into the GreenCity platform
    await homePage.navigateToHomePage();
    await homePage.waitForHomePage();
    await homePage.header.clickSignIn();
    await signInModal.waitForVisible();
    await signInModal.signIn(env.USER_EMAIL, env.USER_PASSWORD);
    await expect(homePage.header.userMenuDropdown).toBeVisible({ timeout: env.MEDIUM_TIMEOUT });

    // 2. User has navigated to the "Eco News" section
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();

    // 3. User clicked the "Create news" button
    await ecoNewsPage.clickCreateNews();

    // 4. The "Create news" form is open and fully loaded
    await ecoNewsCreatePage.waitForCreateNewsPage();

    // Step 1: Fill in the "Title" field with a valid news title
    await ecoNewsCreatePage.enterTitle(testTitle);
    const counterText = await ecoNewsCreatePage.getTitleInfo();
    expect(counterText.trim()).toBe(`${testTitle.length}/170`);

    // Step 2: Select 1-3 tags from the available options
    for (const tag of testTags) {
      await ecoNewsCreatePage.selectTag(tag);
    }
    const selectedTags = await ecoNewsCreatePage.getSelectedTags();
    expect(selectedTags).toEqual(expect.arrayContaining(testTags));

    // Step 3: Upload an optional picture
    await ecoNewsCreatePage.uploadPicture(TEST_IMAGE_PATH);
    await ecoNewsCreatePage.submitPictureInput();
    expect(await ecoNewsCreatePage.isPictureBoxVisible()).toBe(true);

    // Step 4: Fill in the "Source (optional)" field
    await ecoNewsCreatePage.enterSource(testSource);
    expect(await ecoNewsCreatePage.getSource()).toBe(testSource);

    // Step 5 & 6: Fill in the "Content" field with news description
    await ecoNewsCreatePage.enterContent(testContent);
    const content = await ecoNewsCreatePage.getContent();
    expect(content.trim()).toContain(testContent);

    // Step 7: Verify the pre-filled "Date" field
    const dateText = await ecoNewsCreatePage.getDate();
    expect(dateText).not.toBe('');

    // Step 8: Verify the pre-filled "Author" field
    const authorText = await ecoNewsCreatePage.getAuthor();
    expect(authorText).not.toBe('');

    // Step 9: Click the "Preview" button
    await ecoNewsCreatePage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();
    expect(await ecoNewsCreatePreviewPage.getNewsTitle()).toBe(testTitle);
    expect(await ecoNewsCreatePreviewPage.getAuthor()).toContain(authorText);
    expect(await ecoNewsCreatePreviewPage.getNewsContent()).toContain(testContent);

    // Step 10: Click "Publish" button on preview
    await ecoNewsCreatePreviewPage.publish();

    // Verify publication success: redirected back to news page or toast appeared
    await ecoNewsPage.waitForEcoNewsPage();

    // Step 11: Verify news appears in the "Eco news" feed
    const firstCardTitle = await ecoNewsPage.getFirstNewsCardTitle();
    expect(firstCardTitle).toBe(testTitle);
  });
});
