import { IUser } from '../utils/interfaces/IUser';
import CustomRouter from './CustomRouter';
import Controller from '../controllers/Controller';
import Validate from '../middlewares/validations/Validate';
import UserController from '../controllers/UserController';
import ValidateUser from '../middlewares/validations/ValidateUser';

export default class UserRouter extends CustomRouter<IUser> {
  protected _route = '/users';

  private _validate: Validate;

  constructor(
    controller: Controller<IUser> = new UserController(),
    validate: Validate = new ValidateUser(),
  ) {
    super(controller);
    this._validate = validate;
    this._routes();
  }

  protected _routes = (): void => {
    this._router.post(
      this._route,
      this._validate.validateBody,
      this._controller.create,
    );
    this._router.get(this._route, this._controller.getAll);
    this._router.get(`${this._route}/:id`, this._controller.getById);
  };
}
