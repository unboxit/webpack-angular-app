'use strict'

var path = require('path')

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: './app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/i, loader: 'html' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/, loader: 'file' }
    ],
    resolve: {
      modulesDirectories: ['./node_modules'],
      extensions: ['', '.js', '.json', '.styl']
    }
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './app',
    colors: true,
    noInfo: true,
    hot: true,
    inline: true
  }
}
