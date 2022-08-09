import bcrypt from 'bcrypt';
import { ObjectId } from 'mongoose';
import { ERROR_MISSING_MODEL_ID_NOT_FOUND } from '../constants/errorMessages';
import { STATUS_NOT_FOUND } from '../constants/statusCodes';
import { CreateUserRequest, User } from '../controllers/userController';
import userRepository from '../repositories/userRepository';
import CustomError from '../utils/CustomError';

function userService() {
  async function createUser(user: CreateUserRequest) {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const generatedSalt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(user.password, generatedSalt);

    const encryptedUser: User = {
      email: user.email,
      password: encryptedPassword
    };

    const createdUser = await userRepository.createUser(encryptedUser);

    const returnUser = {
      _id: createdUser._id,
      email: createdUser.email,
    };

    return returnUser;
  }

  async function deleteUser(id:ObjectId) {
    const deletedUser = await userRepository.deleteUser(id);

    if (!deletedUser) {
      throw new CustomError(STATUS_NOT_FOUND, ERROR_MISSING_MODEL_ID_NOT_FOUND('user', id));
    }

    return true;
  }

  return { createUser, deleteUser };
}

export default userService();
