import { test, expect } from '@/fixtures';

test.describe('Verify Cancel changes', () => {
  test('[TC-09] Verify that Cancel does not save Eco News changes', async ({
    authenticatedPage,
    ecoNewsDetailsPage,
    editNewsPage,
    profilePage,
    page,
  }) => {
    // step 1
    await authenticatedPage.waitForLoadState('domcontentloaded');
    await profilePage.navigateToProfile();
    await expect(profilePage.header.userMenuDropdown).toBeVisible();
    await profilePage.newsTab.waitForVisible();

    await profilePage.openTab('news');
    profilePage.newsTab.getItem(0).open();

    await ecoNewsDetailsPage.waitForPageLoad();

    const newsID = await ecoNewsDetailsPage.getNewsIdFromUrl();

    await ecoNewsDetailsPage.clickEditButton();
    await editNewsPage.waitForEditNewsPage();

    const urlForEditCheck = new RegExp(`/#/greenCity/news/create-news\\?id=${newsID}$`);

    await expect(page).toHaveURL(urlForEditCheck);

    //step 2
    const originTitle = await editNewsPage.getTitleValue();

    //step 3
    const changeTitle = 'Title that should not be saved';
    await editNewsPage.enterTitle(changeTitle);
    expect(await editNewsPage.getTitleValue()).toBe(changeTitle);

    //step 4
    await editNewsPage.cancel();
    await editNewsPage.cancelModal.cancelEditing();
    expect(page).not.toBe(editNewsPage);

    //step 5
    await profilePage.navigateToProfile();
    await expect(profilePage.header.userMenuDropdown).toBeVisible();
    await profilePage.newsTab.waitForVisible();

    await profilePage.openTab('news');
    profilePage.newsTab.getItem(0).open();

    await ecoNewsDetailsPage.waitForDetailsPage();
    const urlRegex = new RegExp(`/#/greenCity/news/${newsID}$`);
    await expect(page).toHaveURL(urlRegex);

    // step 6
    expect(originTitle).not.toBe(changeTitle);
  });
});
