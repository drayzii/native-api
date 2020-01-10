import { Router } from 'express';
import admin from '../controllers/admin';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.post('/add', decodeToken, admin.addSkill);
router.delete('/delete', decodeToken, admin.deleteSkill);

export default router;
