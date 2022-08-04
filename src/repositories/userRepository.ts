import userModel, { IUser } from '../models/userModel';

function userRepository() {
  async function createUser(user: IUser) {
    return userModel.create(user);
  }

  return { createUser };
}

export default userRepository();
