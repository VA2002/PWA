var cacheName = 'petstore-v1';
var cacheFiles = [
    "index.html",
    "product.js",
    "petstore.webmanifest",
    "image/yarn.jpg",
    "images/cat-litter.jpg",
    "images/laser-pointer.jpg",
    "images/cat-house.jpg",
    "images/icon-store-512.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Garfield_the_Cat.svg"
];

self.addEventListener('install', (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log("[Service Worker] Caching all files");
            return cache.addAll(cacheFiles);
        })
    );
});