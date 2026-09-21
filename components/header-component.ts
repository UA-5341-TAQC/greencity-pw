import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';
import { Language, MenuItem } from '../types/header.types';
import env from '../config/env';

/**
 * Component representing the global header.
 * Contains navigation links, language switcher, auth buttons, and user menu.
 */
export class HeaderComponent extends BaseComponent {
  // Navigation
  readonly logo: Locator;
  private readonly navLinks: Record<MenuItem, Locator>;

  // Utilities
  readonly searchIcon: Locator;
  readonly languageSwitcher: Locator;
  readonly langEnglishOption: Locator;
  readonly langUkrainianOption: Locator;

  // Auth & Profile
  readonly signInButton: Locator;
  readonly signUpButton: Locator;
  readonly userMenuDropdown: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    super(page.locator('header').first(), page);

    // Navigation Locators
    this.logo = this.root.locator('a.header_logo');
    this.navLinks = {
      [MenuItem.EcoNews]: this.root.getByRole('link', { name: /(Eco news|Еко новини)/i }),
      [MenuItem.Events]: this.root.getByRole('link', { name: /(Events|Події)/i }),
      [MenuItem.Places]: this.root.getByRole('link', { name: /(Places|Карта)/i }),
      [MenuItem.AboutUs]: this.root.getByRole('link', { name: /(About us|Про нас)/i }),
      [MenuItem.MySpace]: this.root.getByRole('link', { name: /(My space|Мій простір)/i }),
    };

    // Utilities Locators
    this.searchIcon = this.root.getByLabel('site search');
    this.languageSwitcher = this.root.getByLabel('language switcher');
    this.langEnglishOption = this.root.getByLabel('english');
    this.langUkrainianOption = this.root.getByLabel('Uk');

    // Auth & Profile Locators
    this.signInButton = this.root.getByRole('link', { name: /(Sign in|Увійти)/i });
    this.signUpButton = this.root.getByRole('link', { name: /(Sign up|Зареєструватись)/i });
    this.userMenuDropdown = this.root.locator('#header_user-wrp');
    this.signOutButton = this.root.getByRole('link', { name: /(Sign out|Вийти)/i });
  }

  // --- State Methods ---

  /**
   * Checks if the user is currently logged in by looking for the user menu dropdown.
   * @returns true if the user menu is visible, false otherwise.
   */
  async isLoggedIn(): Promise<boolean> {
    return await test.step('Check if user is logged in', async () => {
      try {
        await this.userMenuDropdown.waitFor({ state: 'visible', timeout: env.SHORT_TIMEOUT });
        return true;
      } catch {
        return false;
      }
    });
  }

  /**
   * Gets the current language from the header.
   * @returns 'En' if the current language is English, 'Uk' if it's Ukrainian.
   */
  async getCurrentLanguage(): Promise<Language> {
    return await test.step('Get current language from header', async () => {
      const text = await this.languageSwitcher.innerText();
      return text.trim() as Language;
    });
  }

  // --- Utilities Methods ---

  async switchLanguage(language: Language): Promise<void> {
    await test.step(`Switch language to ${language}`, async () => {
      if ((await this.getCurrentLanguage()) !== language) {
        await this.languageSwitcher.click();
        if (language === Language.En) {
          await this.langEnglishOption.click();
        } else {
          await this.langUkrainianOption.click();
        }
      }
    });
  }

  async openSearch(): Promise<void> {
    await test.step('Open search', async () => {
      await this.searchIcon.click();
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
      await this.logo.click();
    });
  }

  /**
   * Navigates to a specific section via the header navigation menu.
   * Automatically handles multilingual matching.
   * @param item - The menu item to navigate to (e.g., "Eco news", "Events").
   */
  async navigateTo(item: MenuItem): Promise<void> {
    await test.step(`Navigate to ${item} via Header`, async () => {
      await this.navLinks[item].click();
    });
  }
}
