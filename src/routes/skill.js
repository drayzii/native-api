import { Router } from 'express';
import admin from '../controllers/admin';
import decodeToken from '../middlewares/decodeToken';
import isAdmin from '../middlewares/isAdmin';

const router = new Router();

router.post('/add', decodeToken, isAdmin, admin.addSkill);
router.delete('/delete', decodeToken, isAdmin, admin.deleteSkill);

export default router;
