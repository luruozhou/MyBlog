"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeSettings = undefined;
exports.addArticle = addArticle;

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _management = require("../modules/management");

var Management = _interopRequireWildcard(_management);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeSettings = exports.routeSettings = {
    addArticle: {
        method: "post"
    }
};

/**
 * 后台添加文章
 */
function addArticle(req, res) {
    var article = req.body;
    console.log(article);
    return Management.addArticle(article);
}