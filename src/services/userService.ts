import bcrypt from 'bcrypt';
import { CreateUserRequest, User } from '../controllers/userController';
import userRepository from '../repositories/userRepository';

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

  return { createUser };
}

export default userService();
