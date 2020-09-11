self.addEventListener('install', e => {
 e.waitUntil(
   caches.open('static').then(cache => {
     return cache.addAll([
       './',
       'index.html',
       'main.css',
       'app.js',
       'images/bkg.png',
       'images/icon-192.png'
     ]);
   })
 );
});

self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
   });