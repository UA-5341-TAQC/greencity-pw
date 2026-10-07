import { test, expect } from '@/fixtures';
import EditNewsPage from '@/pages/edit-news-page';

test.describe('TC-005 Verify opening the Eco News editing form', () => {
  test('opens the current user’s Eco News item in edit form without changing it', async ({
    authenticatedPage,
    ecoNewsPage,
  }) => {
    const editNewsPage = new EditNewsPage(authenticatedPage);

    await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
    await ecoNewsPage.clickListView();

    const editableCards = ecoNewsPage.listViewCards.filter({
      has: authenticatedPage.locator('.button-news-card button'),
    });
    const card = editableCards.first();
    await expect(card.locator('.button-news-card button')).toBeVisible();
    const originalTitle = (await card.locator('h3').innerText()).trim();
    const originalTags = await card
      .locator('.eco-news_list-tag span:not(.tag-divider)')
      .allTextContents();
    const editLink = card.locator('a.link');
    await expect(editLink).toHaveAttribute('href', /.+/);

    await card.locator('.button-news-card button').click();
    await authenticatedPage.getByText('Edit news', { exact: true }).click();
    await editNewsPage.waitForEditNewsPage();

    await expect(authenticatedPage.locator('textarea[formcontrolname="title"]')).toHaveValue(
      originalTitle
    );
    await expect(authenticatedPage.locator('div.tags-box')).toBeVisible();
    const loadedTags = await editNewsPage.getSelectedTags();
    expect(loadedTags.length).toBeGreaterThan(0);
    for (const tag of originalTags.map((value) => value.trim()).filter(Boolean)) {
      expect(loadedTags.join(' ')).toContain(tag);
    }
    await expect(
      authenticatedPage.locator(
        'div.source-block input[type="text"], input[formcontrolname="source"]'
      )
    ).toBeVisible();
    await expect(authenticatedPage.locator('div.ql-editor').first()).toBeVisible();
    await expect(authenticatedPage.getByText('Picture (optional)', { exact: true })).toBeVisible();

    const sourceBefore = await editNewsPage.getSource();
    const contentBefore = await editNewsPage.getContent();
    const dateBefore = await editNewsPage.getDate();
    const authorBefore = await editNewsPage.getAuthor();
    expect(contentBefore.trim()).not.toBe('');
    expect(dateBefore.trim()).not.toBe('');
    expect(authorBefore.trim()).not.toBe('');

    await expect(authenticatedPage.getByText('Pick tags for news', { exact: true })).toBeVisible();
    await expect(authenticatedPage.getByText('Picture (optional)', { exact: true })).toBeVisible();
    await expect(authenticatedPage.getByText('Source (optional)', { exact: true })).toBeVisible();
    await expect(authenticatedPage.getByText('Content', { exact: true })).toBeVisible();
    await expect(
      authenticatedPage
        .locator('div.submit-buttons')
        .getByRole('button', { name: 'Cancel', exact: true })
    ).toBeVisible();
    await expect(
      authenticatedPage.getByRole('button', { name: 'Preview', exact: true })
    ).toBeVisible();
    await expect(
      authenticatedPage.getByRole('button', { name: 'Edit', exact: true })
    ).toBeVisible();

    expect(await editNewsPage.getTitleValue()).toBe(originalTitle);
    expect(await editNewsPage.getSelectedTags()).toEqual(loadedTags);
    expect(await editNewsPage.getSource()).toBe(sourceBefore);
    expect(await editNewsPage.getContent()).toBe(contentBefore);
    expect(await editNewsPage.getDate()).toBe(dateBefore);
    expect(await editNewsPage.getAuthor()).toBe(authorBefore);
    await expect(authenticatedPage).toHaveURL(/create-news\?id=/);
  });
});
