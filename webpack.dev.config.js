var path = require('path');
var webpack = require('webpack');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
  src: './src',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000/',
    // 'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/init/index.js'
  ],
  output: {
    path: path.join(__dirname, '/bundle/'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true
  },
  devtool: 'source-map',
});
