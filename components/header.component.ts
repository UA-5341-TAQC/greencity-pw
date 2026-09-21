import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

export type MenuItem = 'Eco news' | 'Events' | 'Places' | 'About us' | 'My space';

/**
 * Component representing the global header.
 * Contains navigation links, language switcher, auth buttons, and user menu.
 */
export class HeaderComponent extends BaseComponent {
  // Navigation
  readonly logo: Locator;
  readonly ecoNewsLink: Locator;
  readonly eventsLink: Locator;
  readonly placesLink: Locator;
  readonly aboutUsLink: Locator;
  readonly mySpaceLink: Locator;

  // Utilities
  readonly searchIcon: Locator;
  readonly languageSwitcher: Locator;

  // Auth & Profile
  readonly signInButton: Locator;
  readonly signUpButton: Locator;
  readonly userMenuDropdown: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    super(page.locator('header').first(), page);

    // Navigation Locators
    this.logo = this.root.locator('a.header_logo');
    this.ecoNewsLink = this.root.getByRole('link', { name: /(Eco news|Еко новини)/i });
    this.eventsLink = this.root.getByRole('link', { name: /(Events|Події)/i });
    this.placesLink = this.root.getByRole('link', { name: /(Places|Карта)/i });
    this.aboutUsLink = this.root.getByRole('link', { name: /(About us|Про нас)/i });
    this.mySpaceLink = this.root.getByRole('link', { name: /(My space|Мій простір)/i });

    // Utilities Locators
    this.searchIcon = this.root.locator('.search-icon, img[alt="search"]');
    this.languageSwitcher = this.root.locator('.header_lang-switcher-wrp, .language-switcher');

    // Auth & Profile Locators
    this.signInButton = this.root.getByRole('link', { name: /(Sign in|Увійти)/i });
    this.signUpButton = this.root.getByRole('link', { name: /(Sign up|Зареєструватись)/i });
    // Live build: the menu wrapper is `#header_user-wrp` (a <ul role="menu">); the previous
    // `#header-user-menu, .user-menu-dropdown` pair matched nothing, so isLoggedIn() was always false.
    this.userMenuDropdown = this.root.locator('#header_user-wrp');
    // Live build: sign-out is an <a> inside `li[role="button"]`, i.e. NOT a link role — that is why
    // the getByRole('link') form resolved to zero nodes.
    this.signOutButton = this.root.locator('#header_user-wrp li[role="button"]');
  }

  // --- State Methods ---

  /**
   * Checks if the user is currently logged in by looking for the user menu dropdown.
   * @returns true if the user menu is visible, false otherwise.
   */
  async isLoggedIn(): Promise<boolean> {
    return await test.step('Check if user is logged in', async () => {
      return await this.userMenuDropdown.isVisible();
    });
  }

  async getCurrentLanguage(): Promise<'En' | 'Uk'> {
    return await test.step('Get current language from header', async () => {
      const text = await this.languageSwitcher.innerText();
      return text.trim() as 'En' | 'Uk';
    });
  }

  // --- Utilities Methods ---

  async switchLanguage(language: 'En' | 'Uk'): Promise<void> {
    await test.step(`Switch language to ${language}`, async () => {
      if ((await this.getCurrentLanguage()) !== language) {
        await this.languageSwitcher.click();
        await this.root.getByText(language, { exact: true }).click();
      }
    });
  }

  async openSearch(): Promise<void> {
    await test.step('Open search', async () => {
      await this.searchIcon.first().click();
    });
  }

  // --- Auth & Profile Methods ---

  /**
   * Clicks the "Sign in" button in the header.
   */
  async clickSignIn(): Promise<void> {
    await test.step('Click Sign In button', async () => {
      await this.signInButton.click();
    });
  }

  async clickSignUp(): Promise<void> {
    await test.step('Click Sign Up button', async () => {
      await this.signUpButton.click();
    });
  }

  async openUserMenu(): Promise<void> {
    await test.step('Open User Menu dropdown', async () => {
      await this.userMenuDropdown.click();
    });
  }

  async clickSignOut(): Promise<void> {
    await test.step('Click Sign Out', async () => {
      await this.openUserMenu();
      await this.signOutButton.click();
    });
  }

  // --- Navigation Methods ---

  async clickLogo(): Promise<void> {
    await test.step('Click on Logo', async () => {
      await this.logo.first().click();
    });
  }

  /**
   * Navigates to a specific section via the header navigation menu.
   * Automatically handles multilingual matching.
   * @param item - The menu item to navigate to (e.g., "Eco news", "Events").
   */
  async navigateTo(item: MenuItem): Promise<void> {
    await test.step(`Navigate to ${item} via Header`, async () => {
      switch (item) {
        case 'Eco news':
          await this.ecoNewsLink.click();
          break;
        case 'Events':
          await this.eventsLink.click();
          break;
        case 'Places':
          await this.placesLink.click();
          break;
        case 'About us':
          await this.aboutUsLink.click();
          break;
        case 'My space':
          await this.mySpaceLink.click();
          break;
      }
    });
  }
}
