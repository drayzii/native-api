/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define('Field', {
    name: DataTypes.STRING,
    admin: DataTypes.STRING,
  }, {});
  Field.associate = (models) => {
    // associations can be defined here
  };
  return Field;
};
