export var db = {
    mysql: {
        name: 'test',
        host: '111.111.111.111',
        port: 3306,
        user: 'root11',
        password: '111111'
    },
    mongodb:{
        db: 'mongodb://luruozhou:123456@127.0.0.1/luruozhou',//本地
        opts: {
            server: {poolSize: 20},
        }
    }
};

/** 链接数 */
export var sequelizeConnectionPool = {
    maxIdleTime: 20000,
    maxConnections: 200
}

export var ServerHost = {
    host:'http://dev.zm1v1.com:8085',
    port:3000
}

