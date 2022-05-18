import Joi from 'joi';

export default Joi.object().keys({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
    'any.required': 'Name is required',
  }),
  author: Joi.string().min(3).required().messages({
    'string.base': 'Author must be a string',
    'string.min': 'Author must be longer than 2 characters',
    'any.required': 'Author is required',
  }),
  releaseDate: Joi.date().required().messages({
    'any.required': 'Release date is required',
  }),
  price: Joi.number().greater(0).required().messages({
    'number.base': 'Price must be a number',
    'number.greater': 'Price must be greater than 0',
    'any.required': 'Price is required',
  }),
  category: Joi.string().min(3).required().messages({
    'string.base': 'Category must be a string',
    'string.min': 'Category must be longer than 2 characters',
    'any.required': 'Category is required',
  }),
  quantity: Joi.number().greater(0).required().messages({
    'number.base': 'Quantity must be a number',
    'number.greater': 'Quantity must be greater than 0',
    'any.required': 'Quantity is required',
  }),
});
