import { Router } from 'express';
import user from '../controllers/user';
import admin from '../controllers/admin';
import decodeToken from '../middlewares/decodeToken';
import isAdmin from '../middlewares/isAdmin';

const router = new Router();

router.get('/me', decodeToken, user.getMyProfile);
router.put('/me/upsert', decodeToken, user.upsertProfile);
router.patch('/me/update-password', decodeToken, user.updatePassword);
router.put('/me/social-link', decodeToken, user.editSocialLinks);
router.delete('/me/social-link', decodeToken, user.deleteSocialLink);
router.get('/:user', user.getProfile);

// Admin
router.get('/', decodeToken, isAdmin, admin.getUsers);
router.post('/add', decodeToken, isAdmin, admin.addUser);
router.delete('/delete', decodeToken, isAdmin, admin.deleteUser);
router.patch('/make-admin', decodeToken, isAdmin, admin.changeFieldAdmin);

export default router;
