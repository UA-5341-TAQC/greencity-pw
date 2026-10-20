import { test, expect, type APIRequestContext, type APIResponse } from '@playwright/test';
import { HabitAssignClient } from '@/api';
import type { HabitAssignCustomProperties, HabitAssignManagement, HabitCatalogItem } from '@/types';
import env from '@/config/env';
import { language } from './test-data';

export class HabitAssignmentFactory {
  private readonly createdIds = new Set<number>();

  constructor(
    private readonly client: HabitAssignClient,
    private readonly request: APIRequestContext
  ) {}

  /** Searches catalog pages for a public, non-custom habit not assigned to the current user. */
  async availableHabit(): Promise<HabitCatalogItem> {
    return test.step('Precondition: find an unassigned public habit', async () => {
      for (let page = 0; ; page++) {
        const response = await this.request.get(`${env.API_GREENCITY_BASE_URL}/habit`, {
          params: { ...language.params, page, size: 100 },
          headers: { Authorization: `Bearer ${this.client.getAccessToken()}` },
        });
        await expect(response, 'Habit catalog should be available for setup').toBeOK();
        const catalog = (await response.json()) as { page: HabitCatalogItem[]; totalPages: number };
        const habit = catalog.page.find((item) => !item.isAssigned && !item.isCustomHabit);
        if (habit) return habit;
        if (page + 1 >= catalog.totalPages || catalog.page.length === 0) break;
      }
      throw new Error('Test account needs an unassigned public habit');
    });
  }

  /** Records IDs from successful object or array responses for cleanup; returns the response unchanged. */
  private async track(response: APIResponse): Promise<APIResponse> {
    if (response.status() === 201) {
      const body = await response.json();
      const items: HabitAssignManagement[] = Array.isArray(body) ? body : [body];
      for (const item of items) {
        if (Number.isInteger(item.id) && item.id > 0) this.createdIds.add(item.id);
      }
    }
    return response;
  }

  /** Attempts creation and tracks created IDs without asserting success, so tests can inspect errors. */
  async attemptCreate(custom?: HabitAssignCustomProperties): Promise<APIResponse> {
    const habit = await this.availableHabit();
    return this.track(
      custom
        ? await this.client.assignCustom(habit.id, custom)
        : await this.client.assignDefault(habit.id)
    );
  }

  /** Sends arbitrary custom properties for negative tests and tracks any unexpectedly created assignments. */
  async attemptCustom(data: unknown): Promise<APIResponse> {
    const habit = await this.availableHabit();
    return this.track(await this.client.rawAssignCustom(habit.id, data));
  }

  /** Requires HTTP 201 and exactly one assignment, normalizing object and array responses. */
  async create(custom?: HabitAssignCustomProperties): Promise<HabitAssignManagement> {
    return test.step('Precondition: create an isolated habit assignment', async () => {
      const response = await this.attemptCreate(custom);
      const body = await response.json();
      expect(response.status(), `Assignment should be created: ${JSON.stringify(body)}`).toBe(201);
      const items: HabitAssignManagement[] = Array.isArray(body) ? body : [body];
      expect(items, 'Exactly one assignment should be created without friends').toHaveLength(1);
      return items[0];
    });
  }

  /**
   * Undoes enrollments and deletes assignments tracked by this factory in reverse creation order.
   * Continues after failures and reports collected errors once all tracked IDs have been processed.
   */
  async cleanup(): Promise<void> {
    await test.step('Cleanup: undo enrollments and delete only test-owned assignments', async () => {
      const failures: string[] = [];
      for (const id of [...this.createdIds].reverse()) {
        try {
          const response = await this.client.getAssignment(id, language);
          expect([200, 404], `Cleanup should be able to inspect assignment ${id}`).toContain(
            response.status()
          );
          if (response.status() === 200) {
            const body = await response.json();
            for (const entry of body.habitStatusCalendarDtoList) {
              const undone = await this.client.unenroll(id, entry.enrollDate);
              expect(undone.status(), 'Cleanup should reverse enrollment progress').toBe(200);
            }
          }
        } catch (error) {
          failures.push(`Undo enrollment for ${id}: ${String(error)}`);
        }
        // One failed cleanup must not leave the other test assignments behind.
        try {
          const deleted = await this.client.deleteAssignment(id);
          expect([200, 404], `Cleanup should remove test assignment ${id}`).toContain(
            deleted.status()
          );
        } catch (error) {
          failures.push(`Delete assignment ${id}: ${String(error)}`);
        }
      }
      expect(failures, 'Every test-owned resource should be cleaned up').toEqual([]);
    });
  }
}
