//路由的配置项
export var routeSettings = {
    default: {
    route:/^\/(literature|technology|life)\/?(\w+)?$/,       //访问路径
    // template:"",    //用到的模板
    }
};

export default function (req, res) {
    console.log(req.params)
    return {
        extras:{a:1}
    }
}
