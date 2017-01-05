var Sequelize = require('sequelize');
import {Promise} from '../../libs/Promise';

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

export function ensureTransaction(
    callback,
    transaction
){
    return Promise.resolve().then(() => {
        if (transaction) {
            return callback(transaction);
        } else {
            var result;
            return sequelize
                .transaction(transaction => {
                    var debugTransaction = transaction;
                        debugTransaction._commit = transaction.commit;
                        debugTransaction.commit = function() {
                            return debugTransaction._commit.apply(transaction, Array.prototype.slice.call(arguments));
                        };

                        debugTransaction._rollback = transaction.rollback;
                        debugTransaction.rollback = function() {
                            return debugTransaction._rollback.apply(transaction, Array.prototype.slice.call(arguments));
                        };

                    result = callback(transaction);

                    return Promise.resolve(result);
                })
                .then(() => result);
        }
    });
}

require('../mysql-models/model-relations');
