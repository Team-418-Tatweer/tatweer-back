import { body } from 'express-validator'

export const createWarehouseValidators = [
    body('region').isMongoId().withMessage('Region must be a valid Mongo ID'),
    body('location').isString().withMessage('Location must be a string'),
    body('capacity').isNumeric().withMessage('Capacity must be a number'),
    body('usedCapacity')
        .isNumeric()
        .optional()
        .withMessage('Used Capacity must be a number'),
    body('recorderPoint')
        .isNumeric()
        .withMessage('Recorder Point must be a number'),
]
