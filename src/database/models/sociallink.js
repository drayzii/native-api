/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const SocialLink = sequelize.define('SocialLink', {
    user: DataTypes.STRING,
    type: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {});
  SocialLink.associate = (models) => {
    // associations can be defined here
  };
  return SocialLink;
};
