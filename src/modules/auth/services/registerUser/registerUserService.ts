import { IUserDTO } from '@/modules/users/dtos/IUserDTO';
import { IUserRepository } from '@/modules/users/repositories/IUserRepository';
import { EncryptService } from '@/shared/plugins/encript/EncriptService';
import { IEncryptService } from '@/shared/plugins/encript/IEncryptService';
import { IJwtService } from '@/shared/plugins/jwt/IJwtService';
import { container, inject, injectable } from 'tsyringe';

@injectable()
class RegisterUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute(userData: IUserDTO): Promise<IUserDTO> {
    const encryptService = container.resolve(EncryptService);

    const user = await this.userRepository.findByLogin(userData.email);

    if (user) {
      console.log('User already exists');
    }

    const savedUser = await this.userRepository.create({
      ...userData,
      password: await encryptService.encryptPassword(userData.password),
    });

    return savedUser;
  }
}

export default RegisterUserService;
