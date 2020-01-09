import { Router } from 'express';
import decodeToken from '../middlewares/decodeToken';
import message from '../controllers/message';

const router = new Router();

router.post('/add', message.newMessage);
router.get('/', decodeToken, message.getMessages);

export default router;
