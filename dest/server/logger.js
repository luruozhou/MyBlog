'use strict';

var log4js = require('log4js');
log4js.configure({
    appenders: [{ type: 'console' }, //控制台输出
    {
        type: 'file', //文件输出
        filename: 'logs/debug-log.log',
        maxLogSize: 1024 * 1024,
        backups: 3,
        category: 'normal'
    }],
    replaceConsole: true
});

var logger = function logger(name) {
    return log4js.getLogger(name);
};

exports.logger = logger;

exports.use = function (app) {
    //页面请求日志,用auto的话,默认级别是WARN
    //app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));
    app.use(log4js.connectLogger(logger("normal"), { level: "auto", format: ':method :url' }));
};