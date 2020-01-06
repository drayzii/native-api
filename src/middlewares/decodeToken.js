import dotenv from 'dotenv';
import response from '../helpers/response';
import { verify } from '../helpers/jwt';

dotenv.config();

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const result = await verify(token, process.env.SECRET);
    req.user = result;
    next();
  } catch (error) {
    response(res, 401, 'Authentication failed, Please log in again!', null, error.message || error);
  }
};
