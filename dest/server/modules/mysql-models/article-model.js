'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var Sequelize = _interopRequireWildcard(_sequelize);

var _sequelize2 = require('../core/sequelize');

var _sequelize3 = _interopRequireDefault(_sequelize2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Model = _sequelize3.default.define('articles', {
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
});
Model.sync();
exports.default = Model;