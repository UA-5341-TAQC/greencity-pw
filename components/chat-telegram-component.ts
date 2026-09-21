import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

export class ChatPopUpComponent extends BaseComponent {
  private readonly chatButton: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.chatButton = page.locator('button.chat-pop-up:has(img[alt="chat"])');
  }

    /**
   * @returns   Return boolean whether chat icon is visible.
   */
   async isChatButtonVisible(): Promise<boolean> {
    return await this.chatButton.isVisible();
  }

  /**
   * Click on chat icon and waiting for new tab to open 
   * @returns {Promise<Page>} Chat bot page
   */
  async openChatWindow(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.chatButton.click()
    ]);

    await newPage.waitForLoadState();
    return newPage;
  }
}