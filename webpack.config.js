// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var fs = require('fs');
var staticData = require("./tools/jsconfig.json").files;
var webpack = require("webpack");

function getEntries(data) {
    var returnData = {};
    data.forEach(function (item, i) {
        returnData[item.entry] = "./" + item.entry;
    })

    return returnData;
}


module.exports = {
    entry: getEntries(staticData),
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
                    name: '[path][name]/[name].[ext]?v=[hash]'
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
    plugins: staticData.map(function (item, i) {
        if(!item.template){
            return function () {

            };
        }
        return new HtmlWebpackPlugin({
            // filename: path.resolve(__dirname, '../dist/index.html'),
            filename: item.template,
            template: item.template,
            chunks: [item.entry],
            inject: true,
            minify: {
                // removeComments: true,
                // collapseWhitespace: true,
                // removeAttributeQuotes: true
            },
        })
    }).concat([new ExtractTextPlugin("[name].css?v=[contenthash]"), new webpack.ProvidePlugin({
        $: path.join(__dirname, './views/static/libs/js/jquery.js'),
        jQuery: path.join(__dirname, './views/static/libs/js/jquery.js'),
        "window.jQuery": path.join(__dirname, './views/static/libs/js/jquery.js'),
    })])
}