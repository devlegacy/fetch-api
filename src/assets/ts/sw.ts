import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';

// @ts-ignore: __WB_MANIFEST is a placeholder filled by workbox-webpack-plugin with the list of dependencies to be cached
precacheAndRoute(self.__WB_MANIFEST);

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
