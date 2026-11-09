# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/api-event.spec.ts >> Events API - Read Endpoints >> getEventsCountByOrganizerTest - userId: 210
- Location: tests/api/api-event.spec.ts:149:5

# Error details

```
Error: Events count should match expected

expect(received).toBe(expected) // Object.is equality

Expected: 4
Received: 0
```

# Test source

```ts
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
  100 |       expect(await response.json(), 'Liked status should match').toBe(expectedLiked);
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
> 152 |       expect(Number(await response.json()), 'Events count should match expected').toBe(
      |                                                                                   ^ Error: Events count should match expected
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
  201 |   // Verify disliking a non-existing event
  202 |   test('dislikeEventTest - eventId: 99', async () => {
  203 |     const response = await client.dislikeEvent(99);
  204 |     expect(response.status(), 'Unexpected status code').toBe(404);
  205 |     expect((await response.json()).message, 'Error message should match').toBe(
  206 |       EVENT_ERROR.missing(99)
  207 |     );
  208 |   });
  209 | 
  210 |   for (const { eventId, grade, expectedStatus, expectedMessage } of [
  211 |     {
  212 |       eventId: 210,
  213 |       grade: 4,
  214 |       expectedStatus: 400,
  215 |       expectedMessage: 'must be less than or equal to 3',
  216 |     },
  217 |     { eventId: 210, grade: 0, expectedStatus: 400, expectedMessage: 'must be greater than 0' },
  218 |     { eventId: 210, grade: -1, expectedStatus: 400, expectedMessage: 'must be greater than 0' },
  219 |     {
  220 |       eventId: 210,
  221 |       grade: 999,
  222 |       expectedStatus: 400,
  223 |       expectedMessage: 'must be less than or equal to 3',
  224 |     },
  225 |     {
  226 |       eventId: 216,
  227 |       grade: 3,
  228 |       expectedStatus: 403,
  229 |       expectedMessage: 'Organizer have no rights to rate the own event',
  230 |     },
  231 |     { eventId: 238, grade: 2, expectedStatus: 400, expectedMessage: 'Event is not finished yet' },
  232 |     { eventId: 99, grade: 2, expectedStatus: 404, expectedMessage: "Event hasn't been found" },
  233 |   ]) {
  234 |     // Verify rating event with various grades and validate status and messages
  235 |     test(`rateEventWithValidation - eventId: ${eventId}, grade: ${grade}`, async () => {
  236 |       const response = await client.rateEvent(eventId, grade);
  237 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  238 |       expect((await response.json()).message, 'Validation message should match').toBe(
  239 |         expectedMessage
  240 |       );
  241 |     });
  242 |   }
  243 | });
  244 | 
  245 | test.describe('Events API - Favorites & Participation', () => {
  246 |   let client: EventClient;
  247 | 
  248 |   test.beforeEach(async ({ authorizedClient }) => {
  249 |     client = await authorizedClient(EventClient, 'user');
  250 |   });
  251 | 
  252 |   // Verify adding an event to favorites
```