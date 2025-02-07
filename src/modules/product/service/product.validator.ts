import { body } from 'express-validator'

export const createProductValidators = [
    body('name').isString().withMessage('Name must be a string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').isString().withMessage('Category must be a string'),
    body('unit').isString().withMessage('Unit must be a string'),
]
