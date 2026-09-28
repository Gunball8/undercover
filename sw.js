// Service worker : réseau d'abord (toujours la dernière version en ligne),
// cache en secours pour pouvoir jouer sans connexion.
const CACHE = "undercover-v3";
const CORE = [
  "./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "./fonts/instrument-serif-latin-400-normal.woff2", "./fonts/instrument-serif-latin-400-italic.woff2", "./fonts/inter-latin-wght-normal.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true })
          .then((hit) => hit || (req.mode === "navigate" ? caches.match("./index.html") : null))
          .then((hit) => hit || Response.error())
      )
  );
});
