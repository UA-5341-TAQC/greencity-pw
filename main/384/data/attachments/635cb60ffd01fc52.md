# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/api-event.spec.ts >> Events API - Read Endpoints >> checkUserLikeStatus - eventId: 210
- Location: tests/api/api-event.spec.ts:97:5

# Error details

```
Error: Liked status should match

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@/fixtures';
  2   | import { EventClient } from '@/api';
  3   | import type { EventsPage, ResponseEventsPage, EventAttender } from '@/types/api.event.types';
  4   | 
  5   | const EVENT_ERROR = {
  6   |   NOT_FOUND: "Event hasn't been found",
  7   |   NO_PERMISSION: 'Current user has no permission for this action',
  8   |   missing: (eventId: number) => `Event doesn't exist by this id: ${eventId}`,
  9   | } as const;
  10  | 
  11  | test.describe('Events API - Read Endpoints', () => {
  12  |   let client: EventClient;
  13  | 
  14  |   test.beforeEach(async ({ authorizedClient }) => {
  15  |     client = await authorizedClient(EventClient, 'user');
  16  |   });
  17  | 
  18  |   // Verify retrieving paginated list of all events for user
  19  |   test('getAllEvents', async () => {
  20  |     const response = await client.getAllEvents(5, 0, 1);
  21  |     expect(response.status(), 'Status code should be 200').toBe(200);
  22  |     const body = (await response.json()) as ResponseEventsPage;
  23  |     expect(body, 'ResponseEventsPage should not be null').not.toBeNull();
  24  |     expect(body.page, 'Events list should not be null').not.toBeNull();
  25  |     expect(body.totalElements, 'Total elements should be >= 0').toBeGreaterThanOrEqual(0);
  26  |     expect(body.currentPage, 'Current page should be >= 0').toBeGreaterThanOrEqual(0);
  27  |     expect(body.totalPages, 'Total pages should be >= 0').toBeGreaterThanOrEqual(0);
  28  |     expect(body.number, 'Number should be >= 0').toBeGreaterThanOrEqual(0);
  29  |   });
  30  | 
  31  |   // Verify fields of the first event when a non-empty page is requested
  32  |   test('getAllEvents - first event fields', async () => {
  33  |     const response = await client.getAllEvents(5, 0, 1);
  34  |     expect(response.status(), 'Status code should be 200').toBe(200);
  35  |     const body = (await response.json()) as ResponseEventsPage;
  36  |     expect(body.page.length, 'Events list should not be empty').toBeGreaterThan(0);
  37  |     const event = body.page[0];
  38  |     expect(event.title, 'Event title should not be null').not.toBeNull();
  39  |     expect(event.organizer, 'Event organizer should not be null').not.toBeNull();
  40  |     expect(event.creationDate, 'Event creationDate should not be null').not.toBeNull();
  41  |   });
  42  | 
  43  |   for (const eventId of [2]) {
  44  |     // Verify retrieving event details by event ID
  45  |     test(`getEventById - eventId: ${eventId}`, async () => {
  46  |       const response = await client.getEventById(eventId);
  47  |       expect(response.status(), 'Status code should be 200').toBe(200);
  48  |       const event = (await response.json()) as EventsPage;
  49  |       expect(event, 'Event should not be null').not.toBeNull();
  50  |       expect(event.id, 'Event ID should match').toBe(eventId);
  51  |       expect(event.title, 'Title should not be null').not.toBeNull();
  52  |       expect(event.organizer, 'Organizer should not be null').not.toBeNull();
  53  |       expect(event.creationDate, 'Creation date should not be null').not.toBeNull();
  54  |       expect(event.dates, 'Dates should not be null').not.toBeNull();
  55  |       expect(event.dates.length, 'Dates list should not be empty').toBeGreaterThan(0);
  56  |       expect(event.tags, 'Tags should not be null').not.toBeNull();
  57  |     });
  58  |   }
  59  | 
  60  |   // Verify getting likes count for an existing event
  61  |   test('getLikesCountTest - eventId: 2', async () => {
  62  |     const response = await client.getEventLikesCount(2);
  63  |     expect(response.status(), 'Unexpected status code').toBe(200);
  64  |     expect(Number(await response.json()), 'Count should be >= 0').toBeGreaterThanOrEqual(0);
  65  |   });
  66  | 
  67  |   // Verify getting likes count for a non-existing event
  68  |   test('getLikesCountTest - eventId: 99', async () => {
  69  |     const response = await client.getEventLikesCount(99);
  70  |     expect(response.status(), 'Unexpected status code').toBe(404);
  71  |     expect((await response.json()).message, 'Error message should match').toBe(
  72  |       EVENT_ERROR.missing(99)
  73  |     );
  74  |   });
  75  | 
  76  |   // Verify getting dislikes count for an existing event
  77  |   test('getDislikesCountTest - eventId: 2', async () => {
  78  |     const response = await client.getEventDislikesCount(2);
  79  |     expect(response.status(), 'Unexpected status code').toBe(200);
  80  |     expect(Number(await response.json()), 'Count should be >= 0').toBeGreaterThanOrEqual(0);
  81  |   });
  82  | 
  83  |   // Verify getting dislikes count for a non-existing event
  84  |   test('getDislikesCountTest - eventId: 99', async () => {
  85  |     const response = await client.getEventDislikesCount(99);
  86  |     expect(response.status(), 'Unexpected status code').toBe(404);
  87  |     expect((await response.json()).message, 'Error message should match').toBe(
  88  |       EVENT_ERROR.missing(99)
  89  |     );
  90  |   });
  91  | 
  92  |   for (const { eventId, expectedLiked } of [
  93  |     { eventId: 210, expectedLiked: true },
  94  |     { eventId: 235, expectedLiked: false },
  95  |   ]) {
  96  |     // Verify if user liked the event
  97  |     test(`checkUserLikeStatus - eventId: ${eventId}`, async () => {
  98  |       const response = await client.checkUserLikedEvent(eventId);
  99  |       expect(response.status(), 'Unexpected status code').toBe(200);
> 100 |       expect(await response.json(), 'Liked status should match').toBe(expectedLiked);
      |                                                                  ^ Error: Liked status should match
  101 |     });
  102 |   }
  103 | 
  104 |   // Verify checking like status for a non-existing event
  105 |   test('checkUserLikeStatus - eventId: 99', async () => {
  106 |     const response = await client.checkUserLikedEvent(99);
  107 |     expect(response.status(), 'Unexpected status code').toBe(404);
  108 |     expect((await response.json()).message, 'Error message should match').toBe(
  109 |       EVENT_ERROR.missing(99)
  110 |     );
  111 |   });
  112 | 
  113 |   // Verify getting event attenders with valid event ID
  114 |   test('getEventAttendersTest - eventId: 210', async () => {
  115 |     const response = await client.getEventAttenders(210);
  116 |     expect(response.status(), 'Unexpected status code').toBe(200);
  117 |     const attenders = (await response.json()) as EventAttender[];
  118 |     expect(attenders, 'Attenders list should not be null').not.toBeNull();
  119 |     expect(attenders.length, 'Attenders list size should be >= 0').toBeGreaterThanOrEqual(0);
  120 |   });
  121 | 
  122 |   // Verify getting event attenders with invalid event ID
  123 |   test('getEventAttendersTest - eventId: 99', async () => {
  124 |     const response = await client.getEventAttenders(99);
  125 |     expect(response.status(), 'Unexpected status code').toBe(404);
  126 |     expect((await response.json()).message, 'Error message should match').toBe(
  127 |       EVENT_ERROR.NOT_FOUND
  128 |     );
  129 |   });
  130 | 
  131 |   for (const { userId, expectedCount } of [
  132 |     { userId: 235, expectedCount: 7 },
  133 |     { userId: 99, expectedCount: 0 },
  134 |   ]) {
  135 |     // Verify count of events where user is an attender
  136 |     test(`getAttendersEventsCountTest - userId: ${userId}`, async () => {
  137 |       const response = await client.getEventAttendersCount(userId);
  138 |       expect(response.status(), 'Status code should be 200').toBe(200);
  139 |       expect(Number(await response.json()), 'Count should match expected value').toBe(
  140 |         expectedCount
  141 |       );
  142 |     });
  143 |   }
  144 |   for (const { userId, expectedCount } of [
  145 |     { userId: 210, expectedCount: 4 },
  146 |     { userId: 99, expectedCount: 0 },
  147 |   ]) {
  148 |     // Verify count of events where user is organizer
  149 |     test(`getEventsCountByOrganizerTest - userId: ${userId}`, async () => {
  150 |       const response = await client.getEventsCountByOrganizer(userId);
  151 |       expect(response.status(), 'Status code should be 200').toBe(200);
  152 |       expect(Number(await response.json()), 'Events count should match expected').toBe(
  153 |         expectedCount
  154 |       );
  155 |     });
  156 |   }
  157 | 
  158 |   // Verify getting all events addresses returns 200 and non-empty list
  159 |   test('getAllEventsAddressesTest', async () => {
  160 |     const response = await client.getEventsAddresses();
  161 |     expect(response.status(), 'Status code should be 200').toBe(200);
  162 |     const addresses = (await response.json()) as Record<string, unknown>[];
  163 |     expect(addresses, 'API addresses list should not be null').not.toBeNull();
  164 |     expect(addresses.length, 'API addresses list should not be empty').toBeGreaterThan(0);
  165 |     expect(addresses[0], 'Address should have latitude').toHaveProperty('latitude');
  166 |     expect(addresses[0], 'Address should have longitude').toHaveProperty('longitude');
  167 |     expect(addresses[0], 'Address should have streetEn').toHaveProperty('streetEn');
  168 |     expect(addresses[0], 'Address should have cityUa').toHaveProperty('cityUk');
  169 |     expect(addresses[0], 'Address should have countryUa').toHaveProperty('countryUk');
  170 |   });
  171 | });
  172 | 
  173 | test.describe('Events API - Likes, Dislikes & Rating', () => {
  174 |   let client: EventClient;
  175 | 
  176 |   test.beforeEach(async ({ authorizedClient }) => {
  177 |     client = await authorizedClient(EventClient, 'user');
  178 |   });
  179 | 
  180 |   // Verify liking an existing event
  181 |   test('likeEventTest - eventId: 238', async () => {
  182 |     const response = await client.likeEvent(238);
  183 |     expect(response.status(), 'Unexpected status code').toBe(200);
  184 |   });
  185 | 
  186 |   // Verify liking a non-existing event
  187 |   test('likeEventTest - eventId: 99', async () => {
  188 |     const response = await client.likeEvent(99);
  189 |     expect(response.status(), 'Unexpected status code').toBe(404);
  190 |     expect((await response.json()).message, 'Error message should match').toBe(
  191 |       EVENT_ERROR.missing(99)
  192 |     );
  193 |   });
  194 | 
  195 |   // Verify disliking an existing event
  196 |   test('dislikeEventTest - eventId: 239', async () => {
  197 |     const response = await client.dislikeEvent(239);
  198 |     expect(response.status(), 'Unexpected status code').toBe(200);
  199 |   });
  200 | 
```