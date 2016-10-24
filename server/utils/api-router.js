import Path from "path";
import IO from "./io.js";
import Promise from "bluebird";

exports.Router = function (app) {
    this.app = app; //express 实例
    var routeFileDir = Path.resolve("dest/server/api"); //路由根目录
    var routeFiles = IO.listFiles(routeFileDir, /\.js$/)  //获取目录下所有路由文件
    for (var routeFile of routeFiles) {
        var routeModule = require(routeFile);  //每个路由文件export的对象
        for (var key in routeModule) {
            if (key != "routeSettings") {
                attach(routeModule, key)
            }
        }
    }

    function attach(routeModule, key) {
        var routeSetting = ( routeModule.routeSettings && routeModule.routeSettings[key] ) || {};
        var routeHandler = routeModule[key];
        var method = routeSetting.method || "get";
        var urlPath;
        if (routeSetting.route) {
            urlPath = routeSetting.route;
        } else {
            urlPath = '/' + Path.relative(routeFileDir, routeFile)
                    .replace(/\\/g, '/')
                    .replace(/\.js$/, '');
        }

        if (key != "default") {
            urlPath += "/" + key;
        }

        app[method](urlPath, function (req, res) {
            Promise
                .resolve()
                .then(function () {
                    if (!routeHandler) {
                        res.sendStatus(403);
                        return;
                    }
                    return routeHandler(req, res)
                })
                .then(function (returnData) {
                    return getJson(returnData)
                })
                .then(function (data) {
                    res.send(data);
                })
        })
    }
}

function getJson(data) {
    if (!data || data.length == 0) {
        return {
            code: 0,
            data: null,
            msg: "error"
        }
    } else {
        return {
            code: 1,
            data: data,
            msg: ""
        }
    }

}

