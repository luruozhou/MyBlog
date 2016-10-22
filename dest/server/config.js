'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var db = exports.db = {

    mongodb: {
        db: 'mongodb://luruozhou:123456@127.0.0.1/luruozhou', //本地
        opts: {

            server: { poolSize: 20 }
        }
    }
};

/** 链接数 */
var sequelizeConnectionPool = exports.sequelizeConnectionPool = {
    maxIdleTime: 20000,
    maxConnections: 200
};

var ServerHost = exports.ServerHost = {
    host: 'http://dev.zm1v1.com:8085',
    port: 3000
};