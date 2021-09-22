const { alterManifest, manifest, favicons } = require('./plugins');

module.exports = () => ({
  devtool: 'inline-source-map', // source-map
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [favicons(), alterManifest(), manifest()],
});
