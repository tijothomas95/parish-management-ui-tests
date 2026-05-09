import { test as setup, expect } from '../base/pom-fixture.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

setup('Create user authenticated state', async ({ page, loginPage }) => {
  const username = process.env.TEST_USERNAME!;
  const password = process.env.TEST_PASSWORD!;

  await loginPage.gotoLoginPage('/');
  await loginPage.login(username, password);
  // Add assertion once valid user is assigned to .env
  console.log(`** Logged in user: ${username} **`);

  const authPath = path.resolve(__dirname, `../.auth/user.json`);
  await page.context().storageState({ path: authPath });
});
