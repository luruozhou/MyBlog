import BlueBird from "bluebird";
import * as Management from "../modules/management"

export var routeSettings = {
    addArticle:{
        method:"post"
    }
};

/**
 * 后台添加文章
 */
export function addArticle(req, res) {
    var article = req.body;
    return Management.addArticle(article);
}
