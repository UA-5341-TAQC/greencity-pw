import { test, expect } from '../../src/fixtures/custom-test';

test.describe('Home page sample UI tests', () => {
  test('uses custom fixture with page/component objects', async ({
    page,
    homePage,
    header,
    footer
  }) => {
    await page.setContent(`
      <header><a href="/">GreenCity</a></header>
      <main><h1>GreenCity Student Demo</h1></main>
      <footer>Footer content</footer>
    `);

    await homePage.expectMainHeadingVisible();
    await expect(homePage.mainHeading).toContainText('GreenCity');
    await expect(header.logoLink).toHaveText('GreenCity');
    await expect(footer.root).toContainText('Footer content');
  });
});
