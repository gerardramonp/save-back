import { ERROR_MISSING_REQUIRED_PROPERTIES, ERROR_PASSWORDS_NOT_MATCH } from '../constants/errorMessages';
import { STATUS_BAD_REQUEST } from '../constants/statusCodes';
import { CreateUserRequest } from '../controllers/userController';
import CustomError from '../utils/CustomError';

export default function isUserRequestValid(user: CreateUserRequest) {
  const requiredProps = ['email', 'password', 'repeatedPassword'];

  const recievedProps = Object.keys(user);

  requiredProps.forEach((prop) => {
    if (!recievedProps.includes(prop)) {
      throw new CustomError(STATUS_BAD_REQUEST, ERROR_MISSING_REQUIRED_PROPERTIES);
    }
  });

  if (user.password !== user.repeatedPassword) {
    throw new CustomError(STATUS_BAD_REQUEST, ERROR_PASSWORDS_NOT_MATCH);
  }

  return true;
}
