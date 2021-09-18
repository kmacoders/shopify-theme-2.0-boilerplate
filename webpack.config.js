const merge = require('webpack-merge');
const { mode, analyze } = require('webpack-nano/argv');
const rioCommonConfig = require('./webpack/webpack.common');
const rioDevConfig = require('./webpack/webpack.dev');
const rioProdConfig = require('./webpack/webpack.prod');
const addons = require('./webpack/addons/webpack.addons');

const development = merge([
  rioDevConfig,
  analyze && addons.analyze(),
]);

const production = merge([
  rioProdConfig,
  analyze && addons.analyze(),
]);

const getConfig = (mode) => {
  console.log('Happy coding, Rio !!!')
  switch(mode) {
    case 'development':
      return merge([rioCommonConfig, development])
    case 'production':
      return merge([rioCommonConfig, production])
    default:
      throw new Error(`Unknow mode, ${mode}`)
  }
}
module.exports = getConfig(mode);
