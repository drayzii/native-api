/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import PostServices from '../services/post';

dotenv.config();

export default class UserControllers {
  static async add(req, res, next) {
    try {
      const { username } = req.user;
      const payload = { ...req.body, user: username };
      const post = await PostServices.add(payload);
      return response(res, 201, 'Post Added', post, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getByUser(req, res, next) {
    try {
      const username = req.query.by.replace('-', '_');
      const posts = await PostServices.getByUser(username.toUpperCase());
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

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.user;
      const post = await PostServices.getOne(id);
      if (!post) {
        return response(res, 404, 'Sorry, we couldn\'t find the post on our server', null, 'Not Found');
      }
      const isAllowed = post.user === username;
      const updatedPost = isAllowed ? await PostServices.update(id, req.body) : null;
      return response(
        res,
        updatedPost ? 201 : 403,
        updatedPost ? 'Project Updated' : 'You don\'t have access to do that action',
        updatedPost ? updatedPost[1][0] : null,
        updatedPost ? null : 'Forbidden',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.user;
      const post = await PostServices.getOne(id);
      if (!post) {
        return response(res, 404, 'Sorry, we couldn\'t find the post on our server', null, 'Not Found');
      }
      const isAllowed = post.user === username;
      const deleted = isAllowed ? await PostServices.delete(id) : null;
      return response(
        res,
        deleted ? 200 : 403,
        deleted ? 'Post deleted' : 'You don\'t have access to do that action',
        null,
        deleted ? null : 'Forbidden',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }
}
