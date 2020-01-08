/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { checkIfAdmin } from '../services/field';
import RecentWorkServices from '../services/work';

dotenv.config();

export default class UserControllers {
  static async add(req, res, next) {
    try {
      const { username } = req.user;
      req.body.field = req.body.field.toUpperCase();
      const isAllowed = await checkIfAdmin(req.body.field, username);
      const work = isAllowed ? await RecentWorkServices.add(req.body) : null;
      return response(
        res,
        work ? 201 : 403,
        work ? 'Project Added' : 'You don\'t have access to do that action',
        work,
        work ? null : 'Forbidden',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getByField(req, res, next) {
    try {
      const { field } = req.query;
      const work = await RecentWorkServices.getByField(field.toUpperCase());
      return response(res, 200, 'Projects Retrieved', work, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const work = await RecentWorkServices.getOne(id);
      return response(
        res,
        work ? 200 : 404,
        work ? 'Project Retrieved' : 'Sorry, we couldn\'t find the requested data on our server',
        work,
        work ? null : 'Not found',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.user;
      req.body.field = req.body.field.toUpperCase();
      const isAllowed = await checkIfAdmin(req.body.field, username);
      const work = isAllowed ? await RecentWorkServices.update(id, req.body) : null;
      return response(
        res,
        work ? 201 : 403,
        work ? 'Project Updated' : 'You don\'t have access to do that action',
        work ? work[1][0] : null,
        work ? null : 'Forbidden',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.user;
      const work = await RecentWorkServices.getOne(id);
      if (!work) {
        return response(res, 404, 'Sorry, we couldn\'t find the project on our server', null, 'Not Found');
      }
      const isAllowed = await checkIfAdmin(work.field, username);
      const deleted = isAllowed ? await RecentWorkServices.delete(id) : null;
      return response(
        res,
        deleted ? 200 : 403,
        deleted ? 'Project deleted' : 'You don\'t have access to do that action',
        null,
        deleted ? null : 'Forbidden',
      );
    } catch (error) {
      return next(error.message || error);
    }
  }
}
