import db from '../database/models';

const { Message } = db;

export const add = (message) => {
  try {
    return Message.create(message);
  } catch (error) {
    throw error;
  }
};

export const get = (to) => {
  try {
    return Message.findAll({ where: { to } });
  } catch (error) {
    throw error;
  }
};
