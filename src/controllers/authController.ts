import { Request, Response } from 'express';
import authService from '../services/authService';
import handleResponseError from '../utils/handleResponseError';
import handleResponseSuccess from '../utils/handleResponseSuccess';

export interface LoginRequest {
  email:string,
  password:string,
}

export interface LoginResponse {
  email:string,
  categories:any,
  salary:any
}

function authController() {
  async function login(req:Request<{}, {}, LoginRequest>, res:Response<LoginResponse>) {
    try {
      const loggedUser = await authService.login(req.body);

      handleResponseSuccess(res, loggedUser);
    } catch (error) {
      handleResponseError(res, error);
    }
  }

  return { login };
}

export default authController();
