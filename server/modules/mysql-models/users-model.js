import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'users', {
        email: Sequelize.STRING,
        user_name: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING,
        activated: Sequelize.BOOLEAN,
        activated_at: Sequelize.DATE,
        last_login: Sequelize.DATE,
        nick_name: Sequelize.STRING,
        avatar: Sequelize.STRING,
        created_at: Sequelize.DATE,
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;