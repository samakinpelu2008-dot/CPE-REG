const CACHE_NAME = 'syrix-lab-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/images/IMG-20260626-WA0122.jpg', // Your main background
  'https://unpkg.com/lucide@latest' // Icons
];

// Install the Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Serve assets from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
