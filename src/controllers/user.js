/* eslint-disable function-paren-newline */
import dotenv from 'dotenv';
import response from '../helpers/response';
import UserServices from '../services/user';

dotenv.config();

export default class UserControllers {
  static async getMyProfile(req, res) {
    try {
      const profile = await UserServices.getUser(req.user);
      response(res,
        profile ? 200 : 404,
        profile ? 'Profile retrieved' : 'No profile',
        profile, null,
      );
    } catch (error) {
      response(res, 500, 'Something went wrong!', null, error.message || error);
    }
  }
}
