import { Request, Response } from 'express';

function userController() {
  async function createUser(req: Request, res: Response) {}

  return { createUser };
}

export default userController();
