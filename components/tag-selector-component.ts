import { Locator, Page } from '@playwright/test';

import { BaseComponent } from '@/components/base-component';
import { Language } from '@/types/header.types';
import { NewsType } from '@/types/news.types';
import { NEWS_I18N } from '@/types/news.i18n';

/* Component for selecting tags in the news creation process */
export class TagSelectorComponent extends BaseComponent {
  protected readonly tagsBox: Locator;
  protected readonly newsTag: Locator;
  protected readonly eventTag: Locator;
  protected readonly educationTag: Locator;
  protected readonly initiativesTag: Locator;
  protected readonly adsTag: Locator;

  constructor(root: Locator, page: Page, language: Language = Language.En) {
    super(root, page);

    const newsType = NEWS_I18N[language];

    this.tagsBox = this.root;

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

  /** * Checks whether the tag selector is visible. */
  async isVisible(): Promise<boolean> {
    return this.tagsBox.isVisible();
  }

  /**
   * Selects the specified news tag.
   *
   * @param tag - Tag to select.
   */
  async selectTag(tag: NewsType): Promise<void> {
    switch (tag) {
      case NewsType.News:
        await this.newsTag.click();
        break;

      case NewsType.Event:
        await this.eventTag.click();
        break;

      case NewsType.Education:
        await this.educationTag.click();
        break;

      case NewsType.Initiatives:
        await this.initiativesTag.click();
        break;

      case NewsType.Ads:
        await this.adsTag.click();
        break;
    }
  }
}
