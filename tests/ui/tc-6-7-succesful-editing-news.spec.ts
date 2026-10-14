import { test, expect } from '@/fixtures';

test.describe.configure({ mode: 'serial' });

test.describe('TC-006 Verify successful editing of Eco News title', () => {
  test('updates an existing Eco News title and saves the change', async ({
    authenticatedPage,
    profilePage,
    ecoNewsPage,
    ecoNewsDetailsPage,
    editNewsPage,
    ecoNewsCreatePreviewPage,
  }) => {
    const updatedTitle = `Updated Eco News Title ${Date.now()}`;

    // Preconditions: the user is authenticated and English is selected by the auth fixture.
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    await profilePage.navigateToProfile();
    await profilePage.waitForProfile();
    await profilePage.openTab('news');
    await expect(profilePage.newsTab.itemHosts.first()).toBeVisible();
    const ownNews = profilePage.newsTab.getItem(0);
    const originalTitle = await ownNews.getTitle();
    expect(originalTitle).not.toBe('');

    // Open a news item from the authenticated user's own profile.
    await ownNews.open();
    await ecoNewsDetailsPage.waitForDetailsPage();
    const newsId = await ecoNewsDetailsPage.getNewsIdFromUrl();
    await ecoNewsDetailsPage.clickEditNews();
    await editNewsPage.waitForEditNewsPage();

    // Step 2: Confirm the Title field contains the current title.
    const titleField = authenticatedPage.locator('textarea[formcontrolname="title"]');
    await expect(titleField).toHaveValue(originalTitle);

    // Step 3: Replace the title with a valid new value.
    await editNewsPage.enterTitle(updatedTitle);
    await expect(titleField).toHaveValue(updatedTitle);

    // Step 4: Preview and confirm the updated title.
    await editNewsPage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();
    await expect(authenticatedPage.locator('div.news-title')).toHaveText(updatedTitle);

    // Step 5: Save the change from the preview.
    await authenticatedPage.getByRole('button', { name: 'Edit', exact: true }).click();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickListView();
    await expect(ecoNewsPage.listViewCards.first()).toBeVisible();

    // Step 6: Verify the updated article is present in the Eco News list.
    const updatedArticle = ecoNewsPage.listViewCards.filter({
      has: authenticatedPage.locator(`a.link[href="#/greenCity/news/${newsId}"]`),
    });
    await expect(updatedArticle).toHaveCount(1);
    await expect(
      updatedArticle.getByRole('heading', { name: updatedTitle, exact: true })
    ).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/\/greenCity\/news/);
  });
});

test.describe('TC-007 Verify successful editing of Eco News content and tags', () => {
  test('updates content and tags on an existing Eco News item', async ({
    authenticatedPage,
    profilePage,
    ecoNewsPage,
    ecoNewsDetailsPage,
    editNewsPage,
    ecoNewsCreatePreviewPage,
  }) => {
    const updatedContent = 'Updated Eco News content for testing.';
    const updatedTags = ['News', 'Education', 'Initiatives'];

    // Preconditions: the user is authenticated and English is selected by the auth fixture.
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    await profilePage.navigateToProfile();
    await profilePage.waitForProfile();
    await profilePage.openTab('news');
    await expect(profilePage.newsTab.itemHosts.first()).toBeVisible();
    const ownNews = profilePage.newsTab.getItem(0);
    const originalTitle = await ownNews.getTitle();
    expect(originalTitle).not.toBe('');

    // Open a news item from the authenticated user's own profile.
    await ownNews.open();
    await ecoNewsDetailsPage.waitForDetailsPage();
    const newsId = await ecoNewsDetailsPage.getNewsIdFromUrl();
    await ecoNewsDetailsPage.clickEditNews();
    await editNewsPage.waitForEditNewsPage();

    // Step 2: Update the content.
    await editNewsPage.enterContent(updatedContent);
    await expect(authenticatedPage.locator('div.ql-editor').first()).toContainText(updatedContent);

    // Step 3: Set exactly three tags, deselecting any existing tags that are not needed.
    const currentlySelectedTags = await editNewsPage.getSelectedTags();
    const tagsToRemove = currentlySelectedTags.filter((tag) => !updatedTags.includes(tag));
    for (const tag of tagsToRemove) {
      await editNewsPage.selectTag(tag);
    }

    const selectedAfterRemovingExtras = await editNewsPage.getSelectedTags();
    const tagsToAdd = updatedTags.filter((tag) => !selectedAfterRemovingExtras.includes(tag));
    for (const tag of tagsToAdd) {
      await editNewsPage.selectTag(tag);
    }

    const selectedTags = await editNewsPage.getSelectedTags();
    expect(selectedTags).toEqual(expect.arrayContaining(updatedTags));
    expect(selectedTags).toHaveLength(3);

    // Step 4: Preview the updated content and tags.
    await editNewsPage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();
    await expect(authenticatedPage.locator('div.news-text-content')).toContainText(updatedContent);

    // Step 5: Save the changes from the preview and return to the news list.
    await authenticatedPage.getByRole('button', { name: 'Edit', exact: true }).click();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickListView();
    await expect(ecoNewsPage.listViewCards.first()).toBeVisible();

    // Step 6: Verify the edited item is listed, then confirm its saved details.
    const updatedArticle = ecoNewsPage.listViewCards.filter({
      has: authenticatedPage.locator(`a.link[href="#/greenCity/news/${newsId}"]`),
    });
    await expect(updatedArticle).toHaveCount(1);
    await expect(
      updatedArticle.getByRole('heading', { name: originalTitle, exact: true })
    ).toBeVisible();
    await updatedArticle.getByRole('heading', { name: originalTitle, exact: true }).click();
    await ecoNewsDetailsPage.waitForDetailsPage();
    await expect(authenticatedPage.locator('.news-text-content')).toContainText(updatedContent);
    const savedTags = (await ecoNewsDetailsPage.getTagTexts()).map((tag) => tag.trim());
    expect(savedTags).toEqual(expect.arrayContaining(updatedTags));

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
  });
});
