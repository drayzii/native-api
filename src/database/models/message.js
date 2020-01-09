/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    names: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Message.associate = (models) => {
    // associations can be defined here
  };
  return Message;
};
