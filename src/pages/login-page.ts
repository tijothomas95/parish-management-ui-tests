import { Locator, Page } from '@playwright/test';
import BasePage, { TestContext } from './base-page.js';

export default class LoginPage extends BasePage {
  readonly usernameTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page, testContext: TestContext) {
    super(page, testContext);
    this.usernameTextbox = page.getByRole('textbox', { name: 'Email' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async gotoLoginPage(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
}
