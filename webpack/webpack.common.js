const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const commonPath = require('./common-path');
const copyPlugin = require('./common-plugins/copy-plugin');
const replacePlugin = require('./common-plugins/replace-in-file-plugin');

const hugCommonConfig = {
  name: 'ShopiyThemeStarter',
  entry: './src/index.js',
  output: {
    path: commonPath.outputPath,
    filename: 'assets/app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          'webpack-import-glob-loader', /** @see https://www.npmjs.com/package/import-glob-loader */
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
          'webpack-import-glob-loader', /** @see https://www.npmjs.com/package/import-glob-loader */
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/main.css',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.(s(c|a)ss|css)',
      failOnError: false,
      quiet: false,
      emitErrors: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    copyPlugin.huwngCopyPlugin,
    replacePlugin.huwngReplacePlugin,
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      Components: commonPath.componentsPath,
      Helpers: commonPath.helpersPath,
      Styles: commonPath.stylesPath,
      Shopify: commonPath.themeDevPath,
      Types: commonPath.typesPath,
    },
  },
  stats: {
    entrypoints: false,
    children: false,
  },
};

module.exports = { hugCommonConfig };
