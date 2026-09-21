import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * Component representing an individual comment.
 * Contains author, text, date, likes, and reply actions.
 */
export class CommentItemComponent extends BaseComponent {
  protected readonly commentAvatar: Locator;
  protected readonly commentAuthorName: Locator;
  protected readonly commentDate: Locator;
  protected readonly commentText: Locator;
  protected readonly commentLikeCount: Locator;
  protected readonly commentLikeIcon: Locator;
  protected readonly commentDislikeIcon: Locator;

  protected readonly likeCommentButton: Locator;
  protected readonly editCommentButton: Locator;
  protected readonly deleteCommentButton: Locator;
  protected readonly replyToCommentButton: Locator;
  protected readonly viewCommentRepliesButton: Locator;

  protected readonly editCommentInput: Locator;
  protected readonly editCommentImageUploadButton: Locator;
  protected readonly editCommentEmojiButton: Locator;
  protected readonly editCommentDropdownButton: Locator;
  protected readonly saveCommentChangesButton: Locator;
  protected readonly cancelCommentEditButton: Locator;

  protected readonly replyContainer: Locator;
  protected readonly replyInput: Locator;
  protected readonly replyImageUploadButton: Locator;
  protected readonly replyEmojiButton: Locator;
  protected readonly replyDropdownButton: Locator;
  protected readonly submitReplyButton: Locator;
  protected readonly replyItems: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.commentAvatar = this.root.locator(':scope > .comment-avatar .profile-avatar');

    this.commentAuthorName = this.root.locator(':scope > .comment-details .author-name');

    this.commentDate = this.root.locator(':scope > .comment-details .comment-date-month');

    this.commentText = this.root.locator(':scope > .comment-main-text > .comment-text');

    this.commentLikeCount = this.root.locator(':scope > .comment-details .like-amount');

    this.commentLikeIcon = this.root.locator(
      ':scope > .comment-details .comment-likes img[alt="like"]'
    );

    this.commentDislikeIcon = this.root.locator(':scope > .comment-details .dislike-img');

    const commentActions = this.root.locator(':scope > .comments-elements');

    this.likeCommentButton = commentActions.locator(':scope > app-like-comment button.like');

    this.editCommentButton = commentActions.locator(
      ':scope > .btn-wrapper app-edit-comment button.edit'
    );

    this.deleteCommentButton = commentActions.locator(
      ':scope > .btn-wrapper app-delete-comment button.delete'
    );

    this.replyToCommentButton = commentActions.locator(':scope > app-reply-comment button.reply');

    this.viewCommentRepliesButton = commentActions.locator(
      ':scope > .btn-replies app-view-replies button.view'
    );

    const editCommentForm = this.root.locator(':scope > .comment-main-text .comment-edit-text');

    this.editCommentInput = editCommentForm.locator('.comment-textarea[contenteditable="true"]');

    this.editCommentImageUploadButton = editCommentForm.locator('.image-upload-btn');

    this.editCommentEmojiButton = editCommentForm.locator('.emoji-picker-btn');

    this.editCommentDropdownButton = editCommentForm.locator('.dropdown-trigger');

    this.saveCommentChangesButton = commentActions.locator('.save-edit');

    this.cancelCommentEditButton = commentActions.locator('.cancel-edit');

    this.replyContainer = this.root.locator(':scope > app-comments-container[datatype="reply"]');

    const addReplyForm = this.replyContainer.locator(':scope > app-add-comment');

    this.replyInput = addReplyForm.locator('.comment-textarea[contenteditable="true"]');

    this.replyImageUploadButton = addReplyForm.locator('.image-upload-btn');

    this.replyEmojiButton = addReplyForm.locator('.emoji-picker-btn');

    this.replyDropdownButton = addReplyForm.locator('.dropdown-trigger');

    this.submitReplyButton = addReplyForm.getByRole('button', {
      name: 'Reply',
    });

