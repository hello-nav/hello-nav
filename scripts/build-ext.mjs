import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import 'zx/globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const extensionDir = resolve(__dirname, '../src/extension')
const distDir = resolve(__dirname, '../dist')
const outputDir = resolve(__dirname, '../extension')

await $`mkdir -p ${outputDir}`
await $`rm -rf ${outputDir}/*`

await $`cp -r ${distDir}/* ${outputDir}`
await $`cp -rf ${extensionDir}/* ${outputDir}`

await $`zip -r hello-nav-ext.zip ./extension`

console.log('🧩 Extension generation success!')
