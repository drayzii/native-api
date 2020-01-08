import db from '../database/models';

const { Auth, Field } = db;
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

  static async updateFieldOwner(name, admin) {
    try {
      return Field.update({ admin }, { where: { name }, returning: true });
    } catch (error) {
      throw error;
    }
  }
}
