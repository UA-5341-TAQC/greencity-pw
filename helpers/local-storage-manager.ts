import { test, type Page } from '@playwright/test';

/**
 * Reads and writes browser localStorage in the page context.

 * wires this class yet — construct it where you need it.
 */
export class LocalStorageManager {
  constructor(private readonly page: Page) {}

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
}
