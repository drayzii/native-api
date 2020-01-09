/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { generate } from '../helpers/bcrypt';
import UserServices from '../services/user';

dotenv.config();

export default class UserControllers {
  static async getMyProfile(req, res, next) {
    try {
      const profile = await UserServices.getUser(req.user.username);
      return response(res,
        profile ? 200 : 404,
        profile ? 'Profile retrieved' : 'No profile',
        profile,
        profile ? null : 'Not Found',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async upsertProfile(req, res, next) {
    try {
      const { username, email } = req.user;
      const user = { ...req.body, username, email };
      const profile = await UserServices.upsertUser(username, user);
      return response(res, 200, 'Profile updated', profile, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getProfile(req, res, next) {
    try {
      const username = req.params.user.replace('-', '_');
      const profile = await UserServices.getUser(username.toUpperCase());
      return response(res,
        profile ? 200 : 404,
        profile ? 'Profile retrieved' : 'No profile',
        profile,
        profile ? null : 'Not Found',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async updatePassword(req, res, next) {
    try {
      const { username } = req.user;
      const hashedPassword = await generate(req.body.password);
      const user = await UserServices.updatePassword(username, hashedPassword);
      return response(res, 200, 'Password updated', user[1][0], null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async editSocialLinks(req, res, next) {
    try {
      const { username } = req.user;
      const socialLink = await UserServices.upsertSocialLinks(username, req.body);
      return response(res, 201, 'Links updated', socialLink, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
