import Model from '../models/Model';

export default abstract class Service<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public abstract create(data: T): Promise<T | string>;

  public abstract getAll(): Promise<T[]>;

  public abstract getById(id: string): Promise<T | null>;

  public abstract update(id: string, data: T): Promise<T | null>;

  public abstract delete(id: string): Promise<T | null>;
}
