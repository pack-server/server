
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'NodeBook'
    }),
    new ExtractTextPlugin('app.css')
  ],
  module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style','css?sourceMap'],
          include: APP_PATH
        },
        {
        test: /\.vue$/, 
        loader: 'vue'
      },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
    },
      ]
    },
  devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    
     devtool: 'eval-source-map',
};