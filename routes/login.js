import {Permission} from '../server/modules/core/permissionProvider';
import {userProvider} from "../server/modules/core/userProvider";
import  * as User from "../server/modules/user";

//路由的配置项
export var routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
        method: "all",   //请求方式
        // permission:Permission.none,    //用户权限
    }
};

export default function (req, res) {
    //清空登录状态
    req.session.uid = null;
    if (req.method.toLowerCase() != 'post' || !req.body.userName) {
        let error = req.query.error;
        return {error}
    }
    return userProvider
        .authenticate(req, res)
        .then(user => {
            console.log(user)
            return User
                .getLoginRedirectUrl(req, user)
                .then(url => {
                    res.redirect(url);
                    return {
                        tplNotNeedRender: true
                    }
                });
        })
        .catch(err => {
            console.log(err, 'error')
        })
}
