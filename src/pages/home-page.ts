import { Locator, Page } from '@playwright/test';
import BasePage, { TestContext } from './base-page.js';

export default class HomePage extends BasePage {
  constructor(page: Page, testContext: TestContext) {
    super(page, testContext);
  }

  async openHomePage(): Promise<void> {
    await this.page.goto('/');
  }
}
