import { defineConfig } from 'vite'
import GlobPlugin from 'vite-plugin-glob'

export default defineConfig({
  plugins: [GlobPlugin()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'helloNav',
      fileName: 'hello-nav',
    },
  },
  server: {
    port: 3030,
  },
})
