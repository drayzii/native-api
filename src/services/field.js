/* eslint-disable import/prefer-default-export */
import db from '../database/models';

export const checkIfAdmin = (name, admin) => {
  try {
    return db.Field.count({ where: { name, admin } });
  } catch (error) {
    throw error;
  }
};

export const getFields = (admin) => {
  try {
    return db.Field.findAll({
      where: { admin },
      attributes: ['name'],
    });
  } catch (error) {
    throw error;
  }
};
