// var mongoose = require('mongoose');
import * as mongoose from 'mongoose';

var base_model = function (schema) {

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

}

export {base_model as base_model};