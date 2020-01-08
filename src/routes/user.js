import { Router } from 'express';
import user from '../controllers/user';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.get('/me', decodeToken, user.getMyProfile);
router.patch('/me/update-password', decodeToken, user.updatePassword);
router.put('/upsert', decodeToken, user.upsertProfile);
router.get('/:user', user.getProfile);

export default router;
