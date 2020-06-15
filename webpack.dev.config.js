const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports ={
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'bundle_[hash].js',
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin ({
      template:'./index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    // contentBase:'./dist',
    open:true,
    port:3366,
    hot:true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}