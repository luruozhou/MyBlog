var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');
config.module.loaders=config.module.loaders.concat([{
    test: /\.less$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
},{
    test: /\.css$/,
    loader: 'style-loader!css!autoprefixer'
},{
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
        //添加两个presents 使用这两种presets处理js或者jsx文件
        presets: ['es2015', 'react'],
        "env": {
            "development": {
                "presets": ["react-hmre"]
            }
        }
    }
},]);
config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'preDistribute/index.html',
        template: path.resolve(__dirname, '../preDistribute.html'),
        chunks: ['preDistribute'],
        inject: true
    }),
    new HtmlWebpackPlugin({
        filename: 'preContact/index.html',
        template: path.resolve(__dirname, '../preContact.html'),
        chunks: ['preContact'],
        inject: true
    }),
    new HtmlWebpackPlugin({
        filename: 'TMKDB/index.html',
        template: path.resolve(__dirname, '../TMKDB.html'),
        chunks: ['TMKDB'],
        inject: true
    }),
    new webpack.ProvidePlugin({
        $: path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
        jQuery: path.join(__dirname, '../node_modules/jquery/dist/jquery.min.js'),
    })
];

// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;