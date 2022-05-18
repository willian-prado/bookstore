import { ObjectSchema } from 'joi';
import Validate from './Validate';
import BookSchema from '../../utils/validations/BookSchema';

export default class ValidateBook extends Validate {
  constructor(schema: ObjectSchema = BookSchema) {
    super(schema);
  }
}
