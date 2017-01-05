import {Promise} from "../libs/Promise";
import  UserModel from "../modules/mysql-models/users-model";
import  UserGroupModel from "../modules/mysql-models/users-groups-model";
import {Permission} from './core/permissionProvider';
import {defaultAvatar} from '../config-core/index';
import * as Bcrypt from 'bcrypt-nodejs';

export function getUserPermission(userIdOrRecord) {
    return Promise.resolve()
        .then(() => typeof userIdOrRecord === 'number' ? UserModel.find(userIdOrRecord) : userIdOrRecord)
        .then(userRecord => userRecord.getGroups())
        .then((groups) => {
            return Promise
                .map(groups, group => {
                    return group.permissions.split(',');
                })
                .then(permissionGroups => {
                    return permissionGroups.reduce((prev, curr) => prev.concat(curr), []);
                });
        })
        .then(details => new Permission(details));
}

export function register(userInfo) {
    let uid;
    return UserModel
        .find({where: {user_name: userInfo.userName}})
        .then(userRecord=> {
            if (userRecord) {
                throw '该用户已经注册.';
            } else {
                let passwordBcrypt = Bcrypt.hashSync(userInfo.password);
                let avatar = userInfo.avatar || defaultAvatar;
                return UserModel.create({
                    user_name: userInfo.userName,
                    password: passwordBcrypt,
                    nick_name: userInfo.nickName,
                    created_at: new Date(),
                    last_login: new Date(),
                    avatar
                })
                    .then(userRecord=> {
                        //记住登录状态
                        uid = userRecord.id;
                        return UserGroupModel.create({
                            user_id: uid,
                            group_id: 1  // 分配user权限
                        })
                    })
                    .then(()=> {
                        return uid;
                    })
            }
        })
}