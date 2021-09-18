const merge = require('webpack-merge');
const commonPath = require('./common-path');
const parts = require('./parts/webpack.parts');
const modules = require('./parts/webpack.module');
const plugins = require('./parts/webpack.plugin');

const rioCommonConfig = merge([
  { name: 'ShopiyThemeStarter' },
  { entry: './src/index.js' },
  {
    output: {
      path: commonPath.outputPath,
      filename: 'assets/app.js',
    },
  },
  modules.loadBabel(),
  modules.loadScss(),
  parts.commonOptimize(),
  plugins.extractCss(),
  plugins.styleLint(),
  plugins.copyFromShopifyToDist(),
  plugins.replaceLiquid(),
  parts.resolve(),
  parts.commonStats(),
]);

module.exports = rioCommonConfig;
