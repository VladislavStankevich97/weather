const TIMER = 7200000;
let doCache = false;
let CACHE = "my-pwa-cache-v1";
const self = this;

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("install", (event) => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE).then((cache) => {
        fetch("asset-manifest.json")
          .then((response) => {
            response.json();
          })
          .then((assets) => {
            const urlsToCache = ["/", assets["main.js"]];
            cache.addAll(urlsToCache);
          });
      })
    );
  }
});

self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf("http") === 0)) return;
  event.respondWith(
    caches.match(event.request.url).then(async function (response) {
      let chek = true;
      const key = event.request.url + "/date";
      if (await selectCachOrFetch(response, key)) {
        chek = false;
      }
      if (response && chek) {
        return response;
      }

      return fetch(event.request).then((responses) => {
        caches
          .open("v1")
          .then((cache) =>
            cache.put(
              new Request(event.request.url + "/date"),
              new Response(new Date().getTime())
            )
          );
        const responseToCache = responses.clone();

        caches
          .open("v1")
          .then((cache) => cache.put(event.request, responseToCache));
        return responses;
      });
    })
  );
});

function selectCachOrFetch(response, type) {
  if (!response) {
    return false;
  }
  return caches
    .match(new Request(type))
    .then(async (responses) => {
      const preTime = await responses.text();
      const curentTime = new Date().getTime();
      if (curentTime - preTime < TIMER) {
        return false;
      } else {
        return true;
      }
    })
    .catch((err) => {
      console.log("catch", err);
    });
}
