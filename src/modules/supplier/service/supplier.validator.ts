import { body } from 'express-validator'

export const createSupplierValidators = [
    body('name').isString().withMessage('Name must be a string'),
    body('address').isString().withMessage('Address must be a string'),
    body('phone').isString().withMessage('Contact must be a string'),
    body('email').isString().withMessage('Email must be a string'),
    body('reliabilityScore')
        .isNumeric()
        .optional()
        .withMessage('reliabilityScore must be a number'),
]
