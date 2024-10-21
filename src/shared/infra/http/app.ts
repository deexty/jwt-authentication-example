import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';
import createConnection from '@shared/infra/typeorm';
import express from 'express';
import cors from 'cors';
import consola from 'consola';
import routes from './routes';

export const connection = createConnection()
  .then(() => consola.success('\x1b[32m%s\x1b[0m', '🚀 Conectado com sucesso!'))
  .catch(err => consola.error('Erro ao conectar', err));

const app = express();
app.use(cors());

app.use(routes)

export default app;
