import { test, expect } from '@/fixtures';

test.describe('TC-79: Verify Eco News display modes', () => {
  test('should verify switching between table view and list view display modes', async ({
    ecoNewsPage,
  }) => {
    // Preconditions
    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();

    // Step 1: Locate the display mode controls
    await expect(ecoNewsPage.tableViewButton).toBeVisible();
    await expect(ecoNewsPage.listViewButton).toBeVisible();
    await expect(ecoNewsPage.tableViewButton).toHaveAttribute('aria-pressed', 'true');
    await expect(ecoNewsPage.listViewButton).toHaveAttribute('aria-pressed', 'false');
    await expect(ecoNewsPage.galleryViewCards.first()).toBeVisible();

    // Step 2: Click the list view control
    await ecoNewsPage.clickListView();
    await expect(ecoNewsPage.listViewButton).toHaveAttribute('aria-pressed', 'true');
    await expect(ecoNewsPage.tableViewButton).toHaveAttribute('aria-pressed', 'false');
    await expect(ecoNewsPage.listViewCards.first()).toBeVisible();

    // Step 3: Click the table view control
    await ecoNewsPage.clickTableView();
    await expect(ecoNewsPage.tableViewButton).toHaveAttribute('aria-pressed', 'true');
    await expect(ecoNewsPage.listViewButton).toHaveAttribute('aria-pressed', 'false');
    await expect(ecoNewsPage.galleryViewCards.first()).toBeVisible();
  });
});
