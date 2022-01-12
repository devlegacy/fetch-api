const { alterManifest, manifest, favicons } = require('./plugins');

const { devServer } = require('./server');

module.exports = () => {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'inline-source-map', // source-map
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [favicons(), alterManifest(), manifest()],
    devServer,
  };

  return config;
};
