import Service from "../services/Service";
import HttpStatusCode from "../utils/enums/HttpStatusCodes";
import { Request as Req, Response as Res, NextFunction as Next } from "express";

export default abstract class Controller<T> {
  protected _service: Service<T>;

  constructor(service: Service<T>) {
    this._service = service;
  }

  public create = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const create = await this._service.create(req.body);
      return res.status(HttpStatusCode.CREATED).json(create);
    } catch (error) {
      return next(error);
    }
  }

  public getAll = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const getAll = await this._service.getAll();
      return res.status(HttpStatusCode.OK).json(getAll);
    } catch (error) {
      return next(error);
    }
  }

  public getById = async (req: Req, res: Res, next: Next): Promise<typeof res | void> => {
    try {
      const getById = await this._service.getById(req.params.id);
      return res.status(HttpStatusCode.OK).json(getById);
    } catch (error) {
      return next(error);
    }
  }
}