    this.replyItems = this.replyContainer.locator(
      ':scope > div > app-comments-list[datatype="reply"] > .comment-body-wrapper'
    );
  }

  /** Checks whether the comment is visible. */
  async isCommentVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  /** Checks whether the comment avatar is visible. */
  async isCommentAvatarVisible(): Promise<boolean> {
    return await this.commentAvatar.isVisible();
  }

  /** Returns the comment author's name. */
  async getCommentAuthorName(): Promise<string> {
    return (await this.commentAuthorName.textContent())?.trim() ?? '';
  }

  /** Returns the comment date. */
  async getCommentDate(): Promise<string> {
    return (await this.commentDate.textContent())?.trim() ?? '';
  }

  /** Returns the comment text. */
  async getCommentText(): Promise<string> {
    return (await this.commentText.textContent())?.trim() ?? '';
  }

  /** Returns the comment like count. */
  async getCommentLikeCount(): Promise<number> {
    const text = (await this.commentLikeCount.textContent())?.trim() ?? '';

    if (!text || !/^\d+$/.test(text)) {
      throw new Error(`Invalid comment like count: '${text}'`);
    }

    return Number(text);
  }

  /** Checks whether the comment like icon is visible. */
  async isCommentLikeIconVisible(): Promise<boolean> {
    return await this.commentLikeIcon.isVisible();
  }

  /** Checks whether the comment dislike icon is visible. */
  async isCommentDislikeIconVisible(): Promise<boolean> {
    return await this.commentDislikeIcon.isVisible();
  }

  /** Checks whether the comment is currently liked. */
  async isCommentLiked(): Promise<boolean> {
    if (!(await this.likeCommentButton.isVisible())) {
      return false;
    }

    return (await this.getLikeCommentButtonText()) === 'Liked';
  }

  /** Checks whether the comment is currently displayed as disliked. */
  async isCommentDisliked(): Promise<boolean> {
    const src = await this.commentDislikeIcon.getAttribute('src');

    return src?.includes('disliked.png') ?? false;
  }

  /** Checks whether the Like comment button is visible. */
  async isLikeCommentButtonVisible(): Promise<boolean> {
    return await this.likeCommentButton.isVisible();
  }

  /** Returns the Like/Liked comment button text. */
  async getLikeCommentButtonText(): Promise<string> {
    return (await this.likeCommentButton.textContent())?.trim() ?? '';
  }

  /** Clicks the Like/Liked comment button. */
  async clickLikeComment(): Promise<void> {
    await this.likeCommentButton.click();
  }

  /** Checks whether the Edit comment button is visible. */
  async isEditCommentButtonVisible(): Promise<boolean> {
    return await this.editCommentButton.isVisible();
  }

  /** Clicks the Edit comment button. */
  async clickEditComment(): Promise<void> {
    await this.editCommentButton.click();
  }

  /** Checks whether the comment edit input is visible. */
  async isEditCommentInputVisible(): Promise<boolean> {
    return await this.editCommentInput.isVisible();
  }

  /** Returns the current text in the comment edit input. */
  async getEditCommentInputText(): Promise<string> {
    return (await this.editCommentInput.textContent())?.trim() ?? '';
  }

  /** Replaces the current text in the comment edit input. */
  async fillEditComment(commentText: string): Promise<void> {
    await this.editCommentInput.click();
    await this.editCommentInput.press('Control+A');
    await this.editCommentInput.press('Backspace');
    await this.editCommentInput.pressSequentially(commentText);
  }

  /** Checks whether the edit image upload button is visible. */
  async isEditCommentImageUploadButtonVisible(): Promise<boolean> {
    return await this.editCommentImageUploadButton.isVisible();
  }

  /** Clicks the edit image upload button. */
  async clickEditCommentImageUploadButton(): Promise<void> {
    await this.editCommentImageUploadButton.click();
  }

  /** Checks whether the edit emoji button is visible. */
  async isEditCommentEmojiButtonVisible(): Promise<boolean> {
    return await this.editCommentEmojiButton.isVisible();
  }

  /** Clicks the edit emoji button. */
  async clickEditCommentEmojiButton(): Promise<void> {
    await this.editCommentEmojiButton.click();
  }

  /** Checks whether the edit dropdown button is visible. */
  async isEditCommentDropdownButtonVisible(): Promise<boolean> {
    return await this.editCommentDropdownButton.isVisible();
  }

  /** Checks whether the edit dropdown is expanded. */
  async isEditCommentDropdownExpanded(): Promise<boolean> {
    return (await this.editCommentDropdownButton.getAttribute('aria-expanded')) === 'true';
  }

  /** Clicks the edit dropdown button. */
  async clickEditCommentDropdownButton(): Promise<void> {
    await this.editCommentDropdownButton.click();
  }

  /** Checks whether the Save changes button is visible. */
  async isSaveCommentChangesButtonVisible(): Promise<boolean> {
    return await this.saveCommentChangesButton.isVisible();
  }

  /** Clicks the Save changes button. */
  async clickSaveCommentChanges(): Promise<void> {
    await this.saveCommentChangesButton.click();
  }

  /** Checks whether the Cancel edit button is visible. */
  async isCancelCommentEditButtonVisible(): Promise<boolean> {
    return await this.cancelCommentEditButton.isVisible();
  }

  /** Clicks the Cancel edit button. */
  async clickCancelCommentEdit(): Promise<void> {
    await this.cancelCommentEditButton.click();
  }

  /** Checks whether the Delete comment button is visible. */
  async isDeleteCommentButtonVisible(): Promise<boolean> {
    return await this.deleteCommentButton.isVisible();
  }

  /** Clicks the Delete comment button. */
  async clickDeleteComment(): Promise<void> {
    await this.deleteCommentButton.click();
  }

  /** Checks whether the Reply to comment button is visible. */
  async isReplyToCommentButtonVisible(): Promise<boolean> {
    return await this.replyToCommentButton.isVisible();
  }

  /** Clicks the Reply to comment button. */
  async clickReplyToComment(): Promise<void> {
    await this.replyToCommentButton.click();
  }

  /** Checks whether the View/Hide replies button is visible. */
  async isViewCommentRepliesButtonVisible(): Promise<boolean> {
    return await this.viewCommentRepliesButton.isVisible();
  }

  /** Returns the View/Hide replies button text. */
  async getViewCommentRepliesButtonText(): Promise<string> {
    return (await this.viewCommentRepliesButton.textContent())?.trim() ?? '';
  }

  /** Clicks the View/Hide replies button. */
  async clickViewCommentReplies(): Promise<void> {
    await this.viewCommentRepliesButton.click();
  }

  /** Checks whether the reply input is visible. */
  async isReplyInputVisible(): Promise<boolean> {
    return await this.replyInput.isVisible();
  }

  /** Fills the reply input. */
  async fillReply(replyText: string): Promise<void> {
    await this.replyInput.click();
    await this.replyInput.pressSequentially(replyText);
  }

  /** Returns the current text in the reply input. */
  async getReplyInputText(): Promise<string> {
    return (await this.replyInput.textContent())?.trim() ?? '';
  }

  /** Checks whether the reply image upload button is visible. */
  async isReplyImageUploadButtonVisible(): Promise<boolean> {
    return await this.replyImageUploadButton.isVisible();
  }

  /** Clicks the reply image upload button. */
  async clickReplyImageUploadButton(): Promise<void> {
    await this.replyImageUploadButton.click();
  }

  /** Checks whether the reply emoji button is visible. */
  async isReplyEmojiButtonVisible(): Promise<boolean> {
    return await this.replyEmojiButton.isVisible();
  }

  /** Clicks the reply emoji button. */
  async clickReplyEmojiButton(): Promise<void> {
    await this.replyEmojiButton.click();
  }

  /** Checks whether the reply dropdown button is visible. */
  async isReplyDropdownButtonVisible(): Promise<boolean> {
    return await this.replyDropdownButton.isVisible();
  }

  /** Checks whether the reply dropdown is expanded. */
  async isReplyDropdownExpanded(): Promise<boolean> {
    return (await this.replyDropdownButton.getAttribute('aria-expanded')) === 'true';
  }

  /** Clicks the reply dropdown button. */
  async clickReplyDropdownButton(): Promise<void> {
    await this.replyDropdownButton.click();
  }

  /** Checks whether the Reply submit button is enabled. */
  async isSubmitReplyButtonEnabled(): Promise<boolean> {
    return await this.submitReplyButton.isEnabled();
  }

  /** Clicks the Reply submit button. */
  async clickSubmitReply(): Promise<void> {
    await this.submitReplyButton.click();
  }

  /** Adds a reply to the comment. */
  async addReply(replyText: string): Promise<void> {
    if (!(await this.replyInput.isVisible())) {
      await this.clickReplyToComment();
    }

    await this.fillReply(replyText);
    await this.clickSubmitReply();
  }

  /** Returns the number of currently displayed replies. */
  async getDisplayedRepliesCount(): Promise<number> {
    return await this.replyItems.count();
  }

  /** Returns a reply by its zero-based index. */
  getReply(index: number): CommentItemComponent {
    return new CommentItemComponent(this.replyItems.nth(index), this.page);
  }
}
