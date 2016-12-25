import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'users_groups', {
        user_id: {
            type: Sequelize.INTEGER,
            unique: 'user_id_group_id'
        },
        group_id: {
            type: Sequelize.INTEGER,
            unique: 'user_id_group_id'
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users_groups',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;