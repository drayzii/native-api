/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { generate } from '../helpers/bcrypt';
import AdminServices from '../services/admin';

dotenv.config();

const capitalize = (string) => {
  const lowString = string.toLowerCase();
  return lowString.charAt(0).toUpperCase() + lowString.slice(1);
};

export default class AdminControllers {
  static async getUsers(req, res, next) {
    try {
      const { username: uname } = req.user;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const result = await AdminServices.getUsers();
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
      const user = await AdminServices.addUser({ username, password });
      return response(res, 201, 'User successfully added', user, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { username: uname } = req.user;
      const { username } = req.query;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const deletedUser = await AdminServices.deleteUser(username);
      if (!deletedUser) throw Error('Delete Failed');
      return response(res, 200, 'User successfully deleted', null, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async changeFieldAdmin(req, res, next) {
    try {
      const { username: uname } = req.user;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const { username } = req.body;
      const { field: name } = req.query;
      const field = await AdminServices.updateFieldOwner(name, username);
      return response(res, 200, 'Admin updated', field[1][0], null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async addSkill(req, res, next) {
    try {
      const { username: uname } = req.user;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const skill = await await AdminServices.addSkill(req.body);
      return response(res, 201, 'Skill added!', skill, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async deleteSkill(req, res, next) {
    try {
      const { username: uname } = req.user;
      const { skill } = req.query;
      if (uname !== 'JONATHAN_SHYAKA') {
        return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
      }
      const deletedSkill = await AdminServices.deleteSkill(skill);
      if (!deletedSkill) throw Error('Delete Failed');
      return response(res, 200, 'Skill successfully deleted', null, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
