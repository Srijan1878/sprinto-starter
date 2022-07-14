const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Task = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('pending', 'ongoing', 'completed'),
        defaultValue: 'pending'
    },
    priority: {
        type: Sequelize.ENUM('low', 'medium', 'high'),
        defaultValue: 'low'
    },
    taskDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Task;