import Promise from "bluebird";
import {default as sequelize} from './core/sequelize';
import  ArticleModel from "../modules/mysql-models/article-model";
import  SectionModel from "../modules/mysql-models/section-model";
/**
 *查询板块列表信息
 * @returns Promise<section[]>
 */
export function querySections() {
    return Promise.resolve(sequelize.query(`
            select s.id,
                   s.name, 
                   s.tab,
                   son.id son_id,
                   son.name son_name,
                   son.tab son_tab
            from sections s
                left join sections son on son.parent_id = s.id and son.show_status = 1
            where s.show_status = 1 and s.parent_id = 0
        `))
        .then(function (records) {
            return records[0];
        })
}

/**
 * 后台添加文章
 */
export function addArticle(article) {
    return ArticleModel.create({
        title: article.title,
        html_content: article.html_content,
        sid: article.sid,
        sub_sid: article.sub_sid,
        description: article.description
    })
        .then(function (data) {
            return data;
        })
}

/**
 * 查询热门文章列表 条数默认4
 * num:条数
 */
export function queryHotArticles(num) {
    num = num || 4;
    return Promise.resolve(sequelize.query(`
            select art.id,
                   art.sid, 
                   art.sub_sid, 
                   art.cover,
                   art.title,
                   art.description,
                   s.name as sName,
                   s.tab as sTab,
                   sub_s.name as subSName
            from articles as art
            left join sections as s on s.id = art.sid
            left join sections as sub_s on sub_s.id = art.sub_sid
            where art.hot = 1
            limit ${num}
        `))
        .then(function (records) {
            return records[0];
        })
}