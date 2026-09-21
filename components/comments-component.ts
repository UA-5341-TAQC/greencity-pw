import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { CommentItemComponent } from '@/components/comment-item-component';

/**
 * Component representing the comments section.
 * Contains comment input, submit button, comments count, list, and pagination.
 */
export class CommentsComponent extends BaseComponent {
  protected readonly commentsTitle: Locator;
  protected readonly totalCommentsCount: Locator;

  protected readonly commentInput: Locator;
  protected readonly commentImageUploadButton: Locator;
  protected readonly commentEmojiButton: Locator;
  protected readonly submitCommentButton: Locator;

  protected readonly commentItems: Locator;

  protected readonly commentsPagination: Locator;
  protected readonly commentsPageNumbers: Locator;
  protected readonly currentCommentsPage: Locator;
  protected readonly previousCommentsPageButton: Locator;
  protected readonly nextCommentsPageButton: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.commentsTitle = this.root.getByText('Comments', {
      exact: true,
    });

    this.totalCommentsCount = this.root.locator(':scope > .counter #total-count');

    const addCommentForm = this.root.locator(':scope > app-add-comment');

    this.commentInput = addCommentForm.locator('.comment-textarea[contenteditable="true"]');

    this.commentImageUploadButton = addCommentForm.locator('.image-upload-btn');

    this.commentEmojiButton = addCommentForm.locator('.emoji-picker-btn');

    this.submitCommentButton = addCommentForm.getByRole('button', {
      name: 'Comment',
    });

    this.commentItems = this.root.locator(
      ':scope > app-comments-list[datatype="comment"] > .comment-body-wrapper'
    );

    this.commentsPagination = this.root.locator(':scope > app-comment-pagination');

    this.commentsPageNumbers = this.commentsPagination.locator('.page-number');

    this.currentCommentsPage = this.commentsPagination.locator('.page-number.current');

    this.previousCommentsPageButton = this.commentsPagination.locator('.pagination-previous');

    this.nextCommentsPageButton = this.commentsPagination.locator('.pagination-next');
  }

  /** Checks whether the comments section is visible. */
  async isCommentsSectionVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  /** Returns the comments section title. */
  async getCommentsTitle(): Promise<string> {
    return (await this.commentsTitle.textContent())?.trim() ?? '';
  }

  /** Returns the total number of comments. */
  async getTotalCommentsCount(): Promise<number> {
    const text = (await this.totalCommentsCount.textContent())?.trim() ?? '';

    const count = Number(text);

    if (Number.isNaN(count)) {
      throw new Error(`Invalid comments count: '${text}'`);
    }

    return count;
  }

  /** Returns the number of currently displayed comments. */
  async getDisplayedCommentsCount(): Promise<number> {
    return await this.commentItems.count();
  }

  /** Checks whether the comment input is visible. */
  async isCommentInputVisible(): Promise<boolean> {
    return await this.commentInput.isVisible();
  }

  /** Fills the comment input. */
  async fillComment(commentText: string): Promise<void> {
    await this.commentInput.click();
    await this.commentInput.pressSequentially(commentText);
  }

  /** Returns the current text in the comment input. */
  async getCommentInputText(): Promise<string> {
    return (await this.commentInput.textContent())?.trim() ?? '';
  }

  /** Checks whether the comment image upload button is visible. */
  async isCommentImageUploadButtonVisible(): Promise<boolean> {
    return await this.commentImageUploadButton.isVisible();
  }

  /** Clicks the comment image upload button. */
  async clickCommentImageUploadButton(): Promise<void> {
    await this.commentImageUploadButton.click();
  }

  /** Checks whether the comment emoji button is visible. */
  async isCommentEmojiButtonVisible(): Promise<boolean> {
    return await this.commentEmojiButton.isVisible();
  }

  /** Clicks the comment emoji button. */
  async clickCommentEmojiButton(): Promise<void> {
    await this.commentEmojiButton.click();
  }

  /** Checks whether the Comment button is enabled. */
  async isSubmitCommentButtonEnabled(): Promise<boolean> {
    return await this.submitCommentButton.isEnabled();
  }

  /** Clicks the Comment button. */
  async clickSubmitComment(): Promise<void> {
    await this.submitCommentButton.click();
  }

  /** Adds a new comment. */
  async addComment(commentText: string): Promise<void> {
    await this.fillComment(commentText);
    await this.clickSubmitComment();
  }

  /** Returns a comment by its zero-based index. */
  getComment(index: number): CommentItemComponent {
    return new CommentItemComponent(this.commentItems.nth(index), this.page);
  }

  /** Returns the first displayed comment created by the specified user. */
  async getCommentByUser(userName: string): Promise<CommentItemComponent> {
    const commentsCount = await this.commentItems.count();

    for (let index = 0; index < commentsCount; index++) {
      const comment = this.getComment(index);

      if ((await comment.getCommentAuthorName()) === userName) {
        return comment;
      }
    }

    throw new Error(`No comment by user '${userName}' was found.`);
  }

  /** Returns all displayed comments created by the specified user. */
  async getCommentsByUser(userName: string): Promise<CommentItemComponent[]> {
    const comments: CommentItemComponent[] = [];
    const commentsCount = await this.commentItems.count();

    for (let index = 0; index < commentsCount; index++) {
      const comment = this.getComment(index);

      if ((await comment.getCommentAuthorName()) === userName) {
        comments.push(comment);
      }
    }

    return comments;
  }

  /** Returns the first displayed comment with the specified text. */
  async getCommentByText(commentText: string): Promise<CommentItemComponent> {
    const commentsCount = await this.commentItems.count();

    for (let index = 0; index < commentsCount; index++) {
      const comment = this.getComment(index);

      if ((await comment.getCommentText()) === commentText) {
        return comment;
      }
    }

    throw new Error(`No comment with text '${commentText}' was found.`);
  }

  /** Checks whether comments pagination is visible. */
  async isCommentsPaginationVisible(): Promise<boolean> {
    return await this.commentsPagination.isVisible();
  }

  /** Returns the current comments page number. */
  async getCurrentCommentsPageNumber(): Promise<number> {
    const text = (await this.currentCommentsPage.textContent())?.trim() ?? '';

    const pageNumber = Number(text);

    if (Number.isNaN(pageNumber)) {
      throw new Error(`Invalid comments page number: '${text}'`);
    }

    return pageNumber;
  }

  /** Returns the number of displayed comments page buttons. */
  async getCommentsPagesCount(): Promise<number> {
    return await this.commentsPageNumbers.count();
  }

  /** Opens the specified comments page. */
  async clickCommentsPage(pageNumber: number): Promise<void> {
    await this.commentsPageNumbers
      .filter({
        hasText: new RegExp(`^\\s*${pageNumber}\\s*$`),
      })
      .click();
  }

  /** Clicks the previous comments page button. */
  async clickPreviousCommentsPage(): Promise<void> {
    await this.previousCommentsPageButton.click();
  }

  /** Clicks the next comments page button. */
  async clickNextCommentsPage(): Promise<void> {
    await this.nextCommentsPageButton.click();
  }
}
