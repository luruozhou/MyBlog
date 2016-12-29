import {Promise} from "../libs/Promise";
import  UserModel from "../modules/mysql-models/users-model";
import { Permission } from './core/permissionProvider';

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