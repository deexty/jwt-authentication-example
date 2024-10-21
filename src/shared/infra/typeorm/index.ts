import { DataSource } from 'typeorm';
import { connectionSource } from './ormconfig';

export default async (): Promise<DataSource> => {
  const connection = await connectionSource.initialize();

  return connection;
};
