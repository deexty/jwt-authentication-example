import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ChangePasswordService from './ChangePasswordService';

export default class ChangePasswordContrtoller {
  public async handle(request: Request, response: Response): Promise<void> {
    const { new_password, old_password, user_id } = request.body;
    try {
      const changePasswordService = container.resolve(ChangePasswordService);

      await changePasswordService.execute(new_password, old_password, user_id);

      response.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
