import { test, expect } from '@/fixtures';
import { EventClient } from '@/api';
import type { EventsPage, ResponseEventsPage, EventAttender } from '@/types/api.event.types';

const EVENT_ERROR = {
  NOT_FOUND: "Event hasn't been found",
  NO_PERMISSION: 'Current user has no permission for this action',
  missing: (eventId: number) => `Event doesn't exist by this id: ${eventId}`,
} as const;

test.describe('Events API - Read Endpoints', () => {
  let client: EventClient;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(EventClient, 'user');
  });

  // Verify retrieving paginated list of all events for user
  test('getAllEvents', async () => {
    const response = await client.getAllEvents(5, 0, 1);
    expect(response.status(), 'Status code should be 200').toBe(200);
    const body = (await response.json()) as ResponseEventsPage;
    expect(body, 'ResponseEventsPage should not be null').not.toBeNull();
    expect(body.page, 'Events list should not be null').not.toBeNull();
    expect(body.totalElements, 'Total elements should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.currentPage, 'Current page should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.totalPages, 'Total pages should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.number, 'Number should be >= 0').toBeGreaterThanOrEqual(0);
  });

  // Verify fields of the first event when a non-empty page is requested
  test('getAllEvents - first event fields', async () => {
    const response = await client.getAllEvents(5, 0, 1);
    expect(response.status(), 'Status code should be 200').toBe(200);
    const body = (await response.json()) as ResponseEventsPage;
    expect(body.page.length, 'Events list should not be empty').toBeGreaterThan(0);
    const event = body.page[0];
    expect(event.title, 'Event title should not be null').not.toBeNull();
    expect(event.organizer, 'Event organizer should not be null').not.toBeNull();
    expect(event.creationDate, 'Event creationDate should not be null').not.toBeNull();
  });

  for (const eventId of [2]) {
    // Verify retrieving event details by event ID
    test(`getEventById - eventId: ${eventId}`, async () => {
      const response = await client.getEventById(eventId);
      expect(response.status(), 'Status code should be 200').toBe(200);
      const event = (await response.json()) as EventsPage;
      expect(event, 'Event should not be null').not.toBeNull();
      expect(event.id, 'Event ID should match').toBe(eventId);
      expect(event.title, 'Title should not be null').not.toBeNull();
      expect(event.organizer, 'Organizer should not be null').not.toBeNull();
      expect(event.creationDate, 'Creation date should not be null').not.toBeNull();
      expect(event.dates, 'Dates should not be null').not.toBeNull();
      expect(event.dates.length, 'Dates list should not be empty').toBeGreaterThan(0);
      expect(event.tags, 'Tags should not be null').not.toBeNull();
    });
  }

  // Verify getting likes count for an existing event
  test('getLikesCountTest - eventId: 2', async () => {
    const response = await client.getEventLikesCount(2);
    expect(response.status(), 'Unexpected status code').toBe(200);
    expect(Number(await response.json()), 'Count should be >= 0').toBeGreaterThanOrEqual(0);
  });

  // Verify getting likes count for a non-existing event
  test('getLikesCountTest - eventId: 99', async () => {
    const response = await client.getEventLikesCount(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.missing(99)
    );
  });

  // Verify getting dislikes count for an existing event
  test('getDislikesCountTest - eventId: 2', async () => {
    const response = await client.getEventDislikesCount(2);
    expect(response.status(), 'Unexpected status code').toBe(200);
    expect(Number(await response.json()), 'Count should be >= 0').toBeGreaterThanOrEqual(0);
  });

  // Verify getting dislikes count for a non-existing event
  test('getDislikesCountTest - eventId: 99', async () => {
    const response = await client.getEventDislikesCount(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.missing(99)
    );
  });

  for (const { eventId, expectedLiked } of [
    { eventId: 210, expectedLiked: true },
    { eventId: 235, expectedLiked: false },
  ]) {
    // Verify if user liked the event
    test(`checkUserLikeStatus - eventId: ${eventId}`, async () => {
      const response = await client.checkUserLikedEvent(eventId);
      expect(response.status(), 'Unexpected status code').toBe(200);
      expect(await response.json(), 'Liked status should match').toBe(expectedLiked);
    });
  }

  // Verify checking like status for a non-existing event
  test('checkUserLikeStatus - eventId: 99', async () => {
    const response = await client.checkUserLikedEvent(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.missing(99)
    );
  });

  // Verify getting event attenders with valid event ID
  test('getEventAttendersTest - eventId: 210', async () => {
    const response = await client.getEventAttenders(210);
    expect(response.status(), 'Unexpected status code').toBe(200);
    const attenders = (await response.json()) as EventAttender[];
    expect(attenders, 'Attenders list should not be null').not.toBeNull();
    expect(attenders.length, 'Attenders list size should be >= 0').toBeGreaterThanOrEqual(0);
  });

  // Verify getting event attenders with invalid event ID
  test('getEventAttendersTest - eventId: 99', async () => {
    const response = await client.getEventAttenders(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.NOT_FOUND
    );
  });

  for (const { userId, expectedCount } of [
    { userId: 235, expectedCount: 7 },
    { userId: 99, expectedCount: 0 },
  ]) {
    // Verify count of events where user is an attender
    test(`getAttendersEventsCountTest - userId: ${userId}`, async () => {
      const response = await client.getEventAttendersCount(userId);
      expect(response.status(), 'Status code should be 200').toBe(200);
      expect(Number(await response.json()), 'Count should match expected value').toBe(
        expectedCount
      );
    });
  }
  for (const { userId, expectedCount } of [
    { userId: 210, expectedCount: 4 },
    { userId: 99, expectedCount: 0 },
  ]) {
    // Verify count of events where user is organizer
    test(`getEventsCountByOrganizerTest - userId: ${userId}`, async () => {
      const response = await client.getEventsCountByOrganizer(userId);
      expect(response.status(), 'Status code should be 200').toBe(200);
      expect(Number(await response.json()), 'Events count should match expected').toBe(
        expectedCount
      );
    });
  }

  // Verify getting all events addresses returns 200 and non-empty list
  test('getAllEventsAddressesTest', async () => {
    const response = await client.getEventsAddresses();
    expect(response.status(), 'Status code should be 200').toBe(200);
    const addresses = (await response.json()) as Record<string, unknown>[];
    expect(addresses, 'API addresses list should not be null').not.toBeNull();
    expect(addresses.length, 'API addresses list should not be empty').toBeGreaterThan(0);
    expect(addresses[0], 'Address should have latitude').toHaveProperty('latitude');
    expect(addresses[0], 'Address should have longitude').toHaveProperty('longitude');
    expect(addresses[0], 'Address should have streetEn').toHaveProperty('streetEn');
    expect(addresses[0], 'Address should have cityUa').toHaveProperty('cityUk');
    expect(addresses[0], 'Address should have countryUa').toHaveProperty('countryUk');
  });
});

