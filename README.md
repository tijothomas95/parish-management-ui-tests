# Crew Pay Manager QA UI (AC)

This repository contains automated UI tests for the Parish Management platform, using [Playwright](https://playwright.dev/) with [TypeScript](https://playwright.dev/docs/test-typescript).

## Framework Details

| Package Name      |                                               Description                                                |
| :---------------- | :------------------------------------------------------------------------------------------------------: |
| @playwright/test  |               The official Playwright test runner and libraries for end-to-end automation.               |
| @types/node       |                 TypeScript definitions for Node.js, providing type safety for Node APIs.                 |
| allure-playwright | A reporter that integrates Playwright tests with Allure Report for detailed reporting and visualization. |
| eslint            |              A linter tool used to enforce code style and catch errors in TypeScript files.              |
| prettier          |          A code formatter that enforces a consistent style and layout using opinionated rules.           |
| dotenv            |         Loads environment variables from a .env file into process.env for secure configuration.          |

## Scripts Examples

### Local execution

- `npx cross-env CLIENT=air-canada USER=admin npm run tests:local -- "-g @smoke"` - Run ui tests

### Additional Playwright Test Commands

- Run a specific test file:

  ```sh
  npx playwright test tests/<file>.spec.ts --project=chromium --retries=0
  ```

- Run tests in based on ENV variable:

  ```sh
  $env:ENV="dev"; npx playwright test --headed --project=chromium
  ```

- Run tests with specific grep pattern:

  ```sh
  npx playwright test --grep "<test name>" --project=chromium
  ```

- Run tests in headed mode (see browser):

  ```sh
  npx playwright test --headed
  ```

## Project Setup and Requirements

1. Run `npm install`
2. Create a `.env` file with `BASE_URL`, `TEST_USERNAME`, `TEST_PASSWORD`.
3. Run `npm run test:local`
