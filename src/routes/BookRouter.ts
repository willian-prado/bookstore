import CustomRouter from './CustomRouter';
import Controller from '../controllers/Controller';
import BookController from '../controllers/BookController';
import Validate from '../middlewares/validations/Validate';
import ValidateBook from '../middlewares/validations/ValidateBook';
import AuthUser from '../utils/auth/AuthUser';
import { IBook } from '../utils/interfaces/IBook';

export default class BookRouter extends CustomRouter<IBook> {
  protected _route = '/books';

  private _validate: Validate;

  constructor(
    service: Controller<IBook> = new BookController(),
    validate: Validate = new ValidateBook(),
  ) {
    super(service);
    this._validate = validate;
    this._routes();
  }

  protected _routes(): void {
    this._router.post(
      this._route,
      AuthUser.validateToken,
      this._validate.validateBody,
      this._controller.create,
    );
    this._router.get(
      this._route,
      AuthUser.validateToken,
      this._controller.getAll,
    );
    this._router.get(
      `${this._route}/:id`,
      AuthUser.validateToken,
      this._controller.getById,
    );
    this._router.put(
      `${this._route}/:id`,
      AuthUser.validateToken,
      this._validate.validateBody,
      this._controller.update,
    );
    this._router.delete(
      `${this._route}/:id`,
      AuthUser.validateToken,
      this._controller.delete,
    );
  }
}
