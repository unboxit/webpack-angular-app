'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.styl$/, loaders: ['css', 'stylus'] }
    ],
    resolve: {
      modulesDirectories: ['./node_modules'],
      extensions: ['', '.js', '.json', '.styl']
    }
  },
  devServer: {
    contentBase: './app',
    colors: true,
    noInfo: true,
    hot: true,
    inline: true
  }
};
