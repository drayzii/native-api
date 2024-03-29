import dotenv from 'dotenv';
import response from '../helpers/response';
import { sign } from '../helpers/jwt';
import { check } from '../helpers/bcrypt';
import { getFields } from '../services/field';
import authService from '../services/auth';

dotenv.config();

export default async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const names = email.split('@')[0];
    const username = names.toUpperCase().replace('.', '_');
    const user = await authService(username);
    const passwordMatch = check(user.password, password);
    if (passwordMatch) {
      const adminOf = await getFields(username).map(({ name }) => name);
      const data = {
        token: sign({ username, email }),
        adminOf,
        superAdmin: username === 'JONATHAN_SHYAKA',
      };
      return response(res, 200, 'Logged in Successfully', data, null);
    }
    return response(res, 400, 'Invalid email or password', null, 'Bad Request');
  } catch (error) {
    return next(error.message || error);
  }
};
