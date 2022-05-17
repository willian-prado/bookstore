import CustomError from "./CustomError";
import HttpStatusCode from "../enums/HttpStatusCodes";

export const EMAIL_REGISTERED: CustomError = new CustomError(
  HttpStatusCode.CONFLICT, 
  "E-mail already registered"
);

export const USER_INVALID: CustomError = new CustomError(
  HttpStatusCode.UNAUTHORIZED,
  'Invalid username or password',
);
