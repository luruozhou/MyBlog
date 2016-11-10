"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _io = require("./io.js");

var _io2 = _interopRequireDefault(_io);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _management = require("../modules/management");

var Management = _interopRequireWildcard(_management);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = function (app) {
    this.app = app; //express 实例
    var routeFileDir = _path2.default.resolve("dest/routes"); //路由根目录
    var routeFiles = _io2.default.listFiles(routeFileDir, /\.js$/); //获取目录下所有路由文件
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = routeFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var routeFile = _step.value;

            var routeModule = require(routeFile); //每个路由文件export的对象
            for (var key in routeModule) {
                if (key != "routeSettings") {
                    attach(routeModule, key);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    function attach(routeModule, key) {
        var routeSetting = routeModule.routeSettings && routeModule.routeSettings[key] || {};
        var routeHandler = routeModule[key];
        var urlPath, tplPath;
        if (routeSetting.route) {
            urlPath = routeSetting.route;
        } else {
            urlPath = '/' + _path2.default.relative(routeFileDir, routeFile).replace(/\\/g, '/').replace(/\.js$/, '');
        }
        if (routeSetting.template) {
            tplPath = routeSetting.template;
        } else {
            tplPath = _path2.default.relative(routeFileDir, routeFile).replace(/\\/g, '/').replace(/\.js$/, '').replace(/^\/+/i, "");
        }

        app.get(urlPath, function (req, res) {
            _bluebird2.default.resolve().then(function () {
                if (!routeHandler) {
                    return res.redirect("404");
                }
                return routeHandler(req, res);
            }).then(function (returnData) {
                return Management.querySections().then(function (data) {
                    returnData.sections = makeSectionTree(data);
                    return returnData;
                });
            }).then(function (returnData) {

                res.render(tplPath, returnData);
            });
        });
    }
};

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
            };
            if (item.son_id) {
                dataMap[item.id].sons.push({
                    id: item.son_id,
                    name: item.son_name,
                    tab: item.son_tab
                });
            }
        } else {
            dataMap[item.id].sons.push({
                id: item.son_id,
                name: item.son_name,
                tab: item.son_tab
            });
        }
    });

    for (var key in dataMap) {
        returnData.push(dataMap[key]);
    }

    return returnData;
}