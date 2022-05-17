import { ObjectSchema } from 'joi';
import LoginSchema from '../../utils/validations/LoginSchema';
import Validate from './Validate';

export default class ValidateLogin extends Validate {
  constructor(schema: ObjectSchema = LoginSchema) {
    super(schema);
  }
}