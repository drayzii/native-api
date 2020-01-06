/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    picture: DataTypes.STRING,
    title: DataTypes.STRING,
    username: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
