import { EncryptService } from '@/shared/plugins/encript/EncriptService';
import { IEncryptService } from '@/shared/plugins/encript/IEncryptService';
import { container, inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { IUserRepository } from '@/modules/users/repositories/IUserRepository';

@injectable()
export default class ChangePasswordService {
  private encryptService: IEncryptService;

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {
    this.encryptService = container.resolve(EncryptService);
  }

  public async execute(
    new_password: string,
    old_password: string,
    user_id: string
  ): Promise<void> {
    try {
      const user = await this.userRepository.findById(user_id);

      if (!user) throw new Error('User not found');

      const passwordMatched = await this.encryptService.comparePassword(
        old_password,
        user.password
      );

      if (!passwordMatched) throw new Error('Invalid password');

      const encryptedPassword =
        await this.encryptService.encryptPassword(new_password);

      await this.userRepository.save(
        Object.assign(user, { password: encryptedPassword })
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
