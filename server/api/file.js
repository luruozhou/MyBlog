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

            // tmpFile = new File.Files(fileSource);
            //
            // tmpFile.filter((file: File.File) => {
            //
            //     //限制 mime类型
            //     if (!zmConfig.uploadAcceptUserAvatarMiemeType.test(file.mimeType)) {
            //         throw new APIError(APIErrorCode.InvalidArguments, '上传文件类型不被接受');
            //     }
            //
            //     //限制 扩展
            //     if (!zmConfig.uploadAcceptAvatarFileExtension.test(file.extension)) {
            //         throw new APIError(APIErrorCode.InvalidArguments, '上传文件类型不被接受');
            //     }
            //     //限制 文件大小
            //     if (!(zmConfig.uploadBannerLimitFileSize > parseInt(file.size))) {
            //         throw new APIError(APIErrorCode.InvalidArguments, '上传文件大小超过头像文件大小限制');
            //     }
            //     return true;
            // });
            //
            // if (tmpFile.isEmpty()) {
            //     throw new APIError(APIErrorCode.InvalidArguments, '上传文件无效');
            // }
            //
            // if (tmpFile.count > 1) {
            //     throw new APIError(APIErrorCode.InvalidArguments, '一次只允许处理一个头像文件上传操作');
            // }

            return QiNiu.qiNiuClient({key: fileSource.name, filePath: fileSource.path}).then((res) => {
                console.log(res)
                return fileSource.name;
            })
        })
        .catch(reason => {
            throw reason;
        });
}