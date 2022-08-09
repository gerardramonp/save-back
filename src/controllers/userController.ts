import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { ERROR_MISSING_PARAMS, ERROR_MISSING_REQUIRED_PROPERTIES, ERROR_USER_ALREADY_EXIST } from '../constants/errorMessages';
import { STATUS_BAD_REQUEST, STATUS_OK } from '../constants/statusCodes';
import userRepository from '../repositories/userRepository';
import userService from '../services/userService';
import CustomError from '../utils/CustomError';
import handleResponseError from '../utils/handleResponseError';
import handleResponseSuccess from '../utils/handleResponseSuccess';
import isUserRequestValid from '../validators/userValidators';

export interface User {
  email: string;
  password: string;
  salary?: string;
  categories?: string[];
}
export interface CreateUserRequest extends User {
  repeatedPassword: string;
}

function userController() {
  async function createUser(
    req: Request<{}, {}, CreateUserRequest>,
    res: Response
  ) {
    try {
      if (!isUserRequestValid(req.body)) {
        throw new CustomError(STATUS_OK, ERROR_MISSING_REQUIRED_PROPERTIES);
      }

      const existingUser = await userRepository.findUserByEmail(req.body.email);

      if (existingUser) {
        throw new CustomError(STATUS_BAD_REQUEST, ERROR_USER_ALREADY_EXIST);
      }

      const user = await userService.createUser(req.body);

      handleResponseSuccess(res, user);
    } catch (error) {
      handleResponseError(res, error);
    }
  }

  async function deleteUserById(
    req: Request<{id:ObjectId}>,
    res: Response
  ) {
    try {
      const { id } = req.params;

      if (!id) {
        throw new CustomError(STATUS_BAD_REQUEST, ERROR_MISSING_PARAMS('id'));
      }

      const deletedUser = await userService.deleteUser(id);

      handleResponseSuccess(res, deletedUser);
    } catch (error) {
      handleResponseError(res, error);
    }
  }

  return { createUser, deleteUserById };
}

export default userController();
