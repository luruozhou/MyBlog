import * as Management from "../server/modules/management";
//路由的配置项
export var routeSettings = {
    default: {
        route: /^\/(front-end|back-end|mobile-end|dev-tools|career-life)$/,       //访问路径
        // template:"",    //用到的模板
    }
};

export default function (req, res) {
    let sectionTab = req.params[0];
    let pageNo=1;
    let pageSize=6;
    return Management.querySectionArticlesByTab({sectionTab,pageNo,pageSize})
        .then(articlesInfo => {
            let articleList = articlesInfo.data;
            let totalCount = articlesInfo.total;
            return {
                articleList,
                totalCount,
                jsData:{
                    totalCount,
                    sectionTab,
                    baseSize:pageSize
                }
            }
        });
}
