import db from '../database/models';

const { Auth } = db;
export default class AuthServices {
  static async getUser(username) {
    try {
      return Auth.findOne({
        where: { username },
      });
    } catch (error) {
      throw error;
    }
  }
}
