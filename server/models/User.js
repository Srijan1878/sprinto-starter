const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Task = require('./Task.js');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: true
});

User.hasOne(Task, {
    foreignKey: 'userId',
    as: 'tasks',
    onDelete: 'CASCADE',
    hooks: true
});

Task.belongsTo(User);

module.exports = User;