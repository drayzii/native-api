import db from '../database/models';

const { Message } = db;

export const add = (message) => {
  try {
    return Message.create(message);
  } catch (error) {
    throw error;
  }
};
