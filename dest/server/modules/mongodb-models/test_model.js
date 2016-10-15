'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = undefined;

var _mongoose = require('../core/mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _base_model = require('./base_model');

var baseModel = _interopRequireWildcard(_base_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _mongoose2.default.Schema({
  name: String,
  mobile: String,
  age: Number,
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});
//
// schema.pre('save',function(next){
//    console.log(this,"==this")
//     next();
// });
schema.plugin(baseModel.base_model);
var Model = exports.Model = _mongoose2.default.model('test', schema);
// export {ModelPOJO as bannerPOJO};