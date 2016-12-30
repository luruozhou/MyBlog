import BlueBird from "bluebird";
import {userProvider} from "../modules/core/userProvider";

export var routeSettings = {
    login: {
        method: "post",
        notAuthentication:true
    }
};

/**
 * 用户登录接口
 */
export function login(req, res) {
    return userProvider
        .authenticate(req, res, true)
        .then(data=> {
            console.log(4)
            if (data && data.userRecord) {
                return 1;
            } else {
                return {
                    msg: '暂无用户信息.'
                };
            }
        })
        .catch(err=> {
            console.log("error:", err);
            req.session['uid'] = null;
            return {
                msg: '无效的用户名或密码.'
            }
        })
}
