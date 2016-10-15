import Path from "path";
import IO from "./io.js";
import BlueBird from "bluebird";
import  {Model as TESTmodel} from "../modules/mongodb-models/test_model"

TESTmodel.create({
    name:"嫌疑犯x",
    mobile:"13386198107",
    age:27
})

exports.Router = function (app) {
    this.app = app; //express 实例
    var routeFileDir = Path.resolve("dest/routes"); //路由根目录
    var routeFiles = IO.listFiles(routeFileDir, /\.js$/)  //获取目录下所有路由文件
    for (var routeFile of routeFiles) {
        var routeModule = require(routeFile);  //每个路由文件export的对象
        for (var key in routeModule) {
            if(key !="routeSettings"){
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
            BlueBird
                .resolve()
                .then(function () {
                    if(!routeHandler){
                      return  res.redirect("404");
                    }
                    return routeHandler(req, res)
                })
                .then(function (returnData) {

                    res.render(tplPath, returnData);
                })
        })
    }
}

