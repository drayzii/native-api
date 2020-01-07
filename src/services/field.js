/* eslint-disable import/prefer-default-export */
import db from '../database/models';

export const checkIfAdmin = (name, admin) => {
  try {
    return db.Field.count({ where: { name, admin } });
  } catch (error) {
    throw error;
  }
};
