import { IUserDTO } from '../dtos/IUserDTO';
import Users from '../infra/typeorm/entities/Users';

export interface IUserRepository {
  findById(id: string): Promise<Users | null>;
  findByLogin(email: string): Promise<Users | null>;
  create(user: IUserDTO): Promise<Users>;
  save(user: IUserDTO): Promise<Users>;
}
