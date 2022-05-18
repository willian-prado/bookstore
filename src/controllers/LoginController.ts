import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import HttpStatusCode from '../utils/enums/HttpStatusCodes';
import LoginService from '../services/LoginService';

export default class LoginController {
  private _service: LoginService;

  constructor(service: LoginService = new LoginService()) {
    this._service = service;
  }

  public login = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const { email, password } = req.body;
      const token = await this._service.login(email, password);
      return res.status(HttpStatusCode.OK).json(token);
    } catch (error) {
      return next(error);
    }
  };
}
