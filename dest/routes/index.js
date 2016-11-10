"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeSettings = undefined;

exports.default = function (req, res) {
    var sections = [];

    return {};
};

var _management = require("../server/modules/management");

var Management = _interopRequireWildcard(_management);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routeSettings = exports.routeSettings = {
    default: {
        route: /^\/?$/
    }
};