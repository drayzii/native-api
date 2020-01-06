import dotenv from 'dotenv';
import response from '../helpers/response';
import { sign } from '../helpers/jwt';

dotenv.config();

export default (req, res, next) => {
  try {
    const { email } = req.body;
    const names = email.split('@')[0];
    const username = names.toUpperCase().replace('.', '_');
    if (process.env[username] && process.env[username] === req.body.password) {
      const data = { token: sign({ username, email }) };
      return response(res, 200, 'Logged in Successfully', data, null);
    }
    return response(res, 400, 'Invalid email or password', null, 'Bad Request');
  } catch (error) {
    return next(error.message || error);
  }
};
