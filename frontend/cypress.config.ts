import { defineConfig } from 'cypress'
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin'
import task from '@cypress/code-coverage/task'

export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:5173',
    viewportWidth: 320,
    viewportHeight: 420,
    setupNodeEvents (on, config) {
      addMatchImageSnapshotPlugin(on)
      task(on, config)
      return config
    },
  },
})
