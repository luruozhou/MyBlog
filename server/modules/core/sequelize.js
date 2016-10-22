import * as FS from 'fs';
import * as Path from 'path';

// import * as Sequelize from 'sequelize';
var Sequelize = require('sequelize');

import {db as config, sequelizeConnectionPool} from '../../config';
var mysqlConfig = config.mysql;

var sequelize = new Sequelize(mysqlConfig.name, mysqlConfig.user, mysqlConfig.password, {
    timezone: '+08:00',
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    dialect: 'mysql',
    logging: function (message) {
        ///{debug
        if (message.indexOf('Executing') > -1) {
        } else if (/error/i.test(message)) {
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
        maxIdleTime: sequelizeConnectionPool.maxIdleTime,
        maxConnections: sequelizeConnectionPool.maxConnections
    }
});


export default sequelize;

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
