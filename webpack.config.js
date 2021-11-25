const path = require('path');
const webpack = require('webpack');


module.exports = {
    context: path.resolve(__dirname,'app'),
    mode: 'production',
    entry: {
        main: ['@babel/polyfill','./index.js']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module:{
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