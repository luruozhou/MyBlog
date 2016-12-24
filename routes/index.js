import * as Management from "../server/modules/management";

export var routeSettings = {
    default: {
        route: /^\/?$/
    }
};

export default function (req, res) {
    return Management.queryHotArticles()
        .then(hotArticles => {
            return {
                hotArticles:hotArticles
            }
        });
}

