const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const all = require('../markup/index');

module.exports = {
  huwngReplacePlugin: new ReplaceInFileWebpackPlugin(all.allReplace),
};
