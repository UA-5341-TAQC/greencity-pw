# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/api-event.spec.ts >> Events API - Create, Update, Delete >> updateEventWithValidData
- Location: tests/api/api-event.spec.ts:414:3

# Error details

```
Error: Getting existing event should return 200

expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
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
  402 |     const response = await client.createEvent(eventData);
  403 |     expect(response.status(), `Status code should be 201. Response: ${await response.text()}`).toBe(
  404 |       201
  405 |     );
  406 |     const createdEvent = await response.json();
  407 |     expect(createdEvent.id, 'Created event ID should not be null').toBeDefined();
  408 |     expect(createdEvent.title, 'Title should match').toBe(eventData.title);
  409 |     expect(createdEvent.description, 'Description should match').toBe(eventData.description);
  410 |     expect(createdEvent.open, 'Event should be open').toBe(true);
  411 |   });
  412 | 
  413 |   // Verify updating an existing event with valid data
  414 |   test('updateEventWithValidData', async () => {
  415 |     const eventId = 259;
  416 |     const originalResponse = await client.getEventById(eventId);
> 417 |     expect(originalResponse.status(), 'Getting existing event should return 200').toBe(200);
      |                                                                                   ^ Error: Getting existing event should return 200
  418 |     const originalEvent = await originalResponse.json();
  419 |     const updatedEventData = {
  420 |       id: eventId,
  421 |       title: 'Updated Automation Event 2026',
  422 |       description: 'Updated Test Event via API',
  423 |       open: true,
  424 |       datesLocations: [
  425 |         {
  426 |           startDate: '2027-07-14T20:51:48.560Z',
  427 |           finishDate: '2027-07-15T20:51:48.560Z',
  428 |           onlineLink: 'https://meet.google.com',
  429 |         },
  430 |       ],
  431 |       tags: ['Social'],
  432 |     };
  433 |     const response = await client.updateEvent(eventId, updatedEventData);
  434 |     expect(response.status(), `Status code should be 200. Response: ${await response.text()}`).toBe(
  435 |       200
  436 |     );
  437 |     const updatedResponse = await client.getEventById(eventId);
  438 |     expect(updatedResponse.status(), 'Getting updated event should return 200').toBe(200);
  439 |     const updatedEvent = await updatedResponse.json();
  440 |     expect(updatedEvent.id, 'Event ID should remain unchanged').toBe(eventId);
  441 |     expect(updatedEvent.title, 'Title should match').toBe(updatedEventData.title);
  442 |     expect(updatedEvent.description, 'Description should match').toBe(updatedEventData.description);
  443 |     expect(updatedEvent.open, 'Event should be open').toBe(true);
  444 |     expect(updatedEvent.organizer.id, 'Organizer ID should remain unchanged').toBe(
  445 |       originalEvent.organizer.id
  446 |     );
  447 |   });
  448 | 
  449 |   for (const { eventId, expectedStatus, expectedMessage } of [
  450 |     { eventId: 238, expectedStatus: 403, expectedMessage: EVENT_ERROR.NO_PERMISSION },
  451 |     { eventId: 99, expectedStatus: 404, expectedMessage: EVENT_ERROR.NOT_FOUND },
  452 |   ]) {
  453 |     // Verify deleting an event returns expected error response
  454 |     test(`deleteEvent - eventId: ${eventId}`, async () => {
  455 |       const response = await client.deleteEvent(eventId);
  456 |       expect(response.status(), 'Unexpected status code').toBe(expectedStatus);
  457 |       expect((await response.json()).message, 'Error message should match').toBe(expectedMessage);
  458 |     });
  459 |   }
  460 | });
  461 | 
```