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

var Model = _sequelize3.default.define('sub_sections', {
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
});
Model.sync();
exports.default = Model;