import Controller from "./Controller";
import { IUser } from "../utils/interfaces/IUser";
import UserService from "../services/UserServices";

export default class UserController extends Controller<IUser> {
  constructor(service: UserService) {
    super(service);
  }
}