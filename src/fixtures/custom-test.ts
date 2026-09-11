import { test as base, expect } from '@playwright/test';

import { FooterComponent } from '../components/footer.component';
import { HeaderComponent } from '../components/header.component';
import { HomePage } from '../pages/home.page';

type AppFixtures = {
  homePage: HomePage;
  header: HeaderComponent;
  footer: FooterComponent;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  footer: async ({ page }, use) => {
    await use(new FooterComponent(page));
  }
});

export { expect };
