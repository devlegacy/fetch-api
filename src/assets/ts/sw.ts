import { precacheAndRoute, PrecacheEntry } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { clearAllData, writeData } from './config/indexdb';

self.addEventListener('message', (event) => {
  // console.log('skipWaiting', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('skipWaiting', event.data);

    // The promise that skipWaiting() returns can be safely ignored.
    // @ts-ignore
    self.skipWaiting();
  }
});

// @ts-ignore
const manifest: Array<PrecacheEntry> = self.__WB_MANIFEST;

console.log(manifest);
/**
 * Pre cache manifest data
 * Exclude metadata from webpack
 * Exclude service worker
 */
if (manifest) {
  precacheAndRoute(
    // @ts-ignore: __WB_MANIFEST is a placeholder filled by workbox-webpack-plugin with the list of dependencies to be cached
    manifest.filter((data) => /(\.hot\-update\.json|browser\-sync|sw\.js)$/.test(data.url))
  );
}

registerRoute(
  // (routeData) => {
  // return routeData.event.request.headers.get('accept').includes('text/html');
  new RegExp('/.*\\.html$'),
  // }

  async ({ url, request, event, params }) => {
    const response = await fetch(request);
    const responseBody = await response.text();
    return new Response(`${responseBody} <!-- Look Ma. Added Content. -->`, {
      headers: response.headers,
    });
    // const e = event;
    // return caches
    //   .match(e.request)
    //   .then((response) => {
    //     return (
    //       response ||
    //       fetch(e.request)
    //         .then((res) => {
    //           const cacheCopy = res.clone();
    //           caches
    //             .open('dynamic')
    //             .then((cache) => {
    //               cache.put(e.request.url, cacheCopy);
    //               return res;
    //             })
    //             .catch((err) =>
    //               console.error('[sw]:', 'Falló apertura de cache', err)
    //             );
    //           return res;
    //         })
    //         .catch((err) => {
    //           console.error('[sw]: ', `Fetch, ${e.request.url}`, err);
    //           return caches.match(`/index.html`).then((response) => {
    //             return response;
    //           });
    //         })
    //     );
    //   })
    //   .catch((err) => console.error('[sw]:', 'Fetch, falló respondWith', err));
  }
);

registerRoute('https://jsonplaceholder.typicode.com/todos/?_limit=20', async (args) => {
  const e = args.event;
  const res = await fetch(e.request);
  const resClone = res.clone();

  await clearAllData('posts');
  const data = await resClone.json();
  for (const key in data) {
    try {
      writeData('posts', data[key]);
    } catch (err) {
      console.log('[sw - err]:', 'Write data in sw', err);
    }
  }
  return res;
});
