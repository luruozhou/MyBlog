"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hh = exports.routeSettings = undefined;

exports.default = function (req, res) {

    // TESTmodel.create({
    //     name: 'nodeJS',
    //     tab: 'nodeJS',
    //     parent_id: '1',
    // }).then(function(result){
    //     console.log('inserted  ok');
    // }).catch(function(err){
    //     console.log('inserted  error');
    //     console.log(err.message);
    //
    // });
    return {
        a: [{ name: "john" }, { name: "mary" }, { name: "haha" }, { name: "jiang" }],
        b: "说胡好"
    };
};

var _sub_sectionModel = require("../modules/mysql-models/sub_section-model");

var _sub_sectionModel2 = _interopRequireDefault(_sub_sectionModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeSettings = exports.routeSettings = {
    default: {}
};
var hh = exports.hh = function hh(req, res) {

    return {
        b: "说胡好"
    };
};