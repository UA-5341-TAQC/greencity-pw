import { test as base, expect } from '@/fixtures';
import { HabitAssignClient } from '@/api';
import { HabitAssignmentFactory } from '@/helpers/habit-assign/assignment-factory';
import type { HabitAssignCustomProperties, HabitAssignManagement } from '@/types';

type HabitAssignFixtures = {
  habitClient: HabitAssignClient;
  assignmentFactory: HabitAssignmentFactory;
  createAssignment: (custom?: HabitAssignCustomProperties) => Promise<HabitAssignManagement>;
};

export const test = base.extend<HabitAssignFixtures>({
  habitClient: async ({ authorizedClient }, use) => {
    await use(await authorizedClient(HabitAssignClient, 'user'));
  },
  assignmentFactory: async ({ habitClient, request }, use) => {
    const factory = new HabitAssignmentFactory(habitClient, request);
    try {
      await use(factory);
    } finally {
      await factory.cleanup();
    }
  },
  createAssignment: async ({ assignmentFactory }, use) => {
    await use((custom) => assignmentFactory.create(custom));
  },
});

export { expect };
