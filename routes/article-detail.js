//路由的配置项
export var routeSettings = {
    default: {
    route:/^\/article\/(\d+)$/,       //访问路径
    // template:"",    //用到的模板
    }
};

export default function (req, res) {
    console.log(req.params)
    return {
            
    }
}
