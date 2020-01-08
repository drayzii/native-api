import { Router } from 'express';
import post from '../controllers/post';
import decodeToken from '../middlewares/decodeToken';

const router = new Router();

router.post('/create', decodeToken, post.addPost);
router.get('/', post.getUserPosts);
router.get('/:id', post.getOne);
router.patch('/:id', decodeToken, post.update);

export default router;
