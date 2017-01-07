import {Promise} from '../libs/Promise';
import * as QiNiu from '../libs/qiniu';

export var routeSettings = {
    uploadImg: {
        method: "post",
    }
};

export function uploadImg(req, res) {
    return Promise.resolve()
        .then(() => {
            var fileSource = req.files.Upload;
            if (!fileSource) {
                throw '未提供上传文件对象';
                return 0
            }

            return QiNiu.qiNiuClient({key: fileSource.name, filePath: fileSource.path}).then((res) => {
                console.log(res)
                return fileSource.name;
            })
        })
        .catch(reason => {
            throw reason;
        });
}