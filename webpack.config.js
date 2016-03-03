'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: './app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/i, loader: 'html' },
      { test: /\.css$/i, loader: 'css' },
      { test: /\.styl$/, loader: 'stylus' },
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
};
