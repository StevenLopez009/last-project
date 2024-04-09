importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js"
);

const { precacheAndRoute } = workbox.precaching;
const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate({
    cacheName: "images-cache",
  })
);
