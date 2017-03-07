import * as Management from "../server/modules/management";

export var routeSettings = {
    default: {
        route: /^\/?$/
    }
};

export default function (req, res) {
    // return res.redirect(302,'http://172.16.85.107:80');
    return res.redirect(301,'http://www.baidu.com');
    // return Management.queryHotArticles()
    //     .then(hotArticles => {
    //         return {
    //             hotArticles,
    //         }
    //     });
}

