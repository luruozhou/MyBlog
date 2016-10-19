import * as ThenFail from '$relDir$../libs/thenfail';
import { APIRequest, api } from '$relDir$../libs/vio';

import { Permission } from '$relDir$../modules/core/permission-provider';
import { Request } from '$relDir$../modules/core/user-provider';

interface APIData {
    // 返回的数据类型
}

export default class API {
    @api<Permission>({
        method: 'post',
        permission: Permission.admin
        // 添加 API 相关配置
    })
    static default(req: Request): ThenFail.Thenable<APIData> {
        // 返回数据
        return null;
    }
}
