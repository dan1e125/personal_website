var CACHE = 'danieloa-20260612-f7fbb3f-003350';
var ASSETS = [
  '/',
  '/style.css?v=20260612-f7fbb3f-003350',
  '/translations.js?v=20260612-f7fbb3f-003350',
  '/script.js?v=20260612-f7fbb3f-003350',
  '/daniel_profile.webp',
  '/manifest.json',
  '/favicon.svg',
  '/favicon.ico',
  '/icon-192.png',
  '/icon-512.png',
  '/og-image.png',
  '/apple-touch-icon.png',
  '/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2',
  '/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2',
  '/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPx7cwhsk.woff2',
  '/fonts/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

function isVersionedAsset(url) {
  return url.searchParams.has('v') && /\.(css|js)$/.test(url.pathname);
}

self.addEventListener('fetch', function(e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(function() { return caches.match('/'); }));
    return;
  }

  var req = e.request;
  var url = new URL(req.url);

  if (isVersionedAsset(url)) {
    e.respondWith(
      fetch(req).then(function(res) {
        if (res.ok) {
          caches.open(CACHE).then(function(cache) { cache.put(req, res.clone()); });
        }
        return res;
      }).catch(function() {
        return caches.match(req);
      })
    );
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(function(cache) {
      return cache.match(req).then(function(cached) {
        var networkFetch = fetch(req).then(function(res) {
          if (res.ok) cache.put(req, res.clone());
          return res;
        }).catch(function() {
          return cached || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
        return cached || networkFetch;
      });
    })
  );
});
