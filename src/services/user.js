import db from '../database/models';

const { User, Auth } = db;
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

  static async upsertUser(username, user) {
    try {
      return User
        .findOne({ where: { username } })
        .then((obj) => {
          if (obj) return obj.update(user);
          return User.create(user);
        });
    } catch (error) {
      throw error;
    }
  }

  static async updatePassword(username, password) {
    try {
      return Auth.update({ password }, { where: { username }, returning: true });
    } catch (error) {
      throw error;
    }
  }
}
