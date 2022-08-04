import { Response } from "express";
import { STATUS_OK } from "../constants/statusCodes";

const handleResponseSuccess = (
  res: Response,
  payload: unknown,
  statusCode: number = STATUS_OK
) => {
  res.status(statusCode);
  return res.json(payload);
};

export default handleResponseSuccess;
