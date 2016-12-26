import  UserModel from "../mysql-models/users-model";
import * as Lodash from 'lodash';
import Promise from "bluebird";

export function Permission(details) {
    this.details = Lodash.unique(details) || [];
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

export var permissionProvider = {
    verifyRouter: (userPermission, requiredPermission) => {
        if (!requiredPermission || requiredPermission.details.length <=0) {
            return true;
        }
        if (userPermission && userPermission.details.length > 0) {
            return Permission.verify(userPermission || Permission.none, requiredPermission);
        }
        throw "PermissionDenied";
    }
};