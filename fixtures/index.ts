import { mergeTests } from '@playwright/test';
import { test as pageTest, expect } from './page-fixture';
import { test as authTest } from './auth-fixture';

export const test = mergeTests(pageTest, authTest);
export { expect };
