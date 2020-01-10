import { Op } from 'sequelize';
import db from '../database/models';

const { Skill } = db;

export default (fields) => {
  try {
    return Skill.findAll({
      where: { identifier: { [Op.in]: fields } },
      attributes: ['identifier', 'name', 'category', 'image'],
    });
  } catch (error) {
    throw error;
  }
};
