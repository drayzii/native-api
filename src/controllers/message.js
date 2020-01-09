import response from '../helpers/response';
import { add, get } from '../services/message';
import { checkIfAdmin } from '../services/field';

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
      const { field } = req.query;
      let to;
      if (field) {
        const isAdmin = await checkIfAdmin(field, username);
        if (!isAdmin) return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
        to = field;
      } else {
        to = username;
      }
      const messages = await get(to);
      return response(res, 200, 'Retrieved successfully!', messages, null);
    } catch (error) {
      return next(error.message || error);
    }
  }
}
