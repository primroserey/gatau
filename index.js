addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  url.hostname = "apiprimroserey.vercel.app";
  const newRequest = new Request(url, event.request);
  event.respondWith(fetch(newRequest));
});
