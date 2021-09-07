module.exports = () => ({
  devtool: 'inline-source-map', // source-map
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
});
