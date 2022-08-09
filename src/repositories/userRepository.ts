import { ObjectId } from 'mongoose';
import { User } from '../controllers/userController';
import userModel from '../models/userModel';

function userRepository() {
  async function createUser(user: User) {
    return userModel.create(user);
  }

  async function findUserByEmail(email:string) {
    return userModel.findOne({ email }).populate('salary');
  }

  async function deleteUser(id:ObjectId) {
    return userModel.findOneAndDelete({ _id: id });
  }

  return { createUser, findUserByEmail, deleteUser };
}

export default userRepository();
