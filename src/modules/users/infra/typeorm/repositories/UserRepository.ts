import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { connectionSource } from '@/shared/infra/typeorm/ormconfig';
import { IUserRepository } from '@/modules/users/repositories/IUserRepository';
import { IUserDTO } from '@/modules/users/dtos/IUserDTO';
import Users from '../entities/Users';

@injectable()
class UserRepository implements IUserRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = connectionSource.getRepository(Users);
  }

  async findById(id: string): Promise<Users | null> {
    const getById = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return getById;
  }

  async findByLogin(email: string): Promise<Users | null> {
    const getByLogin = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return getByLogin;
  }
  async create(user: IUserDTO): Promise<Users> {
    const newUser = this.ormRepository.create(user);
    console.log(newUser);

    await this.ormRepository.save(newUser);

    return newUser;
  }

  async save(user: IUserDTO): Promise<Users> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
