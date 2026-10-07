import { test, expect } from '@/fixtures';
import { CityFilterModal } from '@/modals/city-filter-modal';

test.describe('TC-30 Verify that a user can filter events by city', () => {
  test('filters events by Odesa and restores the default filter state', async ({
    eventsPage,
    authenticatedPage,
  }) => {
    const cityName = 'Odesa';
    const cityOption = 'Odesa, Odesa Oblast, Ukraine';

    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    if (await eventsPage.filters.isResetButtonEnabled()) {
      await eventsPage.filters.resetAll();
      await expect(eventsPage.itemsFound).toBeVisible();
    }
    const initialCount = await eventsPage.getItemsFoundCount();
    expect(initialCount).toBeGreaterThan(0);

    await eventsPage.filters.openLocationFilter();
    const locationOptions = authenticatedPage.locator('.mat-mdc-select-panel:visible');
    for (const label of ['Select All', 'Online', 'Offline', 'Filter cities']) {
      await expect(locationOptions.getByText(label, { exact: true })).toBeVisible();
    }
    await locationOptions.getByText('Filter cities', { exact: true }).click();

    const modalRoot = authenticatedPage.locator('div.city-modal-header').locator('xpath=..');
    const modal = new CityFilterModal(authenticatedPage, modalRoot);
    await expect(modalRoot).toBeVisible();
    await expect(modalRoot.getByRole('combobox')).toBeVisible();

    if (!(await modal.isCitySelected(cityName))) {
      await modal.fillCitySearch(cityName);
      await expect(authenticatedPage.getByRole('listbox')).toBeVisible();
      await modal.selectFirstCitySuggestion(cityOption);
    }
    await expect(modalRoot.locator('div.city-tag').filter({ hasText: cityName })).toBeVisible();
    await modal.clickAddSelectedCities();
    await expect(modalRoot).toBeHidden();
    await authenticatedPage.keyboard.press('Escape');

    await eventsPage.filters.openLocationFilter();
    const cityFilterOption = authenticatedPage
      .locator('.mat-mdc-select-panel:visible')
      .getByText(cityName, { exact: true })
      .last();
    await expect(cityFilterOption).toBeVisible();
    const cityOptionElement = authenticatedPage
      .locator('.mat-mdc-select-panel:visible')
      .getByRole('option', { name: cityName, exact: true });
    await expect(cityOptionElement).toHaveAttribute('aria-selected', 'false');
    await cityFilterOption.click();
    await eventsPage.filters.closeDropdown();

    const cityChip = eventsPage.getActiveFilterChipByText(cityName);
    await expect(cityChip.chip).toBeVisible();
    await expect
      .poll(() => eventsPage.getItemsFoundCount(), {
        message: 'Events list did not finish applying the city filter',
      })
      .toBeGreaterThan(0);
    const filteredCount = await eventsPage.getItemsFoundCount();
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);

    const renderedCards = await eventsPage.getAllGridEventCards();
    expect(renderedCards).toHaveLength(filteredCount);
    for (const card of renderedCards) {
      expect(await card.getLocation()).toContain(cityName);
    }

    await cityChip.remove();
    await expect(cityChip.chip).toBeHidden();
    await expect(eventsPage.itemsFound).toHaveText(new RegExp(`\\b${initialCount}\\b`));
    expect(await eventsPage.getItemsFoundCount()).toBe(initialCount);
  });
});
