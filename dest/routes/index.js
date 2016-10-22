"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return {
        a: [{ name: "john" }, { name: "mary" }, { name: "haha" }, { name: "jiang" }],
        b: "说胡好"
    };
};

var routeSettings = exports.routeSettings = {
    default: {
        route: /^\/?$/
    }
};