import db from '../database/models';

const { Auth } = db;
export default class UserServices {
  static async addUser(user) {
    try {
      return Auth.create(user);
    } catch (error) {
      throw error;
    }
  }

  static async getUsers() {
    try {
      return Auth.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(username) {
    try {
      return Auth.destroy({ where: { username } });
    } catch (error) {
      throw error;
    }
  }
}
