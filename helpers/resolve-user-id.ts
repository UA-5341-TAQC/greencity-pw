import { test, type Page } from '@playwright/test';
import { LocalStorageManager } from '@/helpers/local-storage-manager';

/**
 * Resolves the userId used by profile-scoped routes.
 *
 * An explicit argument always wins; otherwise the id the app writes to
 * `localStorage.userId` after a successful login is used.
 *
 * @param page - Playwright page (localStorage is read in the page context).
 * @param userId - Explicit user id; pass `undefined` to fall back to localStorage.
 * @param label - Step label prefix, so the Allure report names the calling page.
 * @returns The resolved id, or an empty string when the caller is not logged in.
 */
export async function resolveUserId(
  page: Page,
  userId?: string | number,
  label = 'User'
): Promise<string> {
  if (userId !== undefined && userId !== null && String(userId).length > 0) {
    return String(userId);
  }
  return test.step(`${label}: read userId from localStorage`, async () => {
    const storage = new LocalStorageManager(page);
    return (await storage.get('userId')) ?? '';
  });
}
