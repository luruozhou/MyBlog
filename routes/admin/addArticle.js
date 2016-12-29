// import BlueBird from "bluebird";
import * as Management from "../../server/modules/management";
import {Permission} from '../../server/modules/core/permissionProvider';

//路由的配置项
export var routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
        permission:Permission.addArticle,    //用户权限
    }
};

export default function (req, res) {
    let sections = [];
    return Management.querySections()
        .then(data =>{
            sections=makeSectionTree(data);

            return {
                sections,
                extras:{
                    sections
                }
            }
        })
}

function makeSectionTree(sections) {
    var returnData =[];
    var dataMap = {};
    if(!sections ||sections.length ==0){
        return returnData;
    }

    sections.forEach(function (item, i) {
        if(!dataMap[item.id]){
            dataMap[item.id]={
                id:item.id,
                name:item.name,
                tab:item.tab,
                sons:[]
            }
            if(item.son_id){
                dataMap[item.id].sons.push({
                    id:item.son_id,
                    name:item.son_name,
                    tab:item.son_tab,
                })
            }
        }else{
            dataMap[item.id].sons.push({
                id:item.son_id,
                name:item.son_name,
                tab:item.son_tab,
            })
        }
    })


    for(let key in dataMap){
        returnData.push(dataMap[key])
    }

    return returnData;
}
