'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var FS = _interopRequireWildcard(_fs);

var _path = require('path');

var Path = _interopRequireWildcard(_path);

var _config = require('../../config');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import * as Sequelize from 'sequelize';
var Sequelize = require('sequelize');

var mysqlConfig = _config.db.mysql;

var sequelize = new Sequelize(mysqlConfig.name, mysqlConfig.user, mysqlConfig.password, {
    timezone: '+08:00',
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    dialect: 'mysql',
    logging: function logging(message) {
        ///{debug
        if (message.indexOf('Executing') > -1) {} else if (/error/i.test(message)) {
            console.error(sequelize, message);
        } else {
            console.warn(sequelize, message);
        }
        ///}
    },
    dialectOptions: {
        multipleStatements: true
    },
    pool: {
        maxIdleTime: _config.sequelizeConnectionPool.maxIdleTime,
        maxConnections: _config.sequelizeConnectionPool.maxConnections
    }
});

exports.default = sequelize;

// export function ensureTransaction<T>(
//     callback: (transaction: Sequelize.Transaction) => ThenFail.Thenable<T>|T,
//     transaction: Sequelize.Transaction
// ): ThenFail<T> {
//     var stack: string;
//     ///{debug log
//         try {
//             throw new Error;
//         } catch(e){
//             stack = ThenFail.Utils.filterStackString(e.stack).match(/at[^\r\n]+zm-www\/server\/(?:modules\/[^\/]+\.(?:ts|js)|api)[^\r\n]+|$/)[0];
//         }
//     ///}
//     return ThenFail.then(() => {
//         if (transaction) {
//             ///{debug log
//                 Debug.log(transaction, 'across transaction', stack);
//             ///}
//             return callback(transaction);
//         } else {
//             var result: ThenFail.Thenable<T>|T;
//             return sequelize
//                 .transaction(transaction => {
//                     var debugTransaction:any = transaction;
//                     ///{debug log
//                         debugTransaction._commit = transaction.commit;
//                         debugTransaction.commit = function() {
//                             Debug.log(transaction, 'commit');
//                             return debugTransaction._commit.apply(transaction, Array.prototype.slice.call(arguments));
//                         };
//
//                         debugTransaction._rollback = transaction.rollback;
//                         debugTransaction.rollback = function() {
//                             Debug.error(transaction, 'rollback');
//                             return debugTransaction._rollback.apply(transaction, Array.prototype.slice.call(arguments));
//                         };
//
//                         Debug.log(transaction, 'new transaction', stack);
//                     ///}
//
//                     result = callback(transaction);
//                     // 为什么要用 ThenFail.resolved? -- vilic
//                     return ThenFail.resolved(result);
//                 })
//                 .then(() => result);
//         }
//     });
// }

// require('../db-models/model-relations');