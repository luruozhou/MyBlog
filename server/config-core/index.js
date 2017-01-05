export * from "../config";
import * as Path from 'path';

export var  defaultTDK ={
    title:"嫌疑犯X的test",
    description:"just try it",
    keyword:"nothing,go"
}

export var qiNiuConfig = {
    ACCESS_KEY: '6sTCnWjh7HqYiK602DoETIBNXO9fHi0fQT-w6J_7',
    SECRET_KEY: 'syrnX8V67v8YxIe3XxVQcYaK8N1enjhqg-6CdYEh',
    BUCKET: 'myblog'
}

export var defaultAvatar = 'http://oj5qfmemk.bkt.clouddn.com/8_150608141913_6.jpg';

/** 文件上传临时目录 */
export var uploadTmpDir = Path.join(__dirname, '../../tmp');

/** 持久保存上传文件目录 */
export var uploadDestDir = Path.join(__dirname, '../../../upLoadFiles');