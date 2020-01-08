import { Router } from 'express';
import post from '../controllers/post';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.post('/create', decodeToken, post.add);
router.get('/', post.getByUser);
router.get('/:id', post.getOne);
router.patch('/:id', decodeToken, post.update);
router.delete('/:id', decodeToken, post.delete);

export default router;
