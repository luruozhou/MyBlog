import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'articles', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        html_content: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        sid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        sub_sid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'articles',
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;