import db from '../database/models';

const { Auth } = db;

export default (username) => {
  try {
    return Auth.findOne({
      where: { username },
    });
  } catch (error) {
    throw error;
  }
};
