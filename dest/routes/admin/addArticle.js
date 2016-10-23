"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeSettings = undefined;

exports.default = function (req, res) {
    var sections = [];
    var sub_sections = [];

    return _bluebird2.default.resolve().then(function () {
        return _sectionModel2.default.findAll({
            where: { "show_status": 1 }
        });
    }).then(function (res) {
        sections = res;
        return _sub_sectionModel2.default.findAll({
            where: { "show_status": 1 }
        });
    }).then(function (data) {
        sub_sections = data;
        return {
            sections: sections,
            sub_sections: sub_sections
        };
    });
};

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _sub_sectionModel = require("../../server/modules/mysql-models/sub_section-model");

var _sub_sectionModel2 = _interopRequireDefault(_sub_sectionModel);

var _sectionModel = require("../../server/modules/mysql-models/section-model");

var _sectionModel2 = _interopRequireDefault(_sectionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//路由的配置项
var routeSettings = exports.routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
    }
};