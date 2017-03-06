import * as Management from "../server/modules/management";

export var routeSettings = {
    default: {
        route: /^\/?$/
    }
};

export default function (req, res) {
    return res.redirect('http://172.16.85.107:80');
    // return Management.queryHotArticles()
    //     .then(hotArticles => {
    //         return {
    //             hotArticles,
    //         }
    //     });
}

