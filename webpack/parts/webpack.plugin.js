const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const copyPlugin = require('../common-plugins/copy-plugin');
const replacePlugin = require('../common-plugins/replace-in-file-plugin');

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

exports.commonPlugin = () => ({
  plugins: [
    copyPlugin.huwngCopyPlugin,
    replacePlugin.huwngReplacePlugin,
  ],
});
