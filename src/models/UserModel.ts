import Model from "./Model";
import { IUser } from "../utils/interfaces/IUser";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default class UserModel extends Model<IUser> {
  constructor() {
    super(mongoose.model('User', UserSchema));
  }
}