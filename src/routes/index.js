import { Router } from 'express';
import auth from './auth';
import user from './user';
import post from './post';
import work from './work';

const router = new Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);
router.use('/work', work);

export default router;
