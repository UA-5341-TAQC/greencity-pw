# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-35-log-layout.spec.ts >> Page layout and key sections >> TC-35 Verify profile page layout and key sections after login
- Location: tests/tc-35-log-layout.spec.ts:6:3

# Error details

```
Error: Header menu option Eco news should be visible!

expect(locator).toBeVisible() failed

Locator: locator('header').first().getByRole('link', { name: /^(?:Eco News|Еко Новини)$/i })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Header menu option Eco news should be visible! locator('header').first().getByRole('link', { name: /^(?:Eco News|Еко Новини)$/i }) with timeout 10000ms
  - waiting for locator('header').first().getByRole('link', { name: /^(?:Eco News|Еко Новини)$/i })

```

```yaml
- text: Welcome to login page
- img "close button"
- heading "Welcome back!" [level=1]
- heading "Please enter your details to sign in." [level=2]
- text: Email
- textbox "Email":
  - /placeholder: example@email.com
  - text: vladimir4ua@gmail.com
- text: Password
- textbox "Password": 12345678aA!
- button "show password":
  - img "show-hide-password"
- text: Bad email or password Forgot password?
- button "Sign in"
- text: or
- button "Google sign-in Sign in with Google":
  - img "Google sign-in"
  - text: Sign in with Google
- paragraph: Don't have an account yet? Sign up
```

# Test source

```ts
  68  |    */
  69  |   async isLoggedIn(): Promise<boolean> {
  70  |     return await test.step('Check if user is logged in', async () => {
  71  |       try {
  72  |         await this.userMenuDropdown.waitFor({ state: 'visible', timeout: env.SHORT_TIMEOUT });
  73  |         return true;
  74  |       } catch {
  75  |         return false;
  76  |       }
  77  |     });
  78  |   }
  79  | 
  80  |   /**
  81  |    * Gets the current language from the header.
  82  |    * @returns 'En' if the current language is English, 'Uk' if it's Ukrainian.
  83  |    */
  84  |   async getCurrentLanguage(): Promise<Language> {
  85  |     return await test.step('Get current language from header', async () => {
  86  |       const text = await this.languageSwitcher.innerText();
  87  |       return text.trim() as Language;
  88  |     });
  89  |   }
  90  | 
  91  |   // --- Utilities Methods ---
  92  | 
  93  |   async switchLanguage(language: Language): Promise<void> {
  94  |     await test.step(`Switch language to ${language}`, async () => {
  95  |       if ((await this.getCurrentLanguage()) !== language) {
  96  |         await this.languageSwitcher.click();
  97  |         if (language === Language.En) {
  98  |           await this.langEnglishOption.click();
  99  |         } else {
  100 |           await this.langUkrainianOption.click();
  101 |         }
  102 |         // Verify that the language has been switched
  103 |         await expect(this.signInButton).toHaveText(HEADER_I18N[language].signIn);
  104 |       }
  105 |     });
  106 |   }
  107 | 
  108 |   async openSearch(): Promise<void> {
  109 |     await test.step('Open search', async () => {
  110 |       await this.searchIcon.click();
  111 |     });
  112 |   }
  113 | 
  114 |   // --- Auth & Profile Methods ---
  115 | 
  116 |   /**
  117 |    * Clicks the "Sign in" button in the header.
  118 |    */
  119 |   async clickSignIn(): Promise<void> {
  120 |     await test.step('Click Sign In button', async () => {
  121 |       await this.signInButton.click();
  122 |     });
  123 |   }
  124 | 
  125 |   async clickSignUp(): Promise<void> {
  126 |     await test.step('Click Sign Up button', async () => {
  127 |       await this.signUpButton.click();
  128 |     });
  129 |   }
  130 | 
  131 |   async openUserMenu(): Promise<void> {
  132 |     await test.step('Open User Menu dropdown', async () => {
  133 |       await this.userMenuDropdown.click();
  134 |     });
  135 |   }
  136 | 
  137 |   async clickSignOut(): Promise<void> {
  138 |     await test.step('Click Sign Out', async () => {
  139 |       await this.openUserMenu();
  140 |       await this.signOutButton.click();
  141 |     });
  142 |   }
  143 | 
  144 |   // --- Navigation Methods ---
  145 | 
  146 |   async clickLogo(): Promise<void> {
  147 |     await test.step('Click on Logo', async () => {
  148 |       await this.logo.click();
  149 |     });
  150 |   }
  151 | 
  152 |   /**
  153 |    * Navigates to a specific section via the header navigation menu.
  154 |    * Automatically handles multilingual matching.
  155 |    * @param item - The menu item to navigate to (e.g., "Eco news", "Events").
  156 |    */
  157 |   async navigateTo(item: MenuItem): Promise<void> {
  158 |     await test.step(`Navigate to ${item} via Header`, async () => {
  159 |       await this.navLinks[item].click();
  160 |     });
  161 |   }
  162 | 
  163 |   /**
  164 |    * Helper for veryfing all navigation links are visible
  165 |    */
  166 |   async verifyAllNavLinksAreVisible(): Promise<void> {
  167 |     for (const [menuItem, locator] of Object.entries(this.navLinks)) {
> 168 |       await expect(locator, `Header menu option ${menuItem} should be visible!`).toBeVisible();
      |                                                                                  ^ Error: Header menu option Eco news should be visible!
  169 |     }
  170 |   }
  171 | }
  172 | 
```