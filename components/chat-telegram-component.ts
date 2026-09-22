import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class ChatPopUpComponent extends BaseComponent {
  private readonly chatButton: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.chatButton = page.locator('button.chat-pop-up:has(img[alt="chat"])');
  }

  /**
   * @returns Return boolean whether chat icon is visible.
   */
  async isChatButtonVisible(): Promise<boolean> {
    return await this.chatButton.isVisible();
  }

  /**
   * Click on chat icon and waiting for new tab to open
   * @returns {Promise<Page>} Chat bot page
   */
  async openChat(): Promise<Page> {
    const pagePromise = this.page.context().waitForEvent('page');
    await this.chatButton.click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    return newPage;
  }
}
