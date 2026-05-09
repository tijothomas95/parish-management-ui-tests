import { test as baseTest } from '@playwright/test';
import { TestContext } from '../pages/base-page.js';
import LoginPage from '../pages/login-page.js';
import HomePage from '../pages/home-page.js';

type pages = {
  sharedContext: TestContext;
  loginPage: LoginPage;
  homePage: HomePage;
};

const testPages = baseTest.extend<pages>({
  sharedContext: async ({}, use) => {
    const context: TestContext = {};
    await use(context);
  },
  loginPage: async ({ page, sharedContext }, use) => {
    const loginPage = new LoginPage(page, sharedContext);
    await use(loginPage);
  },
  homePage: async ({ page, sharedContext }, use) => {
    const targetPage = new HomePage(page, sharedContext);
    await targetPage.openHomePage();
    await use(targetPage);
  },
});

export const test = testPages;
export const expect = testPages.expect;
