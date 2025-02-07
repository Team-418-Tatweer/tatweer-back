import { body } from 'express-validator'
import { isValidObjectId } from 'mongoose'

export const createRawMaterialValidator = [
    body('name').isString().withMessage('Name must be a string'),
    body('unitCost').isNumeric().withMessage('Unit Cost must be a string'),
    body('supplier')
        .optional()
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid supplier ID is required'),
]
