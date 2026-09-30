import { test, expect } from '@/fixtures';

test.describe('TC-006 Verify successful editing of Eco News title', () => {
  test('updates an existing Eco News title and saves the change', async ({
    authenticatedPage,
    ecoNewsPage,
    ecoNewsCreatePage,
    ecoNewsCreatePreviewPage,
  }) => {
    const updatedTitle = 'Updated Eco News Title';

    // Preconditions: the user is authenticated and English is selected by the auth fixture.
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickListView();

    // Find an existing article owned by the user; only its card exposes the edit menu.
    const cards = ecoNewsPage.listViewCards;
    const editableCards = cards.filter({
      has: authenticatedPage.locator('.button-news-card button'),
    });
    const editableCard = editableCards.first();
    await expect(
      editableCard.locator('.button-news-card button'),
      'The user should have an existing editable Eco News item'
    ).toBeVisible();
    const originalTitle = (await editableCard.locator('h3').innerText()).trim();
    expect(originalTitle).not.toBe('');

    // Step 1: Open the existing news item menu and choose Edit news.
    await editableCard.locator('.button-news-card button').click();
    await authenticatedPage.getByText('Edit news', { exact: true }).click();
    await ecoNewsCreatePage.waitForCreateNewsPage();

    // Step 2: Confirm the Title field contains the current title.
    const titleField = authenticatedPage.locator('textarea[formcontrolname="title"]');
    await expect(titleField).toHaveValue(originalTitle);

    // Step 3: Replace the title with a valid new value.
    await ecoNewsCreatePage.enterTitle(updatedTitle);
    await expect(titleField).toHaveValue(updatedTitle);

    // Step 4: Preview and confirm the updated title.
    await ecoNewsCreatePage.preview();
    await ecoNewsCreatePreviewPage.waitForPreviewPage();
    await expect(authenticatedPage.locator('div.news-title')).toHaveText(updatedTitle);

    // Step 5: Save the change from the preview.
    await authenticatedPage.getByRole('button', { name: 'Edit', exact: true }).click();
    await ecoNewsPage.waitForEcoNewsPage();

    // Step 6: Verify the updated article is present in the Eco News list.
    await expect(
      ecoNewsPage.listViewCards.getByRole('heading', { name: updatedTitle, exact: true })
    ).toBeVisible();
    await expect(authenticatedPage).toHaveURL(/\/greenCity\/news/);
  });
});
