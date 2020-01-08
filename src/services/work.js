import db from '../database/models';

const { RecentWork } = db;
export default class RecentWorkServices {
  static async getByField(field) {
    try {
      return RecentWork.findAll({
        where: { field },
        order: [
          ['createdAt', 'DESC'],
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      return RecentWork.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  static async add(work) {
    try {
      return RecentWork.create(work);
    } catch (error) {
      throw error;
    }
  }

  static async update(id, work) {
    try {
      return RecentWork.update(work, {
        where: { id },
        returning: true,
      });
    } catch (error) {
      throw error;
    }
  }
}
