import Path from "path";
import IO from "./io.js";
import {userProvider} from "../modules/core/userProvider";
import {permissionProvider} from "../modules/core/permissionProvider";

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
            let authPromise;
            if (routeSetting.notAuthentication) {
                authPromise = userProvider.get(req, res)
            } else {
                authPromise = userProvider.authenticate(req, res)
            }
            return authPromise
                .then(user=> {
                    // 权限判断
                    let isVerify = permissionProvider.verifyRouter(user && user.permission, routeSetting.permission);
                    if (!isVerify) {
                        res.redirect('/');
                        return;
                    }
                    req.user = user;
                })
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
                .catch(error=>{
                    res.send(getJson({msg:error}));
                })
        })
    }
}

function getJson(data) {
    if (!data || data.msg) {
        return {
            code: 0,
            data: null,
            msg: data.msg || "error"
        }
    } else {
        return {
            code: 1,
            data: data,
            msg: ""
        }
    }

}

