"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routeSettings = undefined;

exports.default = function (req, res) {
    var sections = [];

    return Management.querySections().then(function (data) {
        sections = makeTree(data);

        return {
            sections: sections,
            extras: {
                sections: sections
            }
        };
    });
};

var _management = require("../../server/modules/management");

var Management = _interopRequireWildcard(_management);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//路由的配置项
var routeSettings = exports.routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
    }
}; // import BlueBird from "bluebird";
// import  SectionTmodel from "../../server/modules/mysql-models/section-model";


function makeTree(sections) {
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