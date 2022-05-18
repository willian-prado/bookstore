export default class CustomError extends Error {
  public statusCode: number;

  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.statusCode = status || 500;
    this.message = message;
  }
}
