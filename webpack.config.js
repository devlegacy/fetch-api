const path = require('path');
const modeConfig = (mode) => require(`./.build/webpack.${mode}`)(mode);

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) =>
  merge(
    {
      entry: { './js/app': './src/index.ts' },
      context: __dirname,
      mode,
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        path: path.resolve(__dirname, './public/'),
      },
      plugins: [
        new HtmlWebpackPlugin({ title: 'My App', filename: 'example.html' }),
        new FaviconsWebpackPlugin({
          logo: path.resolve(__dirname, './src/favicon.svg'),
          //   cache: true,
          publicPath: '/',
          //   //   outputPath: '../',
        }),
      ],
    },
    modeConfig(mode)
  );
