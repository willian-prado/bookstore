import { IUser } from "../utils/interfaces/IUser";
import CustomRouter from "./CustomRouter";
import Controller from "../controllers/Controller";

export default class UserRouter extends CustomRouter<IUser> {
  protected _route: string = "/users";

  constructor(controller: Controller<IUser>) {
    super(controller);
    this._routes();
  }

  protected _routes = (): void =>{
    this._router.post(this._route, this._controller.create);
    this._router.get(this._route, this._controller.getAll);
    this._router.get(`${this._route}/:id`, this._controller.getById);
  }
}