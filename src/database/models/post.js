/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    link: DataTypes.STRING,
    field: DataTypes.STRING,
    user: DataTypes.STRING,
  }, {});
  Post.associate = (models) => {
    // associations can be defined here
  };
  return Post;
};
