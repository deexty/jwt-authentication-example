import 'dotenv/config';
import { DataSource } from 'typeorm';

const mainFolder = ['local', 'test', 'staging'].includes(process.env.NODE_ENV!)
  ? 'src'
  : `dist/src`;

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2952006Edu!',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [`${mainFolder}/modules/**/infra/typeorm/entities/*{.ts,.js}`],
  migrations: [`${mainFolder}/shared/infra/typeorm/migrations/*{.ts,.js}`],
});
