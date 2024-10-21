import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import RegisterUserService from './registerUserService';

class RegisterUserController {
  public async handle(request: Request, response: Response): Promise<void> {
    try {
      const { email, password } = request.body;

      const registerUserService = container.resolve(RegisterUserService);
      const user = await registerUserService.execute({ email, password });

      response.status(201).json({ user });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

export default RegisterUserController;
