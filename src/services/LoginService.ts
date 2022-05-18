import bcrypt from 'bcryptjs';
import { USER_INVALID } from '../utils/errors';
import { IUser } from '../utils/interfaces/IUser';
import Model from '../models/Model';
import AuthUser from '../utils/auth/AuthUser';
import UserModel from '../models/UserModel';

export default class LoginService {
  private _model: Model<IUser>;

  constructor(model: Model<IUser> = new UserModel()) {
    this._model = model;
  }

  public login = async (email: string, password: string): Promise<string> => {
    const user = await this._model.getByField('email', email);
    if (!user) throw USER_INVALID;

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw USER_INVALID;

    const token = AuthUser.createToken({ _id: user._id, email, name: user.name });
    return token;
  };
}
