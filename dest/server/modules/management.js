"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.querySections = querySections;
exports.addArticle = addArticle;

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _sequelize = require("./core/sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _articleModel = require("../modules/mysql-models/article-model");

var _articleModel2 = _interopRequireDefault(_articleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *查询板块列表信息
 * @returns section[]
 */
function querySections() {
    return _bluebird2.default.resolve(_sequelize2.default.query("\n            select s.id,\n                   s.name, \n                   s.tab,\n                   son.id son_id,\n                   son.name son_name,\n                   son.tab son_tab\n            from sections s\n                left join sections son on son.parent_id = s.id and son.show_status = 1\n            where s.show_status = 1 and s.parent_id = 0\n        ")).then(function (records) {
        return records[0];
    });
}

/**
 * 后台添加文章
 */
function addArticle(article) {
    return _articleModel2.default.create({
        title: article.title,
        html_content: article.html_content,
        sid: article.sid,
        sub_sid: article.sub_sid,
        description: article.description
    }).then(function (data) {
        console.log(data, '====000====');
        return data;
    });
}