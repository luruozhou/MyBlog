"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require("../../config");

// import * as mongoose from 'mongoose'
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var config = _config.db.mongodb;

mongoose.connect(config.db, config.opts, function (err) {
    if (err) {
        console.log("mongodb连接出错", err);
        db_err = true;
    } else {
        console.log("连接" + config.db + "成功");
    }
});

exports.default = mongoose;