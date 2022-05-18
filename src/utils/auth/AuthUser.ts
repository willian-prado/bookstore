import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IDecodedToken } from '../interfaces/IUser';
import { TOKEN_INVALID, TOKEN_NOTFOUND } from '../errors';

export default class AuthUser {
  static jwtConfig: SignOptions = { expiresIn: '1h' };

  public static createToken(user: IDecodedToken): string {
    const payload = { user };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, AuthUser.jwtConfig);
    return token;
  }

  public static validateToken = async (req: Req, res: Res, next: Next): Promise<void> => {
    try {
      const token = req.headers.authorization;
      if (!token) throw TOKEN_NOTFOUND;

      try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as IDecodedToken;
        req.user = decodedToken;
        return next();
      } catch (error) {
        throw TOKEN_INVALID;
      }
    } catch (error) {
      return next(error);
    }
  };
}
