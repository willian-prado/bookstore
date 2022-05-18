export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface IDecodedToken {
  _id?: string;
  email: string;
  name: string;
}
