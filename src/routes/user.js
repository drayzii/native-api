import { Router } from 'express';
import user from '../controllers/user';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.get('/my-profile', decodeToken, user.getMyProfile);

export default router;
