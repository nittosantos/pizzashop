import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  testMatch: /.*\.e2e-spec\.ts$/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:5078',
  },
  webServer: {
    command: 'npm run dev:test',
    url: 'http://localhost:5078',
    reuseExistingServer: !process.env.CI,
  },
})
