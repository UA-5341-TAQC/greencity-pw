import { test, expect } from '@/fixtures';
import { EventTypeFilter } from '@/types';

test.describe('Event page: Filter function', () => {
  test('TC-40 Verify that a user can filter events by type', async ({ eventsPage }) => {
    await test.step('Preconditions.', async () => {
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
    });

    await eventsPage.waitForEventsPage();
    const initialItemsCount = await eventsPage.getItemsFoundCount();
    expect(initialItemsCount).toBeGreaterThan(0);

    await test.step('1.Click the "Type" filter.', async () => {
      await eventsPage.filters.openTypeFilter();
      expect(await eventsPage.filters.isTypeDropdownVisible()).toBe(true);
    });

    await test.step('2.Select the "Economic" option.', async () => {
      await eventsPage.filters.selectOption(EventTypeFilter.Economic);
      expect(await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Economic)).toBe(
        true
      );
      await eventsPage.filters.closeDropdown();
      await expect(eventsPage.itemsFound).toBeVisible();
    });

    await test.step('3.Verify that all displayed events belong to the selected type.', async () => {
      await expect
        .poll(async () => await eventsPage.areAllCardsTaggedWith(EventTypeFilter.Economic))
        .toBe(true);
    });

    await test.step('4.	Verify that the applied filter indicator "Economic" is displayed above the events list.', async () => {
      const expChips = ['Economic'];
      await expect
        .poll(async () => await eventsPage.getAllActiveFilterTexts())
        .toStrictEqual(expChips);
    });

    await test.step('5.	Click the "x" icon on the "Economic" filter indicator.', async () => {
      const economicChip = eventsPage.getActiveFilterChipByType(EventTypeFilter.Economic);
      await economicChip.remove();
      await eventsPage.waitForPageLoad();
      const expectedText = eventsPage.i18n.typeOptions[EventTypeFilter.Economic];

      await expect(economicChip.chip).toBeHidden();
      await expect
        .poll(async () => {
          return await eventsPage.getAllActiveFilterTexts();
        })
        .not.toContain(expectedText);
    });

    await test.step('6.	Open the "Type" filter and select two event types.', async () => {
      await eventsPage.filters.openTypeFilter();
      await eventsPage.filters.selectOption(EventTypeFilter.Social);
      expect(await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Social)).toBe(true);

      await eventsPage.filters.selectOption(EventTypeFilter.Environmental);
      expect(
        await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Environmental)
      ).toBe(true);
      await eventsPage.filters.closeDropdown();
      await expect(eventsPage.itemsFound).toBeVisible();
    });

    await test.step('7. Verify that all displayed events belong to one of the selected types.', async () => {
      await expect
        .poll(
          async () =>
            await eventsPage.areAllCardsTaggedWith(
              EventTypeFilter.Social,
              EventTypeFilter.Environmental
            )
        )
        .toBe(true);
    });

    await test.step('8. Verify that the applied filter indicators "Social" and "Environmental" are displayed above the events list.', async () => {
      const expectedChips = ['Social', 'Environmental'];
      await expect
        .poll(async () => await eventsPage.getAllActiveFilterTexts())
        .toStrictEqual(expectedChips);
    });

    await test.step('9. Click the "Reset all" button in the "Filter" section.', async () => {
      await eventsPage.filters.resetAll();
      await eventsPage.waitForPageLoad();
      const expectedText = [
        eventsPage.i18n.typeOptions[EventTypeFilter.Social],
        eventsPage.i18n.typeOptions[EventTypeFilter.Environmental],
      ];

      await expect
        .poll(async () => {
          return await eventsPage.getAllActiveFilterTexts();
        })
        .not.toContain(expectedText);
    });

    await test.step('10. Verify that the "Items found" count is restored to the value recorded before applying the filter.', async () => {
      await expect
        .poll(async () => {
          return await eventsPage.getItemsFoundCount();
        })
        .toEqual(initialItemsCount);
    });

    await test.step('11. Open the "Type" filter again and select the "All types" option.', async () => {
      await eventsPage.filters.openTypeFilter();
      await eventsPage.filters.selectOption(EventTypeFilter.All);

      expect(await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.All)).toBe(true);
      expect(await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Economic)).toBe(
        true
      );
      expect(await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Social)).toBe(true);
      expect(
        await eventsPage.filters.isSpecificOptionsSelected(EventTypeFilter.Environmental)
      ).toBe(true);

      await eventsPage.filters.closeDropdown();
      await expect.poll(async () => await eventsPage.isEventCardVisible()).toBe(true);
    });

    await test.step('12. Verify that the filter indicators for all selected types are displayed above the events list.', async () => {
      const expectedChips = ['Economic', 'Social', 'Environmental'];
      await expect
        .poll(async () => await eventsPage.getAllActiveFilterTexts())
        .toStrictEqual(expectedChips);
    });

    await test.step('13. Click the "x" icon on the "Environmental" filter indicator.', async () => {
      const environmentalChip = eventsPage.getActiveFilterChipByType(EventTypeFilter.Environmental);
      await environmentalChip.remove();
      await eventsPage.waitForPageLoad();
      const expectedText = eventsPage.i18n.typeOptions[EventTypeFilter.Environmental];

      await expect(environmentalChip.chip).toBeHidden();
      await expect
        .poll(async () => {
          return await eventsPage.getAllActiveFilterTexts();
        })
        .not.toContain(expectedText);

      const expectedChips = ['Economic', 'Social'];
      await expect
        .poll(async () => await eventsPage.getAllActiveFilterTexts())
        .toStrictEqual(expectedChips);
    });

    await test.step('14. Verify that all displayed events belong to one of the remaining selected types.', async () => {
      await expect
        .poll(
          async () =>
            await eventsPage.areAllCardsTaggedWith(EventTypeFilter.Social, EventTypeFilter.Economic)
        )
        .toBe(true);
    });

    await test.step('15. Verify that the "Environmental" filter indicator is no longer displayed.', async () => {
      const expectedText = eventsPage.i18n.typeOptions[EventTypeFilter.Environmental];
      const environmentalChip = eventsPage.getActiveFilterChipByType(EventTypeFilter.Environmental);
      await expect(environmentalChip.chip).toBeHidden();
      await expect
        .poll(async () => {
          return await eventsPage.getAllActiveFilterTexts();
        })
        .not.toContain(expectedText);

      const expectedChips = ['Economic', 'Social'];
      await expect
        .poll(async () => await eventsPage.getAllActiveFilterTexts())
        .toStrictEqual(expectedChips);
    });
  });
});
