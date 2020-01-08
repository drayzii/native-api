import { Router } from 'express';
import user from '../controllers/user';
import admin from '../controllers/admin';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.get('/me', decodeToken, user.getMyProfile);
router.patch('/me/update-password', decodeToken, user.updatePassword);
router.put('/upsert', decodeToken, user.upsertProfile);
router.get('/:user', user.getProfile);

// Admin
router.get('/', decodeToken, admin.getUsers);
router.post('/add', decodeToken, admin.addUser);
router.delete('/delete', decodeToken, admin.deleteUser);

export default router;
