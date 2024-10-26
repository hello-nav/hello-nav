/// <reference path="../src/types/index.d.ts" />

const fs = require('fs')
const path = require('path')
const libraryTree = require('@hello-nav/model') as CateItem[]

const urls: string[] = []

libraryTree
  .reduce((res: AppItem[], item: CateItem) => res.concat(...item.children), [])
  .forEach(app => {
    app.homepage && urls.push(app.homepage)
    app.repository && urls.push(app.repository)
  })

async function checkUrls(urls: string[], poolSize = 10) {
  const results: any = []
  const ongoingPromises = new Set()
  const logStream = fs.createWriteStream(path.resolve(__dirname, './check-log.txt'))
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
  }

  async function checkUrlValid(url: string) {
    return fetch(url, { method: 'HEAD', headers })
      .then(res => res.ok || Promise.reject(new Error(`HEAD request not ok: ${res.status}`)))
      .catch(_ =>
        fetch(url, { method: 'GET', headers })
          .then(res => res.ok)
          .catch(_ => false),
      )
  }

  for (const url of urls) {
    const promise = checkUrlValid(url).then(status => {
      if (status) {
        console.log('\x1b[32m%s\x1b[0m', url)
      } else {
        console.log('\x1b[31m%s\x1b[0m', url)
        results.push({ url, status })
        logStream.write(`${url}\n`, 'utf-8')
      }
      ongoingPromises.delete(promise)
    })
    ongoingPromises.add(promise)
    if (ongoingPromises.size >= poolSize) {
      await Promise.race(ongoingPromises)
    }
  }

  await Promise.all(ongoingPromises)
  logStream.end()

  return results
}

checkUrls(urls)
