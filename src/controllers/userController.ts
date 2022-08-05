import { Request, Response } from 'express';
import { ERROR_MISSING_REQUIRED_PROPERTIES } from '../constants/errorMessages';
import { STATUS_OK } from '../constants/statusCodes';
import userService from '../services/userService';
import CustomError from '../utils/CustomError';
import handleResponseError from '../utils/handleResponseError';
import handleResponseSuccess from '../utils/handleResponseSuccess';
import isUserRequestValid from '../validators/userValidators';

export interface ICreateUserRequest {
  email: string;
  password: string;
  repeatedPassword: string;
}

function userController() {
  async function createUser(
    req: Request<{}, {}, ICreateUserRequest>,
    res: Response
  ) {
    try {
      if (!isUserRequestValid(req.body)) {
        throw new CustomError(STATUS_OK, ERROR_MISSING_REQUIRED_PROPERTIES);
      }

      const user = await userService.createUser(req.body);

      return handleResponseSuccess(res, user);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  return { createUser };
}

export default userController();
