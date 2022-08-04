import { Request, Response } from 'express';
import userService from '../services/userService';

function userController() {
  async function createUser(req: Request, res: Response) {
    console.log('controller');

    userService.createUser();
  }

  return { createUser };
}

export default userController();
