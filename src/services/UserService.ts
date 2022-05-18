import bcrypt from 'bcryptjs';
import { IUser } from '../utils/interfaces/IUser';
import Service from './Service';
import UserModel from '../models/UserModel';
import AuthUser from '../utils/auth/AuthUser';
import { EMAIL_REGISTERED } from '../utils/errors';
import Model from '../models/Model';

export default class UserService extends Service<IUser> {
  constructor(model: Model<IUser> = new UserModel()) {
    super(model);
  }

  public create = async (user: IUser): Promise<string> => {
    const { name, email, password } = user;

    const findUser = await this._model.getByField('email', email);
    if (findUser) throw EMAIL_REGISTERED;

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = await this._model.create({ name, email, password: passwordHash });
    const token = AuthUser.createToken({ _id: newUser._id, email, name });
    return token;
  };

  public getAll = async (): Promise<IUser[]> => this._model.getAll();

  public getById = async (id: string): Promise<IUser | null> => this._model.getById(id);

  public update = async (id: string, user: IUser): Promise<IUser | null> => (
    this._model.update(id, user));

  public delete(id: string): Promise<IUser | null> {
    return this._model.delete(id);
  }
}
