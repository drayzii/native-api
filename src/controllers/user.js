/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import { generate } from '../helpers/bcrypt';
import UserServices from '../services/user';
import getSkills from '../services/skill';

dotenv.config();

export default class UserControllers {
  static async getMyProfile(req, res, next) {
    try {
      const { username } = req.user;
      const profile = await UserServices.getUser(username);
      if (profile) profile.dataValues.socialLinks = await UserServices.getSocialLinks(username);
      if (profile) profile.dataValues.skills = await getSkills(profile.dataValues.skills.split(','));
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

  static async deleteSocialLink(req, res, next) {
    try {
      const { username } = req.user;
      const deleted = await UserServices.deleteSocialLink(username, req.query.type);
      if (!deleted) throw Error('Failed to delete');
      return response(res, 201, 'Link deleted', null, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
