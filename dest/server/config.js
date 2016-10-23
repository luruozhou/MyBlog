'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var db = exports.db = {
    mysql: {
        name: 'test',
        host: '121.40.83.12',
        port: 3306,
        user: 'forge',
        password: 'zhangmen1dui1'
    },
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