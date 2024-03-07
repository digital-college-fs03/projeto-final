import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:5173',
    viewportWidth: 320,
    viewportHeight: 420,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
})
