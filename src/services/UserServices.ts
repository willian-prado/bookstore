import bcrypt from 'bcryptjs';
import { IUser } from "../utils/interfaces/IUser";
import Service from "./Service";
import UserModel from "../models/UserModel";
import AuthUser from "../utils/auth/AuthUser";
import { EMAIL_REGISTERED } from "../utils/errors";

export default class UserService extends Service<IUser> {
  constructor(model: UserModel) {
    super(model);
  }

  public async create(user: IUser): Promise<string> {
    const { name, email, password } = user;

    const findUser = await this._model.getByField('email', email); 
    if (findUser) throw EMAIL_REGISTERED;

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = await this._model.create({ name, email, password: passwordHash });
    const token = AuthUser.createToken({ _id: newUser._id, email, name });
    return token;
  }

  public async getAll(): Promise<IUser[]> {
    return this._model.getAll();
  }

  public async getById(id: string): Promise<IUser | null> {
    return this._model.getById(id);
  }
}