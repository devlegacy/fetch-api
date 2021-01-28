const { resolve } = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = (mode) => require(`./.build/webpack.${mode}`)(mode);

module.exports = ({ presets } = env, { mode = 'production' } = argv) => {
  console.log('[NODE_ENV]:', process.env.NODE_ENV);
  console.log(presets, mode);

  return merge(
    {
      entry: { './js/app': './src/assets/ts/index.ts' },
      context: __dirname,
      mode,
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          // {
          //   test: /\.html$/,
          //   loader: 'html-loader',
          // },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        path: resolve(__dirname, './public/'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'What needs to be done? | To Do | App',
          filename: 'index.html',
          template: './src/templates/html/index.html',
        }),
        new HtmlWebpackPlugin({
          title: 'Practice | Fetch',
          filename: 'practices/index.html',
          template: './src/templates/html/practices/index.html',
        }),
        new HtmlWebpackPlugin({
          title: 'Practice | Upload',
          filename: 'upload/index.html',
          template: './src/templates/html/upload/index.html',
        }),
      ],
    },
    modeConfig(mode)
  );
};
