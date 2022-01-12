const { alterManifest, manifest, favicons } = require('./plugins');

module.exports = () => {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'inline-source-map', // source-map
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [favicons(), alterManifest(), manifest()],
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      // client: {
      //   logging: 'info',
      //   overlay: true,
      //   progress: true,
      // },
      // proxy: {
      //   '/': {
      //     target: 'http://localhost:8080/',
      //     secure: false,
      //   }
      // },
      compress: true, // boolean Enable gzip compression for everything served:
      historyApiFallback: true, // boolean | object respond to 404s with index.html
      // host: "0.0.0.0", // string Specify a host to use
      hot: true, // boolean Enable webpack's Hot Module Replacement feature:
      open: false, // boolean When open is enabled, the dev server will open the browser.
      port: 8080, // number Specify a port number to listen for requests on:
    },
  };

  return config;
};
