/* eslint-disable no-unused-vars */
export default (sequelize, DataTypes) => {
  const Post = sequelize.define('RecentWork', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    link: DataTypes.STRING,
    field: DataTypes.STRING,
  }, {});
  Post.associate = (models) => {
    // associations can be defined here
  };
  return Post;
};
