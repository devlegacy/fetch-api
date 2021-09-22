const { alterManifest, manifest, favicons } = require('./plugins');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { alterManifest, manifest, favicons } = require('./plugins');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
      src: 'screenshots/mobile-fetch-api-screenshot.png',
      sizes: '752x1233',
      type: 'image/png',
    },
    // less than twice height
    {
      src: 'screenshots/mobile-screenshot.jpg',
      sizes: '1080x2108',
      type: 'image/jpg',
    },
    {
      src: 'screenshots/desktop-fetch-api-screenshot.png',
      sizes: '1919x1089',
      type: 'image/png',
    },
  ],
  // https://developer.mozilla.org/en-US/docs/Web/Manifest/shortcuts
  // https://www.w3.org/TR/appmanifest/#shortcuts-member
  shortcuts: [
    {
      name: 'What needs to be done? | To Do | App',
      url: '/',
      description: 'List of events planned for today. What needs to be done? | To Do | App',
      icons: [
        {
          src: '/android-chrome-96x96.png',
          type: 'image/jpeg',
          purpose: 'any',
          sizes: '96x96',
        },
      ],
    },
    {
      name: 'Practice | Fetch',
      url: '/practices',
      icons: [
        {
          src: '/android-chrome-96x96.png',
          type: 'image/jpeg',
          purpose: 'any',
          sizes: '96x96',
        },
      ],
    },
    {
      name: 'Practice | Upload',
      url: '/upload',
      icons: [
        {
          src: '/android-chrome-96x96.png',
          type: 'image/jpeg',
          purpose: 'any',
          sizes: '96x96',
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
module.exports = () => ({
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  output: {
    filename: '[name].[fullhash:3].js',
    publicPath: '/',
  },
  plugins: [
    favicons(),
    alterManifest(),
    manifest(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                  },
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
});
