import  UserModel from "../mysql-models/users-model";
import * as Lodash from 'lodash';
import Promise from "bluebird";

export var permissionProvider = {
    verifyRouter: (userPermission, requiredPermission) => {
        if (!requiredPermission || requiredPermission.details.length <= 0) {
            return true;
        }
        if (userPermission && userPermission.details.length > 0) {
            return Permission.verify(userPermission || Permission.none, requiredPermission);
        }
        throw "PermissionDenied";
    }
};

export function Permission(details) {
    this.details = Lodash.uniq(details) || [];
}

Permission.verify = function (current, required) {
    if (Lodash.difference(required.details, current.details).length) {
        return false;
    } else {
        return true;
    }
}

Permission.prototype = {
    plus: function (permission) {
        if (permission instanceof Permission) {
            return new Permission(permission.details.concat(this.details));
        } else if (permission instanceof Array) {
            return new Permission(permission);
        }
    },
    has: function (permission) {
        return Permission.verify(this, permission);
    }
}

Permission.none = new Permission([]);  //没有权限
Permission.user = new Permission(['post', 'replyPost']);  //user角色
Permission.admin = new Permission(['addArticle', 'editArticle']);  //管理员角色
Permission.addArticle = new Permission(['addArticle']);  //发文章权限
Permission.editArticle = new Permission(['editArticle']);  //编辑文章
Permission.post = new Permission(['post']);  //发帖权限
Permission.replyPost = new Permission(['replyPost']);  //回帖权限
Permission.adminHomePage = new Permission(['adminHomePage']);  //管理后台主页权限
