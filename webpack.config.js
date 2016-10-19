// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var fs = require('fs');

module.exports = {
    entry: {
        "views/static/404/404": "./views/static/404/404.js",
        "views/widget/firstWidget/firstWidget": "./views/widget/firstWidget/firstWidget.js",
    },
    // 输出配置
    output: {
        path: "dest/",
        publicPath: '/',
        filename: '[name].js?v=[hash]',
        chunkFilename: '[name].js?v=[chunkhash]'
    },
    //externals: {
    //    // require("jquery") is external and available
    //    //  on the global var jQuery
    //    "jquery": "jQuery"
    //},
    resolve: {
        extensions: ['', '.js']
    },
    devtool: '#source-map',
    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=1000&name=[path][name].[ext]?v=[hash]',
            },
            {
                test: /\.tpl/,
                loader: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader',"css-loader")
            // },

        ]
    },
    plugins: [
        // 提取css为单文件
        new ExtractTextPlugin("[name].css?v=[contenthash]"),
        new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname, '../dist/index.html'),
            filename: './views/page/404.tpl',
            template: './views/page/404.tpl',
            chunks: ['views/static/404/404'],
            inject: true,
            minify: {
                // removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
            },
        }), new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname, '../dist/index.html'),
            filename: './views/widget/firstWidget/firstWidget.tpl',
            template: './views/widget/firstWidget/firstWidget.tpl',
            chunks: ['views/widget/firstWidget/firstWidget'],
            inject: true,
            minify: {
                // removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
            },
        })]
}