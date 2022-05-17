import { Router } from "express";
import LoginController from "../controllers/LoginController";
import Validate from "../middlewares/validations/Validate";
import ValidateLogin from "../middlewares/validations/ValidateLogin";

export default class LoginRouter {
  private _router: Router;
  private _controller: LoginController;
  private _validate: Validate;

  constructor(
    controller: LoginController = new LoginController(),
    validate: Validate = new ValidateLogin(),
    ) {
    this._router = Router();
    this._controller = controller;
    this._validate = validate;
    this._routes();
  }

  public get router(): Router {
    return this._router;
  }

  private _routes(): void {
    this._router.post(
      "/login",
      this._validate.validateBody,
      this._controller.login
    );
  }
}