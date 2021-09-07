const {
  HtmlWebpackSkipAssetsPlugin,
} = require('html-webpack-skip-assets-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const modeConfig = (mode) => require(`./.build/webpack.${mode}`)(mode);
const isProduction = (mode) => mode !== 'production';
module.exports = ({ presets } = env, { mode = 'production' } = argv) => {
  console.log('[NODE_ENV]:', process.env.NODE_ENV);
  console.log(presets, mode);

  /** @type {import('webpack').Configuration} */
  const config = {
    mode,
    context: __dirname,
    target: 'web',
    entry: {
      './assets/js/app': './src/assets/ts/index.ts',
      './assets/css/app': './src/assets/scss/app.scss',
    },
    output: {
      path: resolve(__dirname, './public/'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpe?g|png|gif|webp|svg)$/i,
          exclude: /(fonts?)+/,
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            filename: 'assets/img/[folder]/[name].[ext]',
          },
          type: 'asset',
        },
        {
          test: /(fonts?)+.*\.(ttf|eot|otf|woff2?|svg)(\?v=\d+\.\d+\.\d+)?$/i,
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8kb
            },
          },
          generator: {
            filename: 'assets/fonts/[name].[ext]',
          },
          type: 'asset',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      'postcss-preset-env',
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: false,
                },
              },
            },
          ],
        },
        // {
        //   test: /\.html$/,
        //   loader: 'html-loader',
        // },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: isProduction(mode)
          ? '[name].css'
          : '[name].[contenthash].css',
        chunkFilename: isProduction(mode)
          ? '[id].css'
          : '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new RemoveEmptyScriptsPlugin({}),
      new HtmlWebpackPlugin({
        title: 'What needs to be done? | To Do | App',
        filename: 'index.html',
        template: './src/templates/html/index.html',
        skipAssets: [/assets\/css\/.*.js/],
      }),
      new HtmlWebpackPlugin({
        title: 'Practice | Fetch',
        filename: 'practices/index.html',
        template: './src/templates/html/practices/index.html',
        skipAssets: [/assets\/css\/.*.js/],
      }),
      new HtmlWebpackPlugin({
        title: 'Practice | Upload',
        filename: 'upload/index.html',
        template: './src/templates/html/upload/index.html',
        skipAssets: [/assets\/css\/.*.js/],
      }),
      new HtmlWebpackSkipAssetsPlugin({}),
      new CopyPlugin({
        patterns: [{ from: './src/assets/img/screenshots', to: 'screenshots' }],
      }),
    ],
  };

  return merge(config, modeConfig(mode));
};
