const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonPath = require('../common-path');
const allMarkup = require('../markup/index');

exports.extractCss = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/main.css',
    }),
  ],
});

exports.styleLint = () => ({
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.(s(c|a)ss|css)',
      failOnError: false,
      quiet: false,
      emitErrors: true,
    }),
  ],
});

exports.styleLint = () => ({
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
});

exports.copyFromShopifyToDist = () => ({
  plugins: [
    new CopyPlugin({
      patterns: [
        /**
         * Các folder có json, không lấy folder con
         */
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'config/*.json'),
          to: path.resolve(__dirname, commonPath.outputPath, 'config/[name].[ext]'),
        },
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'locales/*.json'),
          to: path.resolve(__dirname, commonPath.outputPath, 'locales/[name].[ext]'),
        },
        /**
         * Các folder có liquid, có lấy folder con
         */
        {

          from: path.resolve(__dirname, commonPath.themeDevPath, 'layout/**/*.liquid'),
          to: path.resolve(__dirname, commonPath.outputPath, 'layout/[name].[ext]'),
        },
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'sections/**/*.liquid'),
          to: path.resolve(__dirname, commonPath.outputPath, 'sections/[name].[ext]'),
        },
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'snippets/**/*.liquid'),
          to: path.resolve(__dirname, commonPath.outputPath, 'snippets/[name].[ext]'),
        },
        /**
         * Folder này cứ để nguyên xi
         */
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'templates'),
          to: path.resolve(__dirname, commonPath.outputPath, 'templates'),
        },
        {
          from: path.resolve(__dirname, commonPath.themeDevPath, 'assets'),
          to: path.resolve(__dirname, commonPath.outputPath, 'assets'),
        },
      ],
    }),
  ],
});

exports.replaceLiquid = () => ({
  plugins: [
    new ReplaceInFileWebpackPlugin(allMarkup.allReplace),
  ],
});

exports.cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()],
});
