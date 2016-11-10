"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    console.log(req.params);
    return {
        extras: { a: 1 }
    };
};

//路由的配置项
var routeSettings = exports.routeSettings = {
    default: {
        route: /^\/(literature|technology|life)\/?(\w+)?$/ }
};