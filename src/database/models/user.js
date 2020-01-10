/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    picture: DataTypes.STRING,
    title: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING,
    skills: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
