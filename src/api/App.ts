import express, { Request as Req, Response as Res } from 'express';

export default class App {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._app.use(express.json());
  }

  public startServer(port: string | number = 3001): void {
    this._app.get('/', (_req: Req, res: Res) => res.status(200).json('Hello World!'));
    this._app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

  public addRouter(router: express.Router): void {
    this._app.use(router);
  }

  public addErrorHandler(middleware: express.ErrorRequestHandler): void {
    this._app.use(middleware);
  }
}
