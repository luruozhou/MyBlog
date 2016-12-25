import BlueBird from "bluebird";
import {userProvider} from "../modules/core/userProvider";

export var routeSettings = {
    login:{
        method:"post"
    }
};

/**
 * 用户登录接口
 */
export function login(req, res) {
    return userProvider
        .authenticate(req, res)
        .then(data=>{
            if(data&&data.userRecord){
                return 1;
            }else{
                return null;
            }
        })
}
