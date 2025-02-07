import { body } from 'express-validator'
import { isValidObjectId } from 'mongoose'

export const createOrderValidator = [
    body('orderItems')
        .isArray()
        .notEmpty()
        .withMessage('Order items are required'),
    body('orderItems.*.product')
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid product ID is required for each order item'),
    body('orderItems.*.quantity')
        .isInt({ min: 1 })
        .withMessage('Quantity must be at least 1'),
    body('client')
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid client ID is required'),
    body('region')
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid region ID is required'),
    body('notes')
        .optional()
        .isString()
        .trim()
        .withMessage('Notes must be a string'),
    body('status')
        .optional()
        .isIn(['pending', 'processing', 'completed', 'cancelled'])
        .withMessage('Invalid status value'),
]

export const updateOrderValidator = [
    body('orderItems')
        .optional()
        .isArray()
        .withMessage('Order items must be an array'),
    body('orderItems.*.product')
        .optional()
        .isString()
        .custom((value) => isValidObjectId(value))
        .withMessage('Valid product ID is required'),
    body('orderItems.*.quantity')
        .optional()
        .isInt({ min: 1 })
        .withMessage('Quantity must be at least 1'),
    body('status')
        .optional()
        .isIn(['pending', 'processing', 'completed', 'cancelled'])
        .withMessage('Invalid status value'),
    body('notes')
        .optional()
        .isString()
        .trim()
        .withMessage('Notes must be a string'),
]
