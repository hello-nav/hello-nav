import fs from 'fs'
import { resolve } from 'path'
import axios from 'axios'

const modulesPath = resolve(__dirname, '../src/model/modules')
const moduleNames = fs.readdirSync(modulesPath)

const errLinks: string[] = []
const pQueue: Promise<any>[] = []
moduleNames.forEach(fileName => {
  const module = require(resolve(modulesPath, fileName))
  module.default.forEach(app => {
    if (app.homepage) {
      pQueue.push(
        axios.get(app.homepage).catch(() => {
          console.error(app.homepage)
          errLinks.push(app.homepage)
        }),
      )
    }
    if (app.repository) {
      pQueue.push(
        axios.get(app.repository).catch(() => {
          console.error(app.repository)
          errLinks.push(app.repository)
        }),
      )
    }
  })
})

Promise.all(pQueue).then(() => {
  fs.writeFileSync('./error-links.txt', errLinks.join('\n'), 'utf-8')
})
