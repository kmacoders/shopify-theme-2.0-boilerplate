const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');

const rioProdConfig = merge([
  { mode: 'production' },
  parts.prodOptimize(),
]);

module.exports = rioProdConfig;
