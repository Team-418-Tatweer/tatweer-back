import { body } from 'express-validator'

export const AVAILABLE_INTEGRATIONS = ['Weather API']

export const createIntegrationValidators = [
    body('name')
        .isIn(AVAILABLE_INTEGRATIONS)
        .withMessage("Extnsion doesn't exist"),
    body('settings').isObject().withMessage('Settings must be an object'),
]

export const updateIntegrationValidators = [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('isActive')
        .optional()
        .isBoolean()
        .withMessage('isActive must be a boolean'),
    body('settings')
        .optional()
        .isObject()
        .withMessage('Settings must be an object'),
]
