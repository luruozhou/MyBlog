import * as Sequelize from 'sequelize';
import sequelize from '../core/sequelize';

var Model = sequelize.define(
    'ArticleReply', {
        art_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        rid: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        author_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        in_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        isdelete: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        tableName: 'article_reply',
        timestamps: true,
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync();
export default Model;