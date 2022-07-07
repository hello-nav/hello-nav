import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import GlobPlugin from 'vite-plugin-glob'

export default defineConfig({
  plugins: [
    react(),
    GlobPlugin(),
  ],
  esbuild: {
    logOverride: {
      'this-is-undefined-in-esm': 'silent'
    }
  },
  build: {
    chunkSizeWarningLimit: 800
  }
})
