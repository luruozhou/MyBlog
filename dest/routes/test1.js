"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return {
        a: "hha",
        b: "说胡好"
    };
};

exports.aa = aa;
exports.bb = bb;
var routeSettings = exports.routeSettings = {
    default: {
        route: "/default"
    },
    aa: {
        route: /t\/(\d+)/
    },
    bb: {
        route: "/jd"
    }
};

function aa(req, res) {
    console.log(req.params);
    return {
        a: "hha",
        b: req.params[0]
    };
}

function bb(req, res) {
    console.log(req.params);
    return {
        a: "zzzzzzzzzzzzzzz",
        b: "sssssssssss"
    };
}