import { Model as M } from 'mongoose';

export default abstract class Model<T> {
  protected schema: M<T>;

  constructor(schema: M<T>) {
    this.schema = schema;
  }

  public async create(data: T): Promise<T> {
    return this.schema.create(data);
  }

  public async getAll(): Promise<T[]> {
    return this.schema.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.schema.findById(id);
  }

  public async getByField(field: string, value: string): Promise<T | null> {
    return this.schema.findOne().where(field, value);
  }

  public async update(id: string, data: T): Promise<T | null> {
    return this.schema.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this.schema.findByIdAndDelete(id);
  }
}
