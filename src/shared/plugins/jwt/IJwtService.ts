import { IJwtPayload, ITokenPayload } from './JwtService';

export interface IJwtService {
  generateToken(payload: IJwtPayload): Promise<string>;
  verifyToken(token: string): Promise<ITokenPayload>;
}
