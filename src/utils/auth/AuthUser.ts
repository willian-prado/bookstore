import { IDecodedToken } from "../interfaces/IUser";
import jwt, { SignOptions } from 'jsonwebtoken';

export default class AuthUser {
  static jwtConfig: SignOptions = { expiresIn: '1h' };

  public static createToken(user: IDecodedToken): string {
    const payload = { user };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, AuthUser.jwtConfig);
    return token;
  }   
}