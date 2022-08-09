import { ObjectId } from 'mongoose';

export const ERROR_UNKNOWN = 'Unknown error';
export const ERROR_BAD_REQUEST = 'Bad request';
export const ERROR_MISSING_REQUIRED_PROPERTIES = 'The request body is missing required properties';
export const ERROR_PASSWORDS_NOT_MATCH = 'The password and repeated password does not match';
export const ERROR_USER_ALREADY_EXIST = 'A user with that email already exists';
export const ERROR_MISSING_PARAMS = (param:string) => `Missing param: <${param}>`;
export const ERROR_MISSING_MODEL_ID_NOT_FOUND = (model:string, id:ObjectId) => `There is no ${model} with an id <${id}>`;
