import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { Language } from '@/types/header.types';
import { NewsType } from '@/types/news.types';
import { NEWS_I18N } from '@/types/news.i18n';

/**
 * Component for selecting tags in the news creation process.
 */
export class TagSelectorComponent extends BaseComponent {
  protected readonly tagsBox: Locator;
  protected readonly tagButtons: Locator;
  protected readonly newsTag: Locator;
  protected readonly eventTag: Locator;
  protected readonly educationTag: Locator;
  protected readonly initiativesTag: Locator;
  protected readonly adsTag: Locator;

  constructor(root: Locator, page?: Page, language: Language = Language.En) {
    super(root, page);

    const newsType = NEWS_I18N[language];

    this.tagsBox = this.root;
    this.tagButtons = this.root.locator('button.tag-button, button');

    this.newsTag = this.root.locator(
      `button.tag-button:has-text('${newsType.types[NewsType.News]}')`
    );

    this.eventTag = this.root.locator(
      `button.tag-button:has-text('${newsType.types[NewsType.Event]}')`
    );

    this.educationTag = this.root.locator(
      `button.tag-button:has-text('${newsType.types[NewsType.Education]}')`
    );

    this.initiativesTag = this.root.locator(
      `button.tag-button:has-text('${newsType.types[NewsType.Initiatives]}')`
    );

    this.adsTag = this.root.locator(
      `button.tag-button:has-text('${newsType.types[NewsType.Ads]}')`
    );
  }

  /** Checks whether the tag selector is visible. */
  async isVisible(): Promise<boolean> {
    return await test.step('TagSelector: check visibility', async () => {
      return await this.tagsBox.isVisible();
    });
  }

  /**
   * Selects the specified news tag.
   *
   * @param tag - Tag to select (NewsType enum value or string name).
   */
  async selectTag(tag: NewsType | string): Promise<void> {
    await test.step(`TagSelector: select tag "${tag}"`, async () => {
      switch (tag) {
        case NewsType.News:
        case 'News':
        case 'Новини':
          await this.newsTag.first().click();
          break;

        case NewsType.Event:
        case 'Event':
        case 'Events':
        case 'Події':
          await this.eventTag.first().click();
          break;

        case NewsType.Education:
        case 'Education':
        case 'Освіта':
          await this.educationTag.first().click();
          break;

        case NewsType.Initiatives:
        case 'Initiatives':
        case 'Ініціативи':
          await this.initiativesTag.first().click();
          break;

        case NewsType.Ads:
        case 'Ads':
        case 'Реклама':
        case 'Оголошення':
          await this.adsTag.first().click();
          break;

        default:
          await this.tagButtons.filter({ hasText: tag }).first().click();
          break;
      }
    });
  }

  /** Selects the News tag. */
  async selectNewsTag(): Promise<void> {
    await test.step('TagSelector: select News tag', async () => {
      await this.newsTag.first().click();
    });
  }

  /** Selects the Event tag. */
  async selectEventTag(): Promise<void> {
    await test.step('TagSelector: select Event tag', async () => {
      await this.eventTag.first().click();
    });
  }

  /** Selects the Education tag. */
  async selectEducationTag(): Promise<void> {
    await test.step('TagSelector: select Education tag', async () => {
      await this.educationTag.first().click();
    });
  }

  /** Selects the Initiatives tag. */
  async selectInitiativesTag(): Promise<void> {
    await test.step('TagSelector: select Initiatives tag', async () => {
      await this.initiativesTag.first().click();
    });
  }

  /** Selects the Ads tag. */
  async selectAdsTag(): Promise<void> {
    await test.step('TagSelector: select Ads tag', async () => {
      await this.adsTag.first().click();
    });
  }

  /** Returns all active / selected tag names. */
  async getSelectedTags(): Promise<string[]> {
    return await test.step('TagSelector: get selected tags', async () => {
      const selectedElements = this.root.locator(
        '.global-tag-clicked, a.global-tag-clicked, [class*="global-tag-clicked"]'
      );
      if ((await selectedElements.count()) > 0) {
        return (await selectedElements.allInnerTexts()).map((t) => t.trim());
      }
      const selectedButtons = this.tagButtons.filter({
        has: this.page.locator('.global-tag-clicked, [class*="clicked"], [class*="active"]'),
      });
      if ((await selectedButtons.count()) > 0) {
        return (await selectedButtons.allInnerTexts()).map((t) => t.trim());
      }
      return [];
    });
  }
}
export default TagSelectorComponent;
