import { Response } from 'express';
import { ERROR_UNKNOWN } from '../constants/errorMessages';
import { STATUS_INTERNAL_ERROR } from '../constants/statusCodes';

const handleResponseError = (res: Response, error: any) => {
  res.status(error.status || STATUS_INTERNAL_ERROR);

  return res.json({
    status: error.status || STATUS_INTERNAL_ERROR,
    message: error.message || ERROR_UNKNOWN,
  });
};

export default handleResponseError;
