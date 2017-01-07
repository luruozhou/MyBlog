import Path from "path";
import IO from "./io.js";
import * as Management from "../modules/management";
import {userProvider} from "../modules/core/userProvider";
import {permissionProvider} from "../modules/core/permissionProvider";
import RouterError from '../modules/route-error';

exports.Router = function (app) {
    this.app = app; //express 实例
    var routeFileDir = Path.resolve("dest/routes"); //路由根目录
    var routeFiles = IO.listFiles(routeFileDir, /\.js$/)  //获取目录下所有路由文件
    for (var routeFile of routeFiles) {
        var routeModule = require(routeFile);  //每个路由文件export的对象
        for (var key in routeModule) {
            if (key != "routeSettings") {
                attach(routeModule, key)
            }
        }
    }

    function attach(routeModule, key) {// key='default'
        var routeSetting = ( routeModule.routeSettings && routeModule.routeSettings[key] ) || {};
        var routeHandler = routeModule[key];
        var method = routeSetting.method || "get";
        var urlPath, tplPath;
        if (routeSetting.route) {
            urlPath = routeSetting.route;
        } else {
            urlPath = '/' + Path.relative(routeFileDir, routeFile)
                    .replace(/\\/g, '/')
                    .replace(/\.js$/, '');
        }
        if (routeSetting.template) {
            tplPath = routeSetting.template;
        } else {
            tplPath = Path.relative(routeFileDir, routeFile)
                .replace(/\\/g, '/')
                .replace(/\.js$/, '')
                .replace(/^\/+/i, "");
        }

        app[method](urlPath, function (req, res) {
            return userProvider
                .authenticate(req, res)
                .then(user => {
                    // 权限判断
                    let isVerify = permissionProvider.verifyRouter(user && user.permission, routeSetting.permission);
                    if (!isVerify) {
                        res.redirect('/login?error=doNotHavePermission');
                        // res.render('login',{error:'该用户没有权限'})
                        return;
                    }
                    req.user = user;
                    if (!routeHandler) {
                        return res.redirect("404");
                        return;
                    }
                    return Promise.resolve(routeHandler(req, res))
                        .then(function (returnData) {
                            returnData = returnData || {};
                            return Management.querySections()
                                .then(data => {
                                    returnData.sections = makeSectionTree(data);
                                    return returnData;
                                })
                        })
                        .then(function (returnData) {
                            if (!returnData.tplNotNeedRender) {
                                res.render(tplPath, returnData);
                            }
                        })
                })
                .catch(reason => {
                    if (RouterError.errorHandler) {
                        RouterError.errorHandler(reason, routeSetting, req, res);
                    } else {
                        throw reason;
                    }
                })
                .catch(error => {
                    res.send(`Error: ${error}`);
                    throw error;
                })
        })
    }
}

function makeSectionTree(sections) {
    var returnData = [];
    var dataMap = {};
    if (!sections || sections.length == 0) {
        return returnData;
    }

    sections.forEach(function (item, i) {
        if (!dataMap[item.id]) {
            dataMap[item.id] = {
                id: item.id,
                name: item.name,
                tab: item.tab,
                sons: []
            }
            if (item.son_id) {
                dataMap[item.id].sons.push({
                    id: item.son_id,
                    name: item.son_name,
                    tab: item.son_tab,
                })
            }
        } else {
            dataMap[item.id].sons.push({
                id: item.son_id,
                name: item.son_name,
                tab: item.son_tab,
            })
        }
    })


    for (let key in dataMap) {
        returnData.push(dataMap[key])
    }

    return returnData;
}

