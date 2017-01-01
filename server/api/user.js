import BlueBird from "bluebird";
import {userProvider} from "../modules/core/userProvider";

export var routeSettings = {
    login: {
        method: "post",
        notAuthentication: true
    },
    logout: {
        method: "post",
        notAuthentication: true
    },
};

/**
 * 用户登录接口
 * userName:string
 * password:string
 */
export function login(req, res) {
    return userProvider
        .authenticate(req, res, true)
        .then(data=> {
            if (data && data.userRecord) {
                return 'ok';
            } else {
                return {
                    msg: '暂无用户信息.',
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

/**
 * 用户登出接口
 */
export function logout(req, res) {
    userProvider.clearSessionState(req);
    res.clearCookie('sessionid');
    return 1
}
