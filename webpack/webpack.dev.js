const merge = require('webpack-merge');
const parts = require('./parts/webpack.parts');

const rioDevConfig = merge([
  { mode: 'development' },
  { devtool: 'inline-source-map' },
  { watch: true },
  parts.devStats(),
]);
module.exports = rioDevConfig;
