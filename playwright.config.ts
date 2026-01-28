import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the retail-business project
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3003',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Only configure webServer in CI mode
  ...(process.env.CI && {
    webServer: {
      command: 'npm run preview',
      url: 'http://localhost:3003',
      reuseExistingServer: false,
      timeout: 120 * 1000,
    },
  }),
});
