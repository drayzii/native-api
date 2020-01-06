import { Router } from 'express';
import user from '../controllers/user';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.get('/my-profile', decodeToken, user.getMyProfile);
router.put('/upsert', decodeToken, user.upsertProfile);

export default router;
