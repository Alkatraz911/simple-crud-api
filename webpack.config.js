const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv  = require('dotenv-webpack');


module.exports = {
  
  context: path.resolve(__dirname, 'app'),
  mode: 'production',
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "os": false,
    }
  },
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({path: path.resolve(__dirname, './app/.env')}),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}