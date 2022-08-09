import { Router } from 'express';
import userController from '../controllers/userController';
import { ROUTE_USER_BY_ID } from './routes';

const router = Router();

router.route('/').post(userController.createUser);

router.route(ROUTE_USER_BY_ID).delete(userController.deleteUserById);

export default router;
