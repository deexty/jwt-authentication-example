import authConfig from '@/config/auth';
import jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';
import { IJwtService } from './IJwtService';

export interface IJwtPayload {
  id: string;
}

export interface ITokenPayload {
  iat: number;
  exp: number;
  id: string;
}

@injectable()
class JwtService implements IJwtService {
  public async generateToken(payload: IJwtPayload): Promise<string> {
    const { secret, expiresIn } = authConfig.jwt;
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  }

  public async verifyToken(token: string): Promise<ITokenPayload> {
    const { secret } = authConfig.jwt;
    const decoded = jwt.verify(token, secret);

    console.log(decoded);

    return decoded as ITokenPayload;
  }
}

export default JwtService;
