import { Router } from 'express';
import auth from './auth';
import user from './user';
import post from './post';

const router = new Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);

export default router;
