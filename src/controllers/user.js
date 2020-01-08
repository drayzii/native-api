/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { generate } from '../helpers/bcrypt';
import UserServices from '../services/user';

dotenv.config();

const capitalize = (string) => {
  const lowString = string.toLowerCase();
  return lowString.charAt(0).toUpperCase() + lowString.slice(1);
};

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

  // Admin

  static async getUsers(req, res, next) {
    try {
      const { username: uname } = req.user;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const result = await UserServices.getUsers();
      const users = result.map(({ username }) => ({
        username,
        names: username.split('_').map((name) => capitalize(name)).join(' '),
      }));
      return response(res, 200, 'Users retrieved', users, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async addUser(req, res, next) {
    try {
      const { username: uname } = req.user;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const { email, password: unHashed } = req.body;
      const names = email.split('@')[0];
      const username = names.toUpperCase().replace('.', '_');
      const password = await generate(unHashed);
      const user = await UserServices.addUser({ username, password });
      return response(res, 201, 'User successfully added', user, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
