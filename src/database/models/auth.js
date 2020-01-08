/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  Auth.associate = (models) => {
    // associations can be defined here
  };
  return Auth;
};
