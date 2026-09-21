import { test, type Locator, type Page } from '@playwright/test';
import env from '@/config/env';
import BasePage from '@/pages/base-page';
import { resolveUserId } from '@/helpers';

/**
 * User profile information edit page.
 * Live route: /#/greenCity/profile/:id/edit
 * Structural locators: ids / global button classes — no text matchers.
 * Locators below were verified against the live build; single-element
 * alternatives that resolved to the same node were collapsed.
 */
export class EditProfilePage extends BasePage {
  readonly root: Locator;
  readonly title: Locator;
  readonly form: Locator;
  readonly nameInput: Locator;
  readonly cityInput: Locator;
  readonly citySuggestionOptions: Locator;
  readonly credoInput: Locator;
  readonly socialNetworksBlock: Locator;
  readonly addSocialNetworkButton: Locator;
  readonly privacyWrapper: Locator;
  readonly privacySelects: Locator;
  readonly emailPreferencesBlock: Locator;
  readonly emailPreferenceCheckboxes: Locator;
  readonly emailPeriodicitySelects: Locator;
  readonly cancelButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    super(page);

    // Verified: .edit_prof-container is the only container inside app-edit-profile.
    this.root = page.locator('app-edit-profile .edit_prof-container').first();
    this.title = this.root.locator('h2').first();
    this.form = this.root.locator('form').first();

    this.nameInput = this.form.locator('#name').first();
    this.cityInput = this.form.locator('app-input-google-autocomplete input').first();
    // Material autocomplete is in play (input.mat-mdc-autocomplete-trigger exists);
    // .pac-item kept for the Google Places variant of the widget.
    this.citySuggestionOptions = this.page.locator('mat-option, .pac-item');
    this.credoInput = this.form.locator('#credo').first();

    this.socialNetworksBlock = this.form.locator('app-social-networks').first();
    this.addSocialNetworkButton = this.form.locator('button.social-btn').first();

    this.privacyWrapper = this.form.locator('.privacy-wrapper').first();
    // .state-select is ambiguous form-wide (8 nodes) — the wrapper scoping is what disambiguates.
    this.privacySelects = this.privacyWrapper.locator('.state-select');

    this.emailPreferencesBlock = this.form.locator('.email-preferences').first();
    this.emailPreferenceCheckboxes = this.emailPreferencesBlock.locator('input[type="checkbox"]');
    this.emailPeriodicitySelects = this.emailPreferencesBlock.locator('.state-select');

    this.cancelButton = this.form.locator('button.secondary-global-button').first();
    this.saveButton = this.form.locator('button.primary-global-button').first();
  }

  async navigateToEditProfile(userId?: string | number): Promise<void> {
    const id = await resolveUserId(this.page, userId, 'Edit profile');
    await test.step(`Edit profile: open /greenCity/profile/${id || ':id'}/edit`, async () => {
      if (!id) {
        throw new Error(
          'EditProfilePage.navigateToEditProfile: userId missing (pass id or log in first)'
        );
      }
      await this.navigateTo(`/#/greenCity/profile/${id}/edit`);
    });
  }

  async waitForEditProfile(): Promise<void> {
    await test.step('Edit profile: wait for form', async () => {
      await this.waitForPageLoad();
      await this.root.waitFor({ state: 'visible', timeout: env.LONG_TIMEOUT });
      await this.nameInput.waitFor({ state: 'visible', timeout: env.LONG_TIMEOUT });
      await this.form.waitFor({ state: 'visible', timeout: env.MEDIUM_TIMEOUT });
    });
  }

  async getTitle(): Promise<string> {
    return test.step('Edit profile: read title', async () => (await this.title.innerText()).trim());
  }

  async getNameValue(): Promise<string> {
    return this.nameInput.inputValue();
  }

  async getCredoValue(): Promise<string> {
    return this.credoInput.inputValue();
  }

  async fillName(name: string): Promise<void> {
    await test.step(`Edit profile: fill name "${name}"`, async () => {
      await this.nameInput.fill(name);
    });
  }

  async fillCity(city: string): Promise<void> {
    await test.step(`Edit profile: fill city "${city}"`, async () => {
      await this.cityInput.fill(city);
    });
  }

  async selectFirstCitySuggestion(): Promise<void> {
    await test.step('Edit profile: select first city suggestion', async () => {
      await this.citySuggestionOptions.first().click();
    });
  }

  async fillCredo(credo: string): Promise<void> {
    await test.step('Edit profile: fill credo', async () => {
      await this.credoInput.fill(credo);
    });
  }

  async clickAddSocialNetwork(): Promise<void> {
    await test.step('Edit profile: add social network', async () => {
      await this.addSocialNetworkButton.click();
    });
  }

  async isSaveButtonEnabled(): Promise<boolean> {
    return this.saveButton.isEnabled();
  }

  async clickSave(): Promise<void> {
    await test.step('Edit profile: save', async () => {
      await this.saveButton.click();
    });
  }

  async clickCancel(): Promise<void> {
    await test.step('Edit profile: cancel', async () => {
      await this.cancelButton.click();
    });
  }

  async updateProfile(data: { name?: string; city?: string; credo?: string }): Promise<void> {
    await test.step(`Edit profile: update profile (${data.name ?? ''})`, async () => {
      if (data.name !== undefined) {
        await this.fillName(data.name);
      }
      if (data.city !== undefined) {
        await this.fillCity(data.city);
        await this.selectFirstCitySuggestion();
      }
      if (data.credo !== undefined) {
        await this.fillCredo(data.credo);
      }
      await this.clickSave();
    });
  }

  async getPrivacySelectCount(): Promise<number> {
    return this.privacySelects.count();
  }

  async getEmailPreferenceCheckboxCount(): Promise<number> {
    return this.emailPreferenceCheckboxes.count();
  }
}
