import { test as base, expect as baseExpect } from '@playwright/test';
import env from '@/config/env';

type BaseFixtures = {
  baseUrl: string;
  apiUrl: string;
};

export const test = base.extend<BaseFixtures>({
  // eslint-disable-next-line no-empty-pattern
  baseUrl: async ({}, use): Promise<void> => {
    await use(env.BASE_URL);
  },
  // eslint-disable-next-line no-empty-pattern
  apiUrl: async ({}, use): Promise<void> => {
    await use(env.API_URL);
  },
});

export { baseExpect as expect };
