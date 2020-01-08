/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import PostServices from '../services/post';

dotenv.config();

export default class UserControllers {
  static async addPost(req, res, next) {
    try {
      const { username } = req.user;
      const payload = { ...req.body, user: username };
      const post = await PostServices.addPost(payload);
      return response(res, 201, 'Post Added', post, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getUserPosts(req, res, next) {
    try {
      const username = req.query.by.replace('-', '_');
      const posts = await PostServices.getPosts(username.toUpperCase());
      return response(res, 200, 'Posts Retrieved', posts, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const post = await PostServices.getOne(id);
      return response(
        res,
        post ? 200 : 404,
        post ? 'Post Retrieved' : 'Sorry, we couldn\'t find the requested data on our server',
        post,
        post ? null : 'Not found',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }
}
