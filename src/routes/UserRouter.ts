import { IUser } from "../utils/interfaces/IUser";
import CustomRouter from "./CustomRouter";
import UserModel from "../models/UserModel";
import UserService from "../services/UserServices";
import UserController from "../controllers/UserController";

class UserRouter extends CustomRouter<IUser> {
  protected _route: string = "/users";

  constructor(controller: UserController) {
    super(controller);
    this._routes();
  }

  protected _routes = (): void =>{
    this._router.post(this._route, this._controller.create);
    this._router.get(this._route, this._controller.getAll);
    this._router.get(`${this._route}/:id`, this._controller.getById);
  }
}

const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

export default new UserRouter(userController).router;
