import { User } from '../controllers/userController';
import userModel from '../models/userModel';

function userRepository() {
  async function createUser(user: User) {
    return userModel.create(user);
  }

  async function findUserByEmail(email:string) {
    return userModel.findOne({ email });
  }

  return { createUser, findUserByEmail };
}

export default userRepository();
