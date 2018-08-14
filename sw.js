const cacheName = 'cache-0.0.1'
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      if (response) {
        return response
      }
      const newRequest = event.request.clone()
      return fetch(newRequest).then(response => {
        if (!response || response.status !== 200) {
            return response
        }
        const newResponse = response.clone()
        caches.open(cacheName).then(cache => {
          cache.put(newRequest, newResponse)
        })
        return response
      })
    })
  )
})