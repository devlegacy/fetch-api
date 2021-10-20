const { cwd } = require('process');
const { InjectManifest } = require('workbox-webpack-plugin');
const { resolve } = require('path');
const AlterManifestWebpackPlugin = require('./alter-manifest-webpack-plugin/');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const {
  APP_LANG: lang,
  APP_DIR: dir,
  APP_NAME: appName,
  APP_DESCRIPTION: appDescription,
  APP_SHORT_NAME: appShortName,
  APP_CATEGORIES: categories,
  APP_DEVELOPER_NAME: developerName,
  APP_DEVELOPER_URL: developerURL,
  APP_THEME_COLOR: theme_color,
  APP_BACKGROUND_COLOR: background,
  APP_APPLE_STATUS_BAR_STYLE: appleStatusBarStyle,
  APP_DISPLAY: display,
  APP_ORIENTATION: orientation,
  APP_VERSION: version,
  // APP_SERVICE_WORKER_SRC: src,
  // APP_SERVICE_WORKER_UPDATE_VIA_CACHE: update_via_cache,
  APP_RELATED_APPLICATIONS: string_related_applications,
} = require('dotenv').config().parsed || process.env;
const manifest = {
  id: '/?utm_source=homescreen',
  background,
  theme_color,
  // https://www.w3.org/TR/appmanifest/#related_applications-member
  related_applications: [
    // {
    //   platform: 'play',
    //   url: 'https://play.google.com/store/apps/details?id=com.example.app1',
    //   id: 'com.example.app1',
    //   min_version: '2',
    //   fingerprints: [
    //     {
    //       type: 'sha256_cert',
    //       value: '92:5A:39:05:C5:B9:EA:BC:71:48:5F:F2',
    //     },
    //   ],
    // },
    // {
    //   platform: 'itunes',
    //   url: 'https://itunes.apple.com/app/example-app1/id123456789',
    // },
  ],
  // https://github.com/w3c/manifest/wiki/Categories
  categories: JSON.parse(categories),
  // https://www.w3.org/TR/appmanifest/#screenshots-member
  screenshots: [
    {
      src: '/assets/img/screenshots/mobile-fetch-api-screenshot.png',
      sizes: '752x1233',
      type: 'image/png',
    },
    // less than twice height
    {
      src: '/assets/img/screenshots/mobile-screenshot.jpg',
      sizes: '1080x2108',
      type: 'image/jpg',
    },
    {
      src: '/assets/img/screenshots/desktop-fetch-api-screenshot.png',
      sizes: '1919x1089',
      type: 'image/png',
    },
  ],
  // https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts
  // https://www.w3.org/TR/appmanifest/#shortcuts-member
  shortcuts: [
    {
      name: 'What needs to be done? | To Do | App',
      url: '/?utm_source=homescreen&utm_medium=shortcut',
      description: 'List of events planned for today. What needs to be done? | To Do | App',
      icons: [
        {
          src: '/assets/img/shortcuts/blue.png',
          type: 'image/png',
          purpose: 'any monochrome',
          sizes: '192x192',
        },
      ],
    },
    {
      name: 'Practice | Fetch',
      url: '/practices?utm_source=homescreen&utm_medium=shortcut',
      icons: [
        {
          src: '/assets/img/shortcuts/red.png',
          type: 'image/png',
          purpose: 'any monochrome',
          sizes: '192x192',
        },
      ],
    },
    {
      name: 'Practice | Upload',
      url: '/upload?utm_source=homescreen&utm_medium=shortcut',
      icons: [
        {
          src: '/assets/img/shortcuts/yellow.png',
          type: 'image/png',
          purpose: 'any monochrome',
          sizes: '192x192',
        },
      ],
    },
  ],
  // DEPRECATED!
  // serviceworker: {
  // src,
  // scope: '/app',
  // type: '',
  // update_via_cache,
  // },
};

// https://www.w3.org/TR/appmanifest/
module.exports.favicons = () =>
  new FaviconsWebpackPlugin({
    logo: resolve(cwd(), './src/favicon.svg'),
    // cache: true,
    publicPath: '/',
    outputPath: './',
    prefix: '',
    inject: true,
    devMode: 'webapp',
    manifest,
    favicons: {
      path: '/', // Path for overriding default icons  `string`
      appName, // Your application's name. `string`
      appShortName, // Your application's short_name. `string`. Optional. If not set, appName will be used
      appDescription, // Your application's description. `string`
      developerName, // Your (or your developer's) name. `string`
      developerURL, // Your (or your developer's) URL. `string`
      dir, // Primary text direction for name, short_name, and description
      lang, // Primary language for name and short_name
      background, // Background colour for flattened icons. `string`
      theme_color, // Theme color user for example in Android's task switcher. `string`
      appleStatusBarStyle, // Style for Apple status bar: "black-translucent", "default", "black". `string`
      display, // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
      orientation, // Default orientation: "any", "natural", "portrait" or "landscape". `string`
      scope: '/', // set of URLs that the browser considers within your app
      start_url: '/?utm_source=homescreen', // Start URL when launching the application from a device. `string`
      version, // Your application's version string. `string`
      logging: false, // Print logs to console? `boolean`
      pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
      loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
      icons: {
        // Platform Options:
        // - offset - offset in percentage
        // - background:
        //   * false - use default
        //   * true - force use default, e.g. set background for Android icons
        //   * color - set background for the specified icons
        //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
        //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
        //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
        //
        android: { background: false }, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        appleIcon: { background: false }, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        appleStartup: { background: false }, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        coast: { background: false }, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        favicons: { background: false }, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        firefox: { background: false }, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        windows: { background: false }, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
        yandex: { background: false }, // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
      },
    },
  });
module.exports.alterManifest = () => new AlterManifestWebpackPlugin(manifest);
module.exports.manifest = () =>
  new InjectManifest({
    swSrc: './src/assets/ts/sw.ts',
    swDest: 'sw.js',
    exclude: [/\.map$/, /manifest$/, /\.htaccess$/, /service-worker\.js$/, /sw\.js$/],
  });
