'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base_model = undefined;

var _mongoose = require('mongoose');

var mongoose = _interopRequireWildcard(_mongoose);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var base_model = function base_model(schema) {

    // per save middleware 执行函数
    // Model.update,findByIdAndUpdate,findOneAndUpdate,findOneAndRemove,
    // findByIdAndRemove are all commands executed directly in the database.
    schema.pre('save', function (next) {
        if (this.isNew) {
            this.createAt = this.updateAt = Date.now();
        } else {
            this.updateAt = Date.now();
        }
        next();
    });
}; // var mongoose = require('mongoose');
exports.base_model = base_model;