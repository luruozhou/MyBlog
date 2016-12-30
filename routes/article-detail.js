import Article from '../server/modules/mysql-models/article-model';
import Moment from 'moment';
//路由的配置项
export var routeSettings = {
    default: {
        route: /^\/article\/(\d+)$/,       //访问路径
        // template:"",    //用到的模板
    }
};

export default function (req, res) {
    let articleId = req.params[0];
    console.log(req.user.userRecord, '我是用户信息');
    let userInfo = req.user.userRecord||{};
    let nickName = userInfo.nick_name;
    let avatar = userInfo.avatar;
    return Article.find({
        where: {
            id: articleId
        }
    })
        .then(articleRecord => {
            let date = Moment(articleRecord.created_at).format("YYYY-MM-DD");
            var test = new Date();
            console.log(test)
            console.log(date)
            return {
                articleRecord,
                nickName,
                avatar,
                isLogin:!!req.user.userRecord
            }
        })
}
