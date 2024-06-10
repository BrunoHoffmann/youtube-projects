const { Sequelize, DataTypes } = require('sequelize');
const db = {};

const sequelize = new Sequelize('test-node', 'postgres', 'docker', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5436, 
  logging: false,
});

const User = require('../models/users.model')(sequelize, DataTypes);

db.User = User;

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

