import response from '../helpers/response';
import { add, get } from '../services/message';

export default class MessageControllers {
  static async newMessage(req, res, next) {
    try {
      const message = await add(req.body);
      return response(res, 201, 'Received successfully', message, null);
    } catch (error) {
      return next(error.message || error);
    }
  }

  static async getMessages(req, res, next) {
    try {
      const { username } = req.user;
      const messages = await get(username);
      return response(res, 200, 'Retrieved successfully!', messages, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
