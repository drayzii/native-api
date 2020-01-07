import { Router } from 'express';
import work from '../controllers/work';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.post('/add', decodeToken, work.addRecentWork);
router.get('/', work.getRecentWorks);

export default router;
