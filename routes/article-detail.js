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
    return Article.find({
        where: {
            id: articleId
        }
    })
        .then(articleRecord => {
            console.log(Object.prototype.toString.call(articleRecord.created_at),'===');
            let date =Moment(articleRecord.created_at).format("YYYY-MM-DD");
            var test =new Date();
            console.log(test)
            console.log(date)
            return {
                articleRecord
            }
        })
}
