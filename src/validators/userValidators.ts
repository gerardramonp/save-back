import { ERROR_MISSING_REQUIRED_PROPERTIES } from '../constants/errorMessages';
import { STATUS_BAD_REQUEST } from '../constants/statusCodes';
import { ICreateUserRequest } from '../controllers/userController';
import CustomError from '../utils/CustomError';

export default function isUserRequestValid(user: ICreateUserRequest) {
  const requiredProps = ['email', 'password', 'repeatedPassword'];

  const recievedProps = Object.keys(user);

  requiredProps.forEach((prop) => {
    if (!recievedProps.includes(prop)) {
      throw new CustomError(STATUS_BAD_REQUEST, ERROR_MISSING_REQUIRED_PROPERTIES);
    }
  });

  return true;
}
