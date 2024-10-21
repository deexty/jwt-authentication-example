import { IUserRepository } from '@/modules/users/repositories/IUserRepository';
import { IEncryptService } from '@/shared/plugins/encript/IEncryptService';
import { IJwtService } from '@/shared/plugins/jwt/IJwtService';
import { inject, injectable } from 'tsyringe';

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('JwtService')
    private jwtService: IJwtService,

    @inject('EncryptService')
    private encryptService: IEncryptService
  ) {}

  public async execute(email: string, password: string) {
    const user = await this.userRepository.findByLogin(email);

    if (!user) {
      console.log('n tem aq n');
      return;
    }

    const passwordMatched = await this.encryptService.comparePassword(
      password,
      user.password
    );

    if (!passwordMatched) {
      console.log('senha n bate');
      return;
    }

    const token = await this.jwtService.generateToken({ id: user.id });

    return { user, token };
  }
}

export default AuthenticateUserService;