test.describe('Events API - Likes, Dislikes & Rating', () => {
  let client: EventClient;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(EventClient, 'user');
  });

  // Verify liking an existing event
  test('likeEventTest - eventId: 238', async () => {
    const response = await client.likeEvent(238);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  // Verify liking a non-existing event
  test('likeEventTest - eventId: 99', async () => {
    const response = await client.likeEvent(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.missing(99)
    );
  });

  // Verify disliking an existing event
  test('dislikeEventTest - eventId: 239', async () => {
    const response = await client.dislikeEvent(239);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  // Verify disliking a non-existing event
  test('dislikeEventTest - eventId: 99', async () => {
    const response = await client.dislikeEvent(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.missing(99)
    );
  });

  for (const { eventId, grade, expectedStatus, expectedMessage } of [
    {
      eventId: 210,
      grade: 4,
      expectedStatus: 400,
      expectedMessage: 'must be less than or equal to 3',
    },
    { eventId: 210, grade: 0, expectedStatus: 400, expectedMessage: 'must be greater than 0' },
    { eventId: 210, grade: -1, expectedStatus: 400, expectedMessage: 'must be greater than 0' },
    {
      eventId: 210,
      grade: 999,
      expectedStatus: 400,
      expectedMessage: 'must be less than or equal to 3',
    },
    {
      eventId: 216,
      grade: 3,
      expectedStatus: 403,
      expectedMessage: 'Organizer have no rights to rate the own event',
    },
    { eventId: 238, grade: 2, expectedStatus: 400, expectedMessage: 'Event is not finished yet' },
    { eventId: 99, grade: 2, expectedStatus: 404, expectedMessage: "Event hasn't been found" },
  ]) {
    // Verify rating event with various grades and validate status and messages
    test(`rateEventWithValidation - eventId: ${eventId}, grade: ${grade}`, async () => {
      const response = await client.rateEvent(eventId, grade);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Validation message should match').toBe(
        expectedMessage
      );
    });
  }
});

test.describe('Events API - Favorites & Participation', () => {
  let client: EventClient;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(EventClient, 'user');
  });

  // Verify adding an event to favorites
  test('addEventToFavorites - eventId: 210', async () => {
    const response = await client.addEventToFavorites(210);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    {
      eventId: 235,
      expectedStatus: 400,
      expectedMessage: 'User has already added this event to favorites.',
    },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  ]) {
    // Verify adding events to favorites with expected error
    test(`addEventToFavorites - eventId: ${eventId}`, async () => {
      const response = await client.addEventToFavorites(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }

  // Verify removing an event from favorites
  test('removeEventFromFavorites - eventId: 210', async () => {
    const response = await client.removeEventFromFavorites(210);
    expect(response.status(), 'Unexpected status code').toBe(200);
    const check = await client.getEventById(210);
    expect(check.status(), 'Getting event after removal should return 200').toBe(200);
    expect(
      (await check.json()).favorite,
      'Event should no longer be marked as favorite after removal'
    ).toBe(false);
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    { eventId: 235, expectedStatus: 400, expectedMessage: 'This event is not in favorites.' },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  ]) {
    // Verify removing events from favorites with expected error
    test(`removeEventFromFavorites - eventId: ${eventId}`, async () => {
      const response = await client.removeEventFromFavorites(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }

  // Verify adding an attender to an event
  test('addAttenderToEventTest - eventId: 241, status: 200', async () => {
    const response = await client.addAttenderToEvent(241);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    {
      eventId: 235,
      expectedStatus: 400,
      expectedMessage: 'You have already subscribed on this event',
    },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.NOT_FOUND },
  ]) {
    // Verify adding attender to event: already subscribed or not found
    test(`addAttenderToEventTest - eventId: ${eventId}, status: ${expectedStatus}`, async () => {
      const response = await client.addAttenderToEvent(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }

  // Verify adding an event to requested list
  test('addToRequestedEventTest - eventId: 210', async () => {
    const response = await client.addEventToRequested(210);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    {
      eventId: 239,
      expectedStatus: 400,
      expectedMessage: 'User has already added this event to requested.',
    },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  ]) {
    // Verify adding events to requested list with expected error
    test(`addToRequestedEventTest - eventId: ${eventId}`, async () => {
      const response = await client.addEventToRequested(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }

  // Verify getting requested users list for an existing event
  test('getRequestedUsersTest - eventId: 239', async () => {
    const response = await client.getRequestedUsers(239);
    expect(response.status(), 'Unexpected status code').toBe(200);
    const body = await response.json();
    expect(body.totalElements, 'Total elements should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body, 'ResponseEventsPage should not be null').not.toBeNull();
    expect(body.page, 'Events list should not be null').not.toBeNull();
  });

  // Verify getting requested users list for a non-existing event
  test('getRequestedUsersTest - eventId: 99', async () => {
    const response = await client.getRequestedUsers(99);
    expect(response.status(), 'Unexpected status code').toBe(404);
    expect((await response.json()).message, 'Error message should match').toBe(
      EVENT_ERROR.NOT_FOUND
    );
  });

  // Verify removing an event from requested list
  test('removeEventFromRequestedTest - eventId: 239', async () => {
    const response = await client.removeEventFromRequested(239);
    expect(response.status(), 'Unexpected status code').toBe(200);
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    { eventId: 235, expectedStatus: 400, expectedMessage: 'This event is not in requested.' },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  ]) {
    // Verify removing events from requested list with expected error
    test(`removeEventFromRequestedTest - eventId: ${eventId}`, async () => {
      const response = await client.removeEventFromRequested(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }
});

test.describe('Events API - Create, Update, Delete', () => {
  let client: EventClient;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(EventClient, 'user');
  });

  // Verify creating a new event with valid data
  test('createEventWithValidData', async () => {
    const eventData = {
      title: 'New Event 2026',
      description: 'New Test Event created via Swagger API',
      open: true,
      datesLocations: [
        {
          startDate: '2027-07-14T20:51:48.560Z',
          finishDate: '2027-07-15T20:51:48.560Z',
          onlineLink: 'https://meet.google.com',
        },
      ],
      tags: ['Social'],
    };
    const response = await client.createEvent(eventData);
    expect(response.status(), `Status code should be 201. Response: ${await response.text()}`).toBe(
      201
    );
    const createdEvent = await response.json();
    expect(createdEvent.id, 'Created event ID should not be null').toBeDefined();
    expect(createdEvent.title, 'Title should match').toBe(eventData.title);
    expect(createdEvent.description, 'Description should match').toBe(eventData.description);
    expect(createdEvent.open, 'Event should be open').toBe(true);
  });

  // Verify updating an existing event with valid data
  test('updateEventWithValidData', async () => {
    const eventId = 259;
    const originalResponse = await client.getEventById(eventId);
    expect(originalResponse.status(), 'Getting existing event should return 200').toBe(200);
    const originalEvent = await originalResponse.json();
    const updatedEventData = {
      id: eventId,
      title: 'Updated Automation Event 2026',
      description: 'Updated Test Event via API',
      open: true,
      datesLocations: [
        {
          startDate: '2027-07-14T20:51:48.560Z',
          finishDate: '2027-07-15T20:51:48.560Z',
          onlineLink: 'https://meet.google.com',
        },
      ],
      tags: ['Social'],
    };
    const response = await client.updateEvent(eventId, updatedEventData);
    expect(response.status(), `Status code should be 200. Response: ${await response.text()}`).toBe(
      200
    );
    const updatedResponse = await client.getEventById(eventId);
    expect(updatedResponse.status(), 'Getting updated event should return 200').toBe(200);
    const updatedEvent = await updatedResponse.json();
    expect(updatedEvent.id, 'Event ID should remain unchanged').toBe(eventId);
    expect(updatedEvent.title, 'Title should match').toBe(updatedEventData.title);
    expect(updatedEvent.description, 'Description should match').toBe(updatedEventData.description);
    expect(updatedEvent.open, 'Event should be open').toBe(true);
    expect(updatedEvent.organizer.id, 'Organizer ID should remain unchanged').toBe(
      originalEvent.organizer.id
    );
  });

  for (const { eventId, expectedStatus, expectedMessage } of [
    { eventId: 238, expectedStatus: 403, expectedMessage: EVENT_ERROR.NO_PERMISSION },
    { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.NOT_FOUND },
  ]) {
    // Verify deleting an event returns expected error response
    test(`deleteEvent - eventId: ${eventId}`, async () => {
      const response = await client.deleteEvent(eventId);
      expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
      expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
    });
  }
});
