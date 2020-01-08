import db from '../database/models';

const { Post } = db;
export default class PostServices {
  static async getPosts(user) {
    try {
      return Post.findAll({
        where: { user },
        order: [
          ['createdAt', 'DESC'],
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      return Post.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  static async addPost(post) {
    try {
      return Post.create(post);
    } catch (error) {
      throw error;
    }
  }
}
