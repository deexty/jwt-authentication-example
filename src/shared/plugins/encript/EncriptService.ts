import bcrypt from 'bcrypt';
import { injectable } from 'tsyringe';
import { IEncryptService } from './IEncryptService';

@injectable()
export class EncryptService implements IEncryptService {
  private readonly SALT: number;
  constructor() {
    this.SALT = 10;
  }
  async encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT);
  }

  async comparePassword(
    password: string,
    encryptedPassword: string
  ): Promise<boolean> {
    const isValid = await bcrypt.compare(password, encryptedPassword);

    return isValid;
  }
}
