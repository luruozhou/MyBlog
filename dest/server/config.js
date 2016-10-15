'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var db = exports.db = {
    mysql: {
        name: 'ts',
        host: '121.40.83.12',
        port: 3306,
        user: 'forge',
        password: 'zhangmen1dui1'
    },
    mongodb: {
        db: 'mongodb://luruozhou:123456@127.0.0.1/luruozhou', //本地
        // db: 'mongodb://forge:forge620@121.40.83.12/zm_web',//测服
        opts: {
            //db: { native_parser: true },
            //replset: { rs_name: 'myReplicaSetName' },
            //user: 'aa',
            //password: '111',
            server: { poolSize: 20 }
        }
    }
};

var ServerHost = exports.ServerHost = {
    host: 'http://dev.zm1v1.com:8085',
    port: 3000
};