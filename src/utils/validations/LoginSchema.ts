import Joi from "joi";

export default Joi.object().keys({
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
    'any.required': 'Password is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be a valid email',
    'any.required': 'Email is required',
  }),
});

