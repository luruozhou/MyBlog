import Path from "path";
import IO from "./io.js";
import Promise from "bluebird";
import * as Management from "../modules/management";

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

    function attach(routeModule, key) {
        var routeSetting = ( routeModule.routeSettings && routeModule.routeSettings[key] ) || {};
        var routeHandler = routeModule[key];
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

        app.get(urlPath, function (req, res) {
            Promise
                .resolve()
                .then(function () {
                    if (!routeHandler) {
                        return res.redirect("404");
                    }
                    return routeHandler(req, res)
                })
                .then(function (returnData) {
                    returnData=returnData||{};
                    return Management.querySections()
                        .then(data =>{
                            returnData.sections=makeSectionTree(data);
                            return returnData;
                        })
                })
                .then(function (returnData) {

                    res.render(tplPath, returnData);
                })
        })
    }
}

function makeSectionTree(sections) {
    var returnData =[];
    var dataMap = {};
    if(!sections ||sections.length ==0){
        return returnData;
    }

    sections.forEach(function (item, i) {
        if(!dataMap[item.id]){
            dataMap[item.id]={
                id:item.id,
                name:item.name,
                tab:item.tab,
                sons:[]
            }
            if(item.son_id){
                dataMap[item.id].sons.push({
                    id:item.son_id,
                    name:item.son_name,
                    tab:item.son_tab,
                })
            }
        }else{
            dataMap[item.id].sons.push({
                id:item.son_id,
                name:item.son_name,
                tab:item.son_tab,
            })
        }
    })


    for(let key in dataMap){
        returnData.push(dataMap[key])
    }

    return returnData;
}

