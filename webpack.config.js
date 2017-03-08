var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};