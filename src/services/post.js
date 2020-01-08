import db from '../database/models';

const { Post } = db;
export default class PostServices {
  static async getByUser(user) {
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

  static async add(post) {
    try {
      return Post.create(post);
    } catch (error) {
      throw error;
    }
  }

  static async update(id, post) {
    try {
      return Post.update(post, {
        where: { id },
        returning: true,
      });
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      return Post.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
