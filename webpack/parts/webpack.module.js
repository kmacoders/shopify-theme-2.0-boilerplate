const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.loadScss = () => ({
  module: {
    rules: [
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
});

exports.loadBabel = () => ({
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
    ],
  },
});
