import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'sections', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        tab: {
            type: Sequelize.STRING,
            allowNull: true
        },
        parent_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        show_status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        sort_order: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'sections',
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;