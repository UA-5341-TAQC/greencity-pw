# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/api-event.spec.ts >> Events API - Favorites & Participation >> addAttenderToEventTest - eventId: 241, status: 200
- Location: tests/api/api-event.spec.ts:299:3

# Error details

```
Error: Unexpected status code

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
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
  253 |   test('addEventToFavorites - eventId: 210', async () => {
  254 |     const response = await client.addEventToFavorites(210);
  255 |     expect(response.status(), 'Unexpected status code').toBe(200);
  256 |   });
  257 | 
  258 |   for (const { eventId, expectedStatus, expectedMessage } of [
  259 |     {
  260 |       eventId: 235,
  261 |       expectedStatus: 400,
  262 |       expectedMessage: 'User has already added this event to favorites.',
  263 |     },
  264 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  265 |   ]) {
  266 |     // Verify adding events to favorites with expected error
  267 |     test(`addEventToFavorites - eventId: ${eventId}`, async () => {
  268 |       const response = await client.addEventToFavorites(eventId);
  269 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  270 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  271 |     });
  272 |   }
  273 | 
  274 |   // Verify removing an event from favorites
  275 |   test('removeEventFromFavorites - eventId: 210', async () => {
  276 |     const response = await client.removeEventFromFavorites(210);
  277 |     expect(response.status(), 'Unexpected status code').toBe(200);
  278 |     const check = await client.getEventById(210);
  279 |     expect(check.status(), 'Getting event after removal should return 200').toBe(200);
  280 |     expect(
  281 |       (await check.json()).favorite,
  282 |       'Event should no longer be marked as favorite after removal'
  283 |     ).toBe(false);
  284 |   });
  285 | 
  286 |   for (const { eventId, expectedStatus, expectedMessage } of [
  287 |     { eventId: 235, expectedStatus: 400, expectedMessage: 'This event is not in favorites.' },
  288 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  289 |   ]) {
  290 |     // Verify removing events from favorites with expected error
  291 |     test(`removeEventFromFavorites - eventId: ${eventId}`, async () => {
  292 |       const response = await client.removeEventFromFavorites(eventId);
  293 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  294 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  295 |     });
  296 |   }
  297 | 
  298 |   // Verify adding an attender to an event
  299 |   test('addAttenderToEventTest - eventId: 241, status: 200', async () => {
  300 |     const response = await client.addAttenderToEvent(241);
> 301 |     expect(response.status(), 'Unexpected status code').toBe(200);
      |                                                         ^ Error: Unexpected status code
  302 |   });
  303 | 
  304 |   for (const { eventId, expectedStatus, expectedMessage } of [
  305 |     {
  306 |       eventId: 235,
  307 |       expectedStatus: 400,
  308 |       expectedMessage: 'You have already subscribed on this event',
  309 |     },
  310 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.NOT_FOUND },
  311 |   ]) {
  312 |     // Verify adding attender to event: already subscribed or not found
  313 |     test(`addAttenderToEventTest - eventId: ${eventId}, status: ${expectedStatus}`, async () => {
  314 |       const response = await client.addAttenderToEvent(eventId);
  315 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  316 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  317 |     });
  318 |   }
  319 | 
  320 |   // Verify adding an event to requested list
  321 |   test('addToRequestedEventTest - eventId: 210', async () => {
  322 |     const response = await client.addEventToRequested(210);
  323 |     expect(response.status(), 'Unexpected status code').toBe(200);
  324 |   });
  325 | 
  326 |   for (const { eventId, expectedStatus, expectedMessage } of [
  327 |     {
  328 |       eventId: 239,
  329 |       expectedStatus: 400,
  330 |       expectedMessage: 'User has already added this event to requested.',
  331 |     },
  332 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  333 |   ]) {
  334 |     // Verify adding events to requested list with expected error
  335 |     test(`addToRequestedEventTest - eventId: ${eventId}`, async () => {
  336 |       const response = await client.addEventToRequested(eventId);
  337 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  338 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  339 |     });
  340 |   }
  341 | 
  342 |   // Verify getting requested users list for an existing event
  343 |   test('getRequestedUsersTest - eventId: 239', async () => {
  344 |     const response = await client.getRequestedUsers(239);
  345 |     expect(response.status(), 'Unexpected status code').toBe(200);
  346 |     const body = await response.json();
  347 |     expect(body.totalElements, 'Total elements should be >= 0').toBeGreaterThanOrEqual(0);
  348 |     expect(body, 'ResponseEventsPage should not be null').not.toBeNull();
  349 |     expect(body.page, 'Events list should not be null').not.toBeNull();
  350 |   });
  351 | 
  352 |   // Verify getting requested users list for a non-existing event
  353 |   test('getRequestedUsersTest - eventId: 99', async () => {
  354 |     const response = await client.getRequestedUsers(99);
  355 |     expect(response.status(), 'Unexpected status code').toBe(404);
  356 |     expect((await response.json()).message, 'Error message should match').toBe(
  357 |       EVENT_ERROR.NOT_FOUND
  358 |     );
  359 |   });
  360 | 
  361 |   // Verify removing an event from requested list
  362 |   test('removeEventFromRequestedTest - eventId: 239', async () => {
  363 |     const response = await client.removeEventFromRequested(239);
  364 |     expect(response.status(), 'Unexpected status code').toBe(200);
  365 |   });
  366 | 
  367 |   for (const { eventId, expectedStatus, expectedMessage } of [
  368 |     { eventId: 235, expectedStatus: 400, expectedMessage: 'This event is not in requested.' },
  369 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.missing(99) },
  370 |   ]) {
  371 |     // Verify removing events from requested list with expected error
  372 |     test(`removeEventFromRequestedTest - eventId: ${eventId}`, async () => {
  373 |       const response = await client.removeEventFromRequested(eventId);
  374 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  375 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  376 |     });
  377 |   }
  378 | });
  379 | 
  380 | test.describe('Events API - Create, Update, Delete', () => {
  381 |   let client: EventClient;
  382 | 
  383 |   test.beforeEach(async ({ authorizedClient }) => {
  384 |     client = await authorizedClient(EventClient, 'user');
  385 |   });
  386 | 
  387 |   // Verify creating a new event with valid data
  388 |   test('createEventWithValidData', async () => {
  389 |     const eventData = {
  390 |       title: 'New Event 2026',
  391 |       description: 'New Test Event created via Swagger API',
  392 |       open: true,
  393 |       datesLocations: [
  394 |         {
  395 |           startDate: '2027-07-14T20:51:48.560Z',
  396 |           finishDate: '2027-07-15T20:51:48.560Z',
  397 |           onlineLink: 'https://meet.google.com',
  398 |         },
  399 |       ],
  400 |       tags: ['Social'],
  401 |     };
```