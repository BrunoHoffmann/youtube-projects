// models/users.model.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    version: true, // Habilita o optimistic locking
  });

  return User;
};
