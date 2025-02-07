import { body } from 'express-validator'

export const createRegionValidators = [
    body('name').isString().withMessage('Name must be a string'),
    body('designation').isString().withMessage('Designation must be a string'),
]
