import CustomError from './CustomError';
import HttpStatusCode from '../enums/HttpStatusCodes';

export const EMAIL_REGISTERED = new CustomError(
  HttpStatusCode.CONFLICT,
  'E-mail already registered',
);

export const USER_INVALID = new CustomError(
  HttpStatusCode.UNAUTHORIZED,
  'Invalid username or password',
);

export const BOOK_NOTFOUND = new CustomError(
  HttpStatusCode.NOT_FOUND,
  'Book not found',
);

export const TOKEN_NOTFOUND = new CustomError(
  HttpStatusCode.UNAUTHORIZED,
  'Token not found',
);

export const TOKEN_INVALID = new CustomError(
  HttpStatusCode.UNAUTHORIZED,
  'Invalid token',
);
