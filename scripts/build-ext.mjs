import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import 'zx/globals'

const packageJson = JSON.parse(await $`cat ./package.json`)
const version = packageJson.version

const manifestJson = JSON.parse(await $`cat ./src/extension/manifest.json`)
manifestJson.version = version
await $`echo ${JSON.stringify(manifestJson, null, 2)} > ./src/extension/manifest.json`

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const extensionDir = resolve(__dirname, '../src/extension')
const distDir = resolve(__dirname, '../dist')
const outputDir = resolve(__dirname, '../extension')

await $`mkdir -p ${outputDir}`
await $`rm -rf ${outputDir}/*`

await $`cp -r ${distDir}/* ${outputDir}`
await $`cp -rf ${extensionDir}/* ${outputDir}`

await $`zip -r hello-nav-ext-${version}.zip ./extension`

console.log('🧩 Extension generation successfully!')
