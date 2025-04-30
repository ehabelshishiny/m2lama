
// Cache Name
const CACHE_NAME = 'tranzkit-cache-v1';

// Resources to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/tranzkit-48.png',
  '/tranzkit-170.png',
  '/tranzkit-512.png',
  '/src/main.tsx',
  '/src/index.css'
];

// Install service worker and cache the static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - fetch and cache the response
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it's a stream that can only be consumed once
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Background sync for offline forms
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Function to sync contact form data when online
function syncContactForm() {
  return localforage.getItem('pendingContactForms')
    .then(forms => {
      if (!forms || !forms.length) return;
      
      // Process each form
      return Promise.all(forms.map(form => {
        // Send to server
        return fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        .then(response => {
          if (response.ok) {
            // Remove from pending queue
            return localforage.getItem('pendingContactForms')
              .then(currentForms => {
                const updatedForms = currentForms.filter(f => f.id !== form.id);
                return localforage.setItem('pendingContactForms', updatedForms);
              });
          }
        });
      }));
    });
}
