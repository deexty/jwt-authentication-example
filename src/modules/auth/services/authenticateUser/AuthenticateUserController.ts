import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from './AuthenticateUserService';

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;
    try {
      const authenticateUserService = container.resolve(
        AuthenticateUserService
      );

      const validateUser = await authenticateUserService.execute(
        email,
        password
      );

      response.status(201).json(validateUser);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

export default AuthenticateUserController;
