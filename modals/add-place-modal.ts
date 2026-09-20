import type { Page, Locator } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';
import { PlacesScheduleComponent } from '@/components';

export class AddPlaceModal extends BaseModal {
  private readonly categorySelect: Locator;
  private readonly nameInput: Locator;
  private readonly addressInput: Locator;
  private readonly cancelButton: Locator;
  private readonly addButton: Locator;

  readonly schedule: PlacesScheduleComponent;

  constructor(page: Page) {
    const root = page.locator('app-add-place');

    super(page, root);

    this.categorySelect = this.root.locator('select[formcontrolname="type"]');

    this.nameInput = this.root.getByPlaceholder('Name');
    this.addressInput = this.root.getByPlaceholder('Address');

    this.cancelButton = this.root.getByRole('button', {
      name: 'Cancel',
      exact: true,
    });

    this.addButton = this.root.getByRole('button', {
      name: 'Add',
      exact: true,
    });

    this.schedule = new PlacesScheduleComponent(this.root.locator('app-time-picker-pop-up'));
  }

  async selectCategory(category: string): Promise<void> {
    await this.categorySelect.selectOption({ value: category });
  }

  async fillName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async fillAddress(address: string): Promise<void> {
    await this.addressInput.fill(address);
  }

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async isAddButtonEnabled(): Promise<boolean> {
    return this.addButton.isEnabled();
  }
}
