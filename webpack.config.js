// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var fs = require('fs');
var staticData = require("./tools/jsconfig")

function getEntries(data) {
    var returnData = {};
    data.forEach(function (item, i) {
        returnData[item.entry]="./"+item.entry;
    })
    console.log(returnData)
    return returnData;
}

function getTemplate(data) {
    var returnData = {};
    for (var key in data) {
        returnData[key] = "./" + key;
    }
    console.log(returnData)
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
    plugins: staticData.map(function (item, i) {
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
    }).concat(new ExtractTextPlugin("[name].css?v=[contenthash]"))
}