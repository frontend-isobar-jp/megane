/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/*
 ** Webpack 5 設定
 ** 【参考】
 **  https://qiita.com/takeshisakuma/items/e1ba5dbe052c6194bb79
 **  https://qiita.com/takeshisakuma/items/9d9e921059b76676d2bc
 **  https://qiita.com/takeshisakuma/items/0bc1c39ee976bd1f52d7
 **  https://github.com/webdiscus/webpack-remove-empty-scripts
 **  https://ics.media/entry/16028/
 **  etc.
 */
const webpack = require('webpack');
const path = require('path');

/** *************************************
 ** Root path name
 ************************************** */
const ROOT_PATH_NAME = 'public';

/** *************************************
 ** ENTRIES Setting
 ************************************** */
const ENTRIES = {
  // 増やす場合は[(JsFile), (SCSSFile)]のペアにする。cssは'style.css'として出力する
  'assets/js/main': ['./src/js/main.js', './src/scss/style.scss'],
};

const SOURCE_MAP_STYLE = 'inline-source-map'; // 'inline-source-map', 'source-map', etc.

/** *************************************
 ** devServer Setting
 ************************************** */
const DEV_SERVER = {
  // open: true,
  port: 3000,
  host: '0.0.0.0',
  hot: true,
  static: {
      directory: ROOT_PATH_NAME,
      watch: true,
  }
};

/** *************************************
 ** Webpack Config
 ************************************** */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = mode === 'development';
const targetStatus = isDev ? 'web' : ['web', 'es5'];
const opt = isDev
  ? {}
  : {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    };

const devtool = isDev
  ? {
      devtool: SOURCE_MAP_STYLE,
    }
  : null;

const getCSSName = (chunkName) => {
  return chunkName.replace('/js/', '/css/').replace('main', 'style');
};

module.exports = {
  entry: ENTRIES,
  optimization: opt,
  output: {
    path: `${__dirname}/${ROOT_PATH_NAME}`,
    filename: '[name].js',
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${getCSSName(chunk.name)}.css`,
    }),
    new ESLintPlugin(),
  ],

  ...devtool,
  performance: { hints: false },
  devServer: DEV_SERVER,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          // https://mi-rai.co.jp/blog/4052
          // Swiper関連を除外しない
          // https://webpack.js.org/loaders/babel-loader/#babel-is-injecting-helpers-into-each-file-and-bloating-my-code
          // core-js and webpack/buildin will cause errors if they are transpiled by Babel.
          /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
          /node_modules[\\\/]core-js/,
          /node_modules[\\\/]webpack[\\\/]buildin/,
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 3,
              },
            ],
          ],
          // https://blog.ojisan.io/polyfill-trouble-on-babel
          // babel/preset-env で polyfill するとビルドに失敗する問題の解決
          sourceType: 'unambiguous',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  // https://ics.media/entry/16028/
  // target: ['web', 'es5'],
  target: targetStatus,
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, 'src/js/'),
      scss: path.resolve(__dirname, 'src/scss/'),
    },
  },
};

console.log('-------------------------------------------------------');
console.log(`mode: ${mode}`);
console.log('-------------------------------------------------------');
