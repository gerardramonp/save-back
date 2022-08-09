import { Router } from 'express';
import authController from '../controllers/authController';
import { ROUTE_AUTH_LOGIN } from './routes';

const router = Router();

router.route(ROUTE_AUTH_LOGIN).post(authController.login);

export default router;
