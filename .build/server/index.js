const { WEBPACK_DEV_SERVER_PORT } = require('dotenv').config().parsed || process.env;

/** @type {import("webpack-dev-server").Configuration} */
module.exports.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  client: {
    //   logging: 'info',
    overlay: {
      errors: true,
      warnings: false,
    },
    //   progress: true,
  },
  // proxy: {
  //   '/': {
  //     target: 'http://localhost:8080/',
  //     secure: false,
  //   }
  // },
  compress: true, // boolean Enable gzip compression for everything served:
  historyApiFallback: true, // boolean | object respond to 404s with index.html
  // host: "0.0.0.0", // string Specify a host to use
  hot: false, // boolean Enable webpack's Hot Module Replacement feature:
  liveReload: true,
  magicHtml: true,
  open: false, // boolean When open is enabled, the dev server will open the browser.
  port: WEBPACK_DEV_SERVER_PORT || 8080, // number Specify a port number to listen for requests on:
};
