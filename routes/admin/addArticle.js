// import BlueBird from "bluebird";
// import  SectionTmodel from "../../server/modules/mysql-models/section-model";
import * as Management from "../../server/modules/management";

//路由的配置项
export var routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
    }
};

export default function (req, res) {
    let sections = [];

    return Management.querySections()
        .then(data =>{
            sections=makeTree(data);

            return {
                sections,
                extras:{
                    sections
                }
            }
        })
}

function makeTree(sections) {
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
