import { test, type Page } from '@playwright/test';

/**
 * Reads and writes browser localStorage in the page context.

 * wires this class yet — construct it where you need it.
 */
export class LocalStorageManager {
  constructor(private readonly page: Page) {}

  /**
   * Injects localStorage items before page load via addInitScript.
   * Useful for initializing auth state before navigating to BASE_URL.
   */
  async init(items: Record<string, string>): Promise<void> {
    await test.step('LocalStorage: init items before load', async () => {
      await this.page.addInitScript((entries) => {
        for (const [k, v] of Object.entries(entries)) {
          window.localStorage.setItem(k, v);
        }
      }, items);
    });
  }

  async get(key: string): Promise<string | null> {
    return test.step(`LocalStorage: get "${key}"`, async () =>
      this.page.evaluate((k) => localStorage.getItem(k), key));
  }

  async set(key: string, value: string): Promise<void> {
    await test.step(`LocalStorage: set "${key}"`, async () => {
      await this.page.evaluate(({ k, v }) => localStorage.setItem(k, v), { k: key, v: value });
    });
  }

  async remove(key: string): Promise<void> {
    await test.step(`LocalStorage: remove "${key}"`, async () => {
      await this.page.evaluate((k) => localStorage.removeItem(k), key);
    });
  }

  async setAll(items: Record<string, string>): Promise<void> {
    await test.step('LocalStorage: set all items', async () => {
      await this.page.evaluate((entries) => {
        for (const [k, v] of Object.entries(entries)) {
          localStorage.setItem(k, v);
        }
      }, items);
    });
  }

  async clear(): Promise<void> {
    await test.step('LocalStorage: clear', async () => {
      await this.page.evaluate(() => localStorage.clear());
    });
  }
}
