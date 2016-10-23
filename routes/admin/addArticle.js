import BlueBird from "bluebird";
import  SubSectionTmodel from "../../server/modules/mysql-models/sub_section-model";
import  SectionTmodel from "../../server/modules/mysql-models/section-model";

//路由的配置项
export var routeSettings = {
    default: {
        // route:"",       //访问路径
        // template:"",    //用到的模板
    }
};

export default function (req, res) {
    let sections = [];
    let sub_sections = [];


    return BlueBird.resolve()
        .then(function () {
            return SectionTmodel.findAll({
                where: {"show_status": 1}
            })
        })
        .then(res => {
            sections = res;
            return SubSectionTmodel.findAll({
                where: {"show_status": 1}
            })
        })
        .then(data =>{
            sub_sections=data;
            return {
                sections,
                sub_sections
            }
        })
}
