// import * as mongoose from 'mongoose'
var mongoose =require("mongoose")
import { db }from '../../config';
mongoose.Promise = global.Promise;

var config = db.mongodb;

mongoose.connect(config.db,config.opts,function(err){
    if (err) {
        console.log("mongodb连接出错",err);
        db_err = true;
    }
    else {
        console.log("连接"+config.db+"成功");
    }
});

export default mongoose;
