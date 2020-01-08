import db from '../database/models';

const { RecentWork } = db;
export default class RecentWorkServices {
  static async getRecentWorks(field) {
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

  static async getSpecificWork(id) {
    try {
      return RecentWork.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  static async addRecentWork(work) {
    try {
      return RecentWork.create(work);
    } catch (error) {
      throw error;
    }
  }
}
