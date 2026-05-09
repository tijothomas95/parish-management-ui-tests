import { test, expect } from '../base/pom-fixture.js';
const tag = ['@smoke'];

test.describe('Authentication: Successful Login', { tag }, () => {
  test.only('can login with valid credentials', async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle(/Home/);
  });
});
