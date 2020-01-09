import response from '../helpers/response';
import { add } from '../services/message';

export default class MessageControllers {
  static async newMessage(req, res, next) {
    try {
      const message = await add(req.body);
      return response(res, 201, 'Received successfully', message, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
