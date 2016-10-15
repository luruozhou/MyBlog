import mongoose from '../core/mongoose';
import * as baseModel from './base_model';

var schema = new mongoose.Schema(
  {
    name:String,
    mobile:String,
    age:Number,
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
)
//
// schema.pre('save',function(next){
//    console.log(this,"==this")
//     next();
// });
schema.plugin(baseModel.base_model)
export let Model = mongoose.model('test',schema)
// export {ModelPOJO as bannerPOJO};