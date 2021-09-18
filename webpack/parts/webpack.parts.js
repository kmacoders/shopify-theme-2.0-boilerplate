const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonPath = require('../common-path');

exports.commonStats = () => ({
  stats: {
    entrypoints: false,
    children: false,
  },
});

exports.devStats = () => ({
  /**
   * Tells stats whether to add information about the built modules.
   * @see {@link https://webpack.js.org/configuration/stats/}
   */
  stats: {
    excludeAssets: [
      /.liquid/,
      /.json/,
      /.svg/,
      /.min.*/,
      /.png/,
      /.gif/,
    ],
    modules: false,
  },
});

exports.commonOptimize = () => ({
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});

exports.prodOptimize = () => ({
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});

exports.resolve = () => ({
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
});
