import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

const EVENT_ID = 210;

test.describe('Event Details — comments', () => {
  test.beforeEach(async ({ authenticatedUser, eventDetailsPage }) => {
    void authenticatedUser;

    await eventDetailsPage.navigateToEventDetails(EVENT_ID);
    await eventDetailsPage.waitForDetailsPage();
    await eventDetailsPage.header.switchLanguage(Language.En);
  });

  test('TC-13 Verify adding, editing and replying to a comment on Event Details', async ({
    eventDetailsPage,
  }) => {
    const { comments, header } = eventDetailsPage;

    const runId = Date.now();
    const commentText = `Great environmental event! ${runId}`;
    const updatedCommentText = `${commentText} Updated.`;
    const replyText = `Thank you for the event! ${runId}`;

    const currentUserName = (await header.userMenuDropdown.innerText()).trim();
    const today = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    let commentsCountBefore = 0;

    await test.step('1: Scroll to the Comments section', async () => {
      await eventDetailsPage.scrollToComments();

      expect(await comments.isCommentsSectionVisible()).toBe(true);
    });

    await test.step('2: Verify the comment input field and "Comment" button', async () => {
      expect(await comments.isCommentInputVisible()).toBe(true);
      expect(await comments.isSubmitCommentButtonVisible()).toBe(true);
    });

    await test.step('3: Note the current number of comments', async () => {
      commentsCountBefore = await comments.getTotalCommentsCount();
    });

    await test.step('4: Enter a valid comment', async () => {
      await comments.fillComment(commentText);

      expect(await comments.getCommentInputText()).toBe(commentText);
      await expect.poll(() => comments.isSubmitCommentButtonEnabled()).toBe(true);
    });

    await test.step('5: Click the "Comment" button', async () => {
      await comments.clickSubmitComment();

      await expect.poll(() => comments.getTotalCommentsCount()).toBe(commentsCountBefore + 1);
    });

    const comment = await comments.getCommentByText(commentText);

    await test.step('6: Verify the added comment', async () => {
      expect(await comment.isCommentVisible()).toBe(true);
      expect(await comment.getCommentText()).toBe(commentText);
    });

    await test.step('7: Verify the comment author and date', async () => {
      expect(await comment.getCommentAuthorName()).toBe(currentUserName);
      expect(await comment.isCommentAvatarVisible()).toBe(true);
      expect(await comment.getCommentDate()).toBe(today);
    });

    await test.step('8: Verify the comment action controls', async () => {
      expect(await comment.isEditCommentButtonVisible()).toBe(true);
      expect(await comment.isDeleteCommentButtonVisible()).toBe(true);
      expect(await comment.isReplyToCommentButtonVisible()).toBe(true);
    });

    await test.step('9: Verify Like and Dislike controls', async () => {
      expect(await comment.isCommentLikeIconVisible()).toBe(true);
      expect(await comment.isCommentDislikeIconVisible()).toBe(true);
    });

    await test.step('10: Verify the comment count', async () => {
      expect(await comments.getTotalCommentsCount()).toBe(commentsCountBefore + 1);
    });

    await test.step('11: Click the "Edit" control for the added comment', async () => {
      await comment.clickEditComment();

      await expect.poll(() => comment.isEditCommentInputVisible()).toBe(true);
      expect(await comment.getEditCommentInputText()).toBe(commentText);
      expect(await comment.isSaveCommentChangesButtonVisible()).toBe(true);
      expect(await comment.isCancelCommentEditButtonVisible()).toBe(true);
    });

    await test.step('12: Modify the comment text', async () => {
      await comment.fillEditComment(updatedCommentText);

      expect(await comment.getEditCommentInputText()).toBe(updatedCommentText);
    });

    await test.step('13: Click "Save changes"', async () => {
      await comment.clickSaveCommentChanges();

      await expect.poll(() => comment.isEditCommentInputVisible()).toBe(false);
      await expect.poll(() => comment.getCommentText()).toBe(updatedCommentText);
    });

    await test.step('14: Click "Reply"', async () => {
      await comment.clickReplyToComment();

      await expect.poll(() => comment.isReplyInputVisible()).toBe(true);
      expect(await comment.isSubmitReplyButtonVisible()).toBe(true);
    });

    await test.step('15: Enter and submit a reply', async () => {
      await comment.fillReply(replyText);
      await expect.poll(() => comment.isSubmitReplyButtonEnabled()).toBe(true);
      await comment.clickSubmitReply();

      await expect.poll(() => comment.getDisplayedRepliesCount()).toBe(1);
    });

    await test.step('16: Verify the added reply', async () => {
      const reply = comment.getReply(0);

      expect(await reply.getCommentText()).toBe(replyText);
      expect(await reply.getCommentAuthorName()).toBe(currentUserName);
      expect(await reply.isCommentAvatarVisible()).toBe(true);
    });
  });
});
