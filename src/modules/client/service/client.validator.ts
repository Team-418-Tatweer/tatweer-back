import { body } from 'express-validator'

export const createClientValidators = [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be a valid email'),
    body('phone').isString().withMessage('Phone must be a string'),
    body('address').isString().withMessage('Address must be a string'),
]
