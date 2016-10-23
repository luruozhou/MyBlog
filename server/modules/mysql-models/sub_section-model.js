import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'sub_sections', {
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
            allowNull: true
        },
        show_status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'sub_sections',
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;