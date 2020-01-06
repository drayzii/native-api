import { Router } from 'express';
import auth from '../controllers/auth';

const router = new Router();

router.post('/login', auth);

export default router;
