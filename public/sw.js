const CACHE = 'engvocabulary-v7'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      const urls = ['/', '/index.html', '/manifest.webmanifest', '/favicon.svg', '/icon-192.png', '/icon-512.png']
      return Promise.all(urls.map((url) => cache.add(url).catch(() => undefined)))
    }),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  const isAsset =
    url.pathname.startsWith('/_next/') ||
    /\.(js|css|png|svg|xml|webmanifest|txt|woff2?)$/i.test(url.pathname)
  // Keep the offline shell small — do not cache thousands of word HTML pages.
  const isShell =
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname === '/manifest.webmanifest' ||
    url.pathname === '/favicon.svg'

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && (isAsset || isShell)) {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put(event.request, copy))
        }
        return response
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          if (cached) return cached
          if (isAsset) return Response.error()
          return caches.match('/index.html')
        }),
      ),
  )
})
