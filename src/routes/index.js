import { Router } from 'express';
import auth from './auth';
import user from './user';
import post from './post';
import work from './work';
import message from './message';
import skill from './skill';

const router = new Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);
router.use('/work', work);
router.use('/messages', message);
router.use('/skills', skill);

export default router;
