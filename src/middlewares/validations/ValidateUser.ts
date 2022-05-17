import { ObjectSchema } from 'joi';
import UserSchema from '../../utils/validations/UserSchema';
import Validate from './Validate';

export default class ValidateUser extends Validate {
  constructor(schema: ObjectSchema = UserSchema) {
    super(schema);
  }
}