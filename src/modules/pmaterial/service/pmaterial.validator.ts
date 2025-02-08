import { body } from 'express-validator'
import { isValidObjectId } from 'mongoose'

export const createProductMaterialValidator = [
    body('product')
        .optional()
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid product ID is required'),
    body('material')
        .optional()
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid material ID is required'),
    body('quantity').isNumeric().withMessage('Quantity must be a number'),
]
