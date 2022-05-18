import mongoose from 'mongoose';
import Model from './Model';
import { IBook } from '../utils/interfaces/IBook';

const BookSchema = new mongoose.Schema<IBook>({
  name: { type: String, required: true },
  author: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
}, { versionKey: false });

export default class BookModel extends Model<IBook> {
  constructor() {
    super(mongoose.model('Book', BookSchema));
  }
}
