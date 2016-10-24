import Promise from "bluebird";
import {default as sequelize} from './core/sequelize';
import  ArticleModel from "../modules/mysql-models/article-model";

/**
 *查询板块列表信息
 * @returns section[]
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
        title:article.title,
        html_content:article.html_content,
        sid:article.sid,
        sub_sid:article.sub_sid,
        description:article.description
    })
        .then(function (data) {
            console.log(data,'====000====')
            return data;
        })
}