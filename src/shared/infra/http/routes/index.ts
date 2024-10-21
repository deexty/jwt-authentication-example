import authRoutes from '@/modules/auth/infra/http/routes';
import express, { Router } from 'express';

const routes = Router();

routes.use(express.json());
routes.use(authRoutes);

export default routes;
