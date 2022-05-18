import Controller from './Controller';
import Service from '../services/Service';
import BookService from '../services/BookService';
import { IBook } from '../utils/interfaces/IBook';

export default class BookController extends Controller<IBook> {
  constructor(service: Service<IBook> = new BookService()) {
    super(service);
  }
}
