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
    assetsInlineLimit: 102400, // 100KB 以下的资源内联为 base64
    rollupOptions: {
      // 确保外部依赖正确处理
      external: [],
    },
  },
  server: {
    port: 3030,
  },
})
