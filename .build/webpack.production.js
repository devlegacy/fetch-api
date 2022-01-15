const { favicons, alterManifest, injectManifest } = require('./plugins');
const { envLoader } = require('../webpack.config');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = () => {
  const env = envLoader(process.env.APP_ENV);

  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: false,
    optimization: {
      minimize: true,
      minimizer: [
        `...`,
        new ESBuildMinifyPlugin({
          // target: 'es2015',
          css: true,
        }),
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
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
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
          },
        }),
      ],
    },
    output: {
      filename: '[name].[fullhash:3].js',
      publicPath: env.APP_URL,
    },
    plugins: [favicons(), alterManifest(), injectManifest()],
  };
  return config;
};
