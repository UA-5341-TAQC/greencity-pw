import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class HomePage extends BasePage {
  //buttons
  protected readonly buttons: Locator;
  protected readonly subscribeButton: Locator;

  // text elements
  protected readonly home_header: Locator;
  protected readonly mainText: Locator;
  protected readonly subHeader: Locator;
  protected readonly bagsHeading: Locator;
  protected readonly bagsCount: Locator;
  protected readonly cupsHeading: Locator;
  protected readonly cupsCount: Locator;
  protected readonly bagQuestion: Locator;
  protected readonly cupQuestion: Locator;

  // images
  protected readonly guyImage: Locator;
  protected readonly bagImage: Locator;
  protected readonly cupImage: Locator;
  protected readonly firstLocationIcon: Locator;
  protected readonly secondLocationIcon: Locator;
  protected readonly qrIcon: Locator;

  //click -> to next
  protected readonly placesLinkText: Locator;
  protected readonly newsLinkText: Locator;

  // input field for Subscribe
  protected readonly emailInputField: Locator;

  constructor(page: Page) {
    super(page);

    // headers and subheaders
    this.home_header = page.getByRole('heading', { level: 1 });
    this.subHeader = page.getByRole('heading', { level: 2 });
    this.bagsHeading = page.getByRole('heading', { level: 3 }).first();
    this.cupsHeading = page.getByRole('heading', { level: 3 }).nth(1);

    // texts and other text realted elements
    this.mainText = page.locator('#header-left p');
    this.bagsCount = this.bagsHeading.locator('span');
    this.cupsCount = this.cupsHeading.locator('span');
    this.bagQuestion = this.bagsHeading.locator('p');
    this.cupQuestion = this.cupsHeading.locator('p');

    //buttons
    this.buttons = page.getByRole('button', {
      name: /(Start forming a habit!| Почати формувати звичку!)/i,
    });
    this.subscribeButton = page.getByRole('button', { name: /(Subscribe!| Підписатися!)/i });

    //images
    this.guyImage = page.getByAltText('guy-texture');
    this.bagImage = page
      .getByAltText('stat-icon')
      .filter({ has: page.locator('[src*="assets/img/habit-pic-bag.png"]') });
    this.cupImage = page
      .getByAltText('stat-icon')
      .filter({ has: page.locator('[src*="assets/img/habit-pic-cup.png"]') });
    this.firstLocationIcon = page.getByAltText('location-image').first();
    this.secondLocationIcon = page.getByAltText('location-image').nth(1);
    this.qrIcon = page.locator('[src*="assets/img/qr-code.png"]');

    //click -> to other page
    this.placesLinkText = page.locator('.location-row a[href*="places"]');
    this.newsLinkText = page.locator('.eco-events a[href*="/greenCity/news"]');

    // input field for Subscribe
    this.emailInputField = page.locator('input[type="email"]');
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/#/greenCity');
  }

  async waitForHomePage(): Promise<void> {
    await this.waitForPageLoad();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  // Click buttons and checks for buttons

  /**
   * Clicks the "Start forming a habit! " button.
   *
   * params:
   * index: number from 0 to 2, where 0 is the first buttton.
   */
  async clickStartFormingButton(index: number): Promise<void> {
    await this.buttons.nth(index).click();
  }

  /**
   * Clicks the third "Subscribe!" button.
   */
  async clickSubscribeButton(): Promise<void> {
    await this.subscribeButton.click();
  }

  /**
   * @returns whethe Subscibe button is visible.
   */
  async isSubscribeButtonVisible(): Promise<boolean> {
    return await this.subscribeButton.isVisible();
  }

  /**
   *
   * @returns whether "Start forming a habit!"  button is visible.
   *
   * params:
   * index: number from 0 to 2, where 0 is the first buttton.
   */
  async isStartFormingButtonVisible(index: number): Promise<boolean> {
    return await this.buttons.nth(index).isVisible();
  }

  // Text elements and text check

  /**
   * @returns bool whether header text element is visible.
   */
  async isHeaderVisible(): Promise<boolean> {
    return await this.home_header.isVisible();
  }

  /**
   * @returns header text or empty line.
   */
  async getHeaderText(): Promise<string> {
    return (await this.home_header.textContent()) ?? '';
  }

  /**
   * @returns bool whether main text element is visible.
   */
  async isMainTextVisible(): Promise<boolean> {
    return await this.mainText.isVisible();
  }

  /**
   * @returns string of main text from home page.
   */
  async getMainText(): Promise<string> {
    return (await this.mainText.textContent()) ?? '';
  }

  /**
   * Return bool whether sub header is visible.
   *
   * params:
   * index: numbers
   * 0-2 indexes available for subheaders
   */
  async isSubHeaderVisible(index: number): Promise<boolean> {
    return await this.subHeader.nth(index).isVisible();
  }

  /**
   * Return text of specific subheader or empty line.
   *
   * params:
   * index:umber 0-2 indexes available for subheaders
   */
  async getSubHeaderText(index: number): Promise<string> {
    return (await this.subHeader.nth(index).textContent()) ?? '';
  }

  /**
   *
   * @returns Number of Bags counts , or 0 if none.
   */
  async getBagsCount(): Promise<number> {
    const text = await this.bagsCount.textContent();
    return text ? Number(text.trim()) : 0;
  }

  /**
   *
   * @returns Number of Сups count, or 0 if none.
   */
  async getCupsCount(): Promise<number> {
    const text = await this.cupsCount.textContent();
    return text ? Number(text.trim()) : 0;
  }

  /** Checks whether the cups count is visible. */
  async isCupsCountVisible(): Promise<boolean> {
    return await this.cupsCount.isVisible();
  }

  /** Checks whether the bags count is visible. */
  async isBagsCountVisible(): Promise<boolean> {
    return await this.bagsCount.isVisible();
  }

  /**
   * Return text of specific element (questions about cups)  or empty line
   */
  async getCupQuestion(): Promise<string> {
    return (await this.cupQuestion.textContent()) ?? '';
  }

  /**
   * Return text of specific element (questions about bag)  or empty line
   */
  async getBagQuestion(): Promise<string> {
    return (await this.bagQuestion.textContent()) ?? '';
  }

  // Images: check whether the images are visible

  /** Checks whether the guy image is visible. */
  async isGuyImageVisible(): Promise<boolean> {
    return await this.guyImage.isVisible();
  }

  /** Checks whether the bag image is visible. */
  async isBagImageVisible(): Promise<boolean> {
    return await this.bagImage.isVisible();
  }

  /** Checks whether the cup image is visible. */
  async isCupImageVisible(): Promise<boolean> {
    return await this.cupImage.isVisible();
  }

  /** Checks whether the firs Location Icon is visible. */
  async isFirstLocationIconVisible(): Promise<boolean> {
    return await this.firstLocationIcon.isVisible();
  }

  /** Checks whether the second Location Icon is visible. */
  async isSecondLocationIconVisible(): Promise<boolean> {
    return await this.secondLocationIcon.isVisible();
  }

  /** Checks whether the QR-code image is visible. */
  async isQrIconVisible(): Promise<boolean> {
    return await this.qrIcon.isVisible();
  }

  //Subscribe for newsletter

  /** Checks whether the email input field  is visible. */
  async isEmailInputFieldVisible(): Promise<boolean> {
    try {
      await this.emailInputField.waitFor({ state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  /** Fill the Email field for Subscribe section.
   *
   * Temporary without click button, for cases where click is separate step.
   */
  async fillEmailSubscribe(email_input: string): Promise<void> {
    const result = await this.isEmailInputFieldVisible();
    if (!result) {
      throw new Error('There is an error! Email field is not visible!');
    }
    await this.emailInputField.fill(email_input);
  }

  // Linked text - click

  /**
   * Click linked text -> page Placespage
   */
  async clickPlacesLinkedText(): Promise<void> {
    await this.placesLinkText.click();
  }

  /**
   * Click linked text -> page Eco News page
   */
  async clickEcoNewsLinkedText(): Promise<void> {
    await this.newsLinkText.click();
  }
}
