# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-19-update-event.spec.ts >> Events - Edit Event >> TC-19 Verify successful updating of an existing event with valid data
- Location: tests/ui/tc-19-update-event.spec.ts:13:3

# Error details

```
Error: page.goto: Operation was cancelled; maybe frame was detached?
Call log:
  - navigating to "https://www.greencity.cx.ua/#/greenCity", waiting until "load"

```

# Test source

```ts
  1  | import type { Page, BrowserContext, Locator } from '@playwright/test';
  2  | import { HeaderComponent } from '@/components';
  3  | 
  4  | /**
  5  |  * Base page class containing common elements like header, footer, and toasts.
  6  |  * All other page objects should inherit from this class.
  7  |  */
  8  | export default class BasePage {
  9  |   protected page: Page;
  10 |   protected context: BrowserContext;
  11 | 
  12 |   public readonly header: HeaderComponent;
  13 |   public readonly toastMessage: Locator;
  14 | 
  15 |   protected constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.context = page.context();
  18 |     this.header = new HeaderComponent(page);
  19 |     this.toastMessage = page
  20 |       .locator('snack-bar-container .mat-mdc-snack-bar-label, mat-snack-bar-container')
  21 |       .last();
  22 |   }
  23 | 
  24 |   /**
  25 |    * Waits for the global toast message (snack-bar) to disappear from the screen.
  26 |    * Useful to call if the toast is blocking an element you need to click.
  27 |    */
  28 |   async waitForToastToDisappear(): Promise<void> {
  29 |     await this.toastMessage.waitFor({ state: 'hidden' });
  30 |   }
  31 | 
  32 |   /**
  33 |    * Navigates to the specified URL.
  34 |    * @param url - The URL to navigate to.
  35 |    */
  36 |   async navigateTo(url: string): Promise<void> {
> 37 |     await this.page.goto(url);
     |                     ^ Error: page.goto: Operation was cancelled; maybe frame was detached?
  38 |   }
  39 | 
  40 |   /**
  41 |    * Scrolls the page to the top or bottom based on the specified direction.
  42 |    * @param direction
  43 |    */
  44 |   async scrollPage(direction: 'up' | 'down'): Promise<void> {
  45 |     await this.page.evaluate((scrollDirection) => {
  46 |       const top = scrollDirection === 'down' ? document.documentElement.scrollHeight : 0;
  47 |       window.scrollTo(0, top);
  48 |     }, direction);
  49 |   }
  50 | 
  51 |   /**
  52 |    * Waits for the page load state to be "networkidle".
  53 |    * This ensures all background network requests are finished.
  54 |    */
  55 |   async waitForPageLoad(): Promise<void> {
  56 |     await this.page.waitForLoadState('networkidle');
  57 |   }
  58 |   url(): string {
  59 |     return this.page.url();
  60 |   }
  61 | }
  62 | 
```