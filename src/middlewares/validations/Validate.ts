import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { ObjectSchema } from 'joi';

export default abstract class Validate {
  protected _schema: ObjectSchema;

  constructor(schema: ObjectSchema) {
    this._schema = schema;
  }

  public validateBody = async (req: Req, res: Res, next: Next): Promise <typeof res | void> => {
    try {
      const result = this._schema.validate(req.body);
        if (result.error) {
          return next(result.error);
        }
      next();
    } catch (error) {
      return next(error);
    }
  }
}