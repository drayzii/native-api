import { Router } from 'express';
import message from '../controllers/message';

const router = new Router();

router.post('/add', message.newMessage);

export default router;
