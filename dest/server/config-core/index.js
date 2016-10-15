"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require("../config");

Object.keys(_config).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _config[key];
        }
    });
});
exports.aTest = aTest;
var defaultTDK = exports.defaultTDK = {
    title: "嫌疑犯X的test",
    description: "just try it",
    keyword: "nothing,go"
};
function aTest() {
    console.log(1);
}