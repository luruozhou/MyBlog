import {userProvider} from "../modules/core/userProvider";
import  UserModel from "../modules/mysql-models/users-model";
import * as Bcrypt from 'bcrypt-nodejs';
import {ensureTransaction} from '../modules/core/sequelize';

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
    return userProvider
        .authenticate(req, res)
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
 * 用户注册接口
 * userName:string
 * password:string
 */
export function register(req, res) {
    let args = req.body;
    return UserModel
        .find({where: {user_name: args.userName}})
        .then(userRecord=> {
            if (userRecord) {
                return {
                    msg: '该用户已经注册.',
                };
            } else {
                let passwordBcrypt = Bcrypt.hashSync(args.password);
                console.log(passwordBcrypt, args.password);
                // return ensureTransaction(transaction => {
                return UserModel.create({
                    user_name: args.userName,
                    password: passwordBcrypt,
                    nick_name: args.nickName,
                    created_at: new Date(),
                    last_login: new Date()
                })
                    .then(userRecord=> {
                        console.log(userRecord.id,'<====uid');
                        return req.session.uid=userRecord.id;
                    })
                    .then(uid=> {
                        if (uid) {
                            return '注册成功.';
                        } else {
                            return {
                                msg: '注册异常.',
                            };
                        }
                    })
                // })
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
