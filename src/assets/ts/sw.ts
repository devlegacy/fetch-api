import { precacheAndRoute } from 'workbox-precaching';

// @ts-ignore: __WB_MANIFEST is a placeholder filled by workbox-webpack-plugin with the list of dependencies to be cached
precacheAndRoute(self.__WB_MANIFEST);
