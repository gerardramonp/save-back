import userModel, { IUser } from '../models/userModel';

function userRepository() {
  async function createUser(user: IUser) {
    return userModel.create(user);
  }

  async function findUserByEmail(email:string) {
    return userModel.findOne({ email });
  }

  return { createUser, findUserByEmail };
}

export default userRepository();
