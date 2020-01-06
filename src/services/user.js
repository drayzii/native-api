import db from '../database/models';

const { User } = db;
export default class UserServices {
  static async getUser(username) {
    try {
      return User.findOne({
        where: { username },
      });
    } catch (error) {
      throw error;
    }
  }
}
