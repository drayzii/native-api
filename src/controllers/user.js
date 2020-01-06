/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
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
}
