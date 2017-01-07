import * as Management from "../modules/management"
import Moment from 'moment';
import {Permission} from '../../server/modules/core/permissionProvider';
import * as Validator from '../utils/Validator';

export var routeSettings = {
    addArticle: {
        method: "post",
        permission:Permission.user
    },
    queryArticleReplies: {
        method: "post",
    },
    articleReply: {
        method: "post",
        permission:Permission.user

    },
};

/**
 * 后台添加文章
 */
export function addArticle(req, res) {
    var article = req.body;
    Validator.validate(article, ['title', 'html_content','sid','cover','description']);
    return Management.addArticle(article);
}

/**
 * 查询文章评论接口
 */
export function queryArticleReplies(req, res) {
    var args = req.body;
    return Management.queryArticleReplies(args.id);
}

/**
 * 查询文章评论接口
 */
export function articleReply(req, res) {
    var Reply = req.body;

    Reply.inTime = Moment(+new Date());
    return Management.articleReply(Reply);
}
