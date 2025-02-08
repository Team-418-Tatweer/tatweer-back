import { body } from 'express-validator'
import { Types } from 'mongoose'

export const createInventoryValidators = [
    body('warehouse')
        .isMongoId()
        .withMessage('Warehouse must be a valid Mongo ID'),
    body('itemType')
        .isIn(['product', 'material'])
        .withMessage('Item Type must be either "product" or "material"'),
    body('itemID').isMongoId().withMessage('Item ID must be a valid Mongo ID'),
    body('currentStock')
        .isNumeric()
        .withMessage('Current Stock must be a number'),
    body('recorderPoint')
        .isNumeric()
        .withMessage('Recorder Point must be a number'),
    body('safetyStock')
        .isNumeric()
        .withMessage('Safety Stock must be a number'),
]

export const updateInventoryValidators = [
    body('warehouse')
        .optional()
        .isMongoId()
        .withMessage('Warehouse must be a valid Mongo ID'),
    body('itemType')
        .optional()
        .isIn(['product', 'material'])
        .withMessage('Item Type must be either "product" or "material"'),
    body('itemID')
        .optional()
        .isMongoId()
        .withMessage('Item ID must be a valid Mongo ID'),
    body('recorderPoint')
        .optional()
        .isNumeric()
        .withMessage('Recorder Point must be a number'),
    body('safetyStock')
        .optional()
        .isNumeric()
        .withMessage('Safety Stock must be a number'),
]
