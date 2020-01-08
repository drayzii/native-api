/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { checkIfAdmin } from '../services/field';
import RecentWorkServices from '../services/work';

dotenv.config();

export default class UserControllers {
  static async addRecentWork(req, res, next) {
    try {
      const { username } = req.user;
      req.body.field = req.body.field.toUpperCase();
      const isAllowed = await checkIfAdmin(req.body.field, username);
      const work = isAllowed ? await RecentWorkServices.addRecentWork(req.body) : null;
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

  static async getRecentWorks(req, res, next) {
    try {
      const { field } = req.query;
      const work = await RecentWorkServices.getRecentWorks(field.toUpperCase());
      return response(res, 200, 'Recent Work Retrieved', work, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getSpecificWork(req, res, next) {
    try {
      const { id } = req.params;
      const work = await RecentWorkServices.getSpecificWork(id);
      return response(res, 200, 'Work Retrieved', work, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
