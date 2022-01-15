const { HtmlWebpackSkipAssetsPlugin } = require('html-webpack-skip-assets-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const { sync } = require('glob');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: MiniCssExtractPlugin } = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const webpack = require('webpack');
const { cwd } = require('process');
const { existsSync } = require('fs');

const envLoader = (mode) => {
  const file = !isProduction(mode) ? '.env' : `.env.${mode}`;

  try {
    if (existsSync(file)) {
      const dotenvExpand = require('dotenv-expand');
      const env =
        require('dotenv').config({
          path: file,
        }) || process.env;

      const expand = dotenvExpand(env).parsed;

      process.env.NODE_ENV = expand.APP_ENV;
      process.env.APP_ENV = expand.APP_ENV;

      return expand;
    }
    const env = process.env;

    process.env.NODE_ENV = env.APP_ENV;
    process.env.APP_ENV = env.APP_ENV;
  } catch (err) {
    console.error(err);
  }
};
const modeConfig = (mode) => require(`./.build/webpack.${mode}`)(mode);
const isProduction = (mode) => mode === 'production';

module.exports = ({ presets } = env, { mode = 'production' } = argv) => {
  const env = envLoader(mode);

  console.log('[NODE_ENV]:', process.env.NODE_ENV);
  console.log('[APP_ENV]:', process.env.APP_ENV);
  console.log(presets, mode);

  const customHTMLOptions = {
    isProduction: isProduction(mode),
    publicPath: env.APP_URL,
    cwd: cwd(),
    GOOGLE_SITE_VERIFICATION: env.GOOGLE_SITE_VERIFICATION || '',
    GA_TRAKING_ID: env.GA_TRAKING_ID || '',
    G_AD_CLIENT: env.G_AD_CLIENT || '',
    GOOGLE_MAP_API_KEY: env.GOOGLE_MAP_API_KEY || '',
    BING_MAP_API_KEY: env.BING_MAP_API_KEY || '',
  };

  const definitions = {
    APP_ENV: JSON.stringify(isProduction(mode) ? 'production' : 'development'),
    APP_URL: JSON.stringify(env.APP_URL),
  };

  /** @type {import('webpack').Configuration} */
  const config = {
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
      cacheDirectory: resolve(__dirname, '.cache'),
    },
    mode,
    stats: 'errors-only',
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
        // {
        //   test: /\.tsx?$/,
        //   use: 'ts-loader',
        //   exclude: /node_modules/,
        // },
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          loader: 'esbuild-loader',
          options: {
            // target: 'es2015',
            loader: 'tsx',
            // tsconfigRaw: require('./tsconfig.json'),
          },
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
            filename: 'assets/img/[hash]-[name][ext]',
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
            filename: 'assets/fonts/[name][ext]',
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
        filename: !isProduction(mode) ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: !isProduction(mode) ? '[id].css' : '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new RemoveEmptyScriptsPlugin({}),
      new HtmlWebpackPlugin({
        title: 'What needs to be done? | To Do | App',
        filename: 'index.html',
        template: './src/templates/html/index.html',
        skipAssets: [/assets\/css\/.*.js/],
        ...customHTMLOptions,
      }),
      new HtmlWebpackPlugin({
        title: 'Practice | Fetch',
        filename: 'practices/index.html',
        template: './src/templates/html/practices/index.html',
        skipAssets: [/assets\/css\/.*.js/],
        ...customHTMLOptions,
      }),
      new HtmlWebpackPlugin({
        title: 'Practice | Upload',
        filename: 'upload/index.html',
        template: './src/templates/html/upload/index.html',
        skipAssets: [/assets\/css\/.*.js/],
        ...customHTMLOptions,
      }),
      new HtmlWebpackPlugin({
        title: 'PWA | Service Workers',
        filename: 'pwa/index.html',
        template: './src/templates/html/pwa/index.html',
        skipAssets: [/assets\/css\/.*.js/],
        ...customHTMLOptions,
      }),
      new HtmlWebpackSkipAssetsPlugin({}),
      new CopyPlugin({
        patterns: [
          { from: './src/assets/img/screenshots', to: 'assets/img/screenshots' },
          { from: './src/assets/img/shortcuts', to: 'assets/img/shortcuts' },
        ],
      }),
      new PurgecssPlugin({
        paths: sync(`${resolve(__dirname, './src')}/**/*`, { nodir: true }),
      }),
      new webpack.DefinePlugin(definitions),
    ],
  };

  return merge(config, modeConfig(mode));
};

module.exports.envLoader = envLoader;
