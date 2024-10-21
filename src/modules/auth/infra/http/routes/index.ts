import AuthenticateUserController from '@/modules/auth/services/authenticateUser/AuthenticateUserController';
import ChangePasswordContrtoller from '@/modules/auth/services/changePassword/ChangePasswordController';
import RegisterUserController from '@/modules/auth/services/registerUser/registerUserController';
import { Router } from 'express';

const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();
const changePasswordController = new ChangePasswordContrtoller();

const authRoutes = Router();

authRoutes.post('/register', registerUserController.handle);
authRoutes.post('/login', authenticateUserController.handle);
authRoutes.post('/change-password', changePasswordController.handle);

export default authRoutes;
