import { test, type Page } from '@playwright/test';

/** localStorage key used for the auth token (login / API fixtures). */
export const ACCESS_TOKEN_KEY = 'accessToken';

/**
 * Reads and writes browser localStorage in the page context.
 *
 * Intended for future API tests and login fixtures: inject a session with
 * `setToken` before navigating to protected routes. No Playwright fixture
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

  /** Injects the auth token for login-fixture style setup. */
  async setToken(token: string): Promise<void> {
    await this.set(ACCESS_TOKEN_KEY, token);
  }

  async getToken(): Promise<string | null> {
    return this.get(ACCESS_TOKEN_KEY);
  }
}
