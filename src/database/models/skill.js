/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    identifier: DataTypes.STRING,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  Skill.associate = (models) => {
    // associations can be defined here
  };
  return Skill;
};
