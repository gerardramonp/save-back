import bcrypt from 'bcrypt';
import { ERROR_USER_WRONG_CREDENTIALS } from '../constants/errorMessages';
import { LoginRequest, LoginResponse } from '../controllers/authController';
import userRepository from '../repositories/userRepository';
import CustomError from '../utils/CustomError';

function authService() {
  async function login(user:LoginRequest) {
    const foundUser = await userRepository.findUserByEmail(user.email);

    if (!foundUser) {
      throw new CustomError(404, ERROR_USER_WRONG_CREDENTIALS);
    }

    const isPasswordCorrect = await bcrypt.compare(user.password, foundUser.password);

    if (!isPasswordCorrect) {
      throw new CustomError(404, ERROR_USER_WRONG_CREDENTIALS);
    }

    const returnUser:LoginResponse = {
      email: foundUser.email,
      categories: foundUser.categories,
      salary: foundUser.salary
    };

    return returnUser;
  }

  return { login };
}

export default authService();
