# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-005-open-eco-news-edit-form.spec.ts >> TC-005 Verify opening the Eco News editing form >> opens the current user’s Eco News item in edit form without changing it
- Location: tests/ui/tc-005-open-eco-news-edit-form.spec.ts:5:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Edit news', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - listitem "site bookmark" [ref=e29] [cursor=pointer]
              - listitem "site notification" [ref=e31] [cursor=pointer]:
                - generic [ref=e33]: 99+
              - search "site search" [ref=e34] [cursor=pointer]
              - menu "language switcher" [ref=e36]:
                - option "english" [ref=e37] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e38]: En
              - menu "profile options collapsed" [ref=e40]:
                - listitem [ref=e41] [cursor=pointer]: TestATestA
      - generic [ref=e42]:
        - generic "Tab To Main"
        - generic [ref=e43]:
          - main [ref=e47]:
            - generic [ref=e48]:
              - link "Back to News" [ref=e51] [cursor=pointer]:
                - /url: "#/greenCity/news"
              - generic [ref=e56]:
                - generic [ref=e57]: Education
                - generic [ref=e58]: Initiatives
              - generic [ref=e59]:
                - generic [ref=e60]: Test news
                - generic [ref=e62]:
                  - generic [ref=e63]: Oct 15, 2026
                  - img "dot" [ref=e65]
                  - generic [ref=e66]: by GREENCITY
                  - generic [ref=e67]:
                    - img "like" [ref=e68] [cursor=pointer]
                    - generic [ref=e69]: "0"
                - img "news-image" [ref=e70]
                - generic [ref=e71]:
                  - generic [ref=e72]:
                    - img "twitter" [ref=e74] [cursor=pointer]
                    - img "linkedin" [ref=e76] [cursor=pointer]
                    - img "facebook" [ref=e78] [cursor=pointer]
                  - paragraph [ref=e82]: Test news Test news Test news Test news Test news Test news
              - generic [ref=e84]:
                - paragraph [ref=e85]: May be interesting for you
                - separator [ref=e86]
                - generic [ref=e88]:
                  - generic [ref=e91]:
                    - img "user added image" [ref=e92]
                    - generic [ref=e93]:
                      - list [ref=e94]:
                        - generic [ref=e95]: News|
                        - generic [ref=e96]: Education|
                        - generic [ref=e97]: Initiatives
                      - generic [ref=e98]:
                        - heading "Updated Eco News Title 1791979361088" [level=3] [ref=e100]
                        - paragraph [ref=e103]: Updated Eco News content for testing.
                      - generic [ref=e104]:
                        - paragraph [ref=e105]:
                          - img "date of creation" [ref=e106]
                          - generic [ref=e107]: Oct 14, 2026
                        - paragraph [ref=e108]:
                          - img "created by" [ref=e109]
                          - generic [ref=e110]: TestATestA
                        - generic [ref=e111]:
                          - paragraph [ref=e112]:
                            - img "comments" [ref=e113]
                            - generic [ref=e114]: "0"
                          - paragraph [ref=e115]:
                            - img "likes" [ref=e116]
                            - generic [ref=e117]: "0"
                  - generic [ref=e120]:
                    - img "user added image" [ref=e121]
                    - generic [ref=e122]:
                      - list [ref=e123]:
                        - generic [ref=e124]: News|
                        - generic [ref=e125]: Education|
                        - generic [ref=e126]: Initiatives
                      - generic [ref=e127]:
                        - heading "Updated Eco News Title 1791979171447" [level=3] [ref=e129]
                        - paragraph [ref=e132]: Updated Eco News content for testing.
                      - generic [ref=e133]:
                        - paragraph [ref=e134]:
                          - img "date of creation" [ref=e135]
                          - generic [ref=e136]: Oct 14, 2026
                        - paragraph [ref=e137]:
                          - img "created by" [ref=e138]
                          - generic [ref=e139]: TestATestA
                        - generic [ref=e140]:
                          - paragraph [ref=e141]:
                            - img "comments" [ref=e142]
                            - generic [ref=e143]: "0"
                          - paragraph [ref=e144]:
                            - img "likes" [ref=e145]
                            - generic [ref=e146]: "0"
                  - generic [ref=e149]:
                    - img "user added image" [ref=e150]
                    - generic [ref=e151]:
                      - list [ref=e152]:
                        - generic [ref=e153]: News|
                        - generic [ref=e154]: Education|
                        - generic [ref=e155]: Initiatives
                      - generic [ref=e156]:
                        - heading "Updated Eco News Title 1791979156507" [level=3] [ref=e158]
                        - paragraph [ref=e161]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                      - generic [ref=e162]:
                        - paragraph [ref=e163]:
                          - img "date of creation" [ref=e164]
                          - generic [ref=e165]: Oct 14, 2026
                        - paragraph [ref=e166]:
                          - img "created by" [ref=e167]
                          - generic [ref=e168]: TestATestA
                        - generic [ref=e169]:
                          - paragraph [ref=e170]:
                            - img "comments" [ref=e171]
                            - generic [ref=e172]: "0"
                          - paragraph [ref=e173]:
                            - img "likes" [ref=e174]
                            - generic [ref=e175]: "0"
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]:
                    - paragraph [ref=e179]: Comments
                    - paragraph [ref=e180]: 0 comment
                  - separator [ref=e181]
                - generic [ref=e183]:
                  - paragraph [ref=e188]: T
                  - generic [ref=e189]:
                    - generic [ref=e191]:
                      - generic [ref=e192]: Add a comment
                      - button [ref=e193] [cursor=pointer]:
                        - img [aria-hidden] [ref=e194]: image
                      - button [ref=e196] [cursor=pointer]:
                        - img [aria-hidden] [ref=e197]: sentiment_satisfied_alt
                    - button "Comment" [disabled] [ref=e199]
          - contentinfo [ref=e203]:
            - generic [ref=e204]:
              - generic [ref=e205]:
                - link [ref=e207] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e208]
                - navigation [ref=e209]:
                  - menu [ref=e210]:
                    - listitem [ref=e211]:
                      - link "Eco news" [ref=e212] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e213]:
                      - link "Events" [ref=e214] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e215]:
                      - link "Places" [ref=e216] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e217]:
                      - link "About Us" [ref=e218] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e219]:
                      - link "My Space" [ref=e220] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e221]:
                      - link "UBS Courier" [ref=e222] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e223]:
                    - listitem [ref=e224]:
                      - paragraph [ref=e225]: Follow us
                    - listitem [ref=e226]:
                      - link [ref=e227] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e228]
                      - link [ref=e229] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e230]
                      - link [ref=e231] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e232]
                      - link [ref=e233] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e234]
                      - link [ref=e235] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e236]
              - generic [ref=e237]: © Copyright 2026. Green City.
    - button [ref=e238] [cursor=pointer]:
      - img "chat" [ref=e239]
  - generic [ref=e240]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | import EditNewsPage from '@/pages/edit-news-page';
  3  | 
  4  | test.describe('TC-005 Verify opening the Eco News editing form', () => {
  5  |   test('opens the current user’s Eco News item in edit form without changing it', async ({
  6  |     authenticatedPage,
  7  |     ecoNewsPage,
  8  |   }) => {
  9  |     const editNewsPage = new EditNewsPage(authenticatedPage);
  10 | 
  11 |     await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
  12 |     await ecoNewsPage.navigateToEcoNewsPage();
  13 |     await ecoNewsPage.waitForEcoNewsPage();
  14 |     await ecoNewsPage.clickListView();
  15 | 
  16 |     const editableCards = ecoNewsPage.listViewCards.filter({
  17 |       has: authenticatedPage.locator('.button-news-card button'),
  18 |     });
  19 |     const card = editableCards.first();
  20 |     await expect(card.locator('.button-news-card button')).toBeVisible();
  21 |     const originalTitle = (await card.locator('h3').innerText()).trim();
  22 |     const originalTags = await card
  23 |       .locator('.eco-news_list-tag span:not(.tag-divider)')
  24 |       .allTextContents();
  25 |     const editLink = card.locator('a.link');
  26 |     await expect(editLink).toHaveAttribute('href', /.+/);
  27 | 
  28 |     await card.locator('.button-news-card button').click();
> 29 |     await authenticatedPage.getByText('Edit news', { exact: true }).click();
     |                                                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  30 |     await editNewsPage.waitForEditNewsPage();
  31 | 
  32 |     await expect(authenticatedPage.locator('textarea[formcontrolname="title"]')).toHaveValue(
  33 |       originalTitle
  34 |     );
  35 |     await expect(authenticatedPage.locator('div.tags-box')).toBeVisible();
  36 |     const loadedTags = await editNewsPage.getSelectedTags();
  37 |     expect(loadedTags.length).toBeGreaterThan(0);
  38 |     for (const tag of originalTags.map((value) => value.trim()).filter(Boolean)) {
  39 |       expect(loadedTags.join(' ')).toContain(tag);
  40 |     }
  41 |     await expect(
  42 |       authenticatedPage.locator(
  43 |         'div.source-block input[type="text"], input[formcontrolname="source"]'
  44 |       )
  45 |     ).toBeVisible();
  46 |     await expect(authenticatedPage.locator('div.ql-editor').first()).toBeVisible();
  47 |     await expect(authenticatedPage.getByText('Picture (optional)', { exact: true })).toBeVisible();
  48 | 
  49 |     const sourceBefore = await editNewsPage.getSource();
  50 |     const contentBefore = await editNewsPage.getContent();
  51 |     const dateBefore = await editNewsPage.getDate();
  52 |     const authorBefore = await editNewsPage.getAuthor();
  53 |     expect(contentBefore.trim()).not.toBe('');
  54 |     expect(dateBefore.trim()).not.toBe('');
  55 |     expect(authorBefore.trim()).not.toBe('');
  56 | 
  57 |     await expect(authenticatedPage.getByText('Pick tags for news', { exact: true })).toBeVisible();
  58 |     await expect(authenticatedPage.getByText('Picture (optional)', { exact: true })).toBeVisible();
  59 |     await expect(authenticatedPage.getByText('Source (optional)', { exact: true })).toBeVisible();
  60 |     await expect(authenticatedPage.getByText('Content', { exact: true })).toBeVisible();
  61 |     await expect(
  62 |       authenticatedPage
  63 |         .locator('div.submit-buttons')
  64 |         .getByRole('button', { name: 'Cancel', exact: true })
  65 |     ).toBeVisible();
  66 |     await expect(
  67 |       authenticatedPage.getByRole('button', { name: 'Preview', exact: true })
  68 |     ).toBeVisible();
  69 |     await expect(
  70 |       authenticatedPage.getByRole('button', { name: 'Edit', exact: true })
  71 |     ).toBeVisible();
  72 | 
  73 |     expect(await editNewsPage.getTitleValue()).toBe(originalTitle);
  74 |     expect(await editNewsPage.getSelectedTags()).toEqual(loadedTags);
  75 |     expect(await editNewsPage.getSource()).toBe(sourceBefore);
  76 |     expect(await editNewsPage.getContent()).toBe(contentBefore);
  77 |     expect(await editNewsPage.getDate()).toBe(dateBefore);
  78 |     expect(await editNewsPage.getAuthor()).toBe(authorBefore);
  79 |     await expect(authenticatedPage).toHaveURL(/create-news\?id=/);
  80 |   });
  81 | });
  82 | 
```