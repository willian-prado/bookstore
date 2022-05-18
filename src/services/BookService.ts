import { isValidObjectId } from 'mongoose';
import Service from './Service';
import Model from '../models/Model';
import BookModel from '../models/BookModel';
import { IBook } from '../utils/interfaces/IBook';
import { BOOK_NOTFOUND } from '../utils/errors';

export default class BookService extends Service<IBook> {
  constructor(model: Model<IBook> = new BookModel()) {
    super(model);
  }

  public create = async (book: IBook): Promise<IBook> => {
    const newBook = await this._model.create(book);
    return newBook;
  };

  public getAll = async (): Promise<IBook[]> => this._model.getAll();

  public getById = async (id: string): Promise<IBook | null> => {
    const findBook = await this._model.getById(id);
    if (!findBook) throw BOOK_NOTFOUND;

    return this._model.getById(id);
  };

  public update = async (id: string, book: IBook): Promise<IBook | null> => {
    if (!isValidObjectId(id)) throw BOOK_NOTFOUND;

    return this._model.update(id, book);
  };

  public delete = async (id: string): Promise<IBook | null> => {
    if (!isValidObjectId(id)) throw BOOK_NOTFOUND;

    return this._model.delete(id);
  };
}
