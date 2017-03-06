import * as Management from "../server/modules/management";

export var routeSettings = {
    default: {
        route: /^\/?$/
    }
};

export default function (req, res) {
    return res.redirect('http://www.baidu.com');
    // return Management.queryHotArticles()
    //     .then(hotArticles => {
    //         return {
    //             hotArticles,
    //         }
    //     });
}

