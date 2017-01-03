import {qiNiuConfig} from '../config-core/index';
import {Promise} from './Promise';
// var Promise =require('bluebird');
var qiNiu = require('qiniu');

export function qiNiuClient({key, filePath}) {
    qiNiu.conf.ACCESS_KEY = qiNiuConfig.ACCESS_KEY;
    qiNiu.conf.SECRET_KEY = qiNiuConfig.SECRET_KEY;
    let bucket = qiNiuConfig.BUCKET;
    //生成上传 Token
    let token = uptoken(bucket, key);
    var extra = new qiNiu.io.PutExtra();
    return new Promise((resolve, reject) => {
        qiNiu.io.putFile(token, key, filePath, extra, function (err, ret) {
            if (err) {
                reject(err);
                return;
            }
            try {
                resolve(ret);
            } catch (e) {
                reject(e);
            }
        });
    })
}

function uptoken(bucket, key) {
    var putPolicy = new qiNiu.rs.PutPolicy(bucket + ":" + key);
    return putPolicy.token();
}