import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      awaitWriteFinish: true,
    },
    strictPort: true,
  },
  plugins: [
    react(),
    istanbul({
      include: ['src/*'], // list of all directories/files you want to track coverage for
      exclude: ['node_modules'], // list of all directories/files you do not want to track coverage for
      extension: ['.js', '.ts', '.tsx'], // list of all file extensions you would like to track coverage for
      requireEnv: false, // if set to true, more config is needed
    }),
  ],
  envPrefix: 'FRONTEND_',
  build: {
    sourcemap: true,
  },
})
