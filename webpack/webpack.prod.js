const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');
const plugins = require('./parts/webpack.plugin');

const rioProdConfig = merge([
  { mode: 'production' },
  plugins.cleanDist(),
  parts.prodOptimize(),
]);

module.exports = rioProdConfig;
