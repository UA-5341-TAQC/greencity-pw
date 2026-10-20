import { test } from '@/fixtures/habit-assign-fixture';
import { epic, feature, story, owner } from 'allure-js-commons';
import { registerCreationTests } from './habit-assign/creation.suite';
import { registerLifecycleTests } from './habit-assign/lifecycle.suite';
import { registerEnrollmentTests } from './habit-assign/enrollment.suite';
import { registerStatusTests } from './habit-assign/status.suite';
import { registerAuthorizationTests } from './habit-assign/authorization.suite';
import { registerValidationTests } from './habit-assign/validation.suite';
import { registerPayloadTests } from './habit-assign/payload.suite';
import { registerLimitsTests } from './habit-assign/limits.suite';

// One entry point keeps shared-account mutations sequential across all scenario modules.
test.describe('Habit Assign Controller API', () => {
  test.describe.configure({ mode: 'default' });

  test.beforeEach(async () => {
    await epic('GreenCity API');
    await feature('Habit Assign Controller');
    await story(test.info().titlePath.at(-2) ?? 'Habit assignment');
    await owner('Yurii Koliada');
  });

  registerCreationTests();
  registerLifecycleTests();
  registerEnrollmentTests();
  registerStatusTests();
  registerAuthorizationTests();
  registerValidationTests();
  registerPayloadTests();
  registerLimitsTests();
});
