import { mergeTests } from '@playwright/test';
import { test as pageTest, expect } from './page-fixture';
import { test as authTest } from './auth-fixture';
import { test as apiTest } from './api-fixture';

export const test = mergeTests(pageTest, authTest, apiTest);
export { expect };
