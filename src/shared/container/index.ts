import { container } from 'tsyringe';
import { IJwtService } from '../plugins/jwt/IJwtService';
import JwtService from '../plugins/jwt/JwtService';
import { IEncryptService } from '../plugins/encript/IEncryptService';
import { EncryptService } from '../plugins/encript/EncriptService';
import { IUserRepository } from '@/modules/users/repositories/IUserRepository';
import UserRepository from '@/modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IJwtService>('JwtService', JwtService);
container.registerSingleton<IEncryptService>('EncryptService', EncryptService);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
