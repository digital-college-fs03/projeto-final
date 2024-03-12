import { defineConfig } from 'cypress'
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:5173',
    viewportWidth: 320,
    viewportHeight: 420,
    setupNodeEvents (on, config) {
      addMatchImageSnapshotPlugin(on)
    },
  },
})
