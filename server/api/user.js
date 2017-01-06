import {userProvider} from "../modules/core/userProvider";
import  * as User from "../modules/user";
import * as Validator from '../utils/Validator';

export var routeSettings = {
    login: {
        method: "post",
        notAuthentication: true
    },
    register: {
        method: "post",
        notAuthentication: true
    },
    logout: {
        method: "post",
    },
};

/**
 * 用户登录接口
 * userName:string
 * password:string
 */
export function login(req, res) {
    Validator.validate(req.body, ['userName', 'password'],{
        userName:/^.+$/,
        password:/^.{6,}$/
    });

    return userProvider
        .authenticate(req, res)
        .then(data=> {
            if (data && data.userRecord) {
                return 'ok';
            } else {
                throw '无效的用户名或密码.';
            }
        })
        .catch(err=> {
            console.log("error:", err);
            req.session['uid'] = null;
            return {
                msg: err
            }
        })
}

/**
 * 用户注册接口
 * userName:string
 * nickName:string
 * password:string
 */
export function register(req, res) {
    let args = req.body;
    Validator.validate(args, ['userName', 'password','nickName'],{
        userName:/^.+$/,
        password:/^.{6,}$/,
        nickName:/^.+$/,
    });

    return User.register(args)
        .then(uid=> {
            if (uid) {
                req.session.uid = uid;
                return '注册成功.';
            } else {
                return {
                    msg: '注册异常.',
                };
            }
        })
        .catch(err=> {
            console.log("error:", err);
            req.session['uid'] = null;
            return {
                msg: err
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
