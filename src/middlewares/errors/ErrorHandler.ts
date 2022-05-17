import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ValidationError } from 'joi';
import { ICustomError } from '../../utils/interfaces/ICustomError';
import HttpStatusCodes from '../../utils/enums/HttpStatusCodes';

interface IErrorHandler extends ValidationError, ICustomError {};

export default class ErrorHandler {
  public static handle = (err: IErrorHandler, req: Req, res: Res, Next: Next) => {
    if (err.isJoi) {
      return res.status(HttpStatusCodes.UNPROCESSABLE_ENTITY)
        .json({ error: err.details[0].message });
    }
    
    if (err.statusCode) {
      return res.status(err.statusCode).json({ error: err.message });
    }

    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error.'});
  }
}