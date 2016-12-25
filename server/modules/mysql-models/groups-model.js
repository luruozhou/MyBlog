import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'groups', {
        name: {
            type: Sequelize.STRING,
            unique: true
        },
        permissions: Sequelize.TEXT,
        group_type: Sequelize.INTEGER,
        description: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: true
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'groups',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;