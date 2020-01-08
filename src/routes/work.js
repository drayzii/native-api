import { Router } from 'express';
import work from '../controllers/work';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.post('/add', decodeToken, work.add);
router.get('/', work.getByField);
router.get('/:id', work.getOne);
router.patch('/:id', decodeToken, work.update);
router.delete('/:id', decodeToken, work.delete);

export default router;
