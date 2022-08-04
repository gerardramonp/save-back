import { ICreateUserRequest } from '../controllers/userController';

function userService() {
  async function createUser(user: ICreateUserRequest) {
    console.log('userService');
  }

  return { createUser };
}

export default userService();
