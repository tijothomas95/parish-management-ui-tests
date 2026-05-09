import { Page } from '@playwright/test';

export interface TestContext {
  memberName?: string;
}

export default class BasePage {
  public readonly page: Page;
  public readonly testContext: TestContext;

  constructor(page: Page, testContext: TestContext) {
    this.page = page;
    this.testContext = testContext;
  }
}
