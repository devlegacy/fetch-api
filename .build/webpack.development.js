const { envLoader } = require('../webpack.config');
const { favicons, alterManifest, injectManifest } = require('./plugins');
const { devServer } = require('./server');

module.exports = () => {
  const env = envLoader(process.env.APP_ENV);

  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'inline-source-map', // source-map
    output: {
      filename: '[name].js',
      publicPath: env.APP_URL,
    },
    plugins: [favicons(), alterManifest(), injectManifest()],
    devServer,
  };

  return config;
};